import React from 'react';
import userPhoto from '../../../assets/images/avatar.png'
import Us_classes from './../Users.module.css'
import {NavLink} from "react-router-dom";

const User = (props) => {

    let usersElements = props.users.map(user => <div key={user.id}>
        <div className={Us_classes.photo}>
            <NavLink to={`/profile/${user.id}`}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="user"/>
            </NavLink>
        </div>
        <div>
            {user.followed
                ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                          onClick={() => { props.unfollow(user.id) }}>unfollow</button>

                : <button disabled={props.followingInProgress.some(id => id === user.id)}
                          onClick={() => { props.follow(user.id) }}>follow</button>}
        </div>
        <div>
            {user.name}
        </div>
    </div>)

    return (
        <div>{usersElements}</div>
    );
}

export default User;
