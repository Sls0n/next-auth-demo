"use client"

type InputProps = {
  id: string
  name: string
  type: string
  required: boolean
}

export default function Input({ id, name, type, required }: InputProps) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      required={required}
      className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  )
}
