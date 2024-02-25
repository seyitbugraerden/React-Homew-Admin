import React from "react";
import { useSelector } from "react-redux";

function News() {
  const data = useSelector((state) => state.admin);

  return (
    <div className="section">
      <div className="container">
        <div className="blog-heading">
          <div className="label cc-light">{data.newsMuted.content}</div>
          <h2 className="work-heading">{data.newsTitle.content}</h2>
        </div>
        <div className="collection-list-wrapper w-dyn-list">
          <div role="list" className="collection-wrap w-dyn-items">
            <div role="listitem" className="blog-preview-wrap w-dyn-item">
              <a className="business-article-heading">
                {data.blogOneTitle.content}
              </a>
              <div className="label cc-blog-date">
                {data.blogOneDate.content}
              </div>
              <p className="paragraph-light">{data.blogOneDesc.content}</p>
            </div>
            <div role="listitem" className="blog-preview-wrap w-dyn-item">
              <a className="business-article-heading">
                {data.blogSecTitle.content}
              </a>
              <div className="label cc-blog-date">
                {data.blogSecDate.content}
              </div>
              <p className="paragraph-light">{data.blogSecDesc.content}</p>
            </div>
            <div role="listitem" className="blog-preview-wrap w-dyn-item">
              <a className="business-article-heading">
                {data.blogThrTitle.content}
              </a>
              <div className="label cc-blog-date">
                {data.blogThrDate.content}
              </div>
              <p className="paragraph-light">{data.blogThrDesc.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
