const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function getWeatherByCity(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`,
  );
  if (!response.ok) throw new Error('Erro ao buscar clima');

  return response.json();
}

// // Call the function and print all the data
// async function printWeatherData(city) {
//   try {
//     const weatherData = await getWeatherByCity(city);
//     console.log(weatherData); // Print all the data from the response
//   } catch (error) {
//     console.error(error); // Handle any errors
//   }
// }

// printWeatherData('São Paulo'); // Replace with any city you want
