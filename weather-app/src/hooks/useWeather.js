import { useState, useEffect } from "react";

const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

async function getJson(url, signal) {
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`Request failed (${res.status}). Try again shortly.`);
  return res.json();
}

// Fetches coordinates for a city, then its current weather and 7-day forecast.
export function useWeather(city) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;
    const controller = new AbortController();

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const geo = await getJson(
          `${GEO_URL}?name=${encodeURIComponent(city)}&count=1&language=en`,
          controller.signal
        );
        if (!geo.results?.length) {
          throw new Error(`No city found for "${city}". Check the spelling and try again.`);
        }
        const { latitude, longitude, name, country, admin1 } = geo.results[0];

        const wx = await getJson(
          `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}` +
            `&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code` +
            `&daily=temperature_2m_max,temperature_2m_min,weather_code,precipitation_probability_max` +
            `&timezone=auto`,
          controller.signal
        );

        setData({ name, country, region: admin1, current: wx.current, daily: wx.daily });
      } catch (e) {
        if (e.name === "AbortError") return; // stale request, ignore
        setData(null);
        setError(
          e instanceof TypeError ? "Can't reach the weather service. Check your connection." : e.message
        );
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    load();
    return () => controller.abort(); // cleanup when city changes or component unmounts
  }, [city]);

  return { data, loading, error };
}
