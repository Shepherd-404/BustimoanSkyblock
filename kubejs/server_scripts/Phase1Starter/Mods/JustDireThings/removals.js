// Remove Just Dire Things generator (can't craft it)

ServerEvents.recipes((event) => {
  event.remove({ output: "justdirethings:generatort1" })
  event.remove({ output: "justdirethings:generatorfluidt1" })
})
