import navLinks, { NavLinksProps } from "@/constants"
import Link from "next/link"
import { Separator } from "../ui/separator"

interface NavItemsProps {
  className?: string
}

const NavItems = ({ className }: NavItemsProps) => {
  return (
    <nav className="mt-10">
      {navLinks.map((link: NavLinksProps) => (
        <ul key={link.route} className="flex-center w-full flex-col">
          <Link href={link.route} className={className}>
            {link.icon({ className: "mr-2" })}
            {/* Here I'm rendering the icon directly*/}
            <li>{link.name}</li>
          </Link>
          <Separator key={link.route} className="opacity-10" />
        </ul>
      ))}
    </nav>
  )
}

export default NavItems
