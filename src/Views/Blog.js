import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Blog.scss";
import butterfly from "../assets/butterfly4.jpg";
import { connect } from "react-redux";
import { getPosts } from "../Actions/Actions";

const Blog = ({ data }) => {
  const { BlogPosts } = data;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardsArray = BlogPosts.map((blogPost) => (
    <div className="maincontent" key={blogPost.id}>
      <div className="thecard">
        <div className="thefront">{blogPost.title}</div>
        <div className="theback">
          <a className="blog-a" href={blogPost.url} target="_blank">
            {blogPost.content}
          </a>
        </div>
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

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //actions may be dispatched in the future for this project
    //getPosts: () => dispatch(getPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
