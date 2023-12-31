import Sidebar from "@/components/shared/Sidebar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-zinc-800">{children}</main>
    </div>
  )
}
