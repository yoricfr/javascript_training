// This line works
console.log("Hello");

// This doesn't work
console.log(sum(range(1, 10)));
// it says sum() is not defined
// it works from the book website because the sum function is defined there



// Here are the two missing functions:

function range(start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}
