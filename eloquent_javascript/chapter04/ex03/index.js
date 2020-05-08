
// A List
//

let arrayToList = array => {
  let queue = null;
  for (let i = array.length - 1; i >= 0; i--) {
    queue = { value: array[i], rest: queue }
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
  return {value: e, rest: list};
}

let nth1 = (list, n) => {
  let i = 0;
  while (i < n && list) {
    list = list.rest;
    i++;
  }
  return list ? list.value : undefined;
}

let nth = (list, n) => {
  if (!list) return undefined;
  if (n == 0) return list.value;
  else return nth(list.rest, n-1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth1(arrayToList([10, 20, 30]), 81));
// → 20

