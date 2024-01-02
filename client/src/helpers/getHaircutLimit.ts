import { cookies } from "next/headers"
import { api } from "@/app/services/apiClient"

interface NewHaircutProps {
  subscription: boolean
  count: number
}

export default async function getHaircutLimit({
  subscription,
  count,
}: NewHaircutProps) {
  const nextCookies = cookies()
  const token = nextCookies.get("@barber.token").value

  try {
    if (token) {
      const response = await api.get("/haircut/check", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })

      const count = await api.get("/haircut/count", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })

      return {
        subscription:
          response.data?.subscriptions?.status === "ACTIVE" ? true : false,
        count: count.data,
      }
    }
  } catch (err) {
    console.log(err)
  }
}
