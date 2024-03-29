import Sidebar from "@/components/shared/Sidebar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-zinc-950">{children}</main>
    </div>
  )
}
