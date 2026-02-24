// Light engineering: replace copper ingot with 1x compressed copper block

ServerEvents.recipes((event) => {
  event.replaceInput(
    { output: "immersiveengineering:light_engineering" },
    "minecraft:copper_ingot",
    "allthecompressed:copper_block_1x"
  )
})
