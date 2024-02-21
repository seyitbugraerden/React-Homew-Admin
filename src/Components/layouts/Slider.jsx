import React from "react";
import { useSelector } from "react-redux";

function Slider() {
  const slider = useSelector((state) => state.admin.slider);
  const main = useSelector((state) => state.admin.main);
  return (
    <div className="section cc-store-home-wrap">
      <div
        className="intro-header"
        style={{
          backgroundImage: `linear-gradient(transparent, rgb(0,0,0,.5)), url(${slider.img.content})`,
          backgroundPosition: "center",
          color: "white",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundOrigin: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="intro-content cc-homepage">
          <div className="intro-text">
            <div className="heading-jumbo">{slider.title.content}</div>
            <div className="paragraph-bigger cc-bigger-white-light">
              {slider.desc.content}
              <br />
            </div>
          </div>
          <a
            href="/about"
            className="button cc-jumbo-button cc-jumbo-white w-inline-block"
            title="Learn More"
          >
            <div>Learn More</div>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="motto-wrap">
          <div className="label cc-light">{main.mutedTitle.content}</div>
          <div className="heading-jumbo-small">
            {main.title.content}
            <br />
          </div>
        </div>
        <div className="divider"></div>
        <div className="home-content-wrap">
          <div className="w-layout-grid about-grid">
            <div id="w-node-_86e64837-0616-515b-4568-76c147234d34-530bfaf3">
              <div className="home-section-wrap">
                <div className="label cc-light">
                  {main.partOne.mutedTitle.content}
                </div>
                <h2 className="section-heading">
                  {main.partOne.title.content}
                </h2>
                <p className="paragraph-light">{main.partOne.desc.content}</p>
              </div>
              <a
                href="/about"
                className="button w-inline-block"
                title="Learn More"
              >
                <div>Learn More</div>
              </a>
            </div>
            <img
              src={main.partOne.img.content}
              id="w-node-_86e64837-0616-515b-4568-76c147234d3f-530bfaf3"
              alt=""
            />
          </div>
          <div className="w-layout-grid about-grid cc-about-2">
            <div id="w-node-_86e64837-0616-515b-4568-76c147234d41-530bfaf3">
              <div className="home-section-wrap">
                <div className="label cc-light">
                  {main.partSec.mutedTitle.content}
                </div>
                <h2 className="section-heading">
                  {main.partSec.title.content}
                </h2>
                <p className="paragraph-light">{main.partSec.desc.content}</p>
              </div>
              <a
                href="/team"
                className="button w-inline-block"
                title="Learn More"
              >
                <div>Learn More</div>
              </a>
            </div>
            <img
              src={main.partSec.img.content}
              id="w-node-_86e64837-0616-515b-4568-76c147234d4c-530bfaf3"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
