import {profileApi, usersApi} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'


let initialState = {
    postsData: [
        {id: 1, postText: 'Hi, how are you?', Likes: 12},
        {id: 2, postText: 'Its my first post', Likes: 6}
    ],
    status: '',
    profile: {
        photos: {
            large: null,
            small: null
        }
    }
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                postText: action.newPostText,
                Likes: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            }
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(post => post.id !== action.postId)
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            break;
    }
    return state;
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});


export const getUserProfile = (userId) => (dispatch) => {
    usersApi.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
}

export const getStatus = (userId) => (dispatch) => {
    profileApi.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileApi.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setStatus(status));
            }
    })
}

export default profileReducer