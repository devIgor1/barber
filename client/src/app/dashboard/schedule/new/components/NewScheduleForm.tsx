"use client"

import MobileNav from "@/components/shared/MobileNav"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ChangeEvent, useState } from "react"

export default function NewScheduleForm() {
  const [customer, setCustomer] = useState<string>("")

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
              <select className="rounded-md outline-none p-2 mb-5 bg-gradient-to-l from-slate-50 to-slate-200 font-semibold text-black">
                <option key={1} value="80's Style">
                  80's Style
                </option>
              </select>
            </div>

            <Separator className="mt-8" />
            <div className="flex-center w-full mt-5">
              <button className="text-shadow bg-gradient-to-r from-yellow-400 to-amber-500 w-full h-11 rounded-lg text-white font-semibold hover:scale-95 duration-300 disabled:hidden">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
