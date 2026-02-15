// Storage terminal (Tom's Simple Storage): replace glowstone with empowered restonia crystal block

ServerEvents.recipes((event) => {
  event.replaceInput(
    { output: "toms_storage:storage_terminal" },
    "minecraft:glowstone_dust",
    "actuallyadditions:empowered_restonia_crystal_block"
  )
})
