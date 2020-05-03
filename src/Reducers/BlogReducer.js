import {
  GET_POST_REQUEST,
  GET_POST_FAILURE,
  GET_POST_SUCCESS,
} from "../PostTypes";
import BlogPosts from "../Data/PostData";

const initState = {
  BlogPosts,
  errors: "",
  loading: true,
};

const BlogReducer = (state = initState, action) => {
  switch (action.type) {
    /*case GET_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_POST_SUCCESS:
      return {
        loading: false,
        BlogPosts: action.payload,
        error: "",
      };
    case GET_POST_FAILURE:
      return {
        loading: false,
        BlogPosts: [],
        error: action.payload,
      };*/

    default:
      return state;
  }
};

export default BlogReducer;
