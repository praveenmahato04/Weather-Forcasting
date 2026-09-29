import { describeWeather, formatTemp } from "../utils/weather";

export default function WeatherCard({ name, country, region, current, unit }) {
  const { label, icon } = describeWeather(current.weather_code);
  const place = [name, region].filter(Boolean).join(", ");

  return (
    <section className="current" aria-label={`Current weather in ${name}`}>
      <div className="current-main">
        <h2>{place}</h2>
        <p className="country">{country}</p>
        <p className="temp">{formatTemp(current.temperature_2m, unit)}</p>
        <p className="condition">{label}</p>
      </div>
      <div className="current-icon" aria-hidden="true">{icon}</div>
      <dl className="stats">
        <div>
          <dt>Feels like</dt>
          <dd>{formatTemp(current.apparent_temperature, unit)}</dd>
        </div>
        <div>
          <dt>Humidity</dt>
          <dd>{current.relative_humidity_2m}%</dd>
        </div>
        <div>
          <dt>Wind</dt>
          <dd>{Math.round(current.wind_speed_10m)} km/h</dd>
        </div>
      </dl>
    </section>
  );
}
