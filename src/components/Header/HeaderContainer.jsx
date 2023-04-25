import React, {useEffect} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/authReducer";


const HeaderContainer = (props) => {

    useEffect(() => {
        props.getAuthUserData();
    }, [])

    return (
        <Header {...props}/>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthorized: state.auth.isAuthorized,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);
