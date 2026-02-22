// Custom crucible heat sources

ServerEvents.recipes((event) => {
  // Uranium block - (same as lava)
  event.custom({
    type: "exdeorum:crucible_heat_source",
    block_predicate: { block: "alltheores:uranium_block" },
    heat_value: 3
  })
})
