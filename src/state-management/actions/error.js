import { CLEAR_ERRORS, GET_ERRORS } from "../types";

export const clearErrors = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
export const dispatchErrors = (payload) => (dispatch) => {
  dispatch({
    type: GET_ERRORS,
    payload,
  });
};
