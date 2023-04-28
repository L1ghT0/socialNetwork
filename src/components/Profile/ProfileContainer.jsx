import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getStatus, getUserProfile, updateStatus, updateAvatar} from "../../redux/profileReducer";
import {useParams} from 'react-router-dom'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const ProfileContainer = (props) => {
    let {userId} = useParams();
    if (!userId) {
        userId = props.authorizedUserId; // me "28816"
    }
    useEffect(() => {
        props.getUserProfile(userId);
        props.getStatus(userId);
    }, [userId])

    return (
        <Profile {...props}
                 isOwner={props.isAuthorized}
                 profile={props.profile}
                 status={props.status}
                 updateStatus={props.updateStatus}/>
    );
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuthorized: state.auth.isAuthorized
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        getUserProfile,
        updateStatus,
        getStatus,
        updateAvatar
    }),
)(ProfileContainer)
