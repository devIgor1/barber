"use client"

import { AuthContext } from "@/app/context/AuthContext"
import { useContext } from "react"
import { CiLogout } from "react-icons/ci"

interface LogoutButtonProps {
  className?: string
}

const LogoutButton = ({ className }: LogoutButtonProps) => {
  const { logoutUser } = useContext(AuthContext)

  return (
    <button onClick={logoutUser} className={className}>
      <h1>Logout</h1>
      <CiLogout size={30} />
    </button>
  )
}

export default LogoutButton
