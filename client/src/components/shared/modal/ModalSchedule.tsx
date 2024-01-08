"use client"

import { ModalContext } from "./Modal"
import { useContext, useRef, MouseEvent } from "react"
import { IoCloseOutline } from "react-icons/io5"
import { MdAttachMoney } from "react-icons/md"
import { HiOutlineScissors } from "react-icons/hi"
import { FaUser } from "react-icons/fa"
import { Separator } from "@/components/ui/separator"

export function ModalSchedule() {
  const { handleModalVisible } = useContext(ModalContext)
  const modalRef = useRef<HTMLDivElement | null>(null)

  const handleModalClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleModalVisible()
    }
  }

  return (
    <div
      className=" bg-zinc-950/95 w-full min-h-screen absolute"
      onClick={handleModalClick}
    >
      <div className="absolute inset-0 md:left-80 flex items-center justify-center">
        <div
          ref={modalRef}
          className="bg-zinc-900 text-white shadow-lg w-4/5 md:w-3/4 max-w-2xl p-3 rounded"
        >
          <div className="flex items-center justify-between mb-4">
            <h1 className="font-bold text-lg md:text-2xl">Next in queue</h1>
            <button
              onClick={handleModalVisible}
              className="  px-2 text-[#fba931] rounded hover:opacity-80"
            >
              <IoCloseOutline size={30} />
            </button>
          </div>
          <Separator className="my-5" />
          <div className="flex flex-wrap items-center gap-1 mb-5">
            <span className="font-bold text-[#fba931]">
              <FaUser size={30} />
            </span>
            <h2 className="text-2xl text-[#fba931]">Igor Moraes</h2>
          </div>
          <div className="flex flex-wrap items-center gap-1 mb-5">
            <span className="">
              <HiOutlineScissors size={30} />
            </span>
            <h2 className="text-2xl ">80's Style</h2>
          </div>
          <div className="flex flex-wrap items-center gap-1 mb-2">
            <span className="text-green-500">
              <MdAttachMoney size={34} />
            </span>
            <h2 className="text-2xl text-green-500">15.00</h2>
          </div>
          <Separator className="mt-5" />
          <div className="w-full text-end">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-2 text-black font-medium rounded-sm mt-2">
              Finish Service
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
