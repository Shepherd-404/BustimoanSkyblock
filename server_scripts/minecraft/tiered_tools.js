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
})
