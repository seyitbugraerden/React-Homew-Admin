import React from "react";
import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div id="left-sidebar" className="sidebar">
      <button type="button" className="btn-toggle-offcanvas">
        <i className="fa fa-arrow-left"></i>
      </button>
      <div className="sidebar-scroll">
        <div className="user-account">
          <img
            src="https://tommystinctures.com/wp-content/uploads/2020/10/avatar-icon-placeholder-1577909.jpg"
            className="rounded-circle user-photo"
            alt="User Profile Picture"
          />
          <span>Welcome,</span>
          <a className="user-name" data-toggle="dropdown">
            <strong>Dear Admin</strong>
          </a>
          <hr />
          <ul className="row list-unstyled">
            <li className="col-4">
              <small>Visit</small>
              <h6>520</h6>
            </li>
            <li className="col-4">
              <small>Online</small>
              <h6>20</h6>
            </li>
            <li className="col-4">
              <small>Left Day</small>
              <h6>236</h6>
            </li>
          </ul>
        </div>
        <ul className="nav nav-tabs text-light   px-3 py-2">Edit Your Page</ul>

        <div className="tab-content padding-0">
          <div className="tab-pane active" id="menu">
            <nav id="left-sidebar-nav" className="sidebar-nav">
              <ul id="main-menu" className="metismenu li_animation_delay">
                <li className="active">
                  <a className="has-arrow">
                    <i className="fa fa-dashboard"></i>
                    <span>Dashboard</span>
                  </a>
                  <ul>
                    <li>
                      <a Link="/homepage">Home Page</a>
                    </li>
                    <li>
                      <a>Schedule</a>
                    </li>
                    <li>
                      <a>Teams</a>
                    </li>
                    <li>
                      <a>Subscription</a>
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
