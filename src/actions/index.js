import { bindActionCreators } from "redux";
import axios from "../axios/jsonplaceholder";

export const Postaction = () => {
  return async function (dispatch) {
    const response = await axios.get("/posts");
    dispatch({ type: "POST_ACTION", payload: response.data });
  };
};

export const Useraction = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`/users/${id}`);
    dispatch({ type: "USER_ACTION", payload: response.data });
  };
};
