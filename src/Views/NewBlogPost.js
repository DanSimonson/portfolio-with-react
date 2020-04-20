import React, { useEffect, useState } from "react";
//import "./NewBlogPost.scss";
import { connect } from "react-redux";
import { createStore } from "redux";
import RootReducer from "../Reducers/RootReducer";
import { getFireData } from "../WrapFirestore";
import { getFirestoreData } from "../Actions/Actions";

function NewBlogPost(props) {
  let tempData = getFireData();
  const store = createStore(RootReducer);
  const [getData, setGetData] = useState("");
  const [postData, setPostData] = useState("");

  useEffect(() => {
    setGetData(getFireData());
    //let tempData = getData;
  }, []);

  //{ type: "GET_BLOGPOST", payload: tempData }
  //store.dispatch(getFirestoreData(getData));
  //store.dispatch({ type: "GET_BLOGPOST", payload: tempData });

  store.subscribe(() => {
    console.log("subscription: ", store.getState());
  });

  const handleClick = () => {
    //store.dispatch({ type: "ADD_BLOGPOST", tempData });
  };

  return (
    <div>
      <h1>Create Blog Post</h1>
      <button className="Btn" onClick={handleClick}>
        Create
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("blog post", state.BlogPosts);
  return {
    BlogPosts: state.BlogPosts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //handleClick: (dispatch) => NewBlogPost("ADD_BLOGPOST", {}),
    //dispatch({ type: "GET_DATA", payload: ''})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewBlogPost);
