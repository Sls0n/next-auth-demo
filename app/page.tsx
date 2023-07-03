import { getServerSession } from "next-auth/next"
import { authOptions } from "@/utils/authOptions"
import User from "@/components/user/User"

export default async function Page() {
  const session = await getServerSession(authOptions)

  return (
    <>
      <div className="flex flex-wrap gap-4 items-center justify-center mb-8 mt-4 overflow-auto">
        <h1 className="text-2xl text-center font-bold text-gray-700 ">
          Server side session :
        </h1>
        <pre className="bg-gray-100 p-4 rounded-md shadow-md text-gray-700 overflow-ellipsis">
          {JSON.stringify(session)}
        </pre>
      </div>

      <div className="w-full h-full flex flex-col items-center justify-center mt-10">
        <p className="text-center text-gray-700 mb-8">
          Name : {session?.user?.name}
        </p>
        <p className="text-center text-gray-700 mb-8">
          Email : {session?.user?.email}
        </p>
        <img src={session?.user?.image} alt="pfp" className="rounded-md w-40" />
      </div>

      <User />
    </>
  )
}
