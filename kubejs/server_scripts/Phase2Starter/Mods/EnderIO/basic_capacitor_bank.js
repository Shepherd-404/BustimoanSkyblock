// Basic capacitor bank: iron ingot -> conductive alloy ingot; redstone block -> 1x compressed redstone block

ServerEvents.recipes((event) => {
  event.replaceInput(
    { output: "enderio:basic_capacitor_bank" },
    "#c:ingots/iron",
    "enderio:conductive_alloy_ingot"
  )
  event.replaceInput(
    { output: "enderio:basic_capacitor_bank" },
    "#c:storage_blocks/redstone",
    "allthecompressed:redstone_block_1x"
  )
})
