"use client"

import { createContext, ReactNode, useEffect, useState } from "react"
import { destroyCookie, parseCookies, setCookie } from "nookies"
import Router from "next/router"
import { api } from "../services/apiClient"
import { useRouter } from "next/navigation"

interface AuthContextData {
  user: UserProps | undefined
  isAuthenticated: boolean
  signIn: (credentials: SignInProps) => Promise<void>
  signUp: (credentials: SignUpProps) => Promise<void>
  logoutUser: () => Promise<void>
}

interface UserProps {
  id: string
  name: string
  email: string
  address: string | null
  token: string
  subscriptions?: SubscriptionProps | null
}

interface SubscriptionProps {
  id: string
  status: string
}

interface SignInProps {
  email: string
  password: string
}

interface SignUpProps {
  name: string
  email: string
  password: string
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut() {
  try {
    destroyCookie(null, "@barber.token", { path: "/" })
    Router.push("/sign-in")
  } catch (error) {
    console.log(error)
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProps | any>()

  const isAuthenticated = !!user
  const router = useRouter()

  useEffect(() => {
    const { "@barber.token": token } = parseCookies()

    if (token) {
      api
        .get("/me", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          const { id, name, address, email, subscriptions } = response.data
          setUser({
            id,
            name,
            address,
            email,
            subscriptions,
          })
        })
        .catch((err) => {
          logoutUser()
        })
    }
  }, [])

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api.post("/session", {
        email,
        password,
      })

      const { id, name, token, subscriptions, address } = response.data

      setCookie(undefined, "@barber.token", token, {
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      })

      setUser({ id, name, email, address, subscriptions })

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      router.push("/dashboard")
    } catch (error) {
      console.log(error)
    }
  }

  async function signUp({ name, email, password }: SignUpProps) {
    try {
      await api.post("/users", {
        name,
        email,
        password,
      })

      router.push("/sign-in")
    } catch (error) {
      console.log(error)
    }
  }

  async function logoutUser() {
    try {
      destroyCookie(null, "@barber.token", { path: "/" })
      router.push("/sign-in")
      setUser(null)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, signUp, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}
