import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "d4f0d1eb-396b-489d-ba9d-1d27ae211576"
    }
})


export const usersApi = {

    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,).then(response => response.data)
    },
    follow(userId){
        return instance.post(`follow/${userId}`,)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`,)
    },
    getProfile(userId){
        console.warn("Obsolete method, please use profileApi.getProfile instead");
        return profileApi.getProfile(userId);
    }
}
export const profileApi = {

    getProfile(userId){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put('profile/status', { status: status })
    }
}


export const authApi = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}