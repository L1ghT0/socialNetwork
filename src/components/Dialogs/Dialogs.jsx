import React from "react";
import D_classes from './Dialogs.module.css'
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs
        .map(dialog => <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/>);

    let messagesElements = props.messages
        .map(message => <Message message={message.message} id={message.id} key={message.id}/>);


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText);
    }

    return (
        <div className={D_classes.dialogs}>
            <div className={D_classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={D_classes.messages}>
                <div>
                    {messagesElements}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

let maxLegth = maxLengthCreator(20);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLegth]}
                       name='newMessageText'
                       placeholder='Enter new message'/>
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogMessageForm'})(AddMessageForm)

export default Dialogs