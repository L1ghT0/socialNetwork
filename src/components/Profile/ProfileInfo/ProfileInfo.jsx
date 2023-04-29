import React from 'react';
import PI_classes from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import avatar from '../../../assets/images/avatar.png'

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader />
    }

    const onAvatarChange = (e) => {
        if(e.target.files.length){
            props.updateAvatar(e.target.files[0]);
        }
    }

    return (
        <div className={PI_classes.cover}>
            <div>
                <div>
                     <img src={props.profile.photos.large || avatar} className={PI_classes.avatar} alt="Avatar"/>
                    {props.isOwner && <input type="file" onChange={onAvatarChange}/>}
                </div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner}/>
            </div>
            <div className={PI_classes.descriptionBlock}>
                descriptionBlock
            </div>
        </div>

    );
}
    
export default ProfileInfo;
