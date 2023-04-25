import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuthorized: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuthorized: action.payload.isAuthorized
            }
        default:
            break;
    }
    return state;
}


export const setAuthUserData = (userId, email, login, isAuthorized) =>
    ({type: SET_AUTH_USER_DATA, payload: {userId, login, email, isAuthorized}})

export const getAuthUserData = () => (dispatch) => {

    return authApi.me().then(response => {
        if (response.data.resultCode === 0) {
            let isAuthorized = true;
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, isAuthorized))
        }
    })
}

export const login = (email, password, rememberMe) => (dispatch) => {

    authApi.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else if (response.data.resultCode === 1) {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            dispatch(stopSubmit("login", {_error: message}));
        } else if (response.data.resultCode === 10) {
            alert('captcha error');
        }
    })
}

export const logout = () => (dispatch) => {

    authApi.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}

export default authReducer