import axios from "axios";

const url = "https://dogapi.dog/api/v2/breeds";

const fetchData = async () => {
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
