import InfoBox from "../InfoBox";
import { formatPopulation } from "../../utils/util";
import Image from "../Image";
import CCMap from "../CountryCard(CC)/CCMap";
import CCDataGroup from "./CCDataGroup";
import CCSideNote from "./CCSideNote";
import CCWeather from "./CCWeather";
import Button from "../Button";
import { Link } from "react-router";

export default function CountryCard({ data }) {
  return (
    <div className="bg-white p-4 font-roboto-regular flex flex-col justify-between gap-4 mx-auto w-full sm:shadow-card sm:max-w-110 sm:rounded-xl">
      {/* Name, Continent, Gallery */}
      <CCDataGroup colBasis={40}>
        <div className="flex flex-col gap-1">
          <div className="uppercase text-blue-600 font-roboto-bold">country in {data.continents}</div>
          <div className="flex gap-2 items-center">
            <img src={data.flags.png} className="h-6 aspect-video rounded-md overflow-hidden" />
            <InfoBox value={data.name.common} />
          </div>
        </div>
        {/* <div className="flex items-center justify-center h-full grow bg-lime-100 overflow-hidden aspect-video rounded-lg">
          <Image src={data.flags.png} style="object-cover" />
        </div> */}
      </CCDataGroup>
      {/* Capital, Currency, Coat Of Arms */}
      <CCDataGroup colBasis={30}>
        {/* Capital, Currency */}
        <div className="flex gap-2 flex-col">
          <div className="flex justify-between">
            <InfoBox name="capital" value={data.capital.join(" ")} />
            <InfoBox name="currency" value={Object.values(data.currencies)[0]?.name} />
          </div>
          <div className="flex justify-between">
            <InfoBox name="population" value={formatPopulation(data.population)} />
            <InfoBox name="lanugage" value={Object.values(data.languages)[0]} />
          </div>
        </div>
        {/* Cost of Arms */}
        {/* <div className="flex relative items-center justify-center h-full grow bg-lime-100 overflow-hidden aspect-video rounded-lg">
          {
            data.coatOfArms.png
              ? (<Image src={data.coatOfArms?.png} alt={data.name.common} style="object-contain p-5" />)
              : (<div className="text-red-300 font-bold">(Not Available)</div>)
          }
          <CCSideNote>
            National Emblem
          </CCSideNote>
        </div> */}
      </CCDataGroup>
      {/* Map */}
      <CCDataGroup colBasis={30}>
        <div className="flex flex-col gap-2">
          {/* Get There */}
          <InfoBox name="Map View" />
          <div className="flex relative items-center justify-center h-full grow bg-lime-100 overflow-hidden aspect-video rounded-lg">
            <CCMap countryName={data.name.common} />
          </div>
        </div>
      </CCDataGroup>
      {/* Weather */}
      <CCDataGroup>
        <InfoBox name="Weather Forecast" />
        <CCWeather latlng={data.latlng} />
      </CCDataGroup>
      <Button>
        <Link to={`/country/${encodeURIComponent(data.name.common.split(" ").join("_"))}`}>
          Learn More
        </Link>
      </Button>
      <div className="w-[80%] mx-auto border-b border-blue-400 mt-1 md:hidden"></div>
    </div>
  )
}
