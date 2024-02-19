import React from "react";
import { useSelector } from "react-redux";

function News() {
  const news = useSelector((state) => state.admin.news);
  return (
    <div className="section">
      <div className="container">
        <div className="blog-heading">
          <div className="label cc-light">{news.mutedTitle}</div>
          <h2 className="work-heading">{news.title}</h2>
        </div>
        <div className="collection-list-wrapper w-dyn-list">
          <div role="list" className="collection-wrap w-dyn-items">
            <div role="listitem" className="blog-preview-wrap w-dyn-item">
              <a className="business-article-heading">{news.blogOne.title}</a>
              <div className="label cc-blog-date">{news.blogOne.date}</div>
              <p className="paragraph-light">{news.blogOne.desc}</p>
            </div>
            <div role="listitem" className="blog-preview-wrap w-dyn-item">
              <a className="business-article-heading">{news.blogSec.title}</a>
              <div className="label cc-blog-date">{news.blogSec.date}</div>
              <p className="paragraph-light">{news.blogSec.desc}</p>
            </div>
            <div role="listitem" className="blog-preview-wrap w-dyn-item">
              <a className="business-article-heading">{news.blogThr.title}</a>
              <div className="label cc-blog-date">{news.blogThr.date}</div>
              <p className="paragraph-light">{news.blogThr.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
