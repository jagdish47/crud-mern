import { useState } from "react";
import { addUser } from "../services/api";
import { useNavigate } from "react-router-dom";

const defaultData = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const EditUser = (e) => {
  const navigation = useNavigate();

  const [user, setUser] = useState(defaultData);

  const dataHandle = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    await addUser(user);
    setUser(defaultData);
    navigation("/all");
  };

  console.log(user);

  return (
    <div className=" h-[80vh] flex items-center justify-center">
      <form className="max-w-md mx-auto bg-white p-4 rounded shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Edit User</h1>
        <label className="block text-gray-700 font-medium mb-2">
          Name
          <input
            onChange={(e) => dataHandle(e)}
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            value={user.name}
          />
        </label>
        <label className="block text-gray-700 font-medium mb-2">
          Username
          <input
            onChange={(e) => dataHandle(e)}
            type="text"
            name="username"
            placeholder="Enter your username"
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            value={user.username}
          />
        </label>
        <label className="block text-gray-700 font-medium mb-2">
          Email
          <input
            onChange={(e) => dataHandle(e)}
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            value={user.email}
          />
        </label>
        <label className="block text-gray-700 font-medium mb-2">
          Phone
          <input
            onChange={(e) => dataHandle(e)}
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            value={user.phone}
          />
        </label>
        <button
          onClick={(e) => handleClick(e)}
          type="submit"
          className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditUser;
