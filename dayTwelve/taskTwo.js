console.log("Start");

try {
  throw new Error("This is an intentional error");
  console.log("This line will not be executed");
} catch (error) {
  console.log("inside catch block");
  console.log(error.message);
} finally {
  console.log("no matter what happens, this line will be executed");
}

console.log("End");
