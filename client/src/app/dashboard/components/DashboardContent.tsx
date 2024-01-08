"use client"

import MobileNav from "@/components/shared/MobileNav"
import { ModalContext } from "@/components/shared/modal/Modal"
import Link from "next/link"
import { useContext } from "react"
import { CiCirclePlus } from "react-icons/ci"
import { FaUser } from "react-icons/fa"

export interface ScheduleItem {
  id: string
  customer: string
  haircut: {
    id: string
    name: string
    price: string
    userId: string
  }
}

interface DashboardProps {
  schedule: ScheduleItem[]
}

export default function DashboardContent({ schedule }: DashboardProps) {
  const { handleModalVisible } = useContext(ModalContext)

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
        {schedule.map((schedule) => (
          <button
            onClick={handleModalVisible}
            className="bg-zinc-900/85 wrapper p-8 rounded-lg px-5 flex-between text-base md:text-xl text-white mb-4 cursor-pointer"
            key={schedule.id}
          >
            <div className="flex-center gap-3">
              <span className="text-amber-500 ">
                <FaUser size={25} />
              </span>
              <h1>{schedule?.customer}</h1>
            </div>
            <p>{schedule.haircut?.name}</p>
            <p className="text-green-500">${schedule.haircut?.price}</p>
          </button>
        ))}
      </div>
    </>
  )
}
