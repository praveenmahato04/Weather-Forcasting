import { useState } from "react";

export default function SearchBar({ onSearch, disabled }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    onSearch(trimmed);
    setInput("");
  }

  return (
    <form className="search" onSubmit={handleSubmit} role="search">
      <label htmlFor="city" className="sr-only">City name</label>
      <input
        id="city"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search a city, e.g. Pokhara"
        autoComplete="off"
      />
      <button type="submit" disabled={disabled || !input.trim()}>
        Search
      </button>
    </form>
  );
}
