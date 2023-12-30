import { Separator } from "@/components/ui/separator"
import NavItems from "./NavItems"
import Link from "next/link"

const Sidebar = () => {
  return (
    <div className="hidden md:block h-screen w-full max-w-[300px] bg-[#09090B]">
      <Link href="/dashboard" className="flex-center gap-2">
        <h1 className="text-5xl font-semibold text-[#FFF200] text-shadow">
          BARBER
        </h1>
        <span className="bg-white text-black relative text-xl top-6 right-9 font-bold rounded-lg px-1 hover:rotate-12 duration-300">
          PRO
        </span>
      </Link>
      <Separator className="mt-5 opacity-10" />
      <div className="text-white flex-center flec-col">
        <NavItems />
      </div>
    </div>
  )
}

export default Sidebar
