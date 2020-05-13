const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET_FRIENDS';


const initialState = {
    friendsData: [
        {
            id: 1,
            followed: true,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaqesW_4YUvdVSr3HyJVwKutuNjNZErzsrspdGMrG94FuYflnf',
            firstName: 'Dimych',
            lastName: 'Dima',
            status: 'I am a teacher',
            location: {
                country: 'Republic of Belarus',
                city: 'Minsk'
            }
        },
        {
            id: 2,
            followed: true,
            avatar: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg',
            firstName: 'Andrey',
            lastName: 'Gaytsuk',
            status: 'I am a father',
            location: {
                country: 'Ukraine',
                city: 'Dniprovokamyanka'
            }
        },
        {
            id: 3,
            followed: true,
            avatar: 'https://pristor.ru/wp-content/uploads/2017/03/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D1%81-%D0%BD%D0%B0%D0%B4%D0%BF%D0%B8%D1%81%D1%8F%D0%BC%D0%B8-%D1%81%D0%BE-%D1%81%D0%BC%D1%8B%D1%81%D0%BB%D0%BE%D0%BC-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D1%8B%D0%B5-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-13-320x320.jpg',
            firstName: 'Alex',
            lastName: 'Gaytsuk',
            status: 'I am the best of the best',
            location: {
                country: 'Ukraine',
                city: 'Dnipro'
            }
        },
        {
            id: 4,
            followed: false,
            avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg',
            firstName: 'Solnyshko',
            lastName: 'Yasnoe',
            status: 'I am a real person',
            location: {
                country: 'Ukraine',
                city: 'Dnipro'
            }
        },
        {
            id: 5,
            followed: false,
            avatar: 'https://i.work.ua/sent_photo/d/9/0/d905833989fbdd2146fd591ea84de831.jpg',
            firstName: 'Roman',
            lastName: 'Kopylov',
            status: 'I am a good friend',
            location: {
                country: 'Ukraine',
                city: 'Dnipro'
            }
        },
    ]
};

const friendsReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                 ...state,
                friendsData: state.friendsData.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }

                    return user
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                friendsData: state.friendsData.map(user => {
                    if (user.id = action.userId) {
                        return {...user, followed: false}
                    }

                    return user
                })
            };
        case SET_FRIENDS:
            return {
                ...state,
                friendsData: [...state.friendsData, ...action.friendsData]
            }
        default:
            return state
    }
};

const followAC = userId => ({ type: FOLLOW, userId });
const unfollowAC = userId => ({ type: UNFOLLOW, userId });
const setFriendsAC = friends => ({ type: SET_FRIENDS, friends });

export {
    followAC,
    unfollowAC,
    setFriendsAC,
}

export default friendsReducer;