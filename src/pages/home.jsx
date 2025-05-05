import { useEffect, useState } from 'react';
import { getWeatherByCity } from '../services/weatherAPI';
import WeatherCard from '../components/WeatherCard';
import SearchBarWithLogo from '../components/SearchBar';

function Home() {
  const [weather, setWeather] = useState(null);
  const city = 'Guarapari';

  useEffect(() => {
    getWeatherByCity(city).then(setWeather).catch(console.error);
  }, []);

  return (
    <div className="home-page">
      <SearchBarWithLogo />
      <h1>Previsão do Tempo</h1>
      {weather ? <WeatherCard data={weather} /> : <p>Carregando...</p>}
    </div>
  );
}

export default Home;
