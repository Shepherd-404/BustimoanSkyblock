// Flint and steel: replace iron ingot with steel ingot

ServerEvents.recipes((event) => {
  event.replaceInput(
    { output: "minecraft:flint_and_steel" },
    "minecraft:iron_ingot",
    "alltheores:steel_ingot"
  )
})
