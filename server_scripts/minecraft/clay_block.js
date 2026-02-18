// Clay block -> 4 clay balls (reverse of crafting clay block from 4 clay balls)

ServerEvents.recipes((event) => {
  event.shapeless(Item.of("minecraft:clay_ball", 4), ["minecraft:clay"])
})
