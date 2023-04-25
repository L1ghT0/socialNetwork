import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";


let mapStateToPropsForRedirect = (state) => {
    return {
        isAuthorized: state.auth.isAuthorized
    }
}

export const withAuthRedirect = (Component) => {
    const withAuthRedirectComponent = (props) => {
        if (!props.isAuthorized) {
            return <Navigate to={'/login'} />
        }
        return <Component {...props}/>
    }

    return connect(mapStateToPropsForRedirect)(withAuthRedirectComponent);
}
