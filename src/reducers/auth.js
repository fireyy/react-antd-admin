import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS
} from '../actions/auth';

const initialState = {
    user: null,
    loggingIn: false,
    loggingOut: false,
    loginErrors: null
};

export default function auth(state = initialState, action = {}) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, initialState, {loggingIn: true});
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {user: action.user, loggingIn: false, loginErrors: null});
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                user: null,
                loginErrors: action.errors
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                loggingOut: false,
                user: null,
                loginErrors: null
            };
        default:
            return state;
    }
}
