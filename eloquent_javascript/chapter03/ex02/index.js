
// Recursion
//
isEven = n => {
  if (n == 0)
    return true;
  else if (n == 1 || n == -1)
    return false;
  else
    return isEven(n - (n > 0 ? 2 : -2));
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-10));
