"use client"

import axios from "axios"
import { useState } from "react"

import Input from "./Input/Input"
import Button from "./Input/Button"
import { toast } from "react-hot-toast"

export default function Form() {
  const [data, setData] = useState({ username: "", email: "", password: "" })

  const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("User has been registered!")
      })
      .catch((err) => {
        console.log(err)
        toast.error("User registration failed!")
      })
  }

  return (
    <div className="flex justify-center items-center mt-10 bg-gray-50">
      <div className="w-full max-w-md p-6 space-y-10 bg-white rounded-md shadow-lg">
        <div>
          <h1 className="text-4xl text-center font-bold text-gray-800">
            Register
          </h1>
        </div>
        <form onSubmit={registerUser} className="space-y-10">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <div className="mt-2">
              <Input
                value={data.username}
                onChange={(e) => setData({ ...data, username: e.target.value })}
                id="username"
                name="username"
                type="text"
                required
              />
            </div>
          </div>
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
            <Button onClick={() => {}}>Register</Button>

            <p className="mt-8 text-sm text-center text-gray-600">
              Already have an account?{" "}
              <a
                href="/signin"
                className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline"
              >
                Sign in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
