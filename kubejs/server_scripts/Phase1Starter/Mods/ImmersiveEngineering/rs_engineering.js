// Redstone engineering: iron sheet corners, 1x compressed redstone center, state cell/switchboard/connector/coil on edges

ServerEvents.recipes((event) => {
  event.remove({ id: "immersiveengineering:crafting/rs_engineering" })

  event.shaped("immersiveengineering:rs_engineering", ["ITI", "LCR", "IBI"], {
    I: "immersiveengineering:sheetmetal_iron",
    T: "immersiveengineering:redstone_state_cell",
    C: "allthecompressed:redstone_block_1x",
    L: "immersiveengineering:connector_redstone",
    R: "immersiveengineering:wirecoil_redstone",
    B: "immersiveengineering:redstone_switchboard"
  })
})
