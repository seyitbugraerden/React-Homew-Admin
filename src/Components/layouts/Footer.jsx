import React from "react";
import { useSelector } from "react-redux";

function Footer() {
  const subTitle = useSelector((state) => state.admin.subTitle.content);
  const subDesc = useSelector((state) => state.admin.subDesc.content);
  const subButton = useSelector((state) => state.admin.subButton.content);
  const data = useSelector((state) => state.admin.data);
  return (
    <>
      <div
        className="section cc-cta"
        style={{
          backgroundImage:
            "linear-gradient(rgb(0,0,0,.5), rgb(0,0,0,.5)),url(https://wallpapercave.com/wp/wp9200426.jpg)",
          backgroundPosition: "center",
          color: "white",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundOrigin: "center",
        }}
      >
        <div className="container">
          <div className="cta-wrap">
            <div>
              <div className="cta-text">
                <div className="heading-jumbo-small">
                  {subTitle}
                  <br />
                </div>
                <div className="paragraph-bigger cc-bigger-light">
                  {subDesc}
                  <br />
                </div>
              </div>
              <a
                href="/contact"
                className="button cc-jumbo-button w-inline-block"
                title="footer button"
              >
                <div>{subButton}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="footer-wrap">
            <a
              href="https://github.com/seyitbugraerden"
              target="_blank"
              className="webflow-link w-inline-block"
            >
              <img
                src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                width="15"
                alt=""
                className="webflow-logo-tiny"
              />
              <div className="paragraph-tiny">github.com/seyitbugraerden</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
