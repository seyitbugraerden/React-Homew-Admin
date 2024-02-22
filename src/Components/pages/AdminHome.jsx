import React, { useState } from "react";
import AdminNavbar from "../layouts/AdminNavbar";
import AdminSidebar from "../layouts/AdminSidebar";
import AdminRightBar from "../layouts/AdminRightBar";
import { Input } from "antd";
import { useSelector } from "react-redux";
import { Button, Modal } from "antd";
import axios from "axios";

function AdminHome() {
  const data = useSelector((state) => state.admin);
  const [valSliderTitle, setValSliderTitle] = useState(
    data.slider.title.content
  );
  const [valSliderDesc, setvalSliderDesc] = useState(data.slider.desc.content);
  const [valMainMutedTitle, setvalMainMutedTitle] = useState(
    data.main.mutedTitle.content
  );
  const [valMainTitle, setvalMainTitle] = useState(data.main.title.content);
  const [valNewsMutedtitle, setValNewsMutedtitle] = useState(
    data.news.mutedTitle.content
  );
  const [valNewsTitle, setValNewsTitle] = useState(data.news.title.content);
  const [valDownTitle, setValDownTitle] = useState(data.subs.title.content);
  const [valDownDesc, setValDownDesc] = useState(data.subs.desc.content);
  //Modal Area
  const [open, setOpen] = useState(false);
  const modalText = "Your changes will be saved";

  const onOk = () => {
    setOpen(false);
    const updatedData = {
      content: "New Contact Information",
    };
    axios
      .put("http://localhost:3000/headerButton/content.json", updatedData)
      .then((response) => {
        console.log("Veri başarıyla güncellendi:", response.data);
      })
      .catch((error) => {
        console.error("Hata oluştu:", error);
      });
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
              <Input
                placeholder="Enter New Value"
                value={valSliderTitle}
                onChange={(e) => {
                  setValSliderTitle(e.target.value);
                }}
              />
            </div>
            <div className="col-sm-4">
              <i>{data.slider.title.content}</i>
            </div>
          </div>
          <div className="row clearfix row-deck mt-3 mb-5">
            <div className="col-sm-2">Slider Description</div>
            <div className="col-sm-3">
              <Input
                value={valSliderDesc}
                placeholder="Enter New Value"
                onChange={(e) => {
                  setvalSliderDesc(e.target.value);
                }}
              />
            </div>
            <div className="col-sm-4">
              <i>{data.slider.desc.content}</i>
            </div>
          </div>
          <strong>Main Area</strong>
          <div className="row clearfix row-deck mt-3">
            <div className="col-sm-2">Main Muted Title</div>
            <div className="col-sm-3">
              <Input
                value={valMainMutedTitle}
                onChange={(e) => {
                  setvalMainMutedTitle(e.target.value);
                }}
                placeholder="Enter New Value"
              />
            </div>
            <div className="col-sm-3">
              <i>{data.main.mutedTitle.content}</i>
            </div>
          </div>
          <div className="row clearfix row-deck mt-3 mb-5">
            <div className="col-sm-2">Main Title</div>
            <div className="col-sm-3">
              <Input
                value={valMainTitle}
                onChange={(e) => {
                  setvalMainTitle(e.target.value);
                }}
                placeholder="Enter New Value"
              />
            </div>
            <div className="col-sm-3">
              <i>{data.main.title.content}</i>
            </div>
          </div>
          <strong>News Area</strong>
          <div className="row clearfix row-deck mt-3">
            <div className="col-sm-2">News Muted Title</div>
            <div className="col-sm-3">
              <Input
                value={valNewsMutedtitle}
                onChange={(e) => {
                  setValNewsMutedtitle(e.target.value);
                }}
                placeholder="Enter New Value"
              />
            </div>
            <div className="col-sm-3">
              <i>{data.main.mutedTitle.content}</i>
            </div>
          </div>
          <div className="row clearfix row-deck mt-3 mb-5">
            <div className="col-sm-2">New Title</div>
            <div className="col-sm-3">
              <Input
                value={valNewsTitle}
                onChange={(e) => {
                  setValNewsTitle(e.target.value);
                }}
                placeholder="Enter New Value"
              />
            </div>
            <div className="col-sm-3">
              <i>{data.main.title.content}</i>
            </div>
          </div>
          <strong>Down Slide Area</strong>
          <div className="row clearfix row-deck mt-3">
            <div className="col-sm-2">Down Slide Title</div>
            <div className="col-sm-3">
              <Input
                value={valDownTitle}
                onChange={(e) => {
                  setValDownTitle(e.target.value);
                }}
                placeholder="Enter New Value"
              />
            </div>
            <div className="col-sm-3">
              <i>{data.subs.title.content}</i>
            </div>
          </div>
          <div className="row clearfix row-deck mt-3 mb-5">
            <div className="col-sm-2">Down Slide Description</div>
            <div className="col-sm-3">
              <Input
                value={valDownDesc}
                onChange={(e) => {
                  setValDownDesc(e.target.value);
                }}
                placeholder="Enter New Value"
              />
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
