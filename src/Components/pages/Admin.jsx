import React from "react";
import "../../Admin.css";
import AdminNavbar from "../layouts/AdminNavbar";
import AdminSidebar from "../layouts/AdminSidebar";
import AdminRightBar from "../layouts/AdminRightBar";
import AdminMain from "../layouts/AdminMain";

function Admin() {
  return (
    <>
      <AdminNavbar />
      <AdminSidebar />
      <AdminRightBar />
      <AdminMain />
    </>
  );
}

export default Admin;
