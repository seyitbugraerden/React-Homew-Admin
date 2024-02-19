import React from "react";

function Slider() {
  return (
    <div className="section cc-store-home-wrap">
      <div
        className="intro-header"
        style={{
          backgroundImage:
            "linear-gradient(transparent, rgb(0,0,0,.5)), url(https://img3.aksam.com.tr/imgsdisk/2021/04/26/t25_formula-1de-yeni-donem-sp-955.jpg)",
          backgroundAttachment: "fixed",
          backgroundPositionY: "-150px",
          backgroundSize: "cover",
        }}
      >
        <div className="intro-content cc-homepage">
          <div className="intro-text">
            <div className="heading-jumbo">Race Day Insights</div>
            <div className="paragraph-bigger cc-bigger-white-light">
              Get behind-the-scenes analysis and expert commentary on the latest
              F1 races.
              <br />
            </div>
          </div>
          <a
            href="/about"
            className="button cc-jumbo-button cc-jumbo-white w-inline-block"
          >
            <div>Learn More</div>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="motto-wrap">
          <div className="label cc-light">Who is Here</div>
          <div className="heading-jumbo-small">
            Brand Spotlight: Powerhouses of the Circuit
            <br />
          </div>
        </div>
        <div className="divider"></div>
        <div className="home-content-wrap">
          <div className="w-layout-grid about-grid">
            <div id="w-node-_86e64837-0616-515b-4568-76c147234d34-530bfaf3">
              <div className="home-section-wrap">
                <div className="label cc-light">Most Winner</div>
                <h2 className="section-heading">Mercedes-AMG</h2>
                <p className="paragraph-light">
                  Mercedes-AMG Petronas Formula One Team is a powerhouse in
                  Formula 1, renowned for its dominance in the sport's modern
                  era. With cutting-edge technology, top-tier engineering, and a
                  roster of world-class drivers, Mercedes-AMG consistently
                  pushes the boundaries of speed and innovation on the race
                  track.
                </p>
              </div>
              <a href="/about" className="button w-inline-block">
                <div>Learn More</div>
              </a>
            </div>
            <img
              src="https://i.pinimg.com/originals/e1/1c/c8/e11cc8ad8bff2641e0076ad00e4beb98.jpg"
              id="w-node-_86e64837-0616-515b-4568-76c147234d3f-530bfaf3"
              alt=""
            />
          </div>
          <div className="w-layout-grid about-grid cc-about-2">
            <div id="w-node-_86e64837-0616-515b-4568-76c147234d41-530bfaf3">
              <div className="home-section-wrap">
                <div className="label cc-light">Most Popular</div>
                <h2 className="section-heading">Scuderia Ferrari</h2>
                <p className="paragraph-light">
                  Ferrari is an iconic name in Formula 1, synonymous with
                  passion, tradition, and success. With a storied history
                  spanning decades, the Scuderia Ferrari team continues to
                  captivate fans worldwide with its distinctive red cars and
                  unwavering pursuit of victory on the race track.
                </p>
              </div>
              <a href="/team" className="button w-inline-block">
                <div>Learn More</div>
              </a>
            </div>
            <img
              src="https://www.mostlyf1.com/wp-content/uploads/2019/09/Charles-Leclerc-Italy-2019-Podium.jpg"
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
