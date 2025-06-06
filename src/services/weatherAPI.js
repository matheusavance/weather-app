const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function getWeatherByCity(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=en`,
  );
  if (!response.ok) {
    return response.json();
  }

  return response.json();
}

export async function getWeatherByCords(latitude, longitude) {
  const response = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=en`,
  );
  if (!response.ok)
    throw new Error('Error loading data from getWeatherByCords');

  return response.json();
}

export async function getCityData() {
  const response = await fetch('/cities');
  if (!response.ok) {
    return response.json();
  }

  return response.json();
}
