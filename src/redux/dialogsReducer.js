const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 5, message: action.newMessageText }],
            }
        default:
            break;
    }
    return state;
}

export const sendMessage = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText });

export default dialogReducer