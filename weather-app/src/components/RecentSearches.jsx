export default function RecentSearches({ cities, onSelect, onClear }) {
  if (cities.length === 0) return null;
  return (
    <div className="recent">
      <span>Recent</span>
      <ul>
        {cities.map((c) => (
          <li key={c}>
            <button type="button" onClick={() => onSelect(c)}>{c}</button>
          </li>
        ))}
      </ul>
      <button type="button" className="link" onClick={onClear}>Clear</button>
    </div>
  );
}
