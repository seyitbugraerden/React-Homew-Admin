import React from "react";
import AdminNavbar from "../../layouts/Admin/AdminNavbar";
import AdminSidebar from "../../layouts/Admin/AdminSidebar";
import AdminRightBar from "../../layouts/Admin/AdminRightBar";
import AdminInputArea from "../../layouts/Admin/AdminInputArea";

function AdminHome() {
  return (
    <>
      <AdminNavbar />
      <AdminSidebar />
      <AdminRightBar />
      <AdminInputArea />
    </>
  );
}

export default AdminHome;
