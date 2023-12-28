"use client"

import { createContext, ReactNode, useState } from "react"

interface AuthContextData {
  user: UserProps | undefined
  isAuthenticated: boolean
  signIn: (credentials: SignInProps) => Promise<void>
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

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProps>()
  const isAuthenticated = !!user

  async function signIn({ email, password }: SignInProps) {}

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
