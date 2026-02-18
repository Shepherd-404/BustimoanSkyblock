// Canola seeds and rice - 0.05% chance from sifting dirt (requires KubeJS Tweaks)

ServerEvents.recipes((event) => {
  const Materials = {
    Dirt: "minecraft:dirt",
    Sand: "minecraft:sand",
    Dust: "exdeorum:dust",
    Netherrack: "exdeorum:crushed_netherrack"
  }
  const Meshes = {
    FLINT: "exdeorum:flint_mesh",
    IRON: "exdeorum:iron_mesh",
    GOLD: "exdeorum:golden_mesh",
    DIAMOND: "exdeorum:diamond_mesh",
    NETHERITE: "exdeorum:netherite_mesh"
  }

  // Remove pebbles from sieving (get them from dirt + pebble/empty hand instead)
  const pebbles = [
    "exdeorum:stone_pebble", "exdeorum:diorite_pebble", "exdeorum:granite_pebble",
    "exdeorum:andesite_pebble", "exdeorum:deepslate_pebble", "exdeorum:tuff_pebble",
    "exdeorum:calcite_pebble", "exdeorum:blackstone_pebble", "exdeorum:basalt_pebble"
  ]
  pebbles.forEach(function (p) {
    event.remove({ output: p, type: "exdeorum:sieve" })
    event.remove({ output: p, type: "exdeorum:compressed_sieve" })
  })

  // Move glowstone from dust to crushed netherrack
  event.remove({
    input: "exdeorum:dust",
    type: "exdeorum:sieve",
    mod: "exdeorum",
    output: "minecraft:glowstone_dust"
  })

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

  // Canola at iron+, rice at golden+ (per plan)
  sieving("actuallyadditions:canola_seeds", Materials.Dirt, [
    { mesh: Meshes.IRON, amount: 1, chance: 0.0005 },
    { mesh: Meshes.GOLD, amount: 1, chance: 0.0005 },
    { mesh: Meshes.DIAMOND, amount: 1, chance: 0.0005 },
    { mesh: Meshes.NETHERITE, amount: 1, chance: 0.0005 }
  ])
  sieving("actuallyadditions:rice", Materials.Dirt, [
    { mesh: Meshes.GOLD, amount: 1, chance: 0.0005 },
    { mesh: Meshes.DIAMOND, amount: 1, chance: 0.0005 },
    { mesh: Meshes.NETHERITE, amount: 1, chance: 0.0005 }
  ])

  // Black quartz from sand - diamond 1%, netherite 3%
  sieving("actuallyadditions:black_quartz", Materials.Sand, [
    { mesh: Meshes.DIAMOND, amount: 1, chance: 0.01 },
    { mesh: Meshes.NETHERITE, amount: 1, chance: 0.03 }
  ])

  // Red crystal shards (restonia) from crushed netherrack - diamond 2%, netherite 4%
  sieving("actuallyadditions:restonia_crystal_shard", Materials.Netherrack, [
    { mesh: Meshes.DIAMOND, amount: 1, chance: 0.02 },
    { mesh: Meshes.NETHERITE, amount: 1, chance: 0.04 }
  ])

  // Glowstone dust from crushed netherrack (moved from dust)
  sieving("minecraft:glowstone_dust", Materials.Netherrack, [
    { mesh: Meshes.FLINT, amount: 1, chance: 0.03 },
    { mesh: Meshes.IRON, amount: 1, chance: 0.06 },
    { mesh: Meshes.GOLD, amount: 1, chance: 0.08 },
    { mesh: Meshes.DIAMOND, amount: 1, chance: 0.1 },
    { mesh: Meshes.NETHERITE, amount: 1, chance: 0.12 }
  ])
})
