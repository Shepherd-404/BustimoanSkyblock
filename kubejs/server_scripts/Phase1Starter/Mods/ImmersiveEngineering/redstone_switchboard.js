// Redstone switchboard: replace electronic component with redstone breaker

ServerEvents.recipes((event) => {
  event.replaceInput(
    { output: "immersiveengineering:redstone_switchboard" },
    "immersiveengineering:component_electronic",
    "immersiveengineering:redstone_breaker"
  )
})
