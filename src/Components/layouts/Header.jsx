import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../App.css";
import { useSelector } from "react-redux";

function Header() {
  const data = useSelector((state) => state.admin.data);
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://f1-adminpage-default-rtdb.europe-west1.firebasedatabase.app/Header/Nav.json"
      )
      .then((response) => {
        const items = Object.values(response.data);
        setNavItems(items);
      });
  }, []);

  return (
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="navigation w-nav"
    >
      {data}
      <div className="navigation-wrap">
        <Link
          to="/"
          aria-current="page"
          className="logo-link w-nav-brand w--current"
        >
          <img
            src="https://cdn-3.motorsport.com/images/amp/68ey3q40/s1000/f1-abu-dhabi-gp-2017-f1-logo-6614911.jpg"
            width="108"
            alt=""
            className="logo-image"
          />
        </Link>
        <div className="menu">
          <nav role="navigation" className="navigation-items w-nav-menu">
            {navItems.map((item, index) => (
              <Link
                to={item.toLowerCase()}
                className="navigation-item w-nav-link"
                key={index}
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="menu-button w-nav-button">
            <img
              src="https://assets-global.website-files.com/65d25ec9405b7cdf530bfabd/65d25ec9405b7cdf530bfb1a_menu-icon.png"
              width="22"
              alt=""
              className="menu-icon"
            />
          </div>
        </div>
        <a
          href="mailto:mail@business.com?subject=You&#x27;ve%20got%20mail!"
          className="button cc-contact-us w-inline-block"
        >
          <div>Contact us</div>
        </a>
      </div>
    </div>
  );
}

export default Header;
