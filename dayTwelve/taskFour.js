const aFunction = () => {
  return new Promise((resolve, reject) => {
    let flag = Math.random() > 0.5;
    setTimeout(() => {
      if (flag) {
        resolve("Success");
      } else {
        reject("Failed");
      }
    }, 1000);
  });
};

aFunction()
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });

class FetchError extends Error {
  constructor(message) {
    super(message);
    this.name = "FetchError";
  }
}

const fetchindData = () => {
  return new Promise((resolve, reject) => {
    let flag = Math.random() > 0.5;
    const data = {
      name: "Ashish Kumar",
      role: "Developer",
      country: "India",
    };

    setTimeout(() => {
      if (flag) {
        resolve(JSON.stringify(data));
      } else {
        reject(new FetchError("Error in Fetching Data"));
      }
    }, 2000);
  });
};

const getData = async () => {
  try {
    const data = await fetchindData();
    console.log(JSON.parse(data));
  } catch (error) {
    if (error instanceof FetchError) {
      console.log(error.name);
      console.log(error.message);
    } else {
      console.log("Error is not an instance of FetchError");
    }
  }
};

getData();
