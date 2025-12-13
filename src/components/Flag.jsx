export default function Flag({ cca2 }) {
  return (
    <div className="inline overflow-hidden">
      <div className={`fi fi-${cca2.toLowerCase()} fib text-9xl rounded-lg`}></div>
    </div>
  )
}
