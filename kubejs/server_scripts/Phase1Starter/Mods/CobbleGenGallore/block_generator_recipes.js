// CobbleGen Gallore block generator recipes: tier progression with blocks
// Stone stays default. Copper through netherite: 6 blocks (top+bottom), 2 glass (sides), 1 prev tier (center)

ServerEvents.recipes((event) => {
  const pattern = ["BBB", "GPG", "BBB"]

  // Tier order: stone → copper → iron → gold → emerald → diamond → netherite
  const tiers = [
    { output: "block_gen_copper", block: "minecraft:copper_block", prev: "cobblegengalore:block_gen_stone" },
    { output: "block_gen_iron", block: "minecraft:iron_block", prev: "cobblegengalore:block_gen_copper" },
    { output: "block_gen_gold", block: "minecraft:gold_block", prev: "cobblegengalore:block_gen_iron" },
    { output: "block_gen_emerald", block: "minecraft:emerald_block", prev: "cobblegengalore:block_gen_gold" },
    { output: "block_gen_diamond", block: "minecraft:diamond_block", prev: "cobblegengalore:block_gen_emerald" },
    { output: "block_gen_netherite", block: "minecraft:netherite_block", prev: "cobblegengalore:block_gen_diamond" }
  ]

  tiers.forEach((tier) => {
    event.remove({ output: `cobblegengalore:${tier.output}` })
    event.shaped(`cobblegengalore:${tier.output}`, pattern, {
      B: tier.block,
      G: "minecraft:glass",
      P: tier.prev
    })
  })
})
