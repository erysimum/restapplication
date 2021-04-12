import { combineReducers } from "redux";
import postsreducer from "./postsreducer";
import usersreducer from "./usersreducer";

export default combineReducers({
  posts: postsreducer,
  users: usersreducer,
});
