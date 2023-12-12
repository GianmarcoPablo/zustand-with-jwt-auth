import axios from "axios"
import { useAuthStore } from "../store/counterStore"


const authApi = axios.create({
    baseURL: "http://localhost:4000/api",
    withCredentials: true
})

authApi.interceptors.request.use(config => {
    const token = useAuthStore.getState().token
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`
    } else {
        delete config.headers["Authorization"]
    }
    return config
})

export {
    authApi
}