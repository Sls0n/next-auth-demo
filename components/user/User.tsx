"use client"

import { useSession } from "next-auth/react"

export default function User() {
  const { data: session, status } = useSession()

  console.log(session, status)

  return (
    <div className="w-full h-full flex flex-col items-center justify-center mt-10">
      <h1 className="text-4xl font-bold">User</h1>
      <pre>{JSON.stringify(session)}</pre>
    </div>
  )
}
