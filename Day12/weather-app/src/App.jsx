import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [weather, setWeather] = useState({
    city: "City",
    country: "Country",
    temperature: 32,
    condition: "Sunny",
    humidity: 21,
    windSpeed: 12,
    icon: "http://cdn.weatherapi.com/weather/64x64/day/113.png",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError("");
      setWeather(null);

      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`,
      );

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      setWeather({
        city: data.location.name,
        country: data.location.country,
        temperature: data.current.temp_c,
        condition: data.current.condition.text,
        humidity: data.current.humidity,
        windSpeed: data.current.wind_kph,
        icon: data.current.condition.icon,
      });
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <Navbar />

      <div className="container">
        <SearchBox className="search-box" onSearch={fetchWeather} />

        {loading && <p className="loader">Loading weather data...</p>}

        {error && <p className="error">{error}</p>}
        {weather && <WeatherCard weather={weather} />}
      </div>

      <Footer />
    </>
  );
}

export default App;
