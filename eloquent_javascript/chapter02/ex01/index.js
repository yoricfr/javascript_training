
let line = "#"
for(let i = 0; i<7; i++) {
  console.log(line);
  line += "#";
}

// Or we can write it shorter:
for(let i=0, line= "#"; i<7; i++, line += "#")
  console.log(line);

// Another solution
let line2 = "#"
while(line2.length <= 7) {
  console.log(line2);
  line2 += "#";
}

// shortest version
for(let lin = "#"; lin.length <= 7; lin += "#")
  console.log(lin);
