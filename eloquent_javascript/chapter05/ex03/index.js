
// Everything
//

function every0(array, test) {
  let condition = true;
  for (let e of array) {
    if (!test(e)) {
      condition = false;
      break;
    }
  }
  return condition;
}

function every(array, test) {
  return array.some(b => !test(b)) ? false : true;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
