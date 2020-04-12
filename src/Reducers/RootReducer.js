import BlogReducer from "./BlogReducer";
import AuthReducer from "./AuthReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  BlogPosts: BlogReducer,
  Auth: AuthReducer,
});

export default RootReducer;
