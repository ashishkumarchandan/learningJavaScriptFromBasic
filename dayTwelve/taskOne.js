const intentionalError = () => {
  throw new Error("This is an intentional error");
};

try {
  intentionalError();
} catch (error) {
  console.log(error.message);
}

const divideNumbers = (a, b) => {
  if (b == 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};

try {
  console.log(divideNumbers(10, 5));
  console.log(divideNumbers(10, 0));
} catch (error) {
  console.log(error.message);
}
