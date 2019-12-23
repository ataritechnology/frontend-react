import * as ActionTypes from "../actions/user";
const initialState = {};
const User = (state = initialState, action) => {
  switch (action) {
    case ActionTypes.USER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return {
        ...state
      };
  }
};

export default User;
