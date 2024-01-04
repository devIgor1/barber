import { NextRequest, NextResponse } from "next/server"

export default function middleware(req: NextRequest) {
  const token = req.cookies.get("@barber.token")?.value

  const signInURL = new URL("/sign-in", req.url)
  const dashboardURL = new URL("/dashboard", req.url)

  if (!token) {
    if (
      req.nextUrl.pathname === "/sign-in" ||
      req.nextUrl.pathname === "/sign-up"
    ) {
      return NextResponse.next()
    } else {
      req.nextUrl.pathname === "/dashboard"
    }
    return NextResponse.redirect(signInURL)
  }

  if (token) {
    if (
      req.nextUrl.pathname === "/sign-in" ||
      req.nextUrl.pathname === "/sign-up"
    ) {
      return NextResponse.redirect(dashboardURL)
    }
  }
}

export const config = {
  matcher: [
    "/sign-in",
    "/sign-up",
    "/dashboard",
    "/dashboard/profile",
    "/dashboard/haircuts",
    "/dashboard/haircuts/new",
    "/dashboard/haircut/",
  ],
}
