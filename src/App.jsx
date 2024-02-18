import React from "react";
// import SpinBox from "./Components/SpinBox";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/pages/Home";
import AdminPage from "./Components/pages/Admin";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      {/* <SpinBox /> */}
    </>
  );
}

export default App;
