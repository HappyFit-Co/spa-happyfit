import { destroyCookie, parseCookies, setCookie } from "nookies";
import { ReactNode, createContext, useEffect, useState } from "react";

import { api } from '../services/apiClient';

type userProps = {
    name: string
    email: string
}

type loginProps = {
    email: string
    pwd: string
}

type registerProps = {
    name: string
    email: string,
    pwd: string,
    weight: number,
    height: number,
    birthday: string,
    sex: string,
    activity_level: string
}

type AuthContextData = {
    user: userProps
    isAuthenticated: boolean
    login: (credentials: loginProps) => Promise<void>
    logout: () => void
    register: (credentials: registerProps) => Promise<void>
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
    const [isAuthenticated, setIsAuthenticated] = useState<any>(false)

    async function loginVerify() {
        const { '@auth.token': token } = parseCookies()

        if (token) {
            api.get('/users/')
                .then(setIsAuthenticated(true) as any)
                .catch((err) => {
                    logout()
                })
        }
    }

    useEffect(() => {
        loginVerify()
    }, [isAuthenticated])

    async function logout() {
        try {
            destroyCookie(undefined, '@auth.token')
            setIsAuthenticated(false)
            return true
        } catch {
            return false
        }
    }

    async function login({ email, pwd }: loginProps) {
        await new Promise(r => setTimeout(r, 100));
        try {
            const response = await api.post('/users/login', { email, pwd })
            const { access_token } = response.data

            setCookie(undefined, '@auth.token', access_token, {
                maxAge: 60 * 60 * 24 * 2, // COOKIES VAI EXPIRAR EM 2 DIAS
                path: '/'
            })

            api.defaults.headers['Authorization'] = `Bearer ${access_token}`

            setIsAuthenticated(true)
            return true

        } catch (err: any) {
            throw new Error(err.response.data.msg)
        }
    }

    async function register({ name, email, pwd, weight, height, birthday, sex, activity_level }: registerProps) {
        await new Promise(r => setTimeout(r, 100))
        try {
            const userData = { name, email, pwd, weight, height, birthday, sex, activity_level }
            await api.post('/users/', userData)
            return true
        } catch (err: any) {
            throw new Error(err.response.data.msg)
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, register } as any}>
            {children}
        </AuthContext.Provider>
    )
}
