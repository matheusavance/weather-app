import { useState, useEffect } from 'react';
import { getWeatherByCity, getWeatherByCords } from '../services/weatherAPI';
import WeatherCardByCity from '../components/WeatherCardByCity';
import WeatherCardByCords from '../components/WeatherCardByCords';
import SearchBar from '../components/SearchBar';
import Logo from '../components/Logo';
import FailMessage from '../components/FailMessage';
import SearchResultsList from '../components/SearchResultsList';

function Home() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [weatherByCords, setWeatherByCords] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [failMessage, setFailMessage] = useState(null);
  const [key, setKey] = useState(0);
  const [input, setInput] = useState();
  const [results, setResults] = useState([]);

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
          setFailMessage('Location denied by user');
          console.log('Location denied by user.');
        }
      });
    } else {
      console.log('Permissions API is not supported in this browser.');
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

  async function getCityData(value) {
    try {
      const response = await fetch('/cities');
      const json = await response.json();
      const results = json.filter(
        (city) =>
          value && city && city.name && city.name.toLowerCase().includes(value),
      );
      const filteredResults = results.slice(0, 20);
      setResults(filteredResults);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const handleChange = (value) => {
    setInput(value);
    getCityData(value);
  };

  return (
    <div className="flex flex-col items-center pt-8">
      <Logo />
      <SearchBar
        city={city}
        setCity={setCity}
        clickButton={clickButton}
        handleChange={handleChange}
        setResults={setResults}
      />
      {input && results.length > 0 && <SearchResultsList results={results} />}
      {weatherByCords && <WeatherCardByCords data={weatherByCords} />}
      {weather && <WeatherCardByCity data={weather} key={key} />}
      {failMessage && <FailMessage data={failMessage} />}
    </div>
  );
}

export default Home;
