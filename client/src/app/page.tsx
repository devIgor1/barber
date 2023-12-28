import Logo from "../components/Logo"

export default function Home() {
  return (
    <div className="bg-white flex items-center justify-center min-h-screen w-full">
      <div className="max-w-[640px] w-full flex flex-col gap-6 p-4">
        <Logo />
      </div>
    </div>
  )
}
