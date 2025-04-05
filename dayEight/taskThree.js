// spread and rest

let array = [1, 2, 3, 4, 5];
let newArray = [...array, 6, 7, 8];
console.log(newArray);

// rest operator

function sum(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

console.log(sum(1, 2, 3, 4, 5));
