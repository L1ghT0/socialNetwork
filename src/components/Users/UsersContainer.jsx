import {connect} from "react-redux";
import {
    follow,
    unfollow,
    requestUsers
} from "../../redux/UsersReducer";
import Users from "./Users";
import React, {useEffect} from "react";
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

    useEffect(()=>{
        props.requestUsers();
    }, [!props.users])

    const onPageChanged = (e) => {
        props.requestUsers(+e.target.innerText, props.pageSize);
    }

    return (<> {props.isFetching ? <Preloader /> : null}
        <Users {...props} onPageChanged={onPageChanged}/>
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
    requestUsers
})(UsersContainer);