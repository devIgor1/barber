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
  disabledHaircuts: HaircutsItem[]
  
}

export default async function getHaircuts({ haircuts,  disabledHaircuts }: HaircutsProps) {
  const nextCookies = cookies()
  const token = nextCookies.get("@barber.token").value

  try {
    const response = await api.get("/haircuts", {
      headers: {
        Authorization: "Bearer " + token,
      },
      params: {
        status: "ACTIVE",
      },
    })

    const disabledHaircuts = await api.get("/haircuts", {
      headers: {
        Authorization: "Bearer " + token,
      },
      params: {
        status: false,
      },
    })

    return {
      haircuts: response.data,
      disabledHaircuts: disabledHaircuts.data,
    }
  } catch (error) {
    console.error(error)
  }
}
