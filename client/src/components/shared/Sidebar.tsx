import { Separator } from "@/components/ui/separator"
import NavItems from "./NavItems"
import Link from "next/link"
import LogoutButton from "./LogoutButton"

const Sidebar = () => {
  return (
    <div className="hidden md:block h-screen w-full max-w-[300px] bg-[#09090B]">
      <div className="p-4">
        <Link href="/dashboard" className="flex-center gap-2">
          <h1 className="text-5xl font-semibold text-[#FFF200] text-shadow">
            BARBER
          </h1>
          <span className="bg-white text-black relative text-xl top-6 right-9 font-bold rounded-lg px-1 hover:rotate-12 duration-300">
            PRO
          </span>
        </Link>
      </div>
      <Separator className="mt-5 opacity-10" />
      <NavItems className="flex items-start text-xl text-white hover:bg-zinc-800 w-full p-4 duration-300" />
      <footer className="flex text-white absolute bottom-0 w-full p-4">
        <LogoutButton className="flex-center gap-3 border-2 border-white p-2 rounded-lg hover:scale-95 duration-300" />
      </footer>
    </div>
  )
}

export default Sidebar
