// make a function to return product of two numbers with one parameter has default value 1

function product(a, b = 1) {
  return a * b;
}

console.log(product(2, 3));
console.log(product(2));
