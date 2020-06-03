import {usersAPI} from "../api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET_FRIENDS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_TOTAL_FRIENDS_COUNT = 'SET_TOTAL_FRIENDS_COUNT';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
    friendsData: [ ],
    pageSize: 5,
    totalFriendsCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        }
        default:
            return state
    }
};

const setFriends = friends => ({ type: SET_FRIENDS, friends });
const followSuccess = userId => ({ type: FOLLOW, userId });
const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage});
const unfollowSuccess = userId => ({ type: UNFOLLOW, userId });
const toggleIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching });
const setTotalFriendsCount = totalFriendsCount => ({type: SET_TOTAL_FRIENDS_COUNT, count: totalFriendsCount,});
const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

const getUsers = (currentPage, pageSize) => {
    return  dispatch => {
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setFriends(data.items));
                dispatch(setTotalFriendsCount(data.totalCount));
            })
    };
};

const follow = userId => {
    return dispatch => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.getFollow(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }

                dispatch(toggleFollowingProgress(false, userId))
            })
    }
};

const unfollow = userId => {
    return dispatch => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.getUnfollow(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }

                dispatch(toggleFollowingProgress(false, userId))
            })
    }
};

export {
    follow,
    unfollow,
    getUsers,
    setFriends,
    setCurrentPage,
    toggleIsFetching,
    setTotalFriendsCount,
    toggleFollowingProgress,
}

export default friendsReducer;