import Flag from "./Flag";
import InfoBox from "./InfoBox";

export default function CountryCard({ data }) {
  return (
    <div className="bg-white shadow-card px-4 py-2 rounded-xl font-roboto-regular space-y-4 m-1">
      {/* Name, Continent, Gallery */}
      <div className="flex flex-col basis-[40%] gap-4">
        <div className="flex flex-col gap-2">
          <div className="uppercase text-blue-600 font-bold">country in {data.continents}</div>
          <div className="flex gap-2 items-center">
            <div>
              <Flag cca2={data.cca2} />
            </div>
            <div className="text-xl font-roboto-bold text-gray-900">
              {data.name.common}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-full grow bg-blue-400 overflow-hidden aspect-video rounded-lg">
          <img src="https://picsum.photos/id/237/300/200" className="object-cover w-full" />
        </div>
      </div>
      {/* Capital, Currency, Time Zone */}
      <div className="flex flex-col gap-2 basis-[30%]">
        {/* Capital, Currency */}
        <div className="flex gap-2">
          <InfoBox name="capital" value={data.capital.join(" ")} />
          <InfoBox name="currency" value={Object.values(data.currencies)[0]?.name} />
        </div>
        {/* Time Zone */}
        <div className="flex items-center justify-center h-full grow bg-blue-400 aspect-video rounded-lg"></div>
      </div>
      {/* Population, Languages, Get There, Weather */}
      <div className="flex flex-col basis-[30%]">
        {/* Population & Lanugage */}
        <div className="flex">
          <InfoBox name="population" value={data.population} />
          <InfoBox name="lanugage" value={Object.values(data.languages)[0]} />
        </div>
        <div className="flex flex-col">
          {/* Get There */}
          <div>Get There</div>
          {/* Weather */}
          <div>Weather</div>
        </div>
      </div>
    </div>
  )
}
