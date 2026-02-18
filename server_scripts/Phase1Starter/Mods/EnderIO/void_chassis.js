// Void chassis: remove vanilla, add shaped (early) + alloy smelting (later, in data pack)

ServerEvents.recipes((event) => {
  event.remove({ output: "enderio:void_chassis" })

  // Shaped recipe - easier, unlocked earlier
  event.shaped("enderio:void_chassis", ["IGI", "GCG", "IGI"], {
    I: "minecraft:iron_block",
    G: "enderio:grains_of_infinity",
    C: "actuallyadditions:iron_casing"
  })
})
