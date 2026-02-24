// Vibrant crystal: emerald -> pulsating crystal; Pulsating crystal: diamond -> empowered diamatine crystal

ServerEvents.recipes((event) => {
  event.replaceInput(
    { output: "enderio:vibrant_crystal" },
    "#c:gems/emerald",
    "enderio:pulsating_crystal"
  )
  event.replaceInput(
    { output: "enderio:pulsating_crystal" },
    "#c:gems/diamond",
    "actuallyadditions:empowered_diamatine_crystal"
  )
})
