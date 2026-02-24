// Ensouled chassis: replace quartz input with void chassis

ServerEvents.recipes((event) => {
  event.replaceInput(
    { output: "enderio:ensouled_chassis" },
    "#c:gems/quartz",
    "enderio:void_chassis"
  )
})
