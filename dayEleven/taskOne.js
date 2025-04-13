const a = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This will be printed in 2 seconds");
  }, 2000);
});

a.then((message) => {
  console.log(message);
});


const b = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This will be rejected in 2 seconds");
    }, 2000);
  });
  
  b.then((message) => {
    console.log(message);
  });