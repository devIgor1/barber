import { api } from "@/app/services/apiClient"
import { cookies } from "next/headers"

interface HaircutsProps {
  id: string
  name: string
  price: string
  userId: string
}

export default async function getHaircuts(haircuts: HaircutsProps) {
  const nextCookies = cookies()
  const token = nextCookies.get("@barber.token").value

  if (token) {
    try {
      const response = await api.get("/haircuts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.data) {
        haircuts = {
          id: response.data.id,
          name: response.data.name,
          price: response.data?.price,
          userId: response.data.userId,
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return haircuts
}
