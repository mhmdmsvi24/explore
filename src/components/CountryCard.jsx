import InfoBox from "./InfoBox";
import { formatPopulation } from "../utils/util";
import Image from "./Image";
import CountryMap from "./CountryMap";

export default function CountryCard({ data }) {
  return (
    <div className="bg-white shadow-card px-4 py-2 rounded-xl font-roboto-regular space-y-5 m-1 md:flex w-100 mx-auto">
      {/* Name, Continent, Gallery */}
      <div className="flex flex-col basis-[40%] gap-4">
        <div className="flex flex-col">
          <div className="uppercase text-blue-600 font-bold">country in {data.continents}</div>
          <div className="flex gap-2 items-center">
            <div className="text-xl font-roboto-bold text-gray-900">
              {data.name.common}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-full grow bg-lime-100 w-92.5 overflow-hidden aspect-video rounded-lg">
          <Image src={data.flags.png} style="object-cover" />
        </div>
      </div>
      {/* Capital, Currency, Time Zone */}
      <div className="flex flex-col gap-2 basis-[30%]">
        {/* Capital, Currency */}
        <div className="flex gap-2">
          <InfoBox name="capital" value={data.capital.join(" ")} />
          <InfoBox name="currency" value={Object.values(data.currencies)[0]?.name} />
        </div>
        {/* Cost of Arms */}
        <div className="flex relative items-center justify-center h-full grow w-92.5 bg-lime-100 overflow-hidden aspect-video rounded-lg">
          {
            data.coatOfArms.png
              ? (<Image src={data.coatOfArms?.png} alt={data.name.common} style="object-contain p-5" />)
              : (<div className="text-red-300 font-bold">(Not Available)</div>)
          }
          <div className="absolute left-0 bottom-0 flex flex-col-reverse m-3 text-center">
            <div className="text-gray-400 font-roboto-bold peer">
              National Emblem
            </div>
          </div>
        </div>
      </div>
      {/* Population, Languages, Get There, Weather */}
      <div className="flex flex-col basis-[30%] gap-2">
        {/* Population & Lanugage */}
        <div className="flex">
          <InfoBox name="population" value={formatPopulation(data.population)} />
          <InfoBox name="lanugage" value={Object.values(data.languages)[0]} />
        </div>
        <div className="flex flex-col gap-2">
          {/* Get There */}
          <div>Map View</div>
          <div className="flex relative items-center justify-center h-full grow w-92.5 bg-lime-100 overflow-hidden aspect-video rounded-lg">
            <CountryMap countryName={data.name.common} />
          </div>
          <div>Weather</div>
        </div>
      </div>
    </div>
  )
}
