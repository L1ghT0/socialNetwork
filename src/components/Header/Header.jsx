import React from 'react';
import H_classes from './Header.module.css'
import Logo from './../../assets/images/Logo.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={H_classes.header_page}>
            <div className={H_classes.header}>
                <img src={Logo} alt="Logo"/>
                <div className={H_classes.auth}>
                    {props.isAuthorized
                        ? <div>{props.login}
                            <button onClick={props.logout}>Log out</button>
                        </div>
                        : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </header>
    );
}

export default Header;
