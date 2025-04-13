function aFunction() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Async/Await resolved!"), 2000);
  });
}

async function abc() {
  const result = await aFunction();
  console.log(result);
}

abc();

async function aa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(" Async/Await rejected!"), 2000);
  });
}

async function aaa() {
  try {
    const result = await aa();
    console.log("This won't be logged in case of rejection:", result);
  } catch (error) {
    console.error("Caught an error:", error); 
  }
}

aaa();
