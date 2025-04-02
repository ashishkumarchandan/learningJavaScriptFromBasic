// produck of two number with default parameter

const prod = (a, b = 1) => {
  return a * b;
};

console.log(prod(2));
console.log(prod(2, 3));

// take name and age and return greeting message but age will have default parameter

const greet = (name, age = "undefined") => {
  return `Hello ${name}, you are ${age} years old.`;
};

console.log(greet("Ashish"));
console.log(greet("Ashish", "21"));
