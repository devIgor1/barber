import MobileNav from "@/components/shared/MobileNav"

const Profile = () => {
  return (
    <>
      <nav className="block md:hidden">
        <MobileNav />
      </nav>
      <h1 className="p-5">Haircuts</h1>
    </>
  )
}

export default Profile