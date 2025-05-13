function SearchBarWithLogo() {
  return (
    <div className="flex flex-col items-center py-8">
      <div className="flex items-center mb-4">
        <img src="/logo.png" alt="Logo" className="h-20 mr-2" />
        <div className="font-bold text-2xl">BlackCelta</div>
      </div>

      <div className="">
        <input
          type="text"
          placeholder="Type the name of the city"
          className="w-[300px] px-4 py-2 mr-2 hover:bg-px-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="px-4 py-2 border border-gray-300 rounded-xl shadow-sm 
             transition duration-300 ease-in-out hover:cursor-pointer hover:border-[#4E71F1]
             hover:bg-[#4E71F1] hover:text-rgba(255,255,255,0.87)]
             focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBarWithLogo;
