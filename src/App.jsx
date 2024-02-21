import React from "react";
// import SpinBox from "./Components/SpinBox";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/pages/Home";
import AdminPage from "./Components/pages/Admin";
import AdminHome from "./Components/pages/AdminHome";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/home" element={<AdminHome />} />
      </Routes>
      {/* <SpinBox /> */}
    </>
  );
}

export default App;
