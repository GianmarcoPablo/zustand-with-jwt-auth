import { authApi } from "../libs/axios"

const loginRequest = async (email: string, password: string) => {
    try {
        const { data } = await authApi.post("/auth/login", {
            email,
            password
        })
        return data
    } catch (error) {
        console.log(error);
    }
}

const profileRequest = async () => {
    const { data } = await authApi.get("/auth/profile")
    return data
}

export {
    loginRequest,
    profileRequest
}