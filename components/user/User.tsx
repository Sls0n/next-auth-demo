"use client"

import { useSession } from "next-auth/react"

export default function User() {
  const { data: session, status } = useSession()

  return (
    <div className="flex gap-4 items-center justify-center mb-8 mt-4 flex-wrap overflow-auto">
      <h1 className="text-2xl text-center font-bold text-gray-700">
        Client side session :
      </h1>
      <pre className="bg-gray-100 p-4 rounded-md shadow-md text-gray-700 ">
        {JSON.stringify(session)}
      </pre>
    </div>
  )
}
