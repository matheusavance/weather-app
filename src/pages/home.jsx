import { useState } from 'react';
import { getWeatherByCity } from '../services/weatherAPI';
import WeatherCard from '../components/WeatherCard';
import SearchBar from '../components/SearchBar';
import Logo from '../components/Logo';

function Home() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');

  const clickButton = async () => {
    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
      setCity('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center pt-8">
      <Logo />
      <SearchBar city={city} setCity={setCity} clickButton={clickButton} />
      {weather && <WeatherCard data={weather} city={city} />}
    </div>
  );
}

export default Home;
