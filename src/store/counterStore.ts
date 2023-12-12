import { create } from "zustand";
import { persist } from "zustand/middleware"

type State = {
    token: string,
    profile: any,
    isAuth: boolean
}

type Actions = {
    setToken: (token: string) => void,
    setProfile: (profile: any) => void,
    logout: () => void
}

export const useAuthStore = create(persist<State & Actions>((set) => ({
    token: "",
    setToken: (token: string) => set(() => ({
        token,
        isAuth: true
    })),
    profile: {},
    setProfile: (profile: any) => set(() => ({ profile })),
    isAuth: false,
    logout: () => set(() => ({
        token: "",
        profile: {},
        isAuth: false
    }))
}), {
    name: "auth"
}))
