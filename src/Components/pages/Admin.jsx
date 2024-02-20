import React, { useState } from "react";
import { MenuFoldOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import "../../Admin.css";

function Admin() {
  const [isClicked, setIsClicked] = useState(false);
  const [isAvatarClicked, setIsAvatarClicked] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <div className="admin">
        <div className={`admin-scroll ${isClicked ? "active" : ""}`}>
          <h2>Lorem</h2>
          <h2>Lorem</h2>
          <h2>Lorem</h2>
          <h2>Lorem</h2>
          <h2>Lorem</h2>
          <h2>Lorem</h2>
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
          <div className="Carts">
            <div className="card">
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button>Change</button>{" "}
            </div>
            <div className="card">
              <div className="card-title">Lorem, ipsum.</div>
              <strong>50%</strong>
            </div>
            <div className="card">
              <div className="card-title">Lorem, ipsum.</div>
              <strong>50%</strong>
            </div>
          </div>
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
