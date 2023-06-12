import { destroyCookie, parseCookies, setCookie } from "nookies";
import { ReactNode, createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { api } from '../services/apiClient';

import 'react-toastify/dist/ReactToastify.css';

const navigate = useNavigate();

type userProps = {
    name: string
    email: string
}

type loginProps = {
    email: string
    pwd: string
}

type logoutProps = {
    SignUpPropsemail: string
    password: string
    name: string
}

type AuthContextData = {
    user: userProps
    isAuthenticated: boolean
    register: (credentials: loginProps) => Promise<void>
    singOut: () => void
    singUp: (credentials: logoutProps) => Promise<void>
}

type AuthProviderProps = {
    children: ReactNode
}

export function logout() {
    try {
        destroyCookie(undefined, '@auth.token')
        navigate('/')
    } catch {

    }
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<userProps>()
    const isAuthenticated = !!user

    useEffect(() => {
        const { '@auth.token': token } = parseCookies()

        if (token) {
            api.get('/me').catch(() => {
                logout()
            })
        }
    }, [])

    async function login({ email, pwd }: loginProps) {
        await new Promise(r => setTimeout(r, 500));
        try {
            const response = await api.post('/auth', { email, pwd })
            const { access_token } = response.data

            //SETANDO TOKEN NOS COOKIES PARA PODER USAR AO ENTRAR NO APP NOVAMENTE
            setCookie(undefined, '@auth.token', access_token, {
                maxAge: 60 * 60 * 24 * 2, // COOKIES VAI EXPIRAR EM 2 DIAS
                path: '/'
            })

            //COLOCANDO TOKEN DENTRO DO OBJETO DA API
            api.defaults.headers['Authorization'] = `Bearer ${access_token}`

            //REDIRECIONAR PARA ABA PEDIDOS
            navigate('/dashboard')

        } catch (err: any) {
            if (err.name === "TypeError") {
                throw new Error("ERRO DE CONEXÃO 🌐")
            } else if (err.name === "AxiosError") {
                throw new Error("Usuário/Senha incorreto(s)")
            } else {
                throw new Error(err)
            }

        }
    }


    async function register({ name, email, password, weight, height, birthday, activity_level }: any) {
        await new Promise(r => setTimeout(r, 500))
        try {
            await api.post('/users', { name, email, password, weight, height, birthday, activity_level })
            navigate('/')
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
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout, register } as any}>
            {children}
        </AuthContext.Provider>
    )
}