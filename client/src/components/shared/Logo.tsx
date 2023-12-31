import Image from "next/image"

const Logo = () => {
  return (
    <div className="flex-center">
      <Image
        src="/images/logo.png"
        quality={100}
        width={75}
        height={70}
        alt="logo"
        className="hover:-rotate-12 duration-300"
      />
      <h1 className="relative text-7xl font-semibold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
        BARBER
      </h1>
      <span className="bg-gradient-to-r from-slate-50 to-slate-200 text-black relative text-xl top-6 right-9 font-bold rounded-lg px-1 hover:rotate-12 duration-300">
        PRO
      </span>
    </div>
  )
}

export default Logo
