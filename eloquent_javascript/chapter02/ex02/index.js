
for (let i=1; i<=100; i++) {
  if (i % 3 == 0 && i % 5 == 0)
    console.log("FizzBuzz");
  else if (i % 3 == 0)
    console.log("Fizz");
  else if (i % 5 == 0)
    console.log("Buzz");
  else
    console.log(i);
}

// Another solution
for (let j = 1, word = ""; j <= 100; j++) {
  word = ""
  if (j % 3 == 0)
    word = "Fizz";
  if (j % 5 == 0) {
    word += "Buzz";
  }
  console.log(word || j);
}
