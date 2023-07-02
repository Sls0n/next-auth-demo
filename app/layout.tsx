import NavBar from "@/components/navbar/Navbar"
import "./globals.css"
import { Inter } from "next/font/google"
import Providers from "../context/SessionContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Nextauth demo",
  description: "Authentication demo using nextauth",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavBar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
