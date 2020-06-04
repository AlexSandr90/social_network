import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f764e591-9a1f-433c-8b12-0d58c3ad9e13"
    }
});

const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return (
            instance.get(`users?page=${currentPage}&count${pageSize}`)
                .then(res => {
                    return res.data;
                })
        )
    },
    getFollow(userId) {
        return instance.post(`follow/${userId}`)
    },
    getUnfollow(useId) {
        return instance.delete(`follow/${useId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    }
};

const authApi = {
    getMe() {
        return instance.get(`auth/me`)
    },
};

export {
    authApi,
    usersAPI,
};