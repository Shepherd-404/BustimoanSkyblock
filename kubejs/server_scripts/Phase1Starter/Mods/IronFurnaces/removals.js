// Removes Iron Furnaces tier upgrade recipes by output; removes selected furnace recipes by ID; removes default copper furnace recipe.

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
  "ironfurnaces:furnaces/gold_furnace2",
  "ironfurnaces:furnaces/obsidian_furnace",
  "ironfurnaces:furnaces/silver_furnace",
  "ironfurnaces:furnaces/silver_furnace2",
  "ironfurnaces:furnaces/diamond_furnace",
]

ServerEvents.recipes((event) => {
  UPGRADE_IDS.forEach((id) => event.remove({ output: id }))
  FURNACE_RECIPE_IDS_TO_REMOVE.forEach((id) => event.remove({ id: id }))
  event.remove({ id: "ironfurnaces:furnaces/copper_furnace" })
})
