import MobileNav from "@/components/shared/MobileNav"

const Dashboard = () => {
  return (
    <div className="bg-secondary w-full min-h-screen">
      <h1>Hello I'm DASHBOARD</h1>
      <nav className="block md:hidden">
        <MobileNav />
      </nav>
    </div>
  )
}

export default Dashboard
