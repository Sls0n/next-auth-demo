"use client"

import Input from "./Input/Input"
import Button from "./Input/Button"

export default function Form() {
  return (
    <div className="flex items-center justify-center mt-40 bg-gray-50">
      <div className="w-full max-w-md p-6 space-y-10 bg-white rounded-md shadow-lg">
        <div>
          <h1 className="text-4xl text-center font-bold text-gray-800">
            Sign In
          </h1>
        </div>
        <form className="space-y-10">
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
          </div>
        </form>
      </div>
    </div>
  )
}
