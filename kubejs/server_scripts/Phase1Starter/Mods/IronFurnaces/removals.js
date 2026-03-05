// Remove Iron Furnaces tier upgrade recipes and selected furnace recipes.
// Copper furnace: preheater center, coal blocks corners, copper blocks edge middles.
// Iron furnace: furnace center, iron blocks, Ender IO dark clear glass.

const UPGRADE_IDS = [
  "ironfurnaces:upgrade_iron",
  "ironfurnaces:upgrade_gold",
  "ironfurnaces:upgrade_diamond",
  "ironfurnaces:upgrade_emerald",
  "ironfurnaces:upgrade_obsidian",
  "ironfurnaces:upgrade_crystal",
  "ironfurnaces:upgrade_netherite",
  "ironfurnaces:upgrade_copper",
  "ironfurnaces:upgrade_silver",
  "ironfurnaces:upgrade_obsidian2",
  "ironfurnaces:upgrade_iron2",
  "ironfurnaces:upgrade_gold2",
  "ironfurnaces:upgrade_silver2",
]

const FURNACE_RECIPE_IDS_TO_REMOVE = [
  "ironfurnaces:furnaces/iron_furnace",
  "ironfurnaces:furnaces/iron_furnace2",
  "ironfurnaces:furnaces/gold_furnace",
  "ironfurnaces:furnaces/obsidian_furnace",
  "ironfurnaces:furnaces/silver_furnace2",
]

ServerEvents.recipes((event) => {
  UPGRADE_IDS.forEach((id) => event.remove({ output: id }))

  FURNACE_RECIPE_IDS_TO_REMOVE.forEach((id) => event.remove({ id: id }))

  event.remove({ id: "ironfurnaces:furnaces/copper_furnace" })
  event.shaped("ironfurnaces:copper_furnace", ["KCK", "CPC", "KCK"], {
    K: "minecraft:coal_block",
    C: "minecraft:copper_block",
    P: "immersiveengineering:blastfurnace_preheater",
  })

  // Iron furnace: furnace center, iron blocks, Ender IO dark clear glass (replaces default glass + iron ingots)
  event.shaped("ironfurnaces:iron_furnace", ["GIG", "IFI", "GIG"], {
    G: "enderio:clear_glass_black",
    I: "minecraft:iron_block",
    F: "minecraft:furnace",
  })
})
