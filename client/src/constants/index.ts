import { IconType } from "react-icons"
import { FiClipboard, FiScissors, FiSettings } from "react-icons/fi"

interface sideItemsProps {
  name: string
  icon: IconType
  route: string
}

const sideBarItems: sideItemsProps[] = [
  { name: "Schedule", icon: FiScissors, route: "/dashboard" },
  { name: "Haircuts", icon: FiClipboard, route: "/haircuts" },
  { name: "My Profile", icon: FiSettings, route: "/profile" },
]
