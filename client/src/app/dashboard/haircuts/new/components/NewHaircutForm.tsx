"use client"

import MobileNav from "@/components/shared/MobileNav"
import { CiCirclePlus } from "react-icons/ci"
import { Switch } from "@/components/ui/switch"
import { IoIosPricetag } from "react-icons/io"
import Link from "next/link"

export default function NewHaircutForm() {
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
            Haircuts Models
          </h1>
        </div>
        <div className="bg-zinc-900/85 wrapper p-8 rounded-lg px-5 flex-center flex-col text-base md:text-xl text-white">
          <h1 className="text-2xl md:text-3xl bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent font-semibold">
            New Haircut
          </h1>
          <form className="wrapper mt-5">
            <div className="flex flex-col mb-6">
              <label className="text-white text-xl mb-1">Name</label>
              <input
                type="text"
                className="rounded-md outline-none  p-1 md:p-2 mb-5 bg-gradient-to-l from-slate-50 to-slate-200 font-semibold text-black"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white text-xl mb-1">Price</label>
              <input
                type="text"
                className="rounded-md outline-none p-1 md:p-2 bg-gradient-to-l from-slate-50 to-slate-200 font-semibold"
              />
            </div>
            <button className="text-shadow bg-gradient-to-r from-yellow-400 to-amber-500 w-full p-1 md:p-2 rounded-lg text-white font-semibold hover:scale-95 duration-300 mt-5">
              Register
            </button>
          </form>

          <p className="text-base text-center mt-4">
            It looks like you've reached your limit on cuts. Consider going
            <span className="text-green-500"> premium</span> for unlimited
            access.
          </p>
        </div>
      </div>
    </>
  )
}
