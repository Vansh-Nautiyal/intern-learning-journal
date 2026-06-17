import { useState } from "react";

function SearchBox({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div className="search-box">
        <h2>Search Weather by City Name</h2>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) =>
          setCity(e.target.value)
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />

      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBox;