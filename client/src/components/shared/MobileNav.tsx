import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { FiMenu } from "react-icons/fi"
import { Separator } from "../ui/separator"
import Link from "next/link"
import NavItems from "./NavItems"
import LogoutButton from "./LogoutButton"

const MobileNav = () => {
  return (
    <>
      <nav className="block md:hidden flex-between p-6 bg-zinc-900">
        <Link href="/dashboard" className="flex-center gap-2">
          <h1 className="text-3xl font-semibold text-[#FFF200] text-shadow">
            BARBER
          </h1>
          <span className="bg-white text-black relative text-xl top-6 right-9 font-bold rounded-lg px-1 hover:rotate-12 duration-300">
            PRO
          </span>
        </Link>
        <Sheet>
          <SheetTrigger>
            <span className="cursor-pointer text-white">
              <FiMenu size={25} />
            </span>
          </SheetTrigger>
          <SheetContent side="top" className="bg-zinc-200">
            <NavItems className="flex items-start text-xl text-black hover:bg-zinc-800 hover:text-white w-full p-4 duration-300" />
            <Separator className="w-full bg-black" />
            <div className="flex justify-end mt-5">
              <LogoutButton className="flex-center gap-3 border border-black p-2 rounded-lg hover:scale-95 duration-300" />
            </div>
          </SheetContent>
        </Sheet>
      </nav>
      <Separator className="opacity-30" />
    </>
  )
}

export default MobileNav
