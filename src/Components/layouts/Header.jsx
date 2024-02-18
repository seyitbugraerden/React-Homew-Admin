import React, { useState } from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import { CaretLeftOutlined } from "@ant-design/icons";

import "../../App.css";

function Header() {
  const [imgBox, setImgBox] = useState([
    "https://picsum.photos/1920/800",
    "https://picsum.photos/1920/802",
    "https://picsum.photos/1920/801",
  ]);
  const [imgIndex, setImgIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleNextImage = () => {
    setIsFadingOut(true);
    setImgIndex(imgIndex + 1);
  };

  const handlePreviousImage = () => {
    setIsFadingOut(true);
    setImgIndex(imgIndex - 1);
  };

  return (
    <header>
      <img
        src={imgBox[imgIndex]}
        alt="HeaderImg"
        className={`image ${isFadingOut ? "fade-out" : ""}`}
        onAnimationEnd={() => setIsFadingOut(false)}
      />
      <div className="button-merge">
        <div className="button-area">
          <button
            onClick={() => {
              handlePreviousImage();
            }}
            className={imgIndex === 0 ? "d-none" : ""}
          >
            <CaretLeftOutlined />
          </button>
          <div>
            <h2>Leading with Integrity, Succeeding with Purpose.</h2>
          </div>
          <button
            onClick={() => {
              handleNextImage();
            }}
            className={imgIndex === imgBox.length - 1 ? "d-none" : ""}
          >
            <CaretRightOutlined />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
