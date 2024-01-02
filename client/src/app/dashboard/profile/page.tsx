import getUser from "../../../helpers/getUser"
import ProfileContent from "./components/ProfileContent"

interface UserProps {
  id: string
  name: string
  email: string
  address: string | null
  premium: boolean
  token: string
}

export default async function Profile(user: UserProps) {
  const userData = await getUser(user)

  return <ProfileContent data={userData} premium={userData.premium} />
}
