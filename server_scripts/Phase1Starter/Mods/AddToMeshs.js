ServerEvents.recipes((event) => {
  const Materials = { Dirt: "minecraft:dirt" }
  const Meshes = {
    FLINT: "exdeorum:flint_mesh",
    IRON: "exdeorum:iron_mesh",
    GOLD: "exdeorum:golden_mesh",
    DIAMOND: "exdeorum:diamond_mesh",
    NETHERITE: "exdeorum:netherite_mesh"
  }

  const sieving = (output, material, config) => {
    config.forEach((entry) => {
      event.recipes.exdeorum
        .sieve(Item.of(output), material, entry.mesh, {
          type: "minecraft:binomial",
          n: entry.amount || 1,
          p: entry.chance
        })
        .id(`skyblock:exdeorum/${entry.mesh.split(":")[1]}/${material.split(":")[1]}/${output.split(":")[0]}/${output.split(":")[1]}`)
    })
  }

  ;["actuallyadditions:canola_seeds", "actuallyadditions:rice"].forEach((item) => {
    sieving(item, Materials.Dirt, [
      { mesh: Meshes.FLINT, amount: 1, chance: 0.0005 },
      { mesh: Meshes.IRON, amount: 1, chance: 0.0005 },
      { mesh: Meshes.GOLD, amount: 1, chance: 0.0005 },
      { mesh: Meshes.DIAMOND, amount: 1, chance: 0.0005 },
      { mesh: Meshes.NETHERITE, amount: 1, chance: 0.0005 }
    ])
  })
})
