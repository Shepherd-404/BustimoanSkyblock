// Remove default shaped recipe for double layer capacitor (slicing recipe added via datapack)

ServerEvents.recipes((event) => {
  event.remove({ id: "enderio:double_layer_capacitor" })
})
