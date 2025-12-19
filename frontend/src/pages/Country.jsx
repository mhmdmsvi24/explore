import { useParams } from "react-router"
import Image from "../components/Image"
import { useCountry } from "../hooks/useCountry";

export default function Country() {
  let { country } = useParams()
  const URIDecodedCountry = country.split("_").join(" ")

  let { result: foundCountry } = useCountry("countries", URIDecodedCountry);

  return (
    <div className="container mx-auto">
      <div className="bg-lime-50 flex flex-col justify-center py-4 gap-3">
        {/*  */}
        <div className="text-center text-xl md:text-2xl lg:text-3xl text-blue-500 font-roboto-bold">
          {foundCountry.name.common}
        </div>
        {/*  */}
        <div>
          <Image src={foundCountry.flags.png} alt={foundCountry.name.common + " flag"}/>
        </div>
      </div>
    </div>
  )
}
