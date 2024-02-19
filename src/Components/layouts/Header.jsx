import React from "react";

import "../../App.css";

function Header() {
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
        <a
          href="/"
          aria-current="page"
          className="logo-link w-nav-brand w--current"
        >
          <img
            src="https://cdn-3.motorsport.com/images/amp/68ey3q40/s1000/f1-abu-dhabi-gp-2017-f1-logo-6614911.jpg"
            width="108"
            alt=""
            className="logo-image"
          />
        </a>
        <div className="menu">
          <nav role="navigation" className="navigation-items w-nav-menu">
            <a href="/about" className="navigation-item w-nav-link">
              About
            </a>
            <a href="/projects" className="navigation-item w-nav-link">
              Work
            </a>
            <a href="/team" className="navigation-item w-nav-link">
              team
            </a>
            <a href="/blog" className="navigation-item w-nav-link">
              Blog
            </a>
            <a href="/contact" className="navigation-item w-nav-link">
              Contact
            </a>
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
