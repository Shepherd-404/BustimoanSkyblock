// Void chassis: iron casing center, grains of infinity on cardinal sides, iron blocks in corners

ServerEvents.recipes((event) => {
  event.remove({ output: "enderio:void_chassis" })

  event.shaped("enderio:void_chassis", ["IGI", "GCG", "IGI"], {
    I: "minecraft:iron_block",
    G: "enderio:grains_of_infinity",
    C: "actuallyadditions:iron_casing"
  })
})
