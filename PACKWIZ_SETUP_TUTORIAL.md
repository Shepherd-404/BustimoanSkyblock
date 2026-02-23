# Packwiz + CurseForge CI Setup Tutorial

This guide covers:

1. Setting up `packwiz` locally on Windows
2. Migrating this existing CurseForge instance to `packwiz`
3. Testing local exports
4. Finishing GitHub Actions + CurseForge publishing setup

---

## 1) Install `packwiz` locally (Windows)

### Option A (recommended): `winget`

```powershell
winget install packwiz.packwiz
```

### Option B (fallback): install via Go

```powershell
winget install GoLang.Go
go install github.com/packwiz/packwiz@latest
```

If needed, add this to your `PATH` and reopen terminal:

```text
%USERPROFILE%\go\bin
```

### Verify install

```powershell
packwiz --version
```

---

## 2) Initialize `packwiz` for this pack

Run these in repository root:

```powershell
packwiz init
```

When prompted, use:

- Minecraft version: `1.21.1`
- Mod loader: `neoforge`
- Pack name/version: your choice

This creates `pack.toml` and initial index metadata.

---

## 3) Convert current CurseForge-installed mods into packwiz metadata

This repo includes a helper script:

- `.github/scripts/convert-cf-instance-to-packwiz.ps1`

Run:

```powershell
powershell -ExecutionPolicy Bypass -File .\.github\scripts\convert-cf-instance-to-packwiz.ps1
```

What it does:

- Reads `minecraftinstance.json`
- Creates `mods/*.pw.toml` entries with CurseForge project/file IDs
- Skips non-distributable addons by default

If you need to include non-distributable entries anyway:

```powershell
powershell -ExecutionPolicy Bypass -File .\.github\scripts\convert-cf-instance-to-packwiz.ps1 -IncludeNonDistributable
```

---

## 4) Refresh + export locally (sanity check)

```powershell
packwiz refresh
packwiz curseforge export -o release-pack.zip
```

Expected result:

- `release-pack.zip` is generated successfully.

If export fails, inspect the mod metadata file referenced by the error under `mods/*.pw.toml`.

---

## 5) Commit local migration files

After verifying export:

```powershell
git add pack.toml index.toml mods\*.pw.toml .github\scripts\convert-cf-instance-to-packwiz.ps1 .github\workflows\deploy-curseforge.yml
git commit -m "Setup packwiz and CurseForge release workflow"
git push
```

---

## 6) Finish GitHub Actions setup (still required)

Workflow already exists at:

- `.github/workflows/deploy-curseforge.yml`

You still need to configure **GitHub repository secrets**:

1. Open repo on GitHub
2. Go to: `Settings` -> `Secrets and variables` -> `Actions`
3. Add these secrets:
   - `CURSEFORGE_API_TOKEN`
   - `CURSEFORGE_PROJECT_ID`

### How to get those values

- `CURSEFORGE_API_TOKEN`:
  - Generate in CurseForge account/API settings.
- `CURSEFORGE_PROJECT_ID`:
  - Numeric project ID from your modpack project URL on CurseForge.

---

## 7) Trigger first automated release

The workflow runs on tags matching `v*`.

Example:

```powershell
git tag v0.1.0
git push origin v0.1.0
```

Then verify in GitHub:

1. `Actions` tab -> `Deploy CurseForge`
2. Confirm export and publish steps succeed.

---

## 8) Ongoing release process

For each new release:

1. Update pack/mod metadata via `packwiz` commands
2. Run local sanity export:

   ```powershell
   packwiz refresh
   packwiz curseforge export -o release-pack.zip
   ```

3. Commit + push changes
4. Create/push new tag (`vX.Y.Z`)

GitHub Actions handles upload to CurseForge.

---

## Notes / common gotchas

- If `packwiz` command is not found, restart terminal and re-check `PATH`.
- If upload fails with auth/permission errors, re-check the two GitHub secrets.
- If a mod cannot be redistributed, CurseForge may reject publication depending on pack contents and permissions.
- Keep raw `.jar` files out of Git; prefer `mods/*.pw.toml` metadata entries.
