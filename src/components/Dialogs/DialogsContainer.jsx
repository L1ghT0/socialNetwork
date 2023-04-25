import {sendMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const DialogsContainer = (props) => {
    return (
        <Dialogs {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage }),
    withAuthRedirect
)(DialogsContainer)