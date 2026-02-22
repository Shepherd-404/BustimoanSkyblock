// Log to planks: 1 plank per log (instead of vanilla 4)


ServerEvents.recipes((event) => {
  const logToPlank = [
    ["minecraft:oak_log", "minecraft:oak_planks"],
    ["minecraft:spruce_log", "minecraft:spruce_planks"],
    ["minecraft:birch_log", "minecraft:birch_planks"],
    ["minecraft:jungle_log", "minecraft:jungle_planks"],
    ["minecraft:acacia_log", "minecraft:acacia_planks"],
    ["minecraft:dark_oak_log", "minecraft:dark_oak_planks"],
    ["minecraft:mangrove_log", "minecraft:mangrove_planks"],
    ["minecraft:cherry_log", "minecraft:cherry_planks"],
    ["minecraft:bamboo_block", "minecraft:bamboo_planks"],
    ["minecraft:crimson_stem", "minecraft:crimson_planks"],
    ["minecraft:warped_stem", "minecraft:warped_planks"]
  ]

  logToPlank.forEach(function (pair) {
    event.remove({ output: pair[1], input: pair[0] })
    event.shapeless(Item.of(pair[1], 1), pair[0])
  })
})
