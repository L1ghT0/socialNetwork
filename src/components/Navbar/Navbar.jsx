import React from 'react';
import Nb_classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={Nb_classes.nav}>
            <div>
                <NavLink to='/profile/' className={navData => navData.isActive ? Nb_classes.active : Nb_classes.item}>
                    <div className={Nb_classes.spriteUser + ' ' + Nb_classes.sprites}></div>
                    Profile
                </NavLink>
            </div>
            <div>
                <NavLink to='/dialogs/' className={navData => navData.isActive ? Nb_classes.active : Nb_classes.item}>
                    <div className={Nb_classes.spriteMessage + ' ' + Nb_classes.sprites}></div>
                    Message
                </NavLink>
            </div>
            <div className={Nb_classes.item}>
                <NavLink to='/news/' className={navData => navData.isActive ? Nb_classes.active : Nb_classes.item}>
                    <div className={Nb_classes.spriteNews + ' ' + Nb_classes.sprites}></div>
                    News
                </NavLink>
            </div>
            <div className={Nb_classes.item}>
                <NavLink to='/music/' className={navData => navData.isActive ? Nb_classes.active : Nb_classes.item}>
                    <div className={Nb_classes.spriteMusicalNote + ' ' + Nb_classes.sprites}></div>
                    Music
                </NavLink>
            </div>
            <div>
                <NavLink to='/users/' className={navData => navData.isActive ? Nb_classes.active : Nb_classes.item}>
                    <div className={Nb_classes.spriteGroup + ' ' + Nb_classes.sprites}></div>
                    Find User
                </NavLink>
            </div>
            <div className={Nb_classes.item}>
                <NavLink to='/settings/' className={navData => navData.isActive ? Nb_classes.active : Nb_classes.item}>
                    <div className={Nb_classes.spriteSetting + ' ' + Nb_classes.sprites}></div>
                    Settings
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
