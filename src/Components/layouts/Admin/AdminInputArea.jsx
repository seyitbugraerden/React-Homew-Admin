import { Input } from "antd";
import React from "react";
import { Button, Modal } from "antd";

function AdminInputArea() {
  return (
    <div id="main-content">
      <div className="container-fluid mt-5">
        <h5 className="mb-5">Home Page</h5>
        <strong className="mt-5">Slider Area</strong>
        <div className="row clearfix row-deck mt-3">
          <div className="col-sm-2">Slider Title</div>
          <div className="col-sm-3">
            <Input placeholder="Enter New Value" />
          </div>
          <div className="col-sm-4">
            <i></i>
          </div>
        </div>
        <div className="row clearfix row-deck mt-3 mb-5">
          <div className="col-sm-2">Slider Description</div>
          <div className="col-sm-3">
            <Input placeholder="Enter New Value" />
          </div>
          <div className="col-sm-4">
            <i></i>
          </div>
        </div>
        <strong>Main Area</strong>
        <div className="row clearfix row-deck mt-3">
          <div className="col-sm-2">Main Muted Title</div>
          <div className="col-sm-3">
            <Input placeholder="Enter New Value" />
          </div>
          <div className="col-sm-3">
            <i></i>
          </div>
        </div>
        <div className="row clearfix row-deck mt-3 mb-5">
          <div className="col-sm-2">Main Title</div>
          <div className="col-sm-3">
            <Input placeholder="Enter New Value" />
          </div>
          <div className="col-sm-3">
            <i></i>
          </div>
        </div>
        <strong>News Area</strong>
        <div className="row clearfix row-deck mt-3">
          <div className="col-sm-2">News Muted Title</div>
          <div className="col-sm-3">
            <Input placeholder="Enter New Value" />
          </div>
          <div className="col-sm-3">
            <i></i>
          </div>
        </div>
        <div className="row clearfix row-deck mt-3 mb-5">
          <div className="col-sm-2">New Title</div>
          <div className="col-sm-3">
            <Input placeholder="Enter New Value" />
          </div>
          <div className="col-sm-3">
            <i></i>
          </div>
        </div>
        <strong>Down Slide Area</strong>
        <div className="row clearfix row-deck mt-3">
          <div className="col-sm-2">Down Slide Title</div>
          <div className="col-sm-3">
            <Input placeholder="Enter New Value" />
          </div>
          <div className="col-sm-3">
            <i></i>
          </div>
        </div>
        <div className="row clearfix row-deck mt-3 mb-5">
          <div className="col-sm-2">Down Slide Description</div>
          <div className="col-sm-3">
            <Input placeholder="Enter New Value" />
          </div>
          <div className="col-sm-3">
            <i></i>
          </div>
        </div>

        <Button className="my-5" type="primary">
          Save
        </Button>
        <Modal title="Are You Sure ?">
          <p></p>
        </Modal>
      </div>
    </div>
  );
}

export default AdminInputArea;
