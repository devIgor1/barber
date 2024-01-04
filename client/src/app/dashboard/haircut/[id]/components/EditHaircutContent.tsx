"use client"

import { api } from "@/app/services/apiClient"
import MobileNav from "@/components/shared/MobileNav"
import Link from "next/link"
import { FormEvent, useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Input } from "@/components/shared/Input"
import { Separator } from "@/components/ui/separator"
import { Router } from "next/router"

interface EditHaircutProps {
  subscription: boolean
  count: number
}

interface HaircutProps {
  id: string
  name: string
  price: number | string
  status: boolean
  userId: string
}

export default function EditHaircutContent({
  subscription,
  count,
}: EditHaircutProps) {
  const { id } = useParams()

  const [name, setName] = useState<any>("")
  const [price, setPrice] = useState<any>("")

  const router = useRouter()

  useEffect(() => {
    const loadHaircutDetails = async () => {
      try {
        const response = await api.get("/haircut/details", {
          params: {
            haircutId: id,
          },
        })

        if (response.data) {
          const haircutDetails: HaircutProps = {
            id: response.data.id,
            name: response.data.name,
            price: response.data.price,
            status: response.data.status,
            userId: response.data.userId,
          }
          setName(haircutDetails.name)
          setPrice(haircutDetails.price)
        }

        return
      } catch (error) {
        console.error("Error fetching haircut details:", error)
      }
    }
    loadHaircutDetails()
  }, [id])

  async function handleUpdateHaircut(e: FormEvent) {
    e.preventDefault()

    if (!name || !price) {
      return
    }

    try {
      const numericPrice = parseFloat(price)

      await api.put("/haircut", {
        name: name,
        price: numericPrice,
        haircutId: id,
      })

      alert("Haircut updated successfully")
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
            Haircuts Models
          </h1>
        </div>
        <div className="bg-zinc-900/85 wrapper p-8 rounded-lg px-5 flex-center flex-col text-base md:text-xl text-white">
          <h1 className="text-2xl md:text-3xl bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent font-semibold mb-5">
            Edit Model
          </h1>
          <form className="max-w-2xl w-full">
            <div className="flex flex-col">
              <label className="text-white text-xl mb-1">Haircut Name</label>
              <input
                type="text"
                className="rounded-md outline-none p-2 mb-5 bg-gradient-to-l from-slate-50 to-slate-200 font-semibold text-black"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white text-xl  mb-1">Price</label>
              <input
                type="text"
                className="rounded-md outline-none p-2 mb-5 bg-gradient-to-l from-slate-50 to-slate-200 font-semibold text-black"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <Separator className="mt-4" />
            <div className="flex-center w-full mt-5">
              <button
                onClick={handleUpdateHaircut}
                disabled={!subscription && count >= 3}
                className="text-shadow bg-gradient-to-r from-yellow-400 to-amber-500 w-full h-11 rounded-lg text-white font-semibold hover:scale-95 duration-300 disabled:hidden"
              >
                Save
              </button>
            </div>
          </form>
          {!subscription && count >= 3 && (
            <p className="text-base text-center mt-4">
              It looks like you've reached your limit on cuts. Consider going
              <span className="text-green-500"> premium</span> for unlimited
              access.
            </p>
          )}
        </div>
      </div>
    </>
  )
}
