import React from "react";
import { useSelector } from "react-redux";

function News() {
  const news = useSelector((state) => state.admin.news);
  return (
    <div className="section">
      <div className="container">
        <div className="blog-heading">
          <div className="label cc-light">{news.mutedTitle.content}</div>
          <h2 className="work-heading">{news.title.content}</h2>
        </div>
        <div className="collection-list-wrapper w-dyn-list">
          <div role="list" className="collection-wrap w-dyn-items">
            <div role="listitem" className="blog-preview-wrap w-dyn-item">
              <a className="business-article-heading">
                {news.blogOne.title.content}
              </a>
              <div className="label cc-blog-date">
                {news.blogOne.date.content}
              </div>
              <p className="paragraph-light">{news.blogOne.desc.content}</p>
            </div>
            <div role="listitem" className="blog-preview-wrap w-dyn-item">
              <a className="business-article-heading">
                {news.blogSec.title.content}
              </a>
              <div className="label cc-blog-date">
                {news.blogSec.date.content}
              </div>
              <p className="paragraph-light">{news.blogSec.desc.content}</p>
            </div>
            <div role="listitem" className="blog-preview-wrap w-dyn-item">
              <a className="business-article-heading">
                {news.blogThr.title.content}
              </a>
              <div className="label cc-blog-date">
                {news.blogThr.date.content}
              </div>
              <p className="paragraph-light">{news.blogThr.desc.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
