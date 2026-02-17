// Repair wooden and stone tools + Ex Deorum crooks and hammers in inventory or crafting table
// Wooden: tool + 1 plank (any) = repaired tool
// Stone: tool + 1 cobblestone = repaired tool
// Wooden crook: crook + 1 plank = repaired crook
// Bone crook: bone_crook + 1 bone = repaired bone crook
// Wooden/stone hammers (regular + compressed): hammer + 1 plank or cobblestone = repaired

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

  // Ex Deorum crooks
  event.shapeless("exdeorum:crook", ["exdeorum:crook", "#minecraft:planks"])
  event.shapeless("exdeorum:bone_crook", ["exdeorum:bone_crook", "minecraft:bone"])

  // Ex Deorum hammers (wooden + stone, regular and compressed)
  event.shapeless("exdeorum:wooden_hammer", ["exdeorum:wooden_hammer", "#minecraft:planks"])
  event.shapeless("exdeorum:stone_hammer", ["exdeorum:stone_hammer", "minecraft:cobblestone"])
  event.shapeless("exdeorum:compressed_wooden_hammer", ["exdeorum:compressed_wooden_hammer", "#minecraft:planks"])
  event.shapeless("exdeorum:compressed_stone_hammer", ["exdeorum:compressed_stone_hammer", "minecraft:cobblestone"])
})
