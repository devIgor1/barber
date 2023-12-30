import navLinks, { NavLinksProps } from "@/constants"
import Link from "next/link"

const NavItems = () => {
  return (
    <ul className="flex-center w-full flex-col gap-10 mt-14">
      {navLinks.map((link: NavLinksProps) => (
        <Link
          href={link.route}
          className="text-xl flex-center w-full hover:bg-zinc-800 duration-300 p-4"
          key={link.route}
        >
          {link.icon({ className: "mr-2" })}
          {/* Here I'm rendering the icon directly*/}
          <li className="">{link.name}</li>
        </Link>
      ))}
    </ul>
  )
}

export default NavItems
