// Tiered tool progression: each tier requires previous tier in center + 4 upgrade materials
// Pattern:   M
//           MBM
//            M
// Wooden/copper base and netherite tiers left unchanged.

ServerEvents.recipes((event) => {
  const pattern = [" M ", "MBM", " M "]

  // --- MINECRAFT TOOLS (pickaxe, axe, shovel, hoe, sword) ---
  const mcTools = ["pickaxe", "axe", "shovel", "hoe", "sword"]
  const mcTiers = [
    { out: "stone", prev: "wooden", mat: "minecraft:cobblestone" },
    { out: "iron", prev: "stone", mat: "minecraft:iron_ingot" },
    { out: "golden", prev: "iron", mat: "minecraft:gold_ingot" },
    { out: "diamond", prev: "golden", mat: "minecraft:diamond" }
  ]

  mcTools.forEach((tool) => {
    mcTiers.forEach((tier) => {
      const output = `minecraft:${tier.out}_${tool}`
      const prevTier = `minecraft:${tier.prev}_${tool}`
      event.remove({ output: output })
      event.shaped(output, pattern, { M: tier.mat, B: prevTier })
    })
  })

  // --- EX DEORUM HAMMERS ---
  const exTiers = [
    { out: "stone_hammer", prev: "wooden_hammer", mat: "minecraft:cobblestone" },
    { out: "iron_hammer", prev: "stone_hammer", mat: "minecraft:iron_ingot" },
    { out: "golden_hammer", prev: "iron_hammer", mat: "minecraft:gold_ingot" },
    { out: "diamond_hammer", prev: "golden_hammer", mat: "minecraft:diamond" }
  ]

  exTiers.forEach((tier) => {
    event.remove({ output: `exdeorum:${tier.out}` })
    event.shaped(`exdeorum:${tier.out}`, pattern, {
      M: tier.mat,
      B: `exdeorum:${tier.prev}`
    })
  })

  // --- EX DEORUM COMPRESSED HAMMERS ---
  exTiers.forEach((tier) => {
    const out = `exdeorum:compressed_${tier.out}`
    const prev = `exdeorum:compressed_${tier.prev}`
    event.remove({ output: out })
    event.shaped(out, pattern, { M: tier.mat, B: prev })
  })

  // --- ALL THE ORES ORE HAMMERS ---
  const atoTiers = [
    { out: "iron_ore_hammer", prev: "copper_ore_hammer", mat: "minecraft:iron_ingot" },
    { out: "bronze_ore_hammer", prev: "iron_ore_hammer", mat: "alltheores:bronze_ingot" },
    { out: "invar_ore_hammer", prev: "bronze_ore_hammer", mat: "alltheores:invar_ingot" },
    { out: "platinum_ore_hammer", prev: "invar_ore_hammer", mat: "alltheores:platinum_ingot" }
  ]

  atoTiers.forEach((tier) => {
    event.remove({ output: `alltheores:${tier.out}` })
    event.shaped(`alltheores:${tier.out}`, pattern, {
      M: tier.mat,
      B: `alltheores:${tier.prev}`
    })
  })
})
