// Tom's Simple Storage terminals: replace glowstone with Actually Additions crystal blocks

ServerEvents.recipes((event) => {
  // Storage terminal: glowstone dust -> Basic Engineering Block
  event.replaceInput(
    { output: "toms_storage:storage_terminal" },
    "minecraft:glowstone_dust",
    "immersiveengineering:basic_engineering"
  )

  // Wireless terminal: glowstone dust -> empowered diamatine crystal block
  event.replaceInput(
    { output: "toms_storage:wireless_terminal" },
    "minecraft:glowstone_dust",
    "actuallyadditions:empowered_diamatine_crystal_block"
  )
})
