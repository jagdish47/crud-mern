import User from "../schema/user-schema.js";

export const addUser = async (request, response) => {
  const user = request.body;

  const newUser = new User(user);

  try {
    await newUser.save();
    response.status(201).json(newUser);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
};

export const getUsers = async (request, response) => {
  try {
    const users = await User.find({});
    response.status(200).json(users);
  } catch (error) {
    response.status(404).json({ message: error.message });
    console.log("Error while Getting Data From Database : ", error);
  }
};

export const deleteUser = async (request, response) => {
  try {
    await User.deleteOne({ _id: request.params.id });
    response.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
