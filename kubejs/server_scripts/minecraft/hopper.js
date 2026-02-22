ServerEvents.recipes((event) => {
  // Replace iron ingots with invar plates in vanilla hopper recipe
  event.replaceInput(
    { output: "minecraft:hopper" },
    "minecraft:iron_ingot",
    "alltheores:invar_plate"
  )
})
