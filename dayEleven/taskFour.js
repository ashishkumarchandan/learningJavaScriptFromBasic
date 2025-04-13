fetch("https://dogapi.dog/api/v2/breeds")
  .then((response) => response.json()) // <--- This line causes the error
  .then((data) => {
    console.log(data);
  });


  async function fetchWithAsyncAwait() {
    try {
      const response = await fetch("https://dogapi.dog/api/v2/breeds");
      const data = await response.json();
      console.log("Task 7: Fetched data using async/await:", data);
    } catch (error) {
      console.error("Task 7: Error fetching data:", error);
    }
  }
  
  fetchWithAsyncAwait();