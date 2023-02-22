import { CURRENT_USER, REMOVE_USER, SET_CURRENT_USER } from "../types";

const initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        ...action.payload,
      };
    case CURRENT_USER:
      return {
        ...state,
        ...action.payload,
      };
    case REMOVE_USER:
      return null
    default:
      return state;
  }
};
export default userReducer;
