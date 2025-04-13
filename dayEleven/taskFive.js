const promise1 = Promise.resolve("Promise 1 resolved");
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 resolved"), 2000)
);
const promise3 = fetch("https://dogapi.dog/api/v2/breeds").then((res) =>
  res.json()
);

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("Task 8: All promises resolved:", results);
  })
  .catch((error) => {
    console.error("Task 8: Error in Promise.all:", error);
  });

const promiseA = new Promise((resolve) =>
  setTimeout(() => resolve("Promise A resolved"), 3000)
);
const promiseB = new Promise((resolve) =>
  setTimeout(() => resolve("Promise B resolved"), 1000)
);
const promiseC = new Promise((resolve) =>
  setTimeout(() => resolve("Promise C resolved"), 2000)
);

Promise.race([promiseA, promiseB, promiseC])
  .then((result) => {
    console.log("Task 9: First resolved promise:", result);
  })
  .catch((error) => {
    console.error("Task 9: Error in Promise.race:", error);
  });
