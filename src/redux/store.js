import dialogReducer from './dialogsReducer'
import profileReducer from './profileReducer'

let store = {
    _renderEntireTree(){
    },
    subscribe(observer) {
        this._renderEntireTree = observer;
    },

    _state: {
        profilePage: {
            postsData: [
                {id: 1, postText: 'Hi, how are you?', Likes: 12},
                {id: 2, postText: 'Its my first post', Likes: 6}
            ],
            newPostText: ''
        },
        dialogPage: {
            dialogsData: [
                {id: 1, name: 'unknown'},
                {id: 2, name: 'unknown'},
                {id: 3, name: 'unknown'},
                {id: 4, name: 'unknown'},
                {id: 5, name: 'unknown'}
            ],
            messagesData: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'hello'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Whats up'},
            ],
            newMessageText: ''
        }
    },
    getState(){
      return this._state;
    },

    dispatch(action){

        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._renderEntireTree(store);
    },

}

export default store

