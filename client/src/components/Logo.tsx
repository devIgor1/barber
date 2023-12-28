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
      <h1 className="relative text-7xl font-semibold text-[#FFF200] text-shadow">
        BARBER
      </h1>
      <span className="bg-white text-black relative text-xl top-6 right-9 font-bold rounded-lg px-1 hover:rotate-12 duration-300">
        PRO
      </span>
    </div>
  )
}

export default Logo
