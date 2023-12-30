import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FiMenu } from "react-icons/fi"
import { Separator } from "../ui/separator"
import Link from "next/link"
import NavItems from "./NavItems"

const MobileNav = () => {
  return (
    <>
      <nav className="block md:hidden flex-between p-4">
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
            <NavItems className="flex-center text-xl text-black hover:bg-zinc-800 hover:text-white w-full p-4 duration-300" />
          </SheetContent>
        </Sheet>
      </nav>
      <Separator className="mt-5 opacity-10" />
    </>
  )
}

export default MobileNav
