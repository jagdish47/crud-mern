import axios from "axios";

const url = "http://localhost:8080";

export const addUser = async (data) => {
  try {
    return await axios.post(`${url}/add`, data);
  } catch (error) {
    console.log(`Error In POST Request : ${error}`);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${url}/all`);
  } catch (error) {
    console.log("Error while fetching data : ", error);
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${url}/${id}`);
  } catch (error) {
    console.log("Error while Deleting data");
  }
};

export const getUser = async (id) => {
  try {
    return await axios.get(`${url}/${id}`);
  } catch (error) {
    console.log("Error While Geeting Single user", error);
  }
};

export const editUser = async (user, id) => {
  try {
    return await axios.post(`${url}/${id}`, user);
  } catch (error) {
    console.log("Error while Editing the Value ", error);
  }
};
