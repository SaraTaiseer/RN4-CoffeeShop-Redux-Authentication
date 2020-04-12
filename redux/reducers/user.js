import { SET_CURRENT_USER } from "../actions/types";

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.payload;
    default:
      return state;
  }
};
