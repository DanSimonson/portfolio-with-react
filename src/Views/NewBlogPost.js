import React from "react";
//import "./NewBlogPost.scss";
import { connect } from "react-redux";
import { createStore } from "redux";
import RootReducer from "../Reducers/RootReducer";
//import { getFirestore } from "../WrapFirestore";
//import { db } from "../Firebase/index";

function NewBlogPost(props) {
  //const db = firebase.firestore();
  //let temp = getFirestore();
  //console.log("firestoreData: ", temp);
  //console.log("props: ", props);
  const store = createStore(RootReducer);
  //console.log("store: ", store.getState());

  store.subscribe(() => {
    console.log("subscription: ", store.getState());
  });

  const handleClick = () => {
    //console.log("in handleClick props", props);
    //props.handleClick();
    store.dispatch({ type: "ADD_BLOGPOST" });
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
  return {
    BlogPosts: state.BlogPosts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (dispatch) => NewBlogPost("ADD_BLOGPOST"),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewBlogPost);
//export default connect(mapStateToProps)(Blog);
