import React from "react";
import AdminNavbar from "../layouts/AdminNavbar";
import AdminSidebar from "../layouts/AdminSidebar";
import AdminRightBar from "../layouts/AdminRightBar";
import AdminMain from "../layouts/AdminMain";
import "../../Admin.css";

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
