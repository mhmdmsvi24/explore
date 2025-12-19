import weatherToCode from "../data/weather-to-qweather.json";

export function WeatherIcon({ code }) {
  return (
    <i className={`qi-${weatherToCode[code]}`}></i>
  )
}
