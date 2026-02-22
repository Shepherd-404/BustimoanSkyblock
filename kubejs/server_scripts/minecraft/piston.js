// Piston: invar gear, treated wood (top row), redstone alloy, cobblestone

ServerEvents.recipes((event) => {
  event.remove({ output: "minecraft:piston" })

  // Pattern: TTT / CGC / CRC  (T=treated wood, C=cobblestone, G=invar gear, R=redstone alloy)
  event.shaped("minecraft:piston", ["WWW", "CGC", "CRC"], {
    W: "#immersiveengineering:treated_wood",
    C: "minecraft:cobblestone",
    G: "alltheores:invar_gear",
    R: "enderio:redstone_alloy_ingot"
  }).id("kubejs:piston")
})
