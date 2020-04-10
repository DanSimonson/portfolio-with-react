import React from "react";
import "./Blog.scss";
import BlogList from "../Components/BlogList/BlogList";
import blogPosts from "../Data/PostData.json";

const Blog = () => {
  const cardsArray = blogPosts.map((blogPost) => (
    <div className="blog-cards" key={blogPost.id}>
      <p>{blogPost.title}</p>
    </div>
  ));

  //return <div>{cardsArray}</div>;
  return (
    <div className="blog-wrapper">
      <section className="basic-grid">{cardsArray}</section>
    </div>
  );
};

export default Blog;
