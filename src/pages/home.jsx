import { useEffect, useState } from 'react';
import { getWeatherByCity } from '../services/weatherAPI';
import WeatherCard from '../components/WeatherCard';
import SearchBarWithLogo from '../components/SearchBar';

function Home() {
  const [weather, setWeather] = useState(null);
  const city = 'Guarapari';

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeatherByCity(city);
        setWeather(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <SearchBarWithLogo />
      {weather ? <WeatherCard data={weather} /> : <p>Carregando...</p>}
    </div>
  );
}

export default Home;
