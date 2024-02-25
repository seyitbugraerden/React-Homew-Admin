import React from "react";
import "../../../Admin.css";
import { Link } from "react-router-dom";

function AdminNavbar() {
  return (
    <nav
      className="navbar navbar-fixed-top"
      style={{ backgroundColor: "#dbd8e3" }}
    >
      <div className="container-fluid">
        <div className="navbar-brand">
          <button type="button" className="btn-toggle-offcanvas">
            <i className="fa fa-bars"></i>
          </button>
          <Link to="/admin">Admin Panel</Link>
        </div>

        <div className="navbar-right">
          <div id="navbar-menu">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/" className="icon-menu">
                  <i className="fa fa-power-off"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;
