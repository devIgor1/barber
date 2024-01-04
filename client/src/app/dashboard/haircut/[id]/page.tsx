import getHaircutLimit from "@/helpers/getHaircutLimit"
import EditHaircutContent from "./components/EditHaircutContent"

interface EditHaircutProps {
  subscription: boolean
  count: number
}

interface HaircutProps {
  id: string
  name: string
  price: number | string
  status: boolean
  userId: string
}

export default async function EditHaircut({
  subscription,
  count,
}: EditHaircutProps) {
  const haircutLimit = await getHaircutLimit({ subscription, count })

  return (
    <EditHaircutContent
      subscription={haircutLimit.subscription}
      count={haircutLimit.count}
    />
  )
}
