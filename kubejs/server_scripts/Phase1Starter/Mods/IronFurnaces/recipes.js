// Adds custom shaped recipes for Iron Furnaces copper, iron, silver, gold, and diamond furnaces.

ServerEvents.recipes((event) => {
  event.shaped("ironfurnaces:copper_furnace", ["KCK", "CPC", "KCK"], {
    K: "minecraft:coal_block",
    C: "minecraft:copper_block",
    P: "immersiveengineering:blastfurnace_preheater",
  })

  event.shaped("ironfurnaces:iron_furnace", ["GIG", "IFI", "GIG"], {
    G: "enderio:clear_glass",
    I: "minecraft:iron_block",
    F: "minecraft:furnace",
  })

  event.shaped("ironfurnaces:silver_furnace", ["GSG", "SFS", "GSG"], {
    G: "enderio:clear_glass",
    S: "alltheores:silver_block",
    F: "minecraft:furnace",
  })

  event.shaped("ironfurnaces:gold_furnace", ["GCG", "CSC", "GCG"], {
    G: "minecraft:gold_block",
    C: "enderio:clear_glass",
    S: "ironfurnaces:silver_furnace",
  })

  event.shaped("ironfurnaces:diamond_furnace", ["GDG", "DSD", "GDG"], {
    G: "enderio:clear_glass_e",
    D: "minecraft:diamond_block",
    S: "ironfurnaces:gold_furnace",
  })
})
