import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import userReducders from "./userReducer";

export default combineReducers({
  posts: postsReducer,
  users: userReducders
});
