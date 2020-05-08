
// A List
//

let arrayToList = array => {
  let queue = null;
  let old = null;
  for (let i = array.length - 1; i >= 0; i--) {
    queue = {}
    queue["value"] = array[i];
    queue["rest"] = old;
    old = queue;
  }
  return queue;
}

let listToArray = list => {
  let array = [];
  while (list) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
}

let prepend = (e, list) => {
  obj = {};
  obj["value"] = e;
  obj["rest"] = list;
  return obj;
}

let nth = (list, n) => {
  let i = 0;
  while (i < n && list) {
    list = list.rest;
    i++;
  }
  return list.value;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

