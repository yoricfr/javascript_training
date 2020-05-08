
// Reversing an array
//

let reverseArray = array => {
  let out = []
  for (let e of array)
    out.unshift(e)
  return out;
}

let reverseArrayInPlace = array => {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    temp = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = temp;
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
