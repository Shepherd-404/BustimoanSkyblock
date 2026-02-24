// Remove default shaped recipe for octadic capacitor (slicing recipe added via datapack)

ServerEvents.recipes((event) => {
  event.remove({ id: "enderio:octadic_capacitor" })
})
