import React from "react";
import { useSelector } from "react-redux";

function Slider() {
  const data = useSelector((state) => state.admin);
  return (
    <div className="section cc-store-home-wrap">
      <div
        className="intro-header"
        style={{
          backgroundImage: `linear-gradient(transparent, rgb(0,0,0,.5)), url(${data.sliderImg.content})`,
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
            <div className="heading-jumbo">{data.sliderTitle.content}</div>
            <div className="paragraph-bigger cc-bigger-white-light">
              {data.sliderDesc.content}
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
          <div className="label cc-light">{data.mainMutedTitle.content}</div>
          <div className="heading-jumbo-small">
            {data.mainTitle.content}
            <br />
          </div>
        </div>
        <div className="divider"></div>
        <div className="home-content-wrap">
          <div className="w-layout-grid about-grid">
            <div id="w-node-_86e64837-0616-515b-4568-76c147234d34-530bfaf3">
              <div className="home-section-wrap">
                <div className="label cc-light">
                  {data.itemOneMuted.content}
                </div>
                <h2 className="section-heading">{data.itemOneTitle.content}</h2>
                <p className="paragraph-light">{data.itemOneDesc.content}</p>
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
              src={data.itemOneImg.content}
              id="w-node-_86e64837-0616-515b-4568-76c147234d3f-530bfaf3"
              alt=""
            />
          </div>
          <div className="w-layout-grid about-grid cc-about-2">
            <div id="w-node-_86e64837-0616-515b-4568-76c147234d41-530bfaf3">
              <div className="home-section-wrap">
                <div className="label cc-light">
                  {data.itemSecMuted.content}
                </div>
                <h2 className="section-heading">{data.itemSecTitle.content}</h2>
                <p className="paragraph-light">{data.itemSecDesc.content}</p>
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
              src={data.itemSecImg.content}
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
