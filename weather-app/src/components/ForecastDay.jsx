import { describeWeather, formatTemp } from "../utils/weather";

export default function ForecastDay({ day, code, max, min, rain, unit }) {
  const { label, icon } = describeWeather(code);
  return (
    <li className="day">
      <span className="day-name">{day}</span>
      <span className="day-icon" role="img" aria-label={label}>{icon}</span>
      <span className="day-rain">{rain ?? 0}% rain</span>
      <span className="day-temps">
        <strong>{formatTemp(max, unit)}</strong>
        <span>{formatTemp(min, unit)}</span>
      </span>
    </li>
  );
}
