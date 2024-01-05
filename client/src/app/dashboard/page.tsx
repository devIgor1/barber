import MobileNav from "@/components/shared/MobileNav"
import DashboardContent from "./components/DashboardContent"
import getHaircuts from "./haircuts/components/GetHaircuts"
import getSchedules from "./components/getSchedules"

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

const Dashboard = async (schedule: DashboardProps) => {
  const schedulesData = await getSchedules(schedule)

  return <DashboardContent schedule={schedulesData} />
}

export default Dashboard
