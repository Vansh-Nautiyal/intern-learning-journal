function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>
        {weather.city}, {weather.country}
      </h2>

      <img src={weather.icon} alt={weather.condition} />
      <br />
      <h1>{weather.temperature}°C</h1>

      <div className="info-box">
        
        <div className="info">
          <h3>Condition</h3>
          <p>{weather.condition}</p>
        </div>
        <div className="info">
          <h3>Humidity</h3>
          <p>{weather.humidity}%</p>
        </div>
        <div className="info">
          <h3>Wind Speed</h3>
          <p>{weather.windSpeed} km/h</p>
        
        </div>
      </div>
    
    </div>
  );
}

export default WeatherCard;
