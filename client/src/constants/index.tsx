import { IconType } from "react-icons"
import { FiClipboard, FiScissors, FiUser } from "react-icons/fi"
export interface NavLinksProps {
  name: string
  icon: IconType
  route: string
}

const navLinks: NavLinksProps[] = [
  { name: "Schedule", icon: FiClipboard, route: "/dashboard" },
  { name: "Haircuts", icon: FiScissors, route: "/dashboard/haircuts" },
  { name: "My Profile", icon: FiUser, route: "/dashboard/profile" },
]

export default navLinks
