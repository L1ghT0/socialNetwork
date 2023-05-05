import React from 'react';
import PI_classes from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";

const ProfileInfo = (props) => {

    if (!props.profile){
        return <Preloader />
    }

    return (
        <div className={PI_classes.cover}>
            <div>
                <ProfileAvatar photos={props.profile.photos} isOwner={props.isOwner} updateAvatar={props.updateAvatar}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner}/>
            </div>
            <div className={PI_classes.descriptionBlock}>
                descriptionBlock
            </div>
        </div>
    );
}

export default ProfileInfo;
