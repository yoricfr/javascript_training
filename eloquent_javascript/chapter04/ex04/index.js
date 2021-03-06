
// Deep comparison
//

let deepEqual = (a, b) => {
  if (a === null || b === null) {
    return a === b;
  } else if (typeof(a) === "object" && typeof(b) === "object") {
    let ka = Object.keys(a);
    let kb = Object.keys(b);
    if (ka.length != kb.length) return false;
    let equal = true;
    for (let k of ka) {
      if (!kb.includes(k)) return false;
      equal = equal && deepEqual(a[k], b[k]);
    }
    return equal;
  } else if (typeof(a) != "object" && typeof(b) != "object") {
    return a == b;
  }
  else
    return false;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
