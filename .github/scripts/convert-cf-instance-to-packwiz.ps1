# Purpose:
#   Converts a local CurseForge instance manifest (minecraftinstance.json) into
#   packwiz metadata files (mods/*.pw.toml), so the pack can be managed in Git
#   without tracking raw jar files.
#
# Why this script exists:
#   Manual migration of many installed mods is slow and error-prone. This script
#   uses addonID + installed file ID from minecraftinstance.json to generate
#   pinned CurseForge update metadata automatically.
#
# When to use:
#   - One-time migration from an existing CurseForge profile to packwiz.
#   - Rebuilding mods/*.pw.toml after recreating a profile from scratch.
#   - Validating that local installed mods map to CurseForge project/file IDs.
#
# Notes:
#   - By default, entries marked non-distributable are skipped.
#   - Use -IncludeNonDistributable to include them when needed.
#   - Default paths are resolved from repository root, based on script location.

param(
    [string]$InstanceJsonPath = "minecraftinstance.json",
    [string]$OutputModsDir = "mods",
    [switch]$IncludeNonDistributable
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$scriptDir = Split-Path -Parent $PSCommandPath
$repoRoot = (Resolve-Path (Join-Path $scriptDir "..\..")).Path

$resolvedInstancePath = if ([System.IO.Path]::IsPathRooted($InstanceJsonPath)) {
    $InstanceJsonPath
} else {
    Join-Path $repoRoot $InstanceJsonPath
}

$resolvedOutputModsDir = if ([System.IO.Path]::IsPathRooted($OutputModsDir)) {
    $OutputModsDir
} else {
    Join-Path $repoRoot $OutputModsDir
}

if (-not (Test-Path -LiteralPath $resolvedInstancePath)) {
    throw "Could not find instance file at '$resolvedInstancePath'."
}

$raw = Get-Content -LiteralPath $resolvedInstancePath -Raw
$instance = $raw | ConvertFrom-Json -Depth 100

if (-not $instance.installedAddons) {
    throw "No 'installedAddons' array found in '$resolvedInstancePath'."
}

New-Item -ItemType Directory -Path $resolvedOutputModsDir -Force | Out-Null

function ConvertTo-Slug {
    param([string]$Value)
    $slug = $Value.ToLowerInvariant()
    $slug = [Regex]::Replace($slug, "[^a-z0-9]+", "-")
    $slug = $slug.Trim('-')
    if ([string]::IsNullOrWhiteSpace($slug)) {
        return "mod"
    }
    return $slug
}

$written = 0
$skippedNoFile = 0
$skippedDistribution = 0
$nameCounts = @{}

foreach ($addon in $instance.installedAddons) {
    if (-not $addon.installedFile) {
        $skippedNoFile++
        continue
    }

    if (-not $IncludeNonDistributable -and $addon.allowModDistribution -eq $false) {
        $skippedDistribution++
        continue
    }

    $projectId = $addon.addonID
    $fileId = $addon.installedFile.id
    $displayName = $addon.name
    $jarName = $addon.fileNameOnDisk

    if (-not $projectId -or -not $fileId -or -not $jarName) {
        continue
    }

    $sha1 = $null
    if ($addon.installedFile.hashes) {
        foreach ($hash in $addon.installedFile.hashes) {
            if ($hash.type -eq 1 -and $hash.value) {
                $sha1 = $hash.value
                break
            }
        }
    }

    $baseName = ConvertTo-Slug $displayName
    if (-not $nameCounts.ContainsKey($baseName)) {
        $nameCounts[$baseName] = 0
    }
    $nameCounts[$baseName]++

    $fileSlug = $baseName
    if ($nameCounts[$baseName] -gt 1) {
        $fileSlug = "$baseName-$($nameCounts[$baseName])"
    }

    $targetPath = Join-Path $resolvedOutputModsDir "$fileSlug.pw.toml"

    $lines = @(
        "name = `"$displayName`"",
        "filename = `"$jarName`"",
        "side = `"both`"",
        "",
        "[download]",
        "mode = `"metadata:curseforge`""
    )

    if ($sha1) {
        $lines += "hash-format = `"sha1`""
        $lines += "hash = `"$sha1`""
    }

    $lines += ""
    $lines += "[update]"
    $lines += "[update.curseforge]"
    $lines += "project-id = $projectId"
    $lines += "file-id = $fileId"

    Set-Content -LiteralPath $targetPath -Value ($lines -join [Environment]::NewLine) -NoNewline
    $written++
}

Write-Host "Generated $written packwiz metadata file(s) in '$resolvedOutputModsDir'."
Write-Host "Skipped $skippedNoFile addon(s) without installed file metadata."
Write-Host "Skipped $skippedDistribution non-distributable addon(s)."
Write-Host ""
Write-Host "Next steps:"
Write-Host "  1) packwiz refresh"
Write-Host "  2) packwiz curseforge export"
