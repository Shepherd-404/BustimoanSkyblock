// Remove logs-to-hopper recipe, change vanilla hopper to use iron plates

ServerEvents.recipes((event) => {
  // Remove utilitarianutility logs-to-hopper recipe
  event.remove({ id: "utilitarianutility:logs_to_hopper" })

  // Replace iron ingots with iron plates in vanilla hopper recipe
  event.replaceInput(
    { output: "minecraft:hopper" },
    "minecraft:iron_ingot",
    "alltheores:iron_plate"
  )
})
