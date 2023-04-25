import React from "react";
import D_classes from './../Dialogs.module.css'

const Message = (props) => {
    return <div className={D_classes.message}>{props.message}</div>
}

export default Message