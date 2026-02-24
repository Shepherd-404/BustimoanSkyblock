// EnderIO crafter: vanilla crafter instead of crafting table, conductive alloy blocks instead of iron ingots

ServerEvents.recipes((event) => {
  event.replaceInput(
    { output: "enderio:crafter" },
    "minecraft:crafting_table",
    "minecraft:crafter"
  )
  event.replaceInput(
    { output: "enderio:crafter" },
    "minecraft:iron_ingot",
    "enderio:conductive_alloy_block"
  )
})
