export default function CCSideNote({ children }) {
  return (
    <div className="absolute left-0 bottom-0 flex flex-col-reverse m-3 text-center">
      <div className="text-gray-400 font-roboto-bold text-sm">
        {children}
      </div>
    </div>
  )
}
