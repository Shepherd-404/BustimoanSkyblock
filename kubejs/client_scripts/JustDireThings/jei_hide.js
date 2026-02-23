// Hide Just Dire Things generator from JEI/REI/EMI

RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  event.remove("justdirethings:generatort1")
  event.remove("justdirethings:generatorfluidt1")
})
