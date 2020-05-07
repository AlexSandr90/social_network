const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_DATA = 'UPDATE-MESSAGE-DATA';

const initialState = {
    dialogsData: [
        {
            id: 1,
            name: 'Dimych',
            itemImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaqesW_4YUvdVSr3HyJVwKutuNjNZErzsrspdGMrG94FuYflnf'
        },
        {
            id: 2,
            name: 'Andrey',
            itemImg: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg'
        },
        {
            id: 3,
            name: 'Alex',
            itemImg: 'https://pristor.ru/wp-content/uploads/2017/03/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D1%81-%D0%BD%D0%B0%D0%B4%D0%BF%D0%B8%D1%81%D1%8F%D0%BC%D0%B8-%D1%81%D0%BE-%D1%81%D0%BC%D1%8B%D1%81%D0%BB%D0%BE%D0%BC-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D1%8B%D0%B5-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-13-320x320.jpg'
        },
        {
            id: 4,
            name: 'Solnyshko',
            itemImg: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'
        },
        {
            id: 5,
            name: 'Roma',
            itemImg: 'https://steamuserimages-a.akamaihd.net/ugc/927045848749581623/9C40119AF9CDDEE16EC0B9D40CF04AF15C6AB3C5/'
        },
    ],
    messagesData: [
        {id:1, message: 'Hi'},
        {id:2, message: 'How are you'},
        {id:3, message: 'How do you do'}
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:

            let message = {
                id: state.messagesData.length + 1,
                message: state.newMessageText
            };

            if (state.newMessageText !== undefined && state.newMessageText.length > 0) {
                return  {
                    ...state,
                    newMessageText: '',
                    messagesData: [...state.messagesData, message]
                };
            }
        case UPDATE_MESSAGE_DATA:
            return  {
                ...state,
                newMessageText: action.message
            };
        default:
            return  {...state};
    }
};

const addMessageActionCreator = () => ({type: ADD_MESSAGE});

const updateMessageDataActionType = message => {
    return ({
        type: UPDATE_MESSAGE_DATA,
        message: message
    })
};

export {
    addMessageActionCreator,
    updateMessageDataActionType
}

export default dialogsReducer;