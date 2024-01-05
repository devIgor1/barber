import getHaircuts from "../../haircuts/components/GetHaircuts"
import NewScheduleForm from "./components/NewScheduleForm"

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

export default async function NewSchedule(haircuts: HaircutsProps) {
  const haircutsData = await getHaircuts(haircuts)

  return <NewScheduleForm haircuts={haircutsData.haircuts} />
}
