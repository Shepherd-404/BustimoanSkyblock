// Iron bucket: 5 iron plates (bottom row + 2 side center pieces)

ServerEvents.recipes((event) => {
  event.remove({ output: "minecraft:bucket" })

  event.shaped("minecraft:bucket", ["   ", "P P", "PPP"], {
    P: "alltheores:iron_plate"
  })
})
