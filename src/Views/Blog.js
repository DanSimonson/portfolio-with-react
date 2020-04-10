import React from "react";
import "./Blog.scss";
import BlogList from "../Components/BlogList/BlogList";
import blogPosts from "../Data/PostData.json";

const Blog = () => {
  const cardsArray = blogPosts.map((blogPost) => (
    <div className="maincontent" key={blogPost.id}>
      <div className="thecard">
        <div className="thefront">{blogPost.title}</div>
        <div className="theback">{blogPost.content}</div>
      </div>
    </div>
  ));
  return (
    <div className="blog-wrapper">
      <section className="basic-grid">{cardsArray}</section>
    </div>
  );
};

export default Blog;
