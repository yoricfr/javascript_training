
// Borrowing a method
//

let map = {one: true, two: true, hasOwnProperty: true};

console.log(Object.hasOwnProperty.call(map,"one"));
// instead of:
// console.log(map.hasOwnProperty("one"));
// → true
