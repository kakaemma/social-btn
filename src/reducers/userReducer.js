import {
  SOCIAL_LOGIN_INITIATED,
  SOCIAL_LOGIN_SUCCESS,
} from '../actions/types';

const initialState = {
  isLoggedIn: false,
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOCIAL_LOGIN_INITIATED:
      return {
        ...state,
        loading: true,
      };
    case SOCIAL_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
