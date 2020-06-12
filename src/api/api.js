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
        console.warn('Obsolete method. Please use profileAPI object');
        return profileAPI.getProfile(userId);
    }
};

const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
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
    profileAPI,
};