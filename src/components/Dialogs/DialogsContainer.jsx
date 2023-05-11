import {sendMessage} from "../../redux/dialogsReducer/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getDialogs, getMessages} from "../../redux/dialogsReducer/DialogsSelectors";


const DialogsContainer = (props) => {
    return (
        <Dialogs {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
        messages: getMessages(state),
        dialogs: getDialogs(state),
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage }),
    withAuthRedirect
)(DialogsContainer)