import axios from "axios";

export const addUser = async (data) => {
  const url = "";

  try {
    return await axios.post(`${url}/add`, data);
  } catch (error) {
    console.log(`Error In POST Request : ${error}`);
  }
};
