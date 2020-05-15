const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET_FRIENDS';


const initialState = {
    friendsData: [ ]
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
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }

                    return user
                })
            };
        case SET_FRIENDS:
            return {
                ...state,
                friendsData: [...state.friendsData, ...action.friends]
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