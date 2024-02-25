import React from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import { useSelector } from "react-redux";

function Header() {
  const navItem = useSelector((state) => state.admin.navbarItems);
  const logo = useSelector((state) => state.admin.logo.content);
  const headerButton = useSelector((state) => state.admin.headerButton.content);

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
      <div className="navigation-wrap">
        <Link
          to="/"
          aria-current="page"
          className="logo-link w-nav-brand w--current"
        >
          <img src={logo} width="108" alt="" className="logo-image" />
        </Link>
        <div className="menu">
          <nav role="navigation" className="navigation-items w-nav-menu">
            {navItem.map((item, index) => (
              <Link
                to={`/${item.content.toLowerCase()}`}
                className="navigation-item w-nav-link"
                key={index}
                title={item.content}
              >
                {item.content}
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
          title="Mail"
          href="mailto:mail@business.com?subject=You&#x27;ve%20got%20mail!"
          className="button cc-contact-us w-inline-block"
        >
          <div>{headerButton}</div>
        </a>
      </div>
    </div>
  );
}

export default Header;
