import React from 'react';
import U_classes from './Users.module.css'
import User from "./User/User";

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

    return (
        <div>
            <div className={U_classes.pages} onClick={props.onPageChanged}>{pages}</div>
            <User users={props.users}
                  followingInProgress={props.followingInProgress}
                  follow={props.follow}
                  unfollow={props.unfollow}/>
            <div>
                <button onClick={props.requestUsers}>get more users</button>
            </div>
        </div>

    );
}

export default Users;
