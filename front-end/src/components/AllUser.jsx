import { useEffect, useState } from "react";
import { getUsers } from "../services/api";
import { BiSolidEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { deleteUser } from "../services/api";

const AllUser = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers();
    setData(response.data);
    console.log(data);
  };

  const deleteUserDetail = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  return (
    <div className="w-1/2 mx-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Username
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Phone
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">{item._id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.username}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.phone}</td>
              {/* <td>
                <button component={Link} to={`/edit/${item._id}`}>
                  <BiSolidEditAlt />
                </button>
              </td> */}

              <td>
                <Link to={`/edit/${item._id}`}>
                  <button>
                    <BiSolidEditAlt />
                  </button>
                </Link>
              </td>
              <td className="pl-5">
                <button onClick={() => deleteUserDetail(item._id)}>
                  <AiFillDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
