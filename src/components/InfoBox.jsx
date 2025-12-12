export default function InfoBox({ name, value }) {
  return (
    <div className="grow font-roboto-bold flex flex-col gap-1">
      <div className="uppercase text-gray-500 text-sm">{name}</div>
      <div className="text-lg text-gray-800">{value}</div>
    </div>
  )
}
