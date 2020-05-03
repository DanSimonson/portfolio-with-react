/**
 *
 * Action Creators not being used in this project currently.
 * The state is being held on the front end and being managed with
 * redux through a reducer and store.
 *
 */

import {
  GET_POST_REQUEST,
  GET_POST_FAILURE,
  GET_POST_SUCCESS,
} from "../PostTypes";

import { firebaseApp } from "../FirebaseConfig";
const db = firebaseApp.firestore();

export const getPostRequest = () => {
  return {
    type: GET_POST_REQUEST,
  };
};

const getPostSuccess = (posts) => {
  return {
    type: GET_POST_SUCCESS,
    payload: posts,
  };
};

const getPostFailure = (error) => {
  return {
    type: GET_POST_FAILURE,
    payload: error,
  };
};

export const getPosts = () => {
  return (dispatch) => {
    dispatch(getPostRequest());
    let posts = [];
    db.collection("blogposts")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          //console.log(doc.id, " => ", doc.data());
        });
      });
  };
};
