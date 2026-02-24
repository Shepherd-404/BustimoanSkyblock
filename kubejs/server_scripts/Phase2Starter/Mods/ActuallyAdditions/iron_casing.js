// Iron casing: Resonanz center, black quartz top/bottom, treated sticks sides, iron corners (gates AA behind IE)

ServerEvents.recipes((event) => {
  event.remove({ output: "actuallyadditions:iron_casing" })

  event.shaped("actuallyadditions:iron_casing", ["IQI", "TRT", "IQI"], {
    I: "minecraft:iron_ingot",
    Q: "actuallyadditions:black_quartz",
    T: "immersiveengineering:stick_treated",
    R: "immersiveengineering:resonanz_engineering"
  })
})
