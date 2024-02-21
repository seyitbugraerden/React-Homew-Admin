import React from "react";
import { useSelector } from "react-redux";

function AdminSlider() {
  const data = useSelector((state) => state.admin);
  return (
    <>
      <div className="Carts">
        <div className="card">
          <div className="card-title">
            <strong>Slider Background</strong>
          </div>
          <img src={data.slider.img.content} alt="" height="50px" />
          <input type="text" />
          <button>Change</button>
        </div>
        <div className="card">
          <div className="card-title">Slider Main Title</div>
          <strong>{data.slider.title.content}</strong>
          <input type="text" />
          <button>Change</button>
        </div>
        <div className="card">
          <div className="card-title">Slider Main Description</div>
          <strong style={{ maxWidth: "300px" }}>
            {data.slider.desc.content}
          </strong>
          <input type="text" />
          <button>Change</button>
        </div>
      </div>
      <div className="Carts">
        <div className="card">
          <div className="card-title">
            <strong>Slider Background</strong>
          </div>
          <img src={data.slider.img.content} alt="" height="50px" />
          <input type="text" />
          <button>Change</button>
        </div>
        <div className="card">
          <div className="card-title">Slider Main Title</div>
          <strong>{data.slider.title.content}</strong>
          <input type="text" />
          <button>Change</button>
        </div>
        <div className="card">
          <div className="card-title">Slider Main Description</div>
          <strong style={{ maxWidth: "300px" }}>
            {data.slider.desc.content}
          </strong>
          <input type="text" />
          <button>Change</button>
        </div>
      </div>
    </>
  );
}

export default AdminSlider;
