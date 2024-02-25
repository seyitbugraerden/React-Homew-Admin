import React, { useRef, useState } from "react";
import AdminNavbar from "../layouts/AdminNavbar";
import AdminSidebar from "../layouts/AdminSidebar";
import AdminRightBar from "../layouts/AdminRightBar";

import AdminInputArea from "../layouts/AdminInputArea";

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
