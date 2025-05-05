function SearchBarWithLogo() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="mb-4">
        <img src="/logo.png" alt="Logo" className="h-24" />
        <div>BlackCelta</div>
      </div>

      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

export default SearchBarWithLogo;
