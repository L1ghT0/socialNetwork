import React from 'react';
import Nb_classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={Nb_classes.nav}>
            <div>
                <NavLink to='/profile/' className={navData => navData.isActive ? Nb_classes.active : Nb_classes.item}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs/' className={navData => navData.isActive ? Nb_classes.active : Nb_classes.item}>Message</NavLink>
            </div>
            <div className={Nb_classes.item}>
                <a>News</a>
            </div>
            <div className={Nb_classes.item}>
                <a>Music</a>
            </div>
            <div>
                <NavLink to='/users/' className={navData => navData.isActive ? Nb_classes.active : Nb_classes.item}>Find User</NavLink>
            </div>
            <div className={Nb_classes.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;
