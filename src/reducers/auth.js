import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  FETCH_PROFILE_PENDING,
  FETCH_PROFILE_SUCCESS
} from '../actions/auth';

import {cookies} from '../utils';

const initialState = {
  user: null,
  loggingIn: false,
  loggingOut: false,
  loginErrors: null
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_PENDING:
      return Object.assign({}, initialState, {loggingIn: true});
    case LOGIN_SUCCESS:
      const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
      cookies.set({name: 'uid', value: uid, expires});
      return Object.assign({}, state, {user: action.user, loggingIn: false, loginErrors: null});
    case LOGIN_ERROR:
      return {
        ...state,
        loggingIn: false,
        user: null,
        loginErrors: action.payload.message
      };
    case LOGOUT_SUCCESS:
      cookies.unset('uid');
      return {
        ...state,
        loggingOut: false,
        user: null,
        loginErrors: null
      };
    case FETCH_PROFILE_SUCCESS:
      return Object.assign({}, state, {user: action.payload.body.user, loggingIn: false, loginErrors: null});
    default:
      return state;
  }
}
