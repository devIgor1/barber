"use client"

import { AuthContext } from "@/app/context/AuthContext"
import { useContext } from "react"
import { CiLogout } from "react-icons/ci"

const LogoutButton = () => {
  const { logoutUser } = useContext(AuthContext)

  return (
    <button
      onClick={logoutUser}
      className="flex-center gap-3 border-2 border-white p-2 rounded-lg hover:scale-95 duration-300"
    >
      <h1>Logout</h1>
      <CiLogout size={30} />
    </button>
  )
}

export default LogoutButton
