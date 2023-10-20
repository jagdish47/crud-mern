import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddUser from "./components/AddUser";
import AllUser from "./components/AllUser";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* The Navbar component is placed outside of the Routes, so it's displayed on all pages. */}
        <Navbar />
        <Routes>
          {/* Define routes and the components to render for each route. */}
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<AllUser />} />
          <Route path="/add" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
