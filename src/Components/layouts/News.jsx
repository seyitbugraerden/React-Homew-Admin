import React from "react";

function News() {
  return (
    <div class="section">
      <div class="container">
        <div class="blog-heading">
          <div class="label cc-light">News</div>
          <h2 class="work-heading">Latest News</h2>
        </div>
        <div class="collection-list-wrapper w-dyn-list">
          <div role="list" class="collection-wrap w-dyn-items">
            <div role="listitem" class="blog-preview-wrap w-dyn-item">
              <a
                href="/post/10-quick-tips-about-blogging"
                class="business-article-heading"
              >
                New Regulations Unveiled for 2024 Season
              </a>
              <div class="label cc-blog-date">Jan 24, 2024</div>
              <p class="paragraph-light">
                F1 governing body, the FIA, has revealed significant changes to
                the technical regulations for the 2024 season, aiming to improve
                racing and reduce costs. These alterations include tweaks to
                aerodynamics, standardized parts, and sustainability measures.
              </p>
            </div>
            <div role="listitem" class="blog-preview-wrap w-dyn-item">
              <a
                href="/post/15-best-blogs-to-follow-about-web-design"
                class="business-article-heading"
              >
                Driver Transfers Shake Up Grid
              </a>
              <div class="label cc-blog-date">Jan 21, 2024</div>
              <p class="paragraph-light">
                Several high-profile driver transfers have occurred ahead of the
                2024 season, with notable moves including Lewis Hamilton's
                switch to Aston Martin and Max Verstappen joining Ferrari. These
                changes promise to add excitement and unpredictability to the
                upcoming championship.
              </p>
            </div>
            <div role="listitem" class="blog-preview-wrap w-dyn-item">
              <a
                href="/post/7-of-the-best-examples-of-beautiful-blog-design"
                class="business-article-heading"
              >
                Expansion Plans for F1 Calendar
              </a>
              <div class="label cc-blog-date">Jan 21, 2024</div>
              <p class="paragraph-light">
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
