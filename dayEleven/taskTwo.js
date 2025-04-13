function simulateFetchingData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Fetched: ${data}`);
    }, 1000);
  });
}

simulateFetchingData("User Data")
  .then((result) => {
    console.log(result);
    return simulateFetchingData("Order Data");
  })
  .then((result) => {
    console.log(result);
    return simulateFetchingData("Payment Data");
  })
  .then((result) => {
    console.log(result);
  });


