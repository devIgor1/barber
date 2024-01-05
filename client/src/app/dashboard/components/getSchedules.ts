import { api } from "@/app/services/apiClient"
import { cookies } from "next/headers"

export interface ScheduleItem {
  id: string
  customer: string
  haircut: {
    id: string
    name: string
    price: string
    userId: string
  }
}

interface DashboardProps {
  schedule: ScheduleItem[]
}

export default async function getSchedules({ schedule }: DashboardProps) {
  const nextCookies = cookies()
  const token = nextCookies.get("@barber.token").value

  try {
    if (token) {
      const response = await api.get("/schedules", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })

      return (schedule = response.data)
    }
  } catch (err) {
    console.log(err)
  }

  return schedule
}
