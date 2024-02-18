import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const SpinBox = () => {
  return (
    <div className="bg-dark">
      <Spin
        indicator={
          <LoadingOutlined style={{ fontSize: 48, color: "white" }} spin />
        }
      />
    </div>
  );
};

export default SpinBox;
