// star printing program
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
    // console low print in new lines so add in string
  }
  console.log(row);
}

// alpabet printing program
let a = 0; // Changed initial value to 0
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + String.fromCharCode(65 + a) + " ";
    a++;
  }
  console.log(row);
}
