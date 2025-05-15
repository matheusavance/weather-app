function SearchBar({ city, setCity, clickButton }) {
  return (
    <div className="flex flex-col items-center pb-8">
      <div>
        <input
          type="text"
          placeholder="Type the name of the city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-[300px] px-4 py-2 mr-2 hover:bg-px-4 border border-gray-300 rounded-xl"
        />
        <button
          onClick={clickButton}
          className="px-4 py-2 border border-gray-300 rounded-xl shadow-sm 
             transition duration-300 ease-in-out hover:cursor-pointer hover:border-[#4E71F1]
             hover:bg-[#4E71F1] hover:text-rgba(255,255,255,0.87)]
             focus:outline-none focus:ring-0"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
