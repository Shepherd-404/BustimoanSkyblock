// Advanced capacitor bank: remove default recipe and upgrade recipe; add single shaped (2x compressed redstone center)

ServerEvents.recipes((event) => {
  event.remove({ id: "enderio:advanced_capacitor_bank" })
  event.remove({ id: "enderio:advanced_capacitor_bank_upgrade" })

  event.shaped("enderio:advanced_capacitor_bank", ["DED", "BRB", "DED"], {
    D: "enderio:double_layer_capacitor",
    E: "enderio:energetic_alloy_block",
    B: "enderio:basic_capacitor_bank",
    R: "allthecompressed:redstone_block_2x"
  })
})
