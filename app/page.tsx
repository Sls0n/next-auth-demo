import { getServerSession } from "next-auth/next"
import { authOptions } from "@/utils/authOptions"
import User from "@/components/user/User"

export default async function Page() {
  const session = await getServerSession(authOptions)
  return <User />
}
