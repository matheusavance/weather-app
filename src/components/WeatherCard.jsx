function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <h2>{data.name}</h2>
      <p>Temperatura: {data.main.temp} °C</p>
      <p>{data.weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;
