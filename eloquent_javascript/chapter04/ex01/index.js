
// The sum of a range
//

let range = (start, end, step = 1) => {
  let out = [];
  let i = start;
  while ((step > 0 && i <= end) || (step < 0 && i >= end)) {
    out.push(i);
    i += step;
  }
  return out;
}

let sum = numbers => {
  total = 0;
  for (let e of numbers)
    total += Number(e);
  return total
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
