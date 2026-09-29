import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import UnitToggle from "./components/UnitToggle";
import RecentSearches from "./components/RecentSearches";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import { useWeather } from "./hooks/useWeather";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { describeWeather } from "./utils/weather";

export default function App() {
  const [city, setCity] = useState("Kathmandu");
  const [unit, setUnit] = useLocalStorage("unit", "C");
  const [recent, setRecent] = useLocalStorage("recent", []);
  const { data, loading, error } = useWeather(city);

  // Save a city to recent searches only once it has loaded successfully.
  useEffect(() => {
    if (!data) return;
    setRecent((prev) =>
      [data.name, ...prev.filter((c) => c.toLowerCase() !== data.name.toLowerCase())].slice(0, 5)
    );
  }, [data, setRecent]);

  const theme = data ? describeWeather(data.current.weather_code).theme : "cloud";

  return (
    <div className="app" data-theme={theme}>
      <main>
        <header className="top">
          <h1>Skyline Weather</h1>
          <UnitToggle unit={unit} onChange={setUnit} />
        </header>

        <SearchBar onSearch={setCity} disabled={loading} />
        <RecentSearches cities={recent} onSelect={setCity} onClear={() => setRecent([])} />

        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {data && !loading && (
          <>
            <WeatherCard
              name={data.name}
              country={data.country}
              region={data.region}
              current={data.current}
              unit={unit}
            />
            <ForecastList daily={data.daily} unit={unit} />
          </>
        )}
        {!data && !loading && !error && <p className="hint">Search for a city to see its weather.</p>}
      </main>
      <footer>
        Data from <a href="https://open-meteo.com/" target="_blank" rel="noreferrer">Open-Meteo</a>
      </footer>
    </div>
  );
}
