import MobileNav from "@/components/shared/MobileNav"
import { Separator } from "@/components/ui/separator"

export default function Plans() {
  return (
    <>
      <nav>
        <MobileNav />
      </nav>

      <div className="min-h-screen w-full flex-center flex-col">
        <h1 className="flex-center text-white text-5xl mb-10">Plans</h1>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="bg-[#18181B] h-96 w-80 p-5 rounded-lg ">
            <h1>Hello</h1>
          </div>
          <div className="bg-[#18181B] h-96 w-80 p-5 rounded-lg ">
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    </>
  )
}
