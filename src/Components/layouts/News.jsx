import React from "react";
import { useSelector } from "react-redux";

function News() {
  const newsMuted = useSelector((state) => state.admin.newsMuted.content);
  const newsTitle = useSelector((state) => state.admin.newsTitle.content);
  const blogOneTitle = useSelector((state) => state.admin.blogOneTitle.content);
  const blogOneDate = useSelector((state) => state.admin.blogOneDate.content);
  const blogOneDesc = useSelector((state) => state.admin.blogOneDesc.content);
  const blogSecTitle = useSelector((state) => state.admin.blogSecTitle.content);
  const blogSecDate = useSelector((state) => state.admin.blogSecDate.content);
  const blogSecDesc = useSelector((state) => state.admin.blogSecDesc.content);
  const blogThrTitle = useSelector((state) => state.admin.blogThrTitle.content);
  const blogThrDate = useSelector((state) => state.admin.blogThrDate.content);
  const blogThrDesc = useSelector((state) => state.admin.blogThrDesc.content);

  return (
    <div className="section">
      <div className="container">
        <div className="blog-heading">
          <div className="label cc-light">{newsMuted}</div>
          <h2 className="work-heading">{newsTitle}</h2>
        </div>
        <div className="collection-list-wrapper w-dyn-list">
          <div role="list" className="collection-wrap w-dyn-items">
            <div role="listitem" className="blog-preview-wrap w-dyn-item">
              <a className="business-article-heading">{blogOneTitle}</a>
              <div className="label cc-blog-date">{blogOneDate}</div>
              <p className="paragraph-light">{blogOneDesc}</p>
            </div>
            <div role="listitem" className="blog-preview-wrap w-dyn-item">
              <a className="business-article-heading">{blogSecTitle}</a>
              <div className="label cc-blog-date">{blogSecDate}</div>
              <p className="paragraph-light">{blogSecDesc}</p>
            </div>
            <div role="listitem" className="blog-preview-wrap w-dyn-item">
              <a className="business-article-heading">{blogThrTitle}</a>
              <div className="label cc-blog-date">{blogThrDate}</div>
              <p className="paragraph-light">{blogThrDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
