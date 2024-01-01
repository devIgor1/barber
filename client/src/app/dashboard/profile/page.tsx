import MobileNav from "@/components/shared/MobileNav"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import getUser from "../actions"
import ProfileContent from "./components/ProfileContent"

interface UserProps {
  id: string
  name: string
  email: string
  address: string | null
  premium: boolean
}

export default async function Profile(user: UserProps) {
  const userData = await getUser(user)

  return (
    <>
      <ProfileContent user={userData} premium={userData.premium} />
    </>
  )
}
