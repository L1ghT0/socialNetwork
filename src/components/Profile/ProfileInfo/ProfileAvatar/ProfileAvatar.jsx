import React from 'react';
import PA_classes from './ProfileAvatar.module.css'
import avatar from '../../../../assets/images/avatar.png'

const ProfileAvatar = (props) => {
    const onAvatarChange = (e) => {
        if (e.target.files.length) {
            props.updateAvatar(e.target.files[0]);
        }
    }

    return (
        <div className={PA_classes.avatarWrapper}>
            <img src={props.photos.large || avatar} className={PA_classes.photo} alt="Avatar"/>
            {props.isOwner &&
                <div className={PA_classes.uploadAvatar}>
                    <input type="file" onChange={onAvatarChange} id="upload-avatar" accept="image/png,image/jpeg"/>
                    <label htmlFor="upload-avatar"></label>
                </div>}
        </div>
    );
}

export default ProfileAvatar;
