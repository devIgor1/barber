"use client"

import { api } from "@/app/services/apiClient"
import MobileNav from "@/components/shared/MobileNav"
import Link from "next/link"
import { FormEvent, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { Input } from "@/components/shared/Input"

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/, "Price must be a valid number"),
})

type FormData = z.infer<typeof schema>

interface NewHaircutProps {
  subscription: boolean
  count: number
}

export default function NewHaircutForm({
  subscription,
  count,
}: NewHaircutProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const router = useRouter()

  async function handleRegisterHaircut(data: FormData) {
    try {
      await api.post("/haircut", {
        name: data.name,
        price: data.price,
      })

      router.push("/dashboard/haircuts")
      router.refresh()
      alert("Haircut registration successful")
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
          <h1 className="text-2xl md:text-3xl bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent font-semibold">
            New Haircut
          </h1>
          <form
            className="wrapper mt-5"
            onSubmit={handleSubmit(handleRegisterHaircut)}
          >
            <div className="flex flex-col mb-2">
              <label className="text-white text-xl mb-1">Name</label>
              <Input
                type="text"
                className="rounded-md outline-none  p-2 bg-gradient-to-l from-slate-50 to-slate-200 font-semibold text-black"
                error={errors.name?.message}
                name="name"
                register={register}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white text-xl mb-1">Price</label>
              <Input
                type="text"
                className="hide-arrow rounded-md outline-none p-2 bg-gradient-to-l from-slate-50 to-slate-200 font-semibold text-black"
                error={errors.price?.message}
                name="price"
                register={register}
              />
            </div>
            <button
              type="submit"
              disabled={!subscription && count >= 3}
              className="text-shadow enabled:bg-gradient-to-r from-yellow-400 to-amber-500 w-full p-2 rounded-lg text-white font-semibold hover:scale-95 duration-300 mt-5 disabled:hidden"
            >
              Register
            </button>
          </form>

          {!subscription && count >= 3 && (
            <p className="text-base text-center mt-4">
              It looks like you've reached your limit on haircuts. Consider
              going
              <span className="text-green-500"> premium</span> for unlimited
              access.
            </p>
          )}
        </div>
      </div>
    </>
  )
}
