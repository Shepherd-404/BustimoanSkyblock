// End cake: replace chicken egg with sniffer egg

ServerEvents.recipes((event) => {
  event.replaceInput({ output: "exdeorum:end_cake" }, "minecraft:egg", "minecraft:sniffer_egg")
})
