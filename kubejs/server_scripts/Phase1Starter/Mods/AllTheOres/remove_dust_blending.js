// Remove AllTheOres dust-from-blending recipes for steel, electrum, constantan, brass

ServerEvents.recipes((event) => {
  event.remove({ id: "alltheores:crafting/steel/alloy_blending_from_dust" })
  event.remove({ id: "alltheores:crafting/electrum/alloy_blending_from_dust" })
  event.remove({ id: "alltheores:crafting/constantan/alloy_blending_from_dust" })
  event.remove({ id: "alltheores:crafting/brass/alloy_blending_from_dust" })
})
