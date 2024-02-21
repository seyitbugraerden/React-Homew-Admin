import React from "react";

function AdminMain() {
  return (
    <div id="main-content">
      <div className="container-fluid">
        <div className="row clearfix row-deck mt-5">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card bg-info">
              <div className="body">
                <div className="p-15 text-light">
                  <h3>2,120</h3>
                  <span>
                    Page Views{" "}
                    <span className="font-12">
                      <i className="fa fa-level-down"></i> 7%
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card bg-dark">
              <div className="body">
                <div className="p-15 text-light">
                  <h3>2,120</h3>
                  <span>
                    Bounce rate{" "}
                    <span className="font-12">
                      <i className="fa fa-level-up"></i> 11%
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card bg-info">
              <div className="body">
                <div className="p-15 text-light">
                  <h3>2,120</h3>
                  <span>
                    Page Views{" "}
                    <span className="font-12">
                      <i className="fa fa-level-down"></i> 7%
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card bg-dark">
              <div className="body">
                <div className="p-15 text-light">
                  <h3>2,120</h3>
                  <span>
                    Bounce rate{" "}
                    <span className="font-12">
                      <i className="fa fa-level-up"></i> 11%
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminMain;
