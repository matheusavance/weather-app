function WeatherCard({ data }) {
  return (
    <div className="inline-block border border-gray-300 rounded-xl p-4">
      <h2>{data.name}</h2>
      <div>
        <p className="capitalize">{data.weather[0].description}</p>
        <p>Temperature: {data.main.temp}°C</p>
        <p>Humidity: {data.main.humidity}</p>
        <p>Wind velocity: {data.wind.speed}</p>
      </div>
    </div>
  );
}

export default WeatherCard;
