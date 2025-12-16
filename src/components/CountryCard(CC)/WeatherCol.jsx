import { WeatherIcon } from "../WeatherIcon";

export default function WeatherCol({ weekday, value, iconName }) {
  return (
    <div className="flex flex-col gap-1 p-2 grow rounded-lg">
      <div>{weekday}</div>
      <div className="flex items-center gap-2">
        <div>{value}°</div>
        <div className="inline-flex">
          <WeatherIcon code={iconName} />
        </div>
      </div>
    </div>
  )
}
