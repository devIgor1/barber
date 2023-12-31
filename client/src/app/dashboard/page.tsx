import MobileNav from "@/components/shared/MobileNav"

const Dashboard = () => {
  return (
    <div>
      <nav className="block md:hidden">
        <MobileNav />
      </nav>

      <h1 className="p-5">Dashboard</h1>
    </div>
  )
}

export default Dashboard
