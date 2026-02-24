// EnderIO iron gear (infinity bimetal): alltheores iron gear center, grains of infinity corners, steel ingots cross

ServerEvents.recipes((event) => {
  event.remove({ output: "enderio:iron_gear" })

  event.shaped("enderio:iron_gear", ["GSG", "SAS", "GSG"], {
    G: "enderio:grains_of_infinity",
    A: "alltheores:iron_gear",
    S: "alltheores:steel_ingot"
  })
})
