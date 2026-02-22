// Furnace: block of coal center, compressed cobblestone in all 8 outside slots

ServerEvents.recipes((event) => {
  event.remove({ output: "minecraft:furnace" })

  event.shaped("minecraft:furnace", ["CCC", "CBC", "CCC"], {
    C: "exdeorum:compressed_cobblestone",
    B: "minecraft:coal_block"
  })
})
