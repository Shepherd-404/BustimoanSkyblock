// Vibrant capacitor bank: remove default, add shaped (3x compressed redstone center, advanced_capacitor_bank left/right, octadic corners, vibrant crystal top/bottom middle)

ServerEvents.recipes((event) => {
  event.remove({ id: "enderio:vibrant_capacitor_bank" })

  event.shaped("enderio:vibrant_capacitor_bank", ["OVO", "ARA", "OVO"], {
    O: "enderio:octadic_capacitor",
    V: "enderio:vibrant_crystal",
    A: "enderio:advanced_capacitor_bank",
    R: "allthecompressed:redstone_block_3x"
  })
})
