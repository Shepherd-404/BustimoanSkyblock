// Redstone wire coil: 2 redstone blocks (left/right middle), treated wood center, aluminium wire top and bottom rows

ServerEvents.recipes((event) => {
  event.remove({ output: "immersiveengineering:wirecoil_redstone" })
  event.remove({ id: "immersiveengineering:crafting/wirecoil_redstone" })

  event.shaped("immersiveengineering:wirecoil_redstone", ["WWW", "RTR", "WWW"], {
    W: "immersiveengineering:wire_aluminum",
    R: "minecraft:redstone_block",
    T: "immersiveengineering:treated_wood_horizontal"
  })
})
