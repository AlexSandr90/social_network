import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import friendsReducer from "./friendsReducer";
import {
    addPostActionCreater,
    updatePostDataActionCreater
} from "./profileReducer";
import {
    addMessageActionCreator,
    updateMessageDataActionType
} from "./dialogsReducer";


const store = {

    _callSubsciber() {
        console.log('State changed')
    },

    _state: {
        profilePage: {
            postData: [
                {
                    id: 1,
                    message: 'Hi, how are you?',
                    likesCount: 12,
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaqesW_4YUvdVSr3HyJVwKutuNjNZErzsrspdGMrG94FuYflnf'
                },
                {
                    id: 2,
                    message: 'Its my first post',
                    likesCount: 102,
                    avatar: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg'
                },
                {
                    id: 3,
                    message: 'You are Superman',
                    likesCount: 2,
                    avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'
                },
                {
                    id: 4,
                    message: 'You are so sexy',
                    likesCount: 1,
                    avatar: 'https://pristor.ru/wp-content/uploads/2017/03/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D1%81-%D0%BD%D0%B0%D0%B4%D0%BF%D0%B8%D1%81%D1%8F%D0%BC%D0%B8-%D1%81%D0%BE-%D1%81%D0%BC%D1%8B%D1%81%D0%BB%D0%BE%D0%BC-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D1%8B%D0%B5-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-13-320x320.jpg'
                },
                {
                    id: 5,
                    message: 'You are so sexy',
                    likesCount: 15,
                    avatar: 'https://steamuserimages-a.akamaihd.net/ugc/927045848749581623/9C40119AF9CDDEE16EC0B9D40CF04AF15C6AB3C5/'
                },
                {
                    id: 6,
                    message: 'You are so sexy',
                    likesCount: 98,
                    avatar: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'
                },
                {
                    id: 7,
                    message: 'You are so sexy',
                    likesCount: 0,
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaqesW_4YUvdVSr3HyJVwKutuNjNZErzsrspdGMrG94FuYflnf'
                },
            ],
            newPostData: 'it-kamasutra.com',
        },
        dialogsPage: {
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
        },
        navbarPage: {

        },
        friendsPage: {
            friendsData: [
                {
                    id: 1,
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaqesW_4YUvdVSr3HyJVwKutuNjNZErzsrspdGMrG94FuYflnf',
                    firstName: 'Dimych',
                    lastName: 'Dima',
                },
                {
                    id: 2,
                    avatar: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg',
                    firstName: 'Andrey',
                    lastName: 'Gaytsuk',
                },
                {
                    id: 3,
                    avatar: 'https://pristor.ru/wp-content/uploads/2017/03/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D1%81-%D0%BD%D0%B0%D0%B4%D0%BF%D0%B8%D1%81%D1%8F%D0%BC%D0%B8-%D1%81%D0%BE-%D1%81%D0%BC%D1%8B%D1%81%D0%BB%D0%BE%D0%BC-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D1%8B%D0%B5-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-13-320x320.jpg',
                    firstName: 'Alex',
                    lastName: 'Gaytsuk',
                },
                {
                    id: 4,
                    avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg',
                    firstName: 'Solnyshko',
                    lastName: 'Yasnoe',
                },
                {
                    id: 5,
                    avatar: 'https://i.work.ua/sent_photo/d/9/0/d905833989fbdd2146fd591ea84de831.jpg',
                    firstName: 'Roman',
                    lastName: 'Kopylov',
                },
            ]
        },
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubsciber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbarPage = navbarReducer(this._state.navbarPage, action);
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action);

        this._callSubsciber(this._state);

    },
};

// export default store;