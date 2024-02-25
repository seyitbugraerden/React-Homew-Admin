import React from "react";
// import SpinBox from "./Components/SpinBox";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/pages/User/Home";
import Admin from "./Components/pages/Admin/Admin";
import AdminPage from "./Components/pages/Admin/AdminPage";
import Page from "./Components/pages/User/Page";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/:id" element={<Page />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/:id" element={<AdminPage />} />
      </Routes>
      {/* <SpinBox /> */}
    </>
  );
}

export default App;
