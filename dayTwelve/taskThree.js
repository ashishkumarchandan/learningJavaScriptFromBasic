class myError extends Error {
  constructor(message) {
    super(message);
    this.name = "myError";

    // this.message = message;
  }
}

const riskyFunction = () => {
  throw new myError("This is an intentional error");
};

try {
  riskyFunction();
} catch (error) {
  // instance is used because multiple custom errors can be there think of it like ==
  if (error instanceof myError) {
    console.log(error.name);
    console.log(error.message);
  } else {
    console.log("Error is not an instance of myError");
  }
}

class inputValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "inputValidationError";
  }
}

const validateInput = (input) => {
  if (typeof input !== "string" || input.trim() === "") {
    throw new inputValidationError("Input must be a non-empty string");
  }
  console.log("Input is valid");
};

try {
  const input = "";
  validateInput(input);
} catch (error) {
  if (error instanceof inputValidationError) {
    console.log(error.name);
    console.log(error.message);
  } else {
    console.log("Error is not an instance of inputValidationError");
  }
}

