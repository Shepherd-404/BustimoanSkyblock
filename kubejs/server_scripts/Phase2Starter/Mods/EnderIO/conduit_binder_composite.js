// Conduit binder composite: remove default, add shaped (magma cream corners, sand cross, primogel goo center)

ServerEvents.recipes((event) => {
  event.remove({ id: "enderio:conduit_binder_composite" })

  event.shaped(Item.of("enderio:conduit_binder_composite", 4), ["MSM", "SPS", "MSM"], {
    M: "minecraft:magma_cream",
    S: "minecraft:sand",
    P: "justdirethings:gooblock_tier1"
  })
})
