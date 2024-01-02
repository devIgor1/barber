"use client"

import { AuthContext } from "@/app/context/AuthContext"
import { useContext } from "react"
import { CiLogout } from "react-icons/ci"

interface LogoutButtonProps {
  className?: string
}

const LogoutButton = ({ className }: LogoutButtonProps) => {
  const { logoutUser } = useContext(AuthContext)

  async function handleLogoutUser() {
    await logoutUser()
  }

  return (
    <button onClick={handleLogoutUser} className={className}>
      <h1>Logout</h1>
      <CiLogout size={30} />
    </button>
  )
}

export default LogoutButton
