// Remove specific EnderIO recipes (conduits, capacitor bank upgrade)

ServerEvents.recipes((event) => {
  event.remove({ id: "enderio:vibrant_item_conduit" })
  event.remove({ id: "enderio:energetic_item_conduit" })
  event.remove({ id: "enderio:vibrant_capacitor_bank_upgrade" })
})
