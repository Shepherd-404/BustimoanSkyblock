// Remove EnderIO recipes that use c:gears/iron and re-add them requiring enderio:iron_gear

ServerEvents.recipes((event) => {
  const GEAR = "enderio:iron_gear"

  // Remove originals (by output so we catch datapack or mod recipes)
  event.remove({ output: "enderio:alloy_smelter" })
  event.remove({ output: "enderio:crafter" })
  event.remove({ output: "enderio:dark_bimetal_gear" })
  event.remove({ output: "enderio:drain" })
  event.remove({ output: "enderio:energized_gear" })
  event.remove({ output: "enderio:impulse_hopper" })
  event.remove({ output: "enderio:painting_machine" })
  event.remove({ output: "enderio:sag_mill" })
  event.remove({ output: "enderio:stirling_generator" })
  event.remove({ output: "enderio:vat" })

  // Alloy Smelter: GFG, FVF, IOI
  event.shaped("enderio:alloy_smelter", ["GFG", "FVF", "IOI"], {
    G: GEAR,
    F: "minecraft:furnace",
    V: "enderio:void_chassis",
    I: "#c:ingots/iron",
    O: "#c:obsidians"
  })

  // Crafter: SSS, ICI, GTG
  event.shaped("enderio:crafter", ["SSS", "ICI", "GTG"], {
    S: "#c:silicon",
    I: "#c:ingots/iron",
    C: "enderio:void_chassis",
    G: GEAR,
    T: "minecraft:crafting_table"
  })

  // Dark Bimetal Gear: NIN, IGI, NIN
  event.shaped("enderio:dark_bimetal_gear", ["NIN", "IGI", "NIN"], {
    N: "enderio:dark_steel_nugget",
    I: "enderio:dark_steel_ingot",
    G: GEAR
  })

  // Drain: ICI, IVI, GBG
  event.shaped("enderio:drain", ["ICI", "IVI", "GBG"], {
    I: "#c:ingots/conductive_alloy",
    C: "#c:glass_blocks/clear",
    V: "enderio:void_chassis",
    G: GEAR,
    B: "minecraft:bucket"
  })

  // Energized Gear: NIN, IGI, NIN
  event.shaped("enderio:energized_gear", ["NIN", "IGI", "NIN"], {
    N: "enderio:energetic_alloy_nugget",
    I: "enderio:energetic_alloy_ingot",
    G: GEAR
  })

  // Impulse Hopper: IHI, GCG, IRI
  event.shaped("enderio:impulse_hopper", ["IHI", "GCG", "IRI"], {
    I: "#c:ingots/conductive_alloy",
    H: "minecraft:hopper",
    G: GEAR,
    C: "enderio:void_chassis",
    R: "#c:ingots/redstone_alloy"
  })

  // Painting Machine: RGB, ICI, MAM
  event.shaped("enderio:painting_machine", ["RGB", "ICI", "MAM"], {
    R: "#c:dyes/red",
    G: "#c:dyes/green",
    B: "#c:dyes/blue",
    I: "#c:ingots/conductive_alloy",
    C: "enderio:void_chassis",
    M: GEAR,
    A: "#c:ingots/redstone_alloy"
  })

  // SAG Mill: GFG, IVI, OPO
  event.shaped("enderio:sag_mill", ["GFG", "IVI", "OPO"], {
    G: GEAR,
    F: "minecraft:flint",
    I: "#c:ingots/iron",
    V: "enderio:void_chassis",
    O: "#c:obsidians",
    P: "minecraft:piston"
  })

  // Stirling Generator: GFG, IVI, ODO
  event.shaped("enderio:stirling_generator", ["GFG", "IVI", "ODO"], {
    G: GEAR,
    F: "minecraft:furnace",
    I: "#c:ingots/iron",
    V: "enderio:void_chassis",
    O: "#c:obsidians",
    D: "minecraft:deepslate"
  })

  // Vat: SBS, ACA, MRM
  event.shaped("enderio:vat", ["SBS", "ACA", "MRM"], {
    S: "#c:ingots/dark_steel",
    B: "minecraft:barrel",
    A: "#c:ingots/conductive_alloy",
    C: "enderio:void_chassis",
    M: GEAR,
    R: "#c:ingots/redstone_alloy"
  })
})
