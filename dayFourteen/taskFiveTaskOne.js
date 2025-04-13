const pi = 3.14;

const programName = "Calculator";

const areaOfCircle = (radius) => {
  return pi * radius * radius;
};

const greet = (name) => {
  console.log(`Hello ${name}`);
};

export { pi, programName, areaOfCircle, greet };
