import React from 'react';
import {addPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {compose} from "redux";


const MyPostsContainer = (props) => {
    return (
        <MyPosts {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        postsData: state.profilePage.postsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => { dispatch(addPostActionCreator(newPostText)); }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(MyPostsContainer)