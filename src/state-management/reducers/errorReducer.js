import { CLEAR_ERRORS, GET_ERRORS } from "../types";

const initialState = null;
const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS: {
      return action.payload;
    }
    case CLEAR_ERRORS: {
      return null;
    }
    default:
      return state;
  }
};
export default errorReducer;
