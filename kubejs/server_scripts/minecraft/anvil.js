// Anvil: iron blocks instead of iron ingots (7 blocks total)

ServerEvents.recipes((event) => {
  event.remove({ output: "minecraft:anvil" })

  // Pattern: BBB / B B / BBB  (B = iron block)
  event.shaped("minecraft:anvil", ["BBB", "B B", "BBB"], {
    B: "minecraft:iron_block"
  }).id("kubejs:anvil")
})
