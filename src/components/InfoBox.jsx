export default function InfoBox({ name, value }) {
  return (
    <div className="grow font-roboto-bold flex flex-col">
      <div className="uppercase text-gray-500 text-sm flex-wrap">{name}</div>
      <div className="text-lg text-gray-800">{value}</div>
    </div>
  )
}
