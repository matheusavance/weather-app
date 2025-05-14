const API_KEY = import.meta.env.REACT_APP_API_KEY;

export async function getWeatherByCity(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`,
  );
  if (!response.ok) throw new Error('Error loading data');

  return response.json();
}
