import ForecastDay from "./ForecastDay";
import { formatDay } from "../utils/weather";

export default function ForecastList({ daily, unit }) {
  return (
    <section aria-label="7-day forecast">
      <h3>7-day forecast</h3>
      <ul className="forecast">
        {daily.time.map((date, i) => (
          <ForecastDay
            key={date}
            day={formatDay(date, i)}
            code={daily.weather_code[i]}
            max={daily.temperature_2m_max[i]}
            min={daily.temperature_2m_min[i]}
            rain={daily.precipitation_probability_max?.[i]}
            unit={unit}
          />
        ))}
      </ul>
    </section>
  );
}
