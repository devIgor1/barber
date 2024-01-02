import MobileNav from "@/components/shared/MobileNav"
import NewHaircutForm from "./components/NewHaircutForm"
import { cookies } from "next/headers"
import { api } from "@/app/services/apiClient"
import getHaircutLimit from "@/helpers/getHaircutLimit"

interface NewHaircutProps {
  subscription: boolean
  count: number
}

const NewHaircut = async ({ subscription, count }: NewHaircutProps) => {
  const haircut = await getHaircutLimit({ subscription, count })

  return (
    <NewHaircutForm subscription={haircut.subscription} count={haircut.count} />
  )
}

export default NewHaircut
