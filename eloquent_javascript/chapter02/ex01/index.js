
let line = "#"
for(let i = 0; i<7; i++) {
  console.log(line);
  line += "#";
}

// Another solution
let line2 = "#"
while(line2.length <= 7) {
  console.log(line2);
  line2 += "#";
}
