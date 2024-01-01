import { api } from "@/app/services/apiClient"
import MobileNav from "@/components/shared/MobileNav"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { cookies } from "next/headers"
import ProfileContent from "./components/ProfileContent"

const Profile = async () => {
  const nextCookies = cookies()
  const token = nextCookies.get("@barber.token").value

  try {
    if (token) {
      const response = await api.get("/me", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
    }
  } catch (err) {
    console.log(err)
  }

  return <ProfileContent />
}

export default Profile
