import React from "react";
import "./BlogList.scss";

import blogPosts from "../../Data/PostData.json";
const BlogList = () => {
  const cardsArray = blogPosts.map((blogPost) => (
    <div className="blogCards">
      id={blogPost.id}
      title={blogPost.title}
    </div>
    /*<Card name={robot.name} email={robot.email} id={robot.id} />*/
  ));

  return <div>{cardsArray}</div>;
};

export default BlogList;
/**const CardList = ({ robots }) => {
  const cardsArray = robots.map(robot => (
    <Card
      name={robot.name}
      email={robot.email}
      id={robot.id} />
  ));

  return (
    <div>
      {cardsArray}
    </div>
  );
}; */
