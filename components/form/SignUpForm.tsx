"use client"

import Input from "./Input/Input"
import Button from "./Input/Button"

export default function Form() {
  return (
    <div className="flex justify-center items-center mt-20 bg-gray-50">
      <div className="w-full max-w-md p-6 space-y-10 bg-white rounded-md shadow-lg">
        <div>
          <h1 className="text-4xl text-center font-bold text-gray-800">
            Register
          </h1>
        </div>
        <form className="space-y-10">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <div className="mt-2">
              <Input id="username" name="username" type="text" required />
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
              <Input id="email" name="email" type="email" required />
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
              <Input id="password" name="password" type="password" required />
            </div>
          </div>
          <div>
            <Button onClick={() => {}}>Sign in</Button>

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
