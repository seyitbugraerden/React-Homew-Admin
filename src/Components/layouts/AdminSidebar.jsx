import React from "react";

function AdminSidebar() {
  return (
    <div id="left-sidebar" className="sidebar">
      <button type="button" className="btn-toggle-offcanvas">
        <i className="fa fa-arrow-left"></i>
      </button>
      <div className="sidebar-scroll">
        <div className="user-account">
          <img
            src="assets/images/user.png"
            className="rounded-circle user-photo"
            alt="User Profile Picture"
          />
          <div className="dropdown">
            <span>Welcome,</span>
            <a className="dropdown-toggle user-name" data-toggle="dropdown">
              <strong>Pamela Petrus</strong>
            </a>
            <ul className="dropdown-menu dropdown-menu-right account">
              <li>
                <a>
                  <i className="icon-user"></i>My Profile
                </a>
              </li>
              <li>
                <a>
                  <i className="icon-envelope-open"></i>Messages
                </a>
              </li>
              <li>
                <a>
                  <i className="icon-settings"></i>Settings
                </a>
              </li>
              <li className="divider"></li>
              <li>
                <a href="page-login.html">
                  <i className="icon-power"></i>Logout
                </a>
              </li>
            </ul>
          </div>
          <hr />
          <ul className="row list-unstyled">
            <li className="col-4">
              <small>Sales</small>
              <h6>561</h6>
            </li>
            <li className="col-4">
              <small>Order</small>
              <h6>920</h6>
            </li>
            <li className="col-4">
              <small>Revenue</small>
              <h6>$23B</h6>
            </li>
          </ul>
        </div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#menu">
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#Chat">
              <i className="icon-book-open"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#setting">
              <i className="icon-settings"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#question">
              <i className="icon-question"></i>
            </a>
          </li>
        </ul>

        <div className="tab-content padding-0">
          <div className="tab-pane active" id="menu">
            <nav id="left-sidebar-nav" className="sidebar-nav">
              <ul id="main-menu" className="metismenu li_animation_delay">
                <li className="active">
                  <a href="#Dashboard" className="has-arrow">
                    <i className="fa fa-dashboard"></i>
                    <span>Dashboard</span>
                  </a>
                  <ul>
                    <li>
                      <a>Analytical</a>
                    </li>
                    <li>
                      <a>Analytical H-Menu</a>
                    </li>
                    <li>
                      <a>IoT Dashboard</a>
                    </li>
                    <li className="active">
                      <a>Demographic</a>
                    </li>
                    <li>
                      <a>Project Board</a>
                    </li>
                    <li>
                      <a>Crypto Dashboard</a>
                    </li>
                    <li>
                      <a>eCommerce</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
