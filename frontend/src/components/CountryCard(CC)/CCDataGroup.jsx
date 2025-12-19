export default function CCDataGroup({ children, colBasis }) {
  return (
    <div className={`flex flex-col basis-[${colBasis}%] gap-2`}>
      {children}
    </div>
  )
}
