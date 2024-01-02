"use client"

import MobileNav from "@/components/shared/MobileNav"
import { CiCirclePlus } from "react-icons/ci"

export default function HaircutsContent() {
  return (
    <>
      <nav className="block md:hidden">
        <MobileNav />
      </nav>
      <div className="flex-center flex-col pt-20 mx-4">
        <h1 className="text-center wrapper bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-2 text-2xl md:text-4xl text-shadow mb-5 font-medium">
          Haircuts Models
        </h1>
        <div className="wrapper mb-5">
          <div className="flex-between ">
            <button className="text-white bg-zinc-800 p-2 rounded-lg flex-center gap-3">
              New
              <CiCirclePlus size={25} />
            </button>
            <button className="bg-green-500">Active</button>
          </div>
        </div>
        <div className="bg-zinc-900/85 wrapper flex-center p-8 rounded-lg px-5"></div>
      </div>
    </>
  )
}
