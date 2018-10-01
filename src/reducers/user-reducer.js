import { IS_LOGIN, USER_NAME, USER_PASSWORD } from "../actions/action-type";

const initialState = {
  username: "",
  password: "",
  loading: false,
  success: false,
  error: false
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case USER_NAME:
      return {
        ...state,
        username: action.username
      };
    case USER_PASSWORD:
      return {
        ...state,
        password: action.password
      };

    case IS_LOGIN:
      return {
        ...state,
        loading: false,
        success: false,
        error: false,
        token: action.token
      };
    default:
      return state;
  }
};

export default userReducers;
