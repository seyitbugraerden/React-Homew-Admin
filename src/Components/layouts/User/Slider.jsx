import React from "react";
import { useSelector } from "react-redux";

function Slider() {
  const bannerImg = useSelector((state) => state.admin.sliderImg.content);
  const sliderTitle = useSelector((state) => state.admin.sliderTitle.content);
  const sliderDesc = useSelector((state) => state.admin.sliderDesc.content);
  const mainMutedTitle = useSelector(
    (state) => state.admin.mainMutedTitle.content
  );
  const mainTitle = useSelector((state) => state.admin.mainTitle.content);
  const itemOneMuted = useSelector((state) => state.admin.itemOneMuted.content);
  const itemOneTitle = useSelector((state) => state.admin.itemOneTitle.content);
  const itemOneDesc = useSelector((state) => state.admin.itemOneDesc.content);
  const itemOneImg = useSelector((state) => state.admin.itemOneImg.content);
  const itemSecMuted = useSelector((state) => state.admin.itemSecMuted.content);
  const itemSecTitle = useSelector((state) => state.admin.itemSecTitle.content);
  const itemSecDesc = useSelector((state) => state.admin.itemSecDesc.content);
  const itemSecImg = useSelector((state) => state.admin.itemSecImg.content);
  return (
    <div className="section cc-store-home-wrap">
      <div
        className="intro-header"
        style={{
          backgroundImage: `linear-gradient(transparent, rgb(0,0,0,.5)), url(${bannerImg})`,
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
            <div className="heading-jumbo">{sliderTitle}</div>
            <div className="paragraph-bigger cc-bigger-white-light">
              {sliderDesc}
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
          <div className="label cc-light">{mainMutedTitle}</div>
          <div className="heading-jumbo-small">
            {mainTitle}
            <br />
          </div>
        </div>
        <div className="divider"></div>
        <div className="home-content-wrap">
          <div className="w-layout-grid about-grid">
            <div id="w-node-_86e64837-0616-515b-4568-76c147234d34-530bfaf3">
              <div className="home-section-wrap">
                <div className="label cc-light">{itemOneMuted}</div>
                <h2 className="section-heading">{itemOneTitle}</h2>
                <p className="paragraph-light">{itemOneDesc}</p>
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
              src={itemOneImg}
              id="w-node-_86e64837-0616-515b-4568-76c147234d3f-530bfaf3"
              alt=""
            />
          </div>
          <div className="w-layout-grid about-grid cc-about-2">
            <div id="w-node-_86e64837-0616-515b-4568-76c147234d41-530bfaf3">
              <div className="home-section-wrap">
                <div className="label cc-light">{itemSecMuted}</div>
                <h2 className="section-heading">{itemSecTitle}</h2>
                <p className="paragraph-light">{itemSecDesc}</p>
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
              src={itemSecImg}
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
