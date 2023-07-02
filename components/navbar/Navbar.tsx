"use client"
import { useRouter } from "next/navigation"

export default function NavBar() {
  const router = useRouter()

  return (
    <nav className="relative flex items-center justify-between px-4 py-4 bg-white border-b-2 border-gray-100 shadow-sm sm:px-6 md:px-8">
      <a href="/" className="text-2xl font-bold text-slate-800">
        Auth
      </a>

      <div className="flex gap-8 items-center">
        <a href="/signin">Sign in</a>
        <a
          href="/signup"
          className="px-4 py-2 font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors cursor-pointer"
        >
          Register
        </a>
      </div>
    </nav>
  )
}
