export default function Button({ children }) {
  return (
    <button
      className="rounded-xl bg-blue-600 px-4 py-2 w-full font-roboto-bold text-white"
    >
      {children}
    </button>
  )
}
