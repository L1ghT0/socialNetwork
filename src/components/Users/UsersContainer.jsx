import {connect} from "react-redux";
import {
    follow,
    unfollow,
    toggleFollowingInProgress,
    requestUsers
} from "../../redux/UsersReducer";
import Users from "./Users";
import React from "react";
import Preloader from "./../common/preloader/Preloader"
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/UsersSelectors";


const UsersContainer = (props) => {

    let requestUsers = () => {
        props.requestUsers(props.currentPage, props.pageSize);
    }

    const onPageChanged = (e) => {
        props.requestUsers(+e.target.innerText, props.pageSize);
    }

    return (<> {props.isFetching ? <Preloader /> : null}
        <Users requestUsers={requestUsers}
               onPageChanged={onPageChanged}
               totalUsersCount={props.totalUsersCount}
               pageSize={props.pageSize}
               currentPage={props.currentPage}
               users={props.users}
               follow={props.follow}
               unfollow={props.unfollow}
               followingInProgress={props.followingInProgress}/>
    </>)
}


let mapStateToProps = (state) => {

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(follow(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollow(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUser(users))
//         },
//         setTotalUsersCount: (totalUsers) => {
//             dispatch(setTotalUsersCount(totalUsers))
//         },
//         toggleIsFetching: (fetching) => {
//             dispatch(toggleIsFetching(fetching))
//         }
//     }
//
// }

export default connect(mapStateToProps, {
    follow,
    unfollow,
    toggleFollowingInProgress, // this method is not used ?
    requestUsers
})(UsersContainer);