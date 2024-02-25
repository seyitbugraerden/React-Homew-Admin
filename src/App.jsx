import React from "react";
// import SpinBox from "./Components/SpinBox";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/pages/Home";
import AdminPage from "./Components/pages/Admin";
import AdminHome from "./Components/pages/AdminHome";
import Page from "./Components/pages/Page";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/:id" element={<Page />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/:id" element={<AdminHome />} />
      </Routes>
      {/* <SpinBox /> */}
    </>
  );
}

export default App;
