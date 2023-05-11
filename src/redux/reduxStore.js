import {combineReducers} from "redux";
import dialogReducer from "./dialogsReducer/DialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./UsersReducer";
import authReducer from "./authReducer";
import {reducer as formReducer} from "redux-form";
import appReducer from "./appReducer";
import {configureStore} from "@reduxjs/toolkit";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = configureStore({
    reducer: rootReducer
})

export default store;
