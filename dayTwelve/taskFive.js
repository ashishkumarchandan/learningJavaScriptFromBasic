fetch("https://invalid-url-example.com/data")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.log(error.name);
    console.error("Error fetching data:", error.message);
  });
