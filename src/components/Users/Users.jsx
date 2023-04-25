import React from 'react';
import userPhoto from './../../assets/images/user.png'
import U_classes from './Users.module.css'
import {NavLink} from "react-router-dom";

const Users = (props) => {

    let pages = [];
    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesCount = 20;
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    pages = pages.map(p => {
        return <span className={props.currentPage === p && U_classes.selectedPage}>{p}</span>
    })

    let usersElements = props.users.map(user => <div key={user.id}>
        <div className={U_classes.photo}>
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
        <div>
            <div className={U_classes.pages} onClick={props.onPageChanged}>{pages}</div>
            <div>{usersElements}</div>
            <div>
                <button onClick={props.requestUsers}>get more users</button>
            </div>
        </div>

    );
}

export default Users;
