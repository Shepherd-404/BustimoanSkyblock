// Repair wooden and stone tools in inventory or crafting table
// Wooden: tool + 1 plank (any) = repaired tool
// Stone: tool + 1 cobblestone = repaired tool

ServerEvents.recipes((event) => {
  const woodenTools = ["pickaxe", "axe", "shovel", "hoe", "sword"]
  const stoneTools = ["pickaxe", "axe", "shovel", "hoe", "sword"]

  woodenTools.forEach(function (tool) {
    event.shapeless("minecraft:wooden_" + tool, [
      "minecraft:wooden_" + tool,
      "#minecraft:planks"
    ])
  })

  stoneTools.forEach(function (tool) {
    event.shapeless("minecraft:stone_" + tool, [
      "minecraft:stone_" + tool,
      "minecraft:cobblestone"
    ])
  })
})
