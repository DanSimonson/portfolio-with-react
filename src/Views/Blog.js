import React from "react";
import { NavLink } from "react-router-dom";
import "./Blog.scss";
import blogPosts from "../Data/PostData.json";
import butterfly from "../assets/butterfly4.jpg";

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
    <>
      <div className="blog-nav">
        <input type="checkbox" className="blog-checkbox" id="blog-toggle" />
        <label htmlFor="blog-toggle" className="blog-nav_button">
          <span className="blog-nav_icon">&nbsp;</span>
        </label>
        <div className="blog-nav_background">&nbsp;</div>
        <nav className="blog-nav_navbar">
          <ul className="blog-nav_list">
            <li className="blog-nav_item">
              <NavLink to="/" className="blog-nav_link">
                Go Back To Portfolio
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className="blog-wrapper"
        style={{
          backgroundImage: `
        linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${butterfly})
      `,
          backgroundPosition: `cover`,
        }}
      >
        <header className="blog-header">Dan's Blog Posts</header>
        <section className="basic-grid">{cardsArray}</section>
      </div>
    </>
  );
};

export default Blog;
