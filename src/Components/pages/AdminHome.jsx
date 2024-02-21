import React from "react";
import AdminNavbar from "../layouts/AdminNavbar";
import AdminSidebar from "../layouts/AdminSidebar";
import AdminRightBar from "../layouts/AdminRightBar";
import { Input } from "antd";

function AdminHome() {
  return (
    <>
      <AdminNavbar />
      <AdminSidebar />
      <AdminRightBar />
      <div id="main-content">
        <div class="container-fluid mt-5">
          <h5 className="mb-5">Home Page</h5>
          <strong className="mt-5">Slider Area</strong>
          <div class="row clearfix row-deck mt-3">
            <div class="col-sm-2">Slider Title</div>
            <div class="col-sm-3">
              <Input placeholder="Enter New Value" />
            </div>
          </div>
          <div class="row clearfix row-deck mt-3 mb-5">
            <div class="col-sm-2">Slider Description</div>
            <div class="col-sm-3">
              <Input placeholder="Enter New Value" />
            </div>
          </div>
          <strong>Main Area</strong>
          <div class="row clearfix row-deck mt-3">
            <div class="col-sm-2">Main Muted Title</div>
            <div class="col-sm-3">
              <Input placeholder="Enter New Value" />
            </div>
          </div>
          <div class="row clearfix row-deck mt-3 mb-5">
            <div class="col-sm-2">Main Title</div>
            <div class="col-sm-3">
              <Input placeholder="Enter New Value" />
            </div>
          </div>
          <strong>News Area</strong>
          <div class="row clearfix row-deck mt-3">
            <div class="col-sm-2">News Muted Title</div>
            <div class="col-sm-3">
              <Input placeholder="Enter New Value" />
            </div>
          </div>
          <div class="row clearfix row-deck mt-3 mb-5">
            <div class="col-sm-2">New Title</div>
            <div class="col-sm-3">
              <Input placeholder="Enter New Value" />
            </div>
          </div>
          <strong>Down Slide Area</strong>
          <div class="row clearfix row-deck mt-3">
            <div class="col-sm-2">Down Slide Title</div>
            <div class="col-sm-3">
              <Input placeholder="Enter New Value" />
            </div>
          </div>
          <div class="row clearfix row-deck mt-3">
            <div class="col-sm-2">Down Slide Description</div>
            <div class="col-sm-3">
              <Input placeholder="Enter New Value" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminHome;
