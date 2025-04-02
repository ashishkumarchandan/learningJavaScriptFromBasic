// print normally then print with foreach

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers.forEach(num => console.log(num));
