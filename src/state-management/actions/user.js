import axios from "axios";
import { CURRENT_USER, REMOVE_USER, SET_CURRENT_USER } from "../types";

export const setCurrentUser = (auth_token) => (dispatch) => {
  localStorage.setItem("auth-token", auth_token);
  dispatch({
    type: SET_CURRENT_USER,
    payload: auth_token,
  });
};

export const getCurrentUser = () => async (dispatch) => {
  const auth_token = localStorage.getItem("auth-token");
  if (auth_token) {
    await axios
      .get("http://localhost:5000/api/auth/getuser", {
        headers: {
          "auth-token": `${auth_token}`,
        },
      })
      .then((response) => {
        dispatch({
          type: CURRENT_USER,
          payload: response,
        });
      })
      .catch((error) => {
        removeUser();
        alert("Try to login again");
      });
  }
};

export const removeUser = () => (dispatch) => {
  localStorage.removeItem("auth-token");
  dispatch({
    type: REMOVE_USER,
  });
};
