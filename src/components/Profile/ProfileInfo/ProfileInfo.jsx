import React from 'react';
import PI_classes from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader />
    }
    return (
        <div className={PI_classes.cover}>
            {/*<img src="https://img5.goodfon.ru/wallpaper/nbig/6/c5/colors-wallpaper-polymer-clay.jpg" alt=""/>*/}
            <div>
                <img src={props.profile.photos.large} alt=""/>
                <ProfileStatus status={props.status}
                               updateStatus={props.updateStatus}/>
            </div>
            <div className={PI_classes.descriptionBlock}>
                descriptionBlock
            </div>
        </div>

    );
}
    
export default ProfileInfo;
