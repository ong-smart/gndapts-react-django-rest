import { createReducer } from '../utils';
import {
    AUTH_LOGIN_USER_REQUEST,
    AUTH_LOGIN_USER_SUCCESS,
    AUTH_LOGIN_USER_FAILURE,
    AUTH_LOGOUT_USER
} from '../constants';
import jwtDecode from 'jwt-decode';

const initialState = {
    token: null,
    userID: null,
    firstName: null,
    lastName: null,
    emailAddress: null,
    isAuthenticated: false,
    isAuthenticating: false,
    isStaff:null,
    statusText: null
};

export default createReducer(initialState, {
    [AUTH_LOGIN_USER_REQUEST]: (state, payload) => {
        return Object.assign({}, state, {
            isAuthenticating: true,
            statusText: null
        });
    },
    [AUTH_LOGIN_USER_SUCCESS]: (state, payload) => {
        return Object.assign({}, state, {
            isAuthenticating: false,
            isAuthenticated: true,
            token: payload.token,
            userID: jwtDecode(payload.token).user_id,
            firstName: jwtDecode(payload.token).user_firstname,
            lastName: jwtDecode(payload.token).user_lastname,
            activeFavoriteCount: jwtDecode(payload.token).active_favorite_count,
            emailAddress: jwtDecode(payload.token).email_address,
            isStaff:jwtDecode(payload.token).is_staff,
            statusText: 'You have been successfully logged in.'
        });
    },
    [AUTH_LOGIN_USER_FAILURE]: (state, payload) => {
        return Object.assign({}, state, {
            isAuthenticating: false,
            isAuthenticated: false,
            token: null,
            userName: null,
            statusText: `Authentication Error: ${payload.status} ${payload.statusText}`
        });
    },
    [AUTH_LOGOUT_USER]: (state, payload) => {
        return Object.assign({}, state, {
            isAuthenticated: false,
            token: null,
            userName: null,
            statusText: 'You have been successfully logged out.'
        });
    }
});
