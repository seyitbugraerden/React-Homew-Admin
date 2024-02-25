import React from "react";
import AdminNavbar from "../../layouts/Admin/AdminNavbar";
import AdminSidebar from "../../layouts/Admin/AdminSidebar";
import AdminRightBar from "../../layouts/Admin/AdminRightBar";
import AdminMain from "../../layouts/Admin/AdminMain";
import "../../../Admin.css";

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
