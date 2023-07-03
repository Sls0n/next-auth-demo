"use client"

import { useState } from "react"

import Input from "./Input/Input"
import Button from "./Input/Button"

import { signIn } from "next-auth/react"
import { toast } from "react-hot-toast"

export default function Form() {
  const [data, setData] = useState({ email: "", password: "" })

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
    <div className="flex justify-center items-center mt-20 bg-gray-50">
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
        </form>
      </div>
    </div>
  )
}
