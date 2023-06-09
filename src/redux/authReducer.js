import {authApi, securityApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuthorized: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuthorized: action.payload.isAuthorized
            }
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            break;
    }
    return state;
}


export const setAuthUserData = (userId, email, login, isAuthorized) =>
    ({type: SET_AUTH_USER_DATA, payload: {userId, login, email, isAuthorized}})
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, captchaUrl})

export const getAuthUserData = () => (dispatch) => {

    return authApi.me().then(response => {
        if (response.data.resultCode === 0) {
            let isAuthorized = true;
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, isAuthorized))
        }
    })
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await authApi.login(email, password, rememberMe, captcha);

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10){
            dispatch(getCaptchaUrl());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const logout = () => (dispatch) => {

    authApi.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityApi.getCaptchaUrl();
    const captchaUrl = response.data.url;

    dispatch(setCaptchaUrl(captchaUrl));
}

export default authReducer