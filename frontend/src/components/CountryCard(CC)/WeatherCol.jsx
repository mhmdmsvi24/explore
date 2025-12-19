import { WeatherIcon } from "../WeatherIcon";

export default function WeatherCol({ weekday, value, iconName }) {
  return (
    <div className="flex flex-col gap-1 grow rounded-lg justify-center items-center">
      <div className="text-center w-full font-roboto-bold text-gray-800">{weekday}</div>
      <div className="flex items-center gap-2 justify-center w-full">
        <div className="font-roboto-bold">{value}°</div>
        <div className="inline-flex">
          <WeatherIcon code={iconName} />
        </div>
      </div>
    </div>
  )
}
