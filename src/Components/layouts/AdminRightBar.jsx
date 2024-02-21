import React from "react";

function AdminRightBar() {
  return (
    <div className="right_icon_bar" style={{ backgroundColor: "#dbd8e3" }}>
      <ul>
        <li>
          <a>
            <i className="fa fa-envelope"></i>
          </a>
        </li>
        <li>
          <a>
            <i className="fa fa-comments"></i>
          </a>
        </li>
        <li>
          <a>
            <i className="fa fa-calendar"></i>
          </a>
        </li>
        <li>
          <a>
            <i className="fa fa-folder"></i>
          </a>
        </li>
        <li>
          <a>
            <i className="fa fa-id-card"></i>
          </a>
        </li>
        <li>
          <a>
            <i className="fa fa-globe"></i>
          </a>
        </li>
        <li>
          <a>
            <i className="fa fa-plus"></i>
          </a>
        </li>
        <li>
          <a className="right_icon_btn">
            <i className="fa fa-angle-right"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default AdminRightBar;
