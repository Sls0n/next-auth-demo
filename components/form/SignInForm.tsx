"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

import Input from "./Input/Input"
import Button from "./Input/Button"

import { signIn, useSession } from "next-auth/react"
import { toast } from "react-hot-toast"

export default function Form() {
  const [data, setData] = useState({ email: "", password: "" })

  const router = useRouter()

  const { data: session, status } = useSession()

  useEffect(() => {
    console.log(session)
    if (status === "authenticated") {
      router.push("/")
    }
  }, [session])

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    }).then((callback) => {
      if (callback?.error) {
        toast.error(callback.error)
      }

      if (callback?.ok && !callback?.error) {
        toast.success("Login successful!")
      }
    })
  }

  return (
    <div className="flex justify-center items-center mt-10 bg-gray-50">
      <div className="w-full max-w-md p-6 space-y-10 bg-white rounded-md shadow-lg">
        <div>
          <h1 className="text-4xl text-center font-bold text-gray-800">
            Sign in
          </h1>
        </div>
        <form onSubmit={loginUser} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-2">
              <Input
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                id="email"
                name="email"
                type="email"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-2">
              <Input
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                id="password"
                name="password"
                type="password"
                required
              />
            </div>
          </div>
          <div>
            <Button onClick={() => {}}>Sign in</Button>

            <p className="mt-8 text-sm text-center text-gray-600">
              Dont have an account?{" "}
              <a
                href="/signup"
                className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline"
              >
                Sign up
              </a>
            </p>
          </div>
          <hr />
          <div className="flex flex-col gap-6 justify-center">
            <button
              onClick={(e) => {
                e.preventDefault()
                signIn("github")
              }}
              className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              {" "}
              Continue with Github
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-5 h-5 ml-2"
                src="https://img.icons8.com/fluency/48/000000/github.png"
                alt="github"
              />
            </button>

            <button
              onClick={(e) => {
                e.preventDefault()
                signIn("google")
              }}
              className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              {" "}
              Continue with Google
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-5 h-5 ml-2"
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="github"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
