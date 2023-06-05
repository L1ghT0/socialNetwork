import React, {useEffect} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginForm from "./components/Login/LoginForm";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/preloader/Preloader";
import {compose} from "redux";

function App(props) {

    useEffect(() => {
        props.initializeApp();
    }, [])

    if (!props.initialized){
        return <Preloader />
    }
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <div className="page_layout">
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                        <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                        <Route path='/users/*' element={<UsersContainer />}/>
                        <Route path='/login' element={<LoginForm />}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(

    connect(mapStateToProps, {initializeApp})
)(App);
