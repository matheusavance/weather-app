import { useState, useEffect } from 'react';
import { getWeatherByCity, getWeatherByCords } from '../services/weatherAPI';
import WeatherCardByCity from '../components/WeatherCardByCity';
import WeatherCardByCords from '../components/WeatherCardByCords';
import SearchBar from '../components/SearchBar';
import Logo from '../components/Logo';
import FailMessage from '../components/FailMessage';

function Home() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [weatherByCords, setWeatherByCords] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [failMessage, setFailMessage] = useState(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
      return;
    }

    if ('permissions' in navigator) {
      navigator.permissions.query({ name: 'geolocation' }).then((result) => {
        if (result.state === 'granted') {
          console.log('Permission grated by user.');
        } else if (result.state === 'prompt') {
          console.log(
            'Permission has not yet been given. The browser will ask for it.',
          );
        } else if (result.state === 'denied') {
          console.log('Location denied by user.');
        }
      });
    } else {
      console.log('Permissions API não suportada neste navegador.');
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCoordinates({ latitude, longitude });

      const searchCityByCords = async () => {
        try {
          const info = await getWeatherByCords(latitude, longitude);
          setWeatherByCords(info);
        } catch (error) {
          console.error(error);
        }
      };
      searchCityByCords();
    });
  }, []);

  const clickButton = async () => {
    try {
      const data = await getWeatherByCity(city);

      if (data.cod != '200') {
        setWeatherByCords(null);
        setWeather(null);
        setFailMessage(data.message);
        setCity('');
      } else {
        setWeatherByCords(null);
        setWeather(data);
        setFailMessage(null);
        setCity('');
        setKey((prevKey) => prevKey + 1);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center pt-8">
      <Logo />
      <SearchBar city={city} setCity={setCity} clickButton={clickButton} />
      {weatherByCords && <WeatherCardByCords data={weatherByCords} />}
      {weather && <WeatherCardByCity data={weather} city={city} key={key} />}
      {failMessage && <FailMessage data={failMessage} key={key} />}
    </div>
  );
}

export default Home;
