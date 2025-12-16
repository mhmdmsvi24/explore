export default function InfoBox({ name, value }) {
  return (
    <div className="grow flex flex-col">
      {name &&
        (
          <div className="uppercase text-gray-500 text-sm flex-wrap font-roboto-bold">
            {name}
          </div>
        )
      }
      {value && <div className="text-lg text-gray-800 font-roboto-regular">{value}</div>}
    </div>
  )
}
