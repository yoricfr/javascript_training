
// Bean counting
//
countChar = (str, pattern) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == pattern) {
      count++;
    }
  }
  return count;

}
countBs = (str) => {
  return countChar(str,"B");
}

console.log(countBs("BaBaBo"));
// → 3
console.log(countChar("BaBaBo", "a"));
// → 2
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
