import { useParams } from "react-router"

export default function Country() {
  let { country } = useParams()
  return (
    <div>
      Country {country}
    </div>
  )
}
