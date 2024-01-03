import getHaircuts from "./components/GetHaircuts"
import HaircutsContent from "./components/HaircutsContent"

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

const Haircuts = async ({ haircuts, disabledHaircuts }: HaircutsProps) => {
  const haircutsData = await getHaircuts({ haircuts, disabledHaircuts })

  return (
    <>
      <HaircutsContent
        haircuts={haircutsData.haircuts}
        disabledHaircuts={haircutsData.disabledHaircuts}
      />
    </>
  )
}

export default Haircuts
