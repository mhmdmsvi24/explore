import useFetch from "../../hooks/useFetch";
import { numberToWeekDay } from "../../utils/util";
import WeatherCol from "./WeatherCol";

const API_URL = "http://www.7timer.info/bin/api.pl";

export default function CCWeather({ latlng, ...props }) {
  const [lat, lng] = latlng;

  const { data, loading, error } = useFetch(
    `${API_URL}?lon=${lng}&lat=${lat}&product=civil&output=json`
  );

  const todayIndex = new Date().getDay();

  const forecast = data?.dataseries?.slice(0, 3).map((dayData, index) => ({
    weekday: numberToWeekDay((todayIndex + index) % 7),
    temperature: dayData?.temp2m ?? "Not Available",
    iconName: dayData?.weather ?? "unknown",
  })) || [];

  return (
    <div className="flex flex-col gap-2" {...props}>
      <div className="flex gap-2 justify-between items-center">
        {loading && "..."}
        {error && "Failed to load weather"}

        {!loading && !error &&
          forecast.map(({ weekday, temperature, iconName }) => (
            <WeatherCol
              key={weekday}
              weekday={weekday}
              value={temperature}
              iconName={iconName}
            />
          ))}
      </div>
    </div>
  );
}
