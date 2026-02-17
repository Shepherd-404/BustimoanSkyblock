// Hide Kibe cobblestone and basalt generators + wooden bucket/water bucket from JEI/REI/EMI

RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  for (let i = 1; i <= 5; i++) {
    event.remove(`kibe:cobblestone_generator_mk${i}`)
    event.remove(`kibe:basalt_generator_mk${i}`)
  }
  event.remove("kibe:wooden_bucket")
  event.remove("kibe:wooden_water_bucket")
})
