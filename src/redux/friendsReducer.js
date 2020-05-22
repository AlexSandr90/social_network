const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET_FRIENDS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_FRIENDS_COUNT = 'SET_TOTAL_FRIENDS_COUNT';


const initialState = {
    friendsData: [ ],
    pageSize: 5,
    totalFriendsCount: 0,
    currentPage: 1,
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
                friendsData: action.friends
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case SET_TOTAL_FRIENDS_COUNT:
            return {
                ...state,
                totalFriendsCount: action.count,
            };
        default:
            return state
    }
};

const followAC = userId => ({ type: FOLLOW, userId });
const unfollowAC = userId => ({ type: UNFOLLOW, userId });
const setFriendsAC = friends => ({ type: SET_FRIENDS, friends });
const setCurrentPageAC = currentPage => ({type: SET_CURRENT_PAGE, currentPage});
const setTotalFriendsCountAC = totalFriendsCount => ({type: SET_TOTAL_FRIENDS_COUNT, count: totalFriendsCount,});

export {
    followAC,
    unfollowAC,
    setFriendsAC,
    setCurrentPageAC,
    setTotalFriendsCountAC,
}

export default friendsReducer;