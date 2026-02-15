ServerEvents.recipes((event) => {
  // Replace iron ingots with iron plates in vanilla hopper recipe
  event.replaceInput(
    { output: "minecraft:hopper" },
    "minecraft:iron_ingot",
    "alltheores:iron_plate"
  )
})
