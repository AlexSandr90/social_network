const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_DATA = 'UPDATE-MESSAGE-DATA';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let message = {
                id: state.messagesData.length + 1,
                message: state.newMessageText
            };

            if (state.newMessageText !== undefined && state.newMessageText.length > 0) {
                state.messagesData.push(message);
                // console.log(this._state.dialogsPage.messagesData);
                state.newMessageText = '';
                return state;
            }
            return state;
        case UPDATE_MESSAGE_DATA:
            state.newMessageText = action.message;
            return state;
        default:
            return state;
    }
};

export default dialogsReducer;