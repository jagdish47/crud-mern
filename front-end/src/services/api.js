import axios from "axios";

const url = "http://localhost:8080";

export const addUser = async (data) => {
  try {
    return await axios.post(`${url}/add`, data);
  } catch (error) {
    console.log(`Error In POST Request : ${error}`);
  }
};

export const getUser = async () => {
  try {
    return await axios.get(`${url}/all`);
  } catch (error) {
    console.log("Error while fetching data : ", error);
  }
};
