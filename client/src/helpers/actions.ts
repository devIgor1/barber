import { api } from "@/app/services/apiClient"
import { cookies } from "next/headers"

interface UserProps {
  id: string
  name: string
  email: string
  address: string | null
  premium: boolean
  token: string
}

export default async function getUser(user: UserProps) {
  const nextCookies = cookies()
  const token = nextCookies.get("@barber.token").value

  try {
    if (token) {
      const response = await api.get("/me", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })

      if (response.data) {
        user = {
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          address: response.data?.address,
          premium:
            response.data?.subscriptions?.status === "ACTIVE" ? true : false,
          token,
        }
      }
    }
  } catch (err) {
    console.log(err)
  }

  return user
}
