"use client"

type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
}

export default function Input({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type="submit"
      className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {children}
    </button>
  )
}
