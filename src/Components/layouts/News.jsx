import React from "react";

function News() {
  return (
    <div class="section">
      <div class="container">
        <div class="blog-heading">
          <div class="label cc-light">About Us</div>
          <h2 class="work-heading">Company news</h2>
        </div>
        <div class="collection-list-wrapper w-dyn-list">
          <div role="list" class="collection-wrap w-dyn-items">
            <div role="listitem" class="blog-preview-wrap w-dyn-item">
              <a
                href="/post/10-quick-tips-about-blogging"
                class="business-article-heading"
              >
                10 Quick Tips About Blogging
              </a>
              <div class="label cc-blog-date">Feb 21, 2019</div>
              <p class="paragraph-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>
            <div role="listitem" class="blog-preview-wrap w-dyn-item">
              <a
                href="/post/15-best-blogs-to-follow-about-web-design"
                class="business-article-heading"
              >
                15 Best Blogs To Follow About Web Design
              </a>
              <div class="label cc-blog-date">Feb 21, 2019</div>
              <p class="paragraph-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>
            <div role="listitem" class="blog-preview-wrap w-dyn-item">
              <a
                href="/post/7-of-the-best-examples-of-beautiful-blog-design"
                class="business-article-heading"
              >
                7 of the Best Examples of Beautiful Blog Design
              </a>
              <div class="label cc-blog-date">Feb 21, 2019</div>
              <p class="paragraph-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
