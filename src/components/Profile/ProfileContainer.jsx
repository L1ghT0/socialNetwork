import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getStatus, getUserProfile, updateStatus, updateAvatar, setIsOwner} from "../../redux/profileReducer";
import {useParams} from 'react-router-dom'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const ProfileContainer = (props) => {
    let {userId} = useParams();
    if (!userId) {
        props.setIsOwner(true);
        userId = props.authorizedUserId; // me "28816"
    } else {
        props.setIsOwner(false);
    }
    useEffect(() => {
        props.getUserProfile(userId);
        props.getStatus(userId);
    }, [userId])
    console.log('ProfileContainer');
    return (
        <Profile {...props}
                 isOwner={props.isOwner}
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
        isAuthorized: state.auth.isAuthorized,
        isOwner: state.profilePage.isOwner,
    }
}

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        updateStatus,
        getStatus,
        updateAvatar,
        setIsOwner
    }),
    withAuthRedirect,
)(ProfileContainer)
