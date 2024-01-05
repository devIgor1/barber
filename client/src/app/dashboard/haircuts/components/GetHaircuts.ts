import { api } from "@/app/services/apiClient"
import { cookies } from "next/headers"

interface HaircutsItem {
  id: string
  name: string
  price: number | string
  status: boolean
  userId: string
}

interface HaircutsProps {
  haircuts: HaircutsItem[]
}

export default async function getHaircuts({ haircuts }: HaircutsProps) {
  const nextCookies = cookies()
  const token = nextCookies.get("@barber.token").value

  try {
    const response = await api.get("/haircuts", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })

    return {
      haircuts: response.data,
    }
  } catch (error) {
    console.error(error)
  }
}
