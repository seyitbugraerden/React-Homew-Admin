import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function AdminHeader() {
  const data = useSelector((state) => state.admin);
  const [value, setValue] = useState("");

  const handleImgChange = () => {
    axios.put("http://localhost:3000/logo", {
      id: data.logo.id,
      content: "New",
    });
  };
  const handleDeleteNav = (id) => {
    console.log(id);
    axios.delete(`http://localhost:3000/navbarItems/${id}`);
  };
  const handleAddNav = () => {
    axios.post("http://localhost:3000/navbarItems", {
      id: value.toUpperCase,
      content: value,
    });
  };
  const handleRight = () => {
    axios.put("http://localhost:3000/headerButton", {
      id: data.headerButton.id,
      content: value,
    });
  };
  return (
    <div className="Carts">
      <div className="card">
        <div className="card-title">
          <strong>Brand Logo</strong>
        </div>
        <img src={data.logo.content} alt="" height="50px" />
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button onClick={handleImgChange}>Change</button>
      </div>
      <div className="card">
        <div className="card-title">
          <ul>
            {data.navbarItems.map((item) => (
              <li key={item.id}>
                <strong>{item.content}</strong>
                <button
                  onClick={() => {
                    handleDeleteNav(item.id);
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            handleAddNav();
          }}
        >
          Add
        </button>
      </div>
      <div className="card">
        <div className="card-title">Navbar Right Button</div>
        <strong>{data.headerButton.content}</strong>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            handleRight();
          }}
        >
          Change
        </button>
      </div>
    </div>
  );
}

export default AdminHeader;
