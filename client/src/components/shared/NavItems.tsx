import navLinks, { NavLinksProps } from "@/constants"
import Link from "next/link"

interface NavItemsProps {
  className?: string
}

const NavItems = ({ className }: NavItemsProps) => {
  return (
    <ul className="flex-center w-full flex-col gap-10 mt-14">
      {navLinks.map((link: NavLinksProps) => (
        <Link href={link.route} className={className} key={link.route}>
          {link.icon({ className: "mr-2" })}
          {/* Here I'm rendering the icon directly*/}
          <li>{link.name}</li>
        </Link>
      ))}
    </ul>
  )
}

export default NavItems
