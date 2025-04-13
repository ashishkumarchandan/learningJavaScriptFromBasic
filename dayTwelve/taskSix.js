class FetchError extends Error {
  constructor(message) {
    super(message);
    this.name = "FetchError";
  }
}

async function customFetch(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw new FetchError("Network error occurred.");
  }
}

customFetch("https://invalid-url.example.com/data")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.name);
    console.log(error.message);
  });
