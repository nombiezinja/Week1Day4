function findWaldo(arr, found) {
  // for (var i = 0; i < arr.length; i++)
  arr.forEach(function(value, index , arr) {
    if (value === "Waldo") {
      found(index);
    }
  })
}

function actionWhenFound(x) {
  console.log("Found Waldo at index " + x);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);