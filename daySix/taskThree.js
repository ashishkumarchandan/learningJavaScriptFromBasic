// map filter and reduce

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
