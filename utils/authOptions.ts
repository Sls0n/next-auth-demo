import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@example.com",
        },
      },
      async authorize(credentials, req) {
        const user = { id: 1, name: "Ethan", email: "test@test.com" }
        return user as any
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
}
