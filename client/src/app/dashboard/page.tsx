import MobileNav from "@/components/shared/MobileNav"

const Dashboard = () => {
  return (
    <div className="bg-zinc-800 w-full min-h-screen">
      <nav className="block md:hidden">
        <MobileNav />
      </nav>
    </div>
  )
}

export default Dashboard
