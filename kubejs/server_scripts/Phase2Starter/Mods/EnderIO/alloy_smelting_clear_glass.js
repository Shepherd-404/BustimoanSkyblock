// Removes default Ender IO alloy smelting recipes for clear glass, dark clear glass, and enlightened clear glass variants. Clear glass is provided by data/enderio/recipe/alloy_smelting/clear_glass_from_compressed.json (1x compressed glass in Alloy Smelter).

ServerEvents.recipes((event) => {
  event.remove({ id: "enderio:alloy_smelting/clear_glass" })
  event.remove({ id: "enderio:alloy_smelting/clear_glass_d_from_main" })
  event.remove({ id: "enderio:alloy_smelting/clear_glass_d_from_main_alt" })
  event.remove({ id: "enderio:alloy_smelting/clear_glass_d_from_base" })
  event.remove({ id: "enderio:alloy_smelting/clear_glass_e_from_main" })
  event.remove({ id: "enderio:alloy_smelting/clear_glass_e_from_base" })
})
