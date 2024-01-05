import MobileNav from "@/components/shared/MobileNav"
import Link from "next/link"
import { CiCirclePlus } from "react-icons/ci"
import { FaUser } from "react-icons/fa"

export default function DashboardContent() {
  return (
    <>
      <nav className="block md:hidden">
        <MobileNav />
      </nav>
      <div className="flex-center flex-col pt-20 mx-4">
        <h1 className="text-center wrapper bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-2 text-2xl md:text-4xl text-shadow mb-5 font-medium">
          Schedule
        </h1>
        <div className="wrapper mb-5">
          <div className="flex-between">
            <Link href="/dashboard/schedule/new">
              <button className="text-white bg-zinc-800 p-2 rounded-lg flex-center gap-3 hover:bg-zinc-800/75 duration-300">
                Register
                <CiCirclePlus size={25} />
              </button>
            </Link>
          </div>
        </div>
        <Link
          href={`/dashboard/haircut`}
          className="bg-zinc-900/85 wrapper p-8 rounded-lg px-5 flex-between text-base md:text-xl text-white mb-4"
        >
          <div className="flex-center gap-3">
            <span className="text-amber-500 ">
              <FaUser size={25} />
            </span>
            <h1>Igor</h1>
          </div>
          <p>80's Style</p>
          <p className="text-green-500">$10.00</p>
        </Link>
      </div>
    </>
  )
}
