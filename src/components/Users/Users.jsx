import React from 'react';
import U_classes from './Users.module.css'
import User from "./User/User";
import Paginator from "./Paginator/Paginator";

const Users = (props) => {

    return (
        <div>
            <Paginator currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}/>
            <User users={props.users}
                  followingInProgress={props.followingInProgress}
                  follow={props.follow}
                  unfollow={props.unfollow}/>
        </div>

    );
}

export default Users;
