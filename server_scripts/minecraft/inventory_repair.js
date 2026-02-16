// Repair wooden and stone tools + Ex Deorum crooks in inventory or crafting table
// Wooden: tool + 1 plank (any) = repaired tool
// Stone: tool + 1 cobblestone = repaired tool
// Wooden crook: crook + 1 plank = repaired crook
// Bone crook: bone_crook + 1 bone = repaired bone crook

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
})
