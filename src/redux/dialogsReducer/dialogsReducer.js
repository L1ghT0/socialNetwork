import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    dialogsData: [
        {id: 1, name: 'unknown'},
        {id: 2, name: 'unknown'},
        {id: 3, name: 'unknown'},
        {id: 4, name: 'unknown'},
    ],
    messagesData: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'hello'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Whats up'},
    ],
}

const dialogsSlice = createSlice({
    name: "dialogs",
    initialState: initialState,
    reducers: {
        sendMessage(state, action) {
            let id = state.messagesData.length + 1;
            state.messagesData.push({id: id, message: action.payload})
        }
    }
})

export const { sendMessage } = dialogsSlice.actions
export default dialogsSlice.reducer