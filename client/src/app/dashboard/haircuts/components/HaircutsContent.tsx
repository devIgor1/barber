"use client"

import MobileNav from "@/components/shared/MobileNav"
import { CiCirclePlus } from "react-icons/ci"
import { Switch } from "@/components/ui/switch"
import { IoIosPricetag } from "react-icons/io"
import Link from "next/link"
import { ChangeEvent, useState } from "react"

interface HaircutsItem {
  id: string
  name: string
  price: number | string
  status: boolean
  userId: string
}

interface HaircutsProps {
  haircuts: HaircutsItem[]
  disabledHaircuts: HaircutsItem[]
}

export default function HaircutsContent({
  haircuts,
  disabledHaircuts,
}: HaircutsProps) {
  const [haircutList, setHaircutList] = useState(haircuts || [])
  const [disableHaircut, setDisableHaircut] = useState("enabled")

  async function handleChangeStatus(e: any) {
    if (e.target.value === "disabled") {
      setDisableHaircut("enabled")
      setHaircutList(haircuts)
    } else {
      setHaircutList(disabledHaircuts)
      setDisableHaircut("disabled")
    }
  }

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
          <div className="flex-between">
            <Link href="/dashboard/haircuts/new">
              <button className="text-white bg-zinc-800 p-2 rounded-lg flex-center gap-3 hover:bg-zinc-800/75 duration-300">
                New
                <CiCirclePlus size={25} />
              </button>
            </Link>
            <div className="flex-center gap-2">
              <h1 className="text-white">Active</h1>
              <Switch
                value={disableHaircut}
                className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-zinc-600"
                onClick={handleChangeStatus}
                checked={disableHaircut === "disabled" ? false : true}
              />
            </div>
          </div>
        </div>
        {haircutList.map((haircut) => (
          <Link
            key={haircut.id}
            href={`/dashboard/haircut/${haircut.id}`}
            className="bg-zinc-900/85 wrapper p-8 rounded-lg px-5 flex-between text-base md:text-xl text-white mb-4"
          >
            <div className="flex-center gap-3">
              <span className="text-amber-500 ">
                <IoIosPricetag size={25} />
              </span>
              <h1>{haircut.name}</h1>
            </div>
            <p className="text-green-500">${haircut.price}</p>
          </Link>
        ))}
      </div>
    </>
  )
}
