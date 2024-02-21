import React, { useState } from "react";
import { MenuFoldOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import "../../Admin.css";
import { useSelector } from "react-redux";
import AdminHeader from "../layouts/AdminHeader";

function Admin() {
  const data = useSelector((state) => state.admin);
  const [isClicked, setIsClicked] = useState(false);
  const [isAvatarClicked, setIsAvatarClicked] = useState(false);

  return (
    <>
      <div className="admin">
        <div className={`admin-scroll ${isClicked ? "active" : ""}`}>
          <div>
            <h5>Header</h5>
            <h5>Slider</h5>
            <h5>Main</h5>
            <h5>Footer</h5>
          </div>
        </div>
        <div className="admin-nav">
          <div className="admin-nav-area">
            <MenuFoldOutlined
              onClick={() => {
                setIsClicked(!isClicked);
              }}
            />
            <Avatar
              shape="square"
              size={30}
              icon={<UserOutlined />}
              onClick={() => setIsAvatarClicked(!isAvatarClicked)}
            />
          </div>
          <AdminHeader />
        </div>
        <div className={`avatar-nav ${isAvatarClicked ? "active" : ""}`}>
          <h2>Lorem</h2>
          <h2>Lorem</h2>
          <h2>Lorem</h2>
          <h2>Lorem</h2>
          <h2>Lorem</h2>
          <h2>Lorem</h2>
        </div>
      </div>
    </>
  );
}

export default Admin;
