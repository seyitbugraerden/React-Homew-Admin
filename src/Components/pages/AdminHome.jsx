import React, { useRef, useState } from "react";
import AdminNavbar from "../layouts/AdminNavbar";
import AdminSidebar from "../layouts/AdminSidebar";
import AdminRightBar from "../layouts/AdminRightBar";
import { Input } from "antd";
import { useSelector } from "react-redux";
import { Button, Modal } from "antd";

function AdminHome() {
  const data = useSelector((state) => state.admin);
  //Modal Area
  const [open, setOpen] = useState(false);
  const modalText = "Your changes will be saved";
  //UseRef Area
  const valSliderTitle = useRef(null);
  const valSliderDesc = useRef(null);
  const valMainMutedTitle = useRef(null);
  const valMainTitle = useRef(null);
  const valNewsMutedtitle = useRef(null);
  const valNewsTitle = useRef(null);
  const valDownTitle = useRef(null);
  const valDownDesc = useRef(null);
  const onOk = () => {
    setOpen(false);
  };

  return (
    <>
      <AdminNavbar />
      <AdminSidebar />
      <AdminRightBar />
      <div id="main-content">
        <div className="container-fluid mt-5">
          <h5 className="mb-5">Home Page</h5>
          <strong className="mt-5">Slider Area</strong>
          <div className="row clearfix row-deck mt-3">
            <div className="col-sm-2">Slider Title</div>
            <div className="col-sm-3">
              <Input ref={valSliderTitle} placeholder="Enter New Value" />
            </div>
            <div className="col-sm-4">
              <i>{data.slider.title.content}</i>
            </div>
          </div>
          <div className="row clearfix row-deck mt-3 mb-5">
            <div className="col-sm-2">Slider Description</div>
            <div className="col-sm-3">
              <Input ref={valSliderDesc} placeholder="Enter New Value" />
            </div>
            <div className="col-sm-4">
              <i>{data.slider.desc.content}</i>
            </div>
          </div>
          <strong>Main Area</strong>
          <div className="row clearfix row-deck mt-3">
            <div className="col-sm-2">Main Muted Title</div>
            <div className="col-sm-3">
              <Input ref={valMainMutedTitle} placeholder="Enter New Value" />
            </div>
            <div className="col-sm-3">
              <i>{data.main.mutedTitle.content}</i>
            </div>
          </div>
          <div className="row clearfix row-deck mt-3 mb-5">
            <div className="col-sm-2">Main Title</div>
            <div className="col-sm-3">
              <Input ref={valMainTitle} placeholder="Enter New Value" />
            </div>
            <div className="col-sm-3">
              <i>{data.main.title.content}</i>
            </div>
          </div>
          <strong>News Area</strong>
          <div className="row clearfix row-deck mt-3">
            <div className="col-sm-2">News Muted Title</div>
            <div className="col-sm-3">
              <Input ref={valNewsMutedtitle} placeholder="Enter New Value" />
            </div>
            <div className="col-sm-3">
              <i>{data.main.mutedTitle.content}</i>
            </div>
          </div>
          <div className="row clearfix row-deck mt-3 mb-5">
            <div className="col-sm-2">New Title</div>
            <div className="col-sm-3">
              <Input ref={valNewsTitle} placeholder="Enter New Value" />
            </div>
            <div className="col-sm-3">
              <i>{data.main.title.content}</i>
            </div>
          </div>
          <strong>Down Slide Area</strong>
          <div className="row clearfix row-deck mt-3">
            <div className="col-sm-2">Down Slide Title</div>
            <div className="col-sm-3">
              <Input ref={valDownTitle} placeholder="Enter New Value" />
            </div>
            <div className="col-sm-3">
              <i>{data.subs.title.content}</i>
            </div>
          </div>
          <div className="row clearfix row-deck mt-3 mb-5">
            <div className="col-sm-2">Down Slide Description</div>
            <div className="col-sm-3">
              <Input ref={valDownDesc} placeholder="Enter New Value" />
            </div>
            <div className="col-sm-3">
              <i>{data.subs.desc.content}</i>
            </div>
          </div>

          <Button
            className="my-5"
            type="primary"
            onClick={() => {
              setOpen(true);
            }}
          >
            Save
          </Button>
          <Modal
            title="Are You Sure ?"
            open={open}
            onOk={() => {
              onOk();
            }}
            onCancel={() => {
              setOpen(false);
            }}
          >
            <p>{modalText}</p>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default AdminHome;
