import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img
            className="h-14 hover:scale-105 transition duration-150 ease-in-out"
            src="https://share.ftimg.com/aff/flamingtext/2019/03/28/flamingtext__26068056772646949.png"
            alt="logo"
          />
        </Link>
        <ul className="flex space-x-5">
          <li className="text-white hover:scale-110 transition duration-150 ease-in-out">
            <Link to="/">HOME</Link>
          </li>
          <li className="text-white hover:scale-110 transition duration-150 ease-in-out">
            <Link to="/all">ALL USER</Link>
          </li>
          <li className="text-white hover:scale-110 transition duration-150 ease-in-out">
            <Link to="/add">ADD USER</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
