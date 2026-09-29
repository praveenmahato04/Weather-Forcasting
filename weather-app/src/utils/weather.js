// WMO weather codes used by Open-Meteo -> label, icon, and visual theme.
const CODES = [
  { codes: [0], label: "Clear sky", icon: "☀️", theme: "clear" },
  { codes: [1, 2], label: "Partly cloudy", icon: "⛅", theme: "cloud" },
  { codes: [3], label: "Overcast", icon: "☁️", theme: "cloud" },
  { codes: [45, 48], label: "Fog", icon: "🌫️", theme: "fog" },
  { codes: [51, 53, 55, 56, 57], label: "Drizzle", icon: "🌦️", theme: "rain" },
  { codes: [61, 63, 65, 66, 67], label: "Rain", icon: "🌧️", theme: "rain" },
  { codes: [71, 73, 75, 77], label: "Snow", icon: "❄️", theme: "snow" },
  { codes: [80, 81, 82], label: "Rain showers", icon: "🌦️", theme: "rain" },
  { codes: [85, 86], label: "Snow showers", icon: "🌨️", theme: "snow" },
  { codes: [95, 96, 99], label: "Thunderstorm", icon: "⛈️", theme: "storm" },
];

export function describeWeather(code) {
  return (
    CODES.find((c) => c.codes.includes(code)) || {
      label: "Unknown",
      icon: "🌡️",
      theme: "cloud",
    }
  );
}

export function convertTemp(celsius, unit) {
  return unit === "F" ? (celsius * 9) / 5 + 32 : celsius;
}

export function formatTemp(celsius, unit) {
  return `${Math.round(convertTemp(celsius, unit))}°`;
}

export function formatDay(dateString, index) {
  if (index === 0) return "Today";
  return new Date(dateString + "T00:00:00").toLocaleDateString(undefined, {
    weekday: "short",
  });
}
