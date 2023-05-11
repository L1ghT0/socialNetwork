import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    updateStatus,
    updateAvatar,
    initializeProfile
} from "../../redux/profileReducer";
import {useParams} from 'react-router-dom'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import Preloader from "../common/preloader/Preloader";

const ProfileContainer = (props) => {
    let {userId} = useParams();

    useEffect(() => {
        props.initializeProfile(userId);
    }, [userId])

    if(!props.initializedProfile){
        return <Preloader />
    }
    return (
        <Profile {...props}/>
    );
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isOwner: state.profilePage.isOwner,
        initializedProfile: state.profilePage.initializedProfile,
    }
}

export default compose(
    connect(mapStateToProps, {
        updateStatus,
        updateAvatar,
        initializeProfile
    }),
    withAuthRedirect,
)(ProfileContainer)
