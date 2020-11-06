import { SIGNUP } from "../actions/actionTypes";

const initialState = {
  user: {},
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default AuthReducer;
