"use client"

import { api } from "@/app/services/apiClient"
import MobileNav from "@/components/shared/MobileNav"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

interface ProfileProps {
  data: UserProps
  premium: boolean
}

interface UserProps {
  id: string
  name: string
  email: string
  address: string | null
  token: string
}

export default function ProfileContent(user: ProfileProps) {
  const [name, setName] = useState<string>(
    user && user.data?.name ? user.data.name : ""
  )
  const [address, setAddress] = useState<string>(
    user && user.data?.address ? user.data.address : ""
  )

  const router = useRouter()

  async function handleUpdateUser(e: FormEvent) {
    e.preventDefault()

    try {
      await api.put(
        "/user",
        {
          name: name,
          address: address,
        },
        {
          headers: {
            Authorization: "Bearer " + user.data.token,
          },
        }
      )

      router.refresh()
      alert("Data has been successfully updated.")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <nav className="block md:hidden">
        <MobileNav />
      </nav>
      <div className="flex-center flex-col pt-20 mx-2">
        <h1 className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-2 text-4xl md:text-5xl mb-5 font-medium">
          My Profile
        </h1>
        <div className="bg-zinc-900/85 wrapper flex-center p-8 rounded-lg px-5">
          <form className="max-w-2xl w-full">
            <div className="flex flex-col">
              <label className="text-white text-xl mb-1">
                Barbeshop's Name
              </label>
              <input
                type="text"
                className="rounded-md outline-none p-2 mb-5 bg-gradient-to-l from-slate-50 to-slate-200 font-semibold"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white text-xl  mb-1">Address</label>
              <input
                type="text"
                className="rounded-md outline-none p-2 mb-5 bg-gradient-to-l from-slate-50 to-slate-200 font-semibold"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <label className="text-white text-xl mb-1">Current Plan</label>
              <div className="flex-between mt-2 text-lg">
                <p
                  className={
                    user.premium
                      ? "text-[#fba931] font-semibold"
                      : "text-[#4dffb4]"
                  }
                >
                  {user.premium ? "Premium" : "Free"}
                </p>
                <Link
                  href="/plans"
                  className="bg-green-500 text-white text-shadow font-bold p-2 rounded-lg hover:bg-green-600 duration-300"
                >
                  Change Plan
                </Link>
              </div>
            </div>
            <Separator className="mt-4" />
            <div className="flex-center w-full mt-5">
              <button
                onClick={handleUpdateUser}
                className="text-shadow bg-gradient-to-r from-yellow-400 to-amber-500 w-full h-11 rounded-lg text-white font-semibold hover:scale-95 duration-300"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
