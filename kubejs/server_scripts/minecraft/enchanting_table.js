// Enchanting table: replace diamonds with pulsating crystal (Ender IO)

ServerEvents.recipes((event) => {
  event.replaceInput(
    { output: "minecraft:enchanting_table" },
    "minecraft:diamond",
    "enderio:pulsating_crystal"
  )
})
