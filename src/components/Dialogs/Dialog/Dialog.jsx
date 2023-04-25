import React from "react";
import D_classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={D_classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default Dialog