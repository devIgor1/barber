"use client"

import { api } from "@/app/services/apiClient"
import MobileNav from "@/components/shared/MobileNav"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"

interface HaircutsItem {
  id: string
  name: string
  price: number | string
  status: boolean
  userId: string
}

interface HaircutsProps {
  haircuts: HaircutsItem[]
}

export default function NewScheduleForm({ haircuts }: HaircutsProps) {
  const [customer, setCustomer] = useState<string>("")
  const [selectedHaircut, setSelectedHaircut] = useState(haircuts[0])
  const router = useRouter()

  function handleChangeSelect(id: string) {
    const haircutItem = haircuts.find((haircut) => haircut.id === id)
    setSelectedHaircut(haircutItem)
  }

  async function handleRegisterSchedule(e: FormEvent) {
    e.preventDefault()

    if (!customer) {
      alert("Customer is required to register schedule.")
      return
    }

    try {
      await api.post("/schedule", {
        customer: customer,
        haircutId: selectedHaircut?.id,
      })

      router.refresh()
      router.push("/dashboard")
      alert("Customer scheduled successfully!")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <nav className="block md:hidden">
        <MobileNav />
      </nav>
      <div className="flex-center flex-col pt-20 mx-4">
        <div className="flex-between wrapper">
          <Link
            href="/dashboard/haircuts"
            className="text-white bg-zinc-800 p-2 rounded-lg flex-center gap-3 hover:bg-zinc-800/75 duration-300 text-start"
          >
            Back
          </Link>
          <h1 className="text-center bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-2 text-2xl md:text-4xl text-shadow mb-5 font-medium">
            Schedule
          </h1>
        </div>
        <div className="bg-zinc-900/85 wrapper p-8 rounded-lg px-5 flex-center flex-col text-base md:text-xl text-white">
          <h1 className="text-2xl md:text-3xl bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent font-semibold mb-5">
            New
          </h1>
          <form className="max-w-2xl w-full">
            <div className="flex flex-col">
              <label className="text-white text-xl mb-1">Customer</label>
              <input
                value={customer}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCustomer(e.target.value)
                }
                type="text"
                className="rounded-md outline-none p-2 mb-5 bg-gradient-to-l from-slate-50 to-slate-200 font-semibold text-black"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white text-xl mb-1">Haircut</label>
              <select
                onChange={(e) => handleChangeSelect(e.target.value)}
                className="rounded-md outline-none p-2 mb-5 bg-gradient-to-l from-slate-50 to-slate-200 font-semibold text-black"
              >
                {haircuts.map((haircut) => (
                  <option key={haircut.id} value={haircut.id}>
                    {haircut.name}
                  </option>
                ))}
              </select>
            </div>

            <Separator className="mt-8" />
            <div className="flex-center w-full mt-5">
              <button
                onClick={handleRegisterSchedule}
                className="text-shadow bg-gradient-to-r from-yellow-400 to-amber-500 w-full h-11 rounded-lg text-white font-semibold hover:scale-95 duration-300 disabled:hidden"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
