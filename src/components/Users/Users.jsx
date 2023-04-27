import React from 'react';
import User from "./User/User";
import Paginator from "./Paginator/Paginator";
import Preloader from "../common/preloader/Preloader";

const Users = (props) => {

    return (
        <div>
            <Paginator currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}/>
            {
                props.isFetching
                ? <Preloader />
                : <User users={props.users}
                  followingInProgress={props.followingInProgress}
                  follow={props.follow}
                  unfollow={props.unfollow}/>
            }
        </div>

    );
}

export default Users;
