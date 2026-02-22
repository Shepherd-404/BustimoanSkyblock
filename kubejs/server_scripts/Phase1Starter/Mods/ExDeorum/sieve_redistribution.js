// Sieve Mesh Redistribution - implements the full plan
// Removals and custom recipe additions for Ex Deorum sieve

ServerEvents.recipes((event) => {
  const Materials = {
    Dirt: "minecraft:dirt",
    Sand: "minecraft:sand",
    Gravel: "minecraft:gravel",
    Dust: "exdeorum:dust",
    Netherrack: "exdeorum:crushed_netherrack",
    Blackstone: "exdeorum:crushed_blackstone",
    SoulSand: "minecraft:soul_sand"
  }
  const CompressedTags = {
    Gravel: "#exdeorum:compressed/gravel",
    Sand: "#exdeorum:compressed/sand",
    Dust: "#exdeorum:compressed/dust",
    Netherrack: "#exdeorum:compressed/crushed_netherrack",
    Blackstone: "#exdeorum:compressed/crushed_blackstone"
  }

  const Meshes = {
    STRING: "exdeorum:string_mesh",
    FLINT: "exdeorum:flint_mesh",
    IRON: "exdeorum:iron_mesh",
    GOLD: "exdeorum:golden_mesh",
    DIAMOND: "exdeorum:diamond_mesh",
    NETHERITE: "exdeorum:netherite_mesh"
  }

  const sieving = function(output, material, mesh, chance, amount) {
    if (chance === undefined) chance = 0.1
    if (amount === undefined) amount = 1
    const meshName = mesh.split(":")[1]
    const matName = (material.split(":")[1] || material).replace("/", "_")
    const outParts = output.split(":")
    const outName = outParts.length > 1 ? outParts[1] : output
    event.recipes.exdeorum
      .sieve(Item.of(output, amount), material, mesh, {
        type: "minecraft:binomial",
        n: amount,
        p: chance
      })
      .id("skyblock:sieve_redist/" + meshName + "/" + matName + "/" + outName)
  }

  // Compressed sieve: same recipes but 7x per operation, uses compressed tags
  const compressedSieving = function(output, compressedTag, mesh, chance, amount) {
    if (chance === undefined) chance = 0.1
    if (amount === undefined) amount = 1
    const n = 7
    const tagId = compressedTag.replace("#", "")
    const meshName = mesh.split(":")[1]
    const tagName = tagId.replace("exdeorum:compressed/", "").replace("/", "_")
    const outParts = output.split(":")
    const outName = outParts.length > 1 ? outParts[1] : output
    event.custom({
      type: "exdeorum:compressed_sieve",
      ingredient: { tag: tagId },
      mesh: { item: mesh },
      result: { count: amount, id: output },
      result_amount: { type: "minecraft:binomial", n: n, p: chance }
    }).id("skyblock:sieve_redist/compressed_" + meshName + "/" + tagName + "/" + outName)
  }

  // === REMOVALS ===

  // Pebbles - remove from all sieving
  const pebbles = [
    "exdeorum:stone_pebble", "exdeorum:diorite_pebble", "exdeorum:granite_pebble",
    "exdeorum:andesite_pebble", "exdeorum:deepslate_pebble", "exdeorum:tuff_pebble",
    "exdeorum:calcite_pebble", "exdeorum:blackstone_pebble", "exdeorum:basalt_pebble"
  ]
  pebbles.forEach((p) => {
    event.remove({ output: p, type: "exdeorum:sieve" })
    event.remove({ output: p, type: "exdeorum:compressed_sieve" })
  })

  // Soul sand + string mesh - remove string mesh only (keep flint+)
  event.remove({ type: "exdeorum:sieve", input: Materials.SoulSand, sieve_mesh: Meshes.STRING, mod: "exdeorum" })
  event.remove({ type: "exdeorum:compressed_sieve", input: Materials.SoulSand, sieve_mesh: Meshes.STRING, mod: "exdeorum" })

  // Specific removals
  event.remove({ output: "minecraft:ancient_debris", type: "exdeorum:sieve" })
  event.remove({ output: "minecraft:ancient_debris", type: "exdeorum:compressed_sieve" })
  event.remove({ output: "exdeorum:cobalt_ore_chunk", type: "exdeorum:sieve" })
  event.remove({ output: "exdeorum:cobalt_ore_chunk", type: "exdeorum:compressed_sieve" })
  event.remove({ output: "exdeorum:iridium_ore_chunk", type: "exdeorum:sieve" })
  event.remove({ output: "exdeorum:iridium_ore_chunk", type: "exdeorum:compressed_sieve" })
  event.remove({ output: "exdeorum:thorium_ore_chunk", type: "exdeorum:sieve" })
  event.remove({ output: "exdeorum:thorium_ore_chunk", type: "exdeorum:compressed_sieve" })
  event.remove({ output: "minecraft:prismarine_crystals", type: "exdeorum:sieve", input: Materials.Sand })
  event.remove({ output: "minecraft:prismarine_crystals", type: "exdeorum:compressed_sieve", input: Materials.Sand })
  event.remove({ output: "exdeorum:osmium_ore_chunk", type: "exdeorum:sieve" })
  event.remove({ output: "exdeorum:osmium_ore_chunk", type: "exdeorum:compressed_sieve" })
  event.remove({ output: "exdeorum:boron_ore_chunk", type: "exdeorum:sieve" })
  event.remove({ output: "exdeorum:boron_ore_chunk", type: "exdeorum:compressed_sieve" })
  event.remove({ output: "exdeorum:magnesium_ore_chunk", type: "exdeorum:sieve" })
  event.remove({ output: "exdeorum:magnesium_ore_chunk", type: "exdeorum:compressed_sieve" })

  // AE2 - remove all certus from sieving
  event.remove({ output: "ae2:certus_quartz_crystal", type: "exdeorum:sieve" })
  event.remove({ output: "ae2:certus_quartz_crystal", type: "exdeorum:compressed_sieve" })
  event.remove({ output: "ae2:charged_certus_quartz_crystal", type: "exdeorum:sieve" })
  event.remove({ output: "ae2:charged_certus_quartz_crystal", type: "exdeorum:compressed_sieve" })
  event.remove({ output: "ae2:certus_quartz_dust", type: "exdeorum:sieve" })
  event.remove({ output: "ae2:certus_quartz_dust", type: "exdeorum:compressed_sieve" })

  // Glowstone from dust (moved to crushed netherrack - handled in AddToMeshs.js)
  event.remove({ output: "minecraft:glowstone_dust", type: "exdeorum:sieve", input: Materials.Dust, mod: "exdeorum" })
  // Echo shards (if any - per plan)
  event.remove({ output: "minecraft:echo_shard", type: "exdeorum:sieve" })
  event.remove({ output: "minecraft:echo_shard", type: "exdeorum:compressed_sieve" })

  // Diamond - remove from all meshes (vanilla has string+); we add back at gold+ only
  event.remove({ output: "minecraft:diamond", type: "exdeorum:sieve" })
  event.remove({ output: "minecraft:diamond", type: "exdeorum:compressed_sieve" })
  event.remove({ output: "exdeorum:diamond_ore_chunk", type: "exdeorum:sieve" })
  event.remove({ output: "exdeorum:diamond_ore_chunk", type: "exdeorum:compressed_sieve" })

  // Emerald - remove from all meshes; we add back at diamond+ only
  event.remove({ output: "minecraft:emerald", type: "exdeorum:sieve" })
  event.remove({ output: "minecraft:emerald", type: "exdeorum:compressed_sieve" })
  event.remove({ output: "exdeorum:emerald_ore_chunk", type: "exdeorum:sieve" })
  event.remove({ output: "exdeorum:emerald_ore_chunk", type: "exdeorum:compressed_sieve" })

  // Iron - remove from string mesh (plan: iron at flint+)
  event.remove({ output: "exdeorum:iron_ore_chunk", type: "exdeorum:sieve", sieve_mesh: Meshes.STRING })
  event.remove({ output: "exdeorum:iron_ore_chunk", type: "exdeorum:compressed_sieve", sieve_mesh: Meshes.STRING })
  event.remove({ output: "minecraft:iron_nugget", type: "exdeorum:sieve", sieve_mesh: Meshes.STRING })
  event.remove({ output: "minecraft:iron_nugget", type: "exdeorum:compressed_sieve", sieve_mesh: Meshes.STRING })

  // Gold - remove gold nuggets and raw gold from sieving only; gold ore chunk at iron+ (remove string and flint)
  event.remove([{ output: "minecraft:gold_nugget", type: "exdeorum:sieve" }, { output: "minecraft:gold_nugget", type: "exdeorum:compressed_sieve" }])
  event.remove([{ output: "minecraft:raw_gold", type: "exdeorum:sieve" }, { output: "minecraft:raw_gold", type: "exdeorum:compressed_sieve" }])
  event.remove({ output: "exdeorum:gold_ore_chunk", type: "exdeorum:sieve", sieve_mesh: Meshes.STRING })
  event.remove({ output: "exdeorum:gold_ore_chunk", type: "exdeorum:compressed_sieve", sieve_mesh: Meshes.STRING })
  event.remove({ output: "exdeorum:gold_ore_chunk", type: "exdeorum:sieve", sieve_mesh: Meshes.FLINT })
  event.remove({ output: "exdeorum:gold_ore_chunk", type: "exdeorum:compressed_sieve", sieve_mesh: Meshes.FLINT })

  // Blaze powder - remove from all meshes; we add back at gold+ only
  event.remove({ output: "minecraft:blaze_powder", type: "exdeorum:sieve" })
  event.remove({ output: "minecraft:blaze_powder", type: "exdeorum:compressed_sieve" })

  // === ADDITIONS ===

  // Ancient debris from crushed_netherrack (diamond and above)
  sieving("minecraft:ancient_debris", Materials.Netherrack, Meshes.DIAMOND, 0.015)
  sieving("minecraft:ancient_debris", Materials.Netherrack, Meshes.NETHERITE, 0.02)
  compressedSieving("minecraft:ancient_debris", CompressedTags.Netherrack, Meshes.DIAMOND, 0.015)
  compressedSieving("minecraft:ancient_debris", CompressedTags.Netherrack, Meshes.NETHERITE, 0.02)

  // Ancient debris from crushed_blackstone (diamond and netherite only)
  sieving("minecraft:ancient_debris", Materials.Blackstone, Meshes.DIAMOND, 0.015)
  sieving("minecraft:ancient_debris", Materials.Blackstone, Meshes.NETHERITE, 0.02)
  compressedSieving("minecraft:ancient_debris", CompressedTags.Blackstone, Meshes.DIAMOND, 0.015)
  compressedSieving("minecraft:ancient_debris", CompressedTags.Blackstone, Meshes.NETHERITE, 0.02)

  // Cobalt ore chunk from crushed_netherrack (diamond and netherite only)
  sieving("exdeorum:cobalt_ore_chunk", Materials.Netherrack, Meshes.DIAMOND, 0.03)
  sieving("exdeorum:cobalt_ore_chunk", Materials.Netherrack, Meshes.NETHERITE, 0.03)
  compressedSieving("exdeorum:cobalt_ore_chunk", CompressedTags.Netherrack, Meshes.DIAMOND, 0.03)
  compressedSieving("exdeorum:cobalt_ore_chunk", CompressedTags.Netherrack, Meshes.NETHERITE, 0.03)

  // Iridium and thorium from gravel (netherite only)
  sieving("exdeorum:iridium_ore_chunk", Materials.Gravel, Meshes.NETHERITE, 0.02)
  sieving("exdeorum:thorium_ore_chunk", Materials.Gravel, Meshes.NETHERITE, 0.02)
  compressedSieving("exdeorum:iridium_ore_chunk", CompressedTags.Gravel, Meshes.NETHERITE, 0.02)
  compressedSieving("exdeorum:thorium_ore_chunk", CompressedTags.Gravel, Meshes.NETHERITE, 0.02)

  // Prismarine crystals from sand (netherite only)
  sieving("minecraft:prismarine_crystals", Materials.Sand, Meshes.NETHERITE, 0.05)
  compressedSieving("minecraft:prismarine_crystals", CompressedTags.Sand, Meshes.NETHERITE, 0.05)

  // Diamond from gravel (gold and above)
  sieving("minecraft:diamond", Materials.Gravel, Meshes.GOLD, 0.02)
  sieving("minecraft:diamond", Materials.Gravel, Meshes.DIAMOND, 0.03)
  sieving("minecraft:diamond", Materials.Gravel, Meshes.NETHERITE, 0.04)
  compressedSieving("minecraft:diamond", CompressedTags.Gravel, Meshes.GOLD, 0.02)
  compressedSieving("minecraft:diamond", CompressedTags.Gravel, Meshes.DIAMOND, 0.03)
  compressedSieving("minecraft:diamond", CompressedTags.Gravel, Meshes.NETHERITE, 0.04)

  // Emerald from gravel (diamond and above)
  sieving("minecraft:emerald", Materials.Gravel, Meshes.DIAMOND, 0.02)
  sieving("minecraft:emerald", Materials.Gravel, Meshes.NETHERITE, 0.03)
  compressedSieving("minecraft:emerald", CompressedTags.Gravel, Meshes.DIAMOND, 0.02)
  compressedSieving("minecraft:emerald", CompressedTags.Gravel, Meshes.NETHERITE, 0.03)

  // Blaze powder (gold+ only) from crushed_netherrack and dust
  sieving("minecraft:blaze_powder", Materials.Netherrack, Meshes.GOLD, 0.08)
  sieving("minecraft:blaze_powder", Materials.Netherrack, Meshes.DIAMOND, 0.1)
  sieving("minecraft:blaze_powder", Materials.Netherrack, Meshes.NETHERITE, 0.12)
  compressedSieving("minecraft:blaze_powder", CompressedTags.Netherrack, Meshes.GOLD, 0.08)
  compressedSieving("minecraft:blaze_powder", CompressedTags.Netherrack, Meshes.DIAMOND, 0.1)
  compressedSieving("minecraft:blaze_powder", CompressedTags.Netherrack, Meshes.NETHERITE, 0.12)
  sieving("minecraft:blaze_powder", Materials.Dust, Meshes.GOLD, 0.05)
  sieving("minecraft:blaze_powder", Materials.Dust, Meshes.DIAMOND, 0.06)
  sieving("minecraft:blaze_powder", Materials.Dust, Meshes.NETHERITE, 0.08)
  compressedSieving("minecraft:blaze_powder", CompressedTags.Dust, Meshes.GOLD, 0.05)
  compressedSieving("minecraft:blaze_powder", CompressedTags.Dust, Meshes.DIAMOND, 0.06)
  compressedSieving("minecraft:blaze_powder", CompressedTags.Dust, Meshes.NETHERITE, 0.08)
})
