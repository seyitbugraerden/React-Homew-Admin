import React from "react";
// import SpinBox from "./Components/SpinBox";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/pages/Home";
import Admin from "./Components/pages/Admin";
import AdminPage from "./Components/pages/AdminPage";
import Page from "./Components/pages/Page";
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
