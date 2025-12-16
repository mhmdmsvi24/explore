import InfoBox from "../InfoBox";
import { formatPopulation } from "../../utils/util";
import Image from "../Image";
import CCMap from "../CountryCard(CC)/CCMap";
import CCDataGroup from "./CCDataGroup";
import CCSideNote from "./CCSideNote";
import CCWeather from "./CCWeather";

export default function CountryCard({ data }) {
  return (
    <div className="bg-white shadow-card p-4 rounded-xl font-roboto-regular space-y-5 m-1 md:flex w-100 mx-auto">
      {/* Name, Continent, Gallery */}
      <CCDataGroup colBasis={40}>
        <div className="flex flex-col">
          <div className="uppercase text-blue-600 font-roboto-bold">country in {data.continents}</div>
          <div className="flex gap-2 items-center">
            <InfoBox value={data.name.common} />
          </div>
        </div>
        <div className="flex items-center justify-center h-full grow bg-lime-100 w-92.5 overflow-hidden aspect-video rounded-lg">
          <Image src={data.flags.png} style="object-cover" />
        </div>
      </CCDataGroup>
      {/* Capital, Currency, Coat Of Arms */}
      <CCDataGroup colBasis={30}>
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
          <CCSideNote>
            National Emblem
          </CCSideNote>
        </div>
      </CCDataGroup>
      {/* Population, Language */}
      <CCDataGroup colBasis={30}>
        {/* Population & Lanugage */}
        <div className="flex">
          <InfoBox name="population" value={formatPopulation(data.population)} />
          <InfoBox name="lanugage" value={Object.values(data.languages)[0]} />
        </div>
        <div className="flex flex-col gap-2">
          {/* Get There */}
          <InfoBox name="Map View" />
          <div className="flex relative items-center justify-center h-full grow w-92.5 bg-lime-100 overflow-hidden aspect-video rounded-lg">
            <CCMap countryName={data.name.common} />
          </div>
        </div>
      </CCDataGroup>
      {/* Weather */}
      <CCDataGroup>
        <InfoBox name="Weather Forecast" />
        <CCWeather latlng={data.latlng} />
      </CCDataGroup>
    </div>
  )
}
