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
}

const Haircuts = async ({ haircuts }: HaircutsProps) => {
  const haircutsData = await getHaircuts({ haircuts })

  return (
    <>
      <HaircutsContent haircuts={haircutsData.haircuts} />
    </>
  )
}

export default Haircuts
