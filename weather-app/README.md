# Skyline Weather

A responsive weather app built with React and Vite. Search any city to see current conditions and a 7-day forecast. The background theme changes with the weather.

**Live demo:** _add your Vercel/Netlify link here_

## Features
- City search with geocoding (Open-Meteo Geocoding API)
- Current temperature, feels-like, humidity and wind
- 7-day forecast with rain chance
- °C / °F toggle, remembered between visits
- Recent searches (last 5), saved in `localStorage`
- Loading, error and empty states
- Mobile-first responsive layout, keyboard accessible

## Week 2 task coverage
| Task | Where |
|---|---|
| 2.1 Components & props | `src/components/` — `SearchBar`, `WeatherCard`, `ForecastList`, `ForecastDay`, `UnitToggle`, `RecentSearches`, `Loader`, `ErrorMessage` |
| 2.2 State & hooks | `useState` in `App.jsx` and `SearchBar.jsx`; `useEffect` in `App.jsx` and `hooks/useWeather.js`; custom hooks `useWeather`, `useLocalStorage` |
| 2.3 Public API integration | `hooks/useWeather.js` calls the Open-Meteo Geocoding and Forecast APIs (no API key) |
| 2.4 Mini project | Complete responsive app, this README, deployed demo |

## React concepts used
Functional components, props, `useState`, `useEffect` with cleanup (`AbortController`), custom hooks, lifted state, conditional rendering, list rendering with keys, controlled inputs, error handling.

## Run locally
```bash
npm install
npm run dev
```
Build for production with `npm run build`.

## Deploy
Push to GitHub, then import the repo in Vercel or Netlify. Build command `npm run build`, output directory `dist`.

## Screenshots
_Add desktop and mobile screenshots here._

## Suggested commit history
1. Add static UI components (2.1)
2. Add state and effects (2.2)
3. Integrate Open-Meteo API (2.3)
4. Responsive design and deploy (2.4)
