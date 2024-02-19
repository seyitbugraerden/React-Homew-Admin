import React from "react";

function News() {
  return (
    <div className="section">
      <div className="container">
        <div className="blog-heading">
          <div className="label cc-light">News</div>
          <h2 className="work-heading">Latest News</h2>
        </div>
        <div className="collection-list-wrapper w-dyn-list">
          <div role="list" className="collection-wrap w-dyn-items">
            <div role="listitem" className="blog-preview-wrap w-dyn-item">
              <a
                href="/post/10-quick-tips-about-blogging"
                className="business-article-heading"
              >
                New Regulations Unveiled for 2024 Season
              </a>
              <div className="label cc-blog-date">Jan 24, 2024</div>
              <p className="paragraph-light">
                F1 governing body, the FIA, has revealed significant changes to
                the technical regulations for the 2024 season, aiming to improve
                racing and reduce costs. These alterations include tweaks to
                aerodynamics, standardized parts, and sustainability measures.
              </p>
            </div>
            <div role="listitem" className="blog-preview-wrap w-dyn-item">
              <a
                href="/post/15-best-blogs-to-follow-about-web-design"
                className="business-article-heading"
              >
                Driver Transfers Shake Up Grid
              </a>
              <div className="label cc-blog-date">Jan 21, 2024</div>
              <p className="paragraph-light">
                Several high-profile driver transfers have occurred ahead of the
                2024 season, with notable moves including Lewis Hamilton's
                switch to Aston Martin and Max Verstappen joining Ferrari. These
                changes promise to add excitement and unpredictability to the
                upcoming championship.
              </p>
            </div>
            <div role="listitem" className="blog-preview-wrap w-dyn-item">
              <a
                href="/post/7-of-the-best-examples-of-beautiful-blog-design"
                className="business-article-heading"
              >
                Expansion Plans for F1 Calendar
              </a>
              <div className="label cc-blog-date">Jan 21, 2024</div>
              <p className="paragraph-light">
                Formula 1 is exploring new venues and markets for its race
                calendar, with discussions underway to potentially add races in
                countries like Indonesia and Qatar. These expansion plans aim to
                broaden the sport's global footprint and attract new fans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
