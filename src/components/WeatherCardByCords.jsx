function WeatherCardByCords({ data }) {
  const temperature = Math.round(data.current.temp);
  const timezone = data.timezone;
  const userLocation = timezone.split('/')[1];

  return (
    <div
      className="inline-block border-1 border-[#474747] rounded-xl p-4 text bg-[#474747]"
      data-taos-offset="500"
    >
      <div className="flex mb-4">
        <h1 className="text-[24px] font-semibold">
          Current position: {userLocation}
        </h1>
      </div>
      <div className="text-2xl font-bold">{temperature} °C</div>
      <div className="first-letter:uppercase pb-4">
        {data.current.weather[0].description}
      </div>
      <div className="flex gap-6">
        <div className="border-1 border-[#333333] rounded-xl p-3 bg-[#333333]">
          <p className="font-bold">Humidity</p>
          <p>{data.current.humidity}%</p>
        </div>
        <div className="border-1 border-[#333333] rounded-xl p-3 bg-[#333333]">
          <p className="font-bold">Wind Speed</p>
          <p>{data.current.wind_speed} MPH</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCardByCords;
