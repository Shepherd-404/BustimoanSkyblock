// Heavy engineering: electrum center, steel sheet corners (TR/BL), light engineering corners (TL/BR), steel components on cardinal edges

ServerEvents.recipes((event) => {
  event.remove({ output: "immersiveengineering:heavy_engineering" })

  event.shaped("immersiveengineering:heavy_engineering", ["LMS", "MEM", "SML"], {
    E: "alltheores:electrum_block",
    S: "immersiveengineering:sheetmetal_steel",
    L: "immersiveengineering:light_engineering",
    M: "immersiveengineering:component_steel"
  })
})
