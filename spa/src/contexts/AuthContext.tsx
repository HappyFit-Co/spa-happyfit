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
	email: string
	pwd: string
	weight: number
	height: number
	birthday: string
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

    useEffect(() => {
        const { '@auth.token': token } = parseCookies()

        if (token) {
            console.log(api.defaults.headers['Authorization'])
            api.get('/users')
            .then(setIsAuthenticated(true) as any)
            .catch((err) => {
                logout()
            })
            
        }
    }, [])

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
            if (err.name === "TypeError") {
                throw new Error(err+"ERRO DE CONEXÃO 🌐")
            } else if (err.name === "AxiosError") {
                throw new Error(err+"Usuário/Senha incorreto(s)")
            } else {
                throw new Error(err)
            }
        }
    }

    async function register({ name, email, password, weight, height, birthday, activity_level }: any) {
        await new Promise(r => setTimeout(r, 500))
        try {
            await api.post('/users', { name, email, password, weight, height, birthday, activity_level })
            setIsAuthenticated(true)
            return true
        } catch (err: any) {
            if (err.name === "TypeError") {
                throw new Error("ERRO DE CONEXÃO 🌐")
            } else if (err.name === "AxiosError") {
                throw new Error("Email já cadastrado!")
            } else {
                throw new Error(err)
            }
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, register } as any}>
            {children}
        </AuthContext.Provider>
    )
}
