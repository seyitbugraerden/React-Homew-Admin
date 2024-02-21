import React from "react";
import "../../Admin.css";

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
          <a>Admin Panel</a>
        </div>

        <div className="navbar-right">
          <form id="navbar-search" className="navbar-form search-form">
            <button type="button" className="btn btn-default">
              <i className="icon-magnifier"></i>
            </button>
          </form>

          <div id="navbar-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a className="dropdown-toggle icon-menu" data-toggle="dropdown">
                  <i className="fa fa-bell"></i>
                  <span className="notification-dot"></span>
                </a>
                <ul className="dropdown-menu notifications">
                  <li className="header">
                    <strong>You have 4 new Notifications</strong>
                  </li>
                  <li>
                    <a>
                      <div className="media">
                        <div className="media-left">
                          <i className="icon-info text-warning"></i>
                        </div>
                        <div className="media-body">
                          <p className="text">
                            Campaign <strong>Holiday Sale</strong> is nearly
                            reach budget limit.
                          </p>
                          <span className="timestamp">10:00 AM Today</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a>
                      <div className="media">
                        <div className="media-left">
                          <i className="icon-like text-success"></i>
                        </div>
                        <div className="media-body">
                          <p className="text">
                            Your New Campaign <strong>Holiday Sale</strong> is
                            approved.
                          </p>
                          <span className="timestamp">11:30 AM Today</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a>
                      <div className="media">
                        <div className="media-left">
                          <i className="icon-pie-chart text-info"></i>
                        </div>
                        <div className="media-body">
                          <p className="text">
                            Website visits from Twitter is 27% higher than last
                            week.
                          </p>
                          <span className="timestamp">04:00 PM Today</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a>
                      <div className="media">
                        <div className="media-left">
                          <i className="icon-info text-danger"></i>
                        </div>
                        <div className="media-body">
                          <p className="text">
                            Error on website analytics configurations
                          </p>
                          <span className="timestamp">Yesterday</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="footer">
                    <a className="more">See all notifications</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="icon-menu">
                  <i className="fa fa-power-off"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;
