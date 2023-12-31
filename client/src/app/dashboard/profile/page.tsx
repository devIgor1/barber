import { api } from "@/app/services/apiClient"
import MobileNav from "@/components/shared/MobileNav"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { cookies } from "next/headers"

const Profile = async () => {
  const nextCookies = cookies()
  const token = nextCookies.get("@barber.token").value

  try {
    if (token) {
      const response = await api.get("/me", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })

      console.log(response.data)
    }
  } catch (err) {
    console.log(err)
  }

  return (
    <>
      <nav className="block md:hidden">
        <MobileNav />
      </nav>
      <div className="flex-center flex-col pt-20 mx-2">
        <h1 className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-2 text-4xl md:text-5xl text-shadow mb-5 font-medium">
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
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white text-xl  mb-1">Address</label>
              <input
                type="text"
                className="rounded-md outline-none p-2 mb-5 bg-gradient-to-l from-slate-50 to-slate-200 font-semibold"
              />
            </div>
            <div>
              <label className="text-white text-xl mb-1">Current Plan</label>
              <div className="flex-between mt-2 text-lg">
                <p className="text-[#4dffb4]">{}</p>
                <Link
                  href="/plans"
                  className="bg-green-500 text-white font-bold p-2 rounded-lg hover:bg-green-600 duration-300"
                >
                  Change Plan
                </Link>
              </div>
            </div>
            <Separator className="mt-4" />
            <div className="flex-center w-full mt-5">
              <button className="bg-gradient-to-r from-yellow-400 to-amber-500 w-full h-11 rounded-lg text-white font-semibold hover:scale-95 duration-300">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Profile
