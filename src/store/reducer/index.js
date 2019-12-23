import { combineReducers } from "redux";
import * as ActionTypes from "../actions/user";
import user from "./user";

import { routerReducer as routing } from "react-router-redux";

const appReducer = combineReducers({
  routing,
  user
});

export const rootReducer = (state, action) => {
  //   if (action.type === ActionTypes.USER_LOGOUT) {
  //     state = {};
  //   }

  return appReducer(state, action);
};
