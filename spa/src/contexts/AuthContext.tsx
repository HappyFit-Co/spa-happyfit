import { destroyCookie, parseCookies, setCookie } from "nookies";
import { ReactNode, createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { api } from '../services/apiClient';

import 'react-toastify/dist/ReactToastify.css';

const navigate = useNavigate();

type UserProps = {
    id: string
    name: string
    email: string
}

type SignInProps = {
    email: string
    password: string
}

type SignUpProps = {
    email: string
    password: string
    name: string
}

type AuthContextData = {
    user: UserProps
    isAuthenticated: boolean
    signIn: (credentials: SignInProps) => Promise<void>
    singOut: () => void
    singUp: (credentials: SignUpProps) => Promise<void>
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
    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user

    useEffect(() => {
        const { '@auth.token': token } = parseCookies()

        if (token) {
            api.get('/me').then(response => {
                const { id, name, email } = response.data
                setUser({
                    id,
                    name,
                    email
                })

            }).catch(() => {
                logout()
            })
        }
    }, [])

    async function signIn({ email, password }: SignInProps) {
        await new Promise(r => setTimeout(r, 500));
        try {
            const response = await api.post('/auth', { email, password })
            const { id, name, token } = response.data

            //SETANDO TOKEN NOS COOKIES PARA PODER USAR AO ENTRAR NO APP NOVAMENTE
            setCookie(undefined, '@auth.token', token, {
                maxAge: 60 * 60 * 24 * 30, // COOKIES VAI EXPIRAR EM 1 MES
                path: '/'
            })

            //SALVANDO INFOS DO USER NO USESTATE DO CONTEXT
            setUser({
                id,
                name,
                email
            })

            //COLOCANDO TOKEN DENTRO DO OBJETO DA API
            api.defaults.headers['Authorization'] = `Bearer ${token}`

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

    async function singUp({ name, email, password }: SignUpProps) {
        await new Promise(r => setTimeout(r, 500))
        try {
            await api.post('/users', { name, email, password })
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
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, logout, singUp } as any}>
            {children}
        </AuthContext.Provider>
    )
}