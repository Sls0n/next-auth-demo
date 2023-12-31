import NavBar from "@/components/navbar/Navbar"
import "./globals.css"
import { Inter } from "next/font/google"
import Providers from "../context/SessionContext"
import ToasterContext from "@/context/ToasterContext"

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
          <ToasterContext />
          <NavBar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
