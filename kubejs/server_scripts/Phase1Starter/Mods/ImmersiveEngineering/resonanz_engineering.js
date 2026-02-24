// Resonanz engineering: sculk core center, advanced electronic components on edges, rs engineering TL/BR, heavy engineering TR/BL

ServerEvents.recipes((event) => {
  event.remove({ output: "immersiveengineering:resonanz_engineering" })

  event.shaped("immersiveengineering:resonanz_engineering", ["RAH", "ACA", "HAR"], {
    C: "exdeorum:sculk_core",
    A: "immersiveengineering:component_electronic_adv",
    R: "immersiveengineering:rs_engineering",
    H: "immersiveengineering:heavy_engineering"
  })
})
