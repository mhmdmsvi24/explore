export default function Loading({ style }) {
  return (
    <div className={`relative h-full w-full flex items-center justify-center gap-3 ${style}`}>
      <div
        className="bg-black/50 rounded-full w-4 aspect-square animate-[bounce_1s_linear_infinite]"
      >
      </div>
      <div
        className="bg-black/50 rounded-full w-4 aspect-square animate-[bounce_2s_linear_infinite]"
      >
      </div>
      <div
        className="bg-black/50 rounded-full w-4 aspect-square animate-[bounce_1s_linear_infinite]"
      >
      </div>
    </div>
  )
}
