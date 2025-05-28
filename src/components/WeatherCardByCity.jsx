import { motion } from 'framer-motion';

function WeatherCardByCity({ data }) {
  const temperature = Math.round(data.main.temp);

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-block border-1 border-[#474747] rounded-xl p-4 text bg-[#474747]"
    >
      <div className="flex mb-4">
        <h1 className="text-[24px] font-semibold">{data.name}</h1>
      </div>
      <div className="text-2xl font-bold">{temperature} °C</div>
      <div className="[&::first-letter]:uppercase lowercase pb-4">
        {data.weather[0].description}
      </div>
      <div className="flex gap-6">
        <div className="border-1 border-[#333333] rounded-xl p-3 bg-[#333333]">
          <p className="font-bold">Humidity</p>
          <p>{data.main.humidity}%</p>
        </div>
        <div className="border-1 border-[#333333] rounded-xl p-3 bg-[#333333]">
          <p className="font-bold">Wind Speed</p>
          <p>{data.wind.speed} MPH</p>
        </div>
      </div>
    </motion.div>
  );
}

export default WeatherCardByCity;
