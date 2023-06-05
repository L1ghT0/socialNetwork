import {profileApi, usersApi} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const UPDATE_AVATAR = 'UPDATE_AVATAR'
const SET_IS_OWNER = 'SET_IS_OWNER'
const INITIALIZED_PROFILE_SUCCESS = 'INITIALIZED_PROFILE_SUCCESS'


let initialState = {
    initializedProfile: false,
    postsData: [
        {id: 1, postText: 'Hi, how are you?', Likes: 12},
        {id: 2, postText: 'Its my first post', Likes: 6}
    ],
    status: '',
    isOwner: false,
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
        case UPDATE_AVATAR:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        case SET_IS_OWNER:
            return {
                ...state,
                isOwner: action.isOwner
            }
        case INITIALIZED_PROFILE_SUCCESS:
            return {
                ...state,
                initializedProfile: true
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
export const updateAvatarSuccess = (photos) => ({type: UPDATE_AVATAR, photos});
export const setIsOwner = (isOwner) => ({type: SET_IS_OWNER, isOwner});
export const initializedProfileSuccess = () => ({type: INITIALIZED_PROFILE_SUCCESS});


const getUserProfile = (userId) => {
    return profileApi.getProfile(userId).then(response => response.data)
}
const getStatus = (userId) => {
    return profileApi.getStatus(userId).then(response => response.data)
}

export const initializeProfile = (userId) => async (dispatch, getState) => {
    let copyUserId = userId || getState().auth.userId;
    let isOwner = (typeof(userId) === "undefined");

    let userProfile = await getUserProfile(copyUserId);
    let status = await getStatus(copyUserId);

    dispatch(setUserProfile(userProfile));
    dispatch(setStatus(status));
    dispatch(setIsOwner(isOwner));
    dispatch(initializedProfileSuccess());
}

export const updateStatus = (status) => (dispatch) => {
    profileApi.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
}

export const updateAvatar = (avatar) => (dispatch) => {
    profileApi.updateAvatar(avatar)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(updateAvatarSuccess(response.data.data.photos));
            }
        })
}

export default profileReducer