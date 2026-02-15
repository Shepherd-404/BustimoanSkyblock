// Remove Kibe cobblestone and basalt generators (can't craft them)

ServerEvents.recipes((event) => {
  for (let i = 1; i <= 5; i++) {
    event.remove({ output: `kibe:cobblestone_generator_mk${i}` })
    event.remove({ output: `kibe:basalt_generator_mk${i}` })
  }
})
