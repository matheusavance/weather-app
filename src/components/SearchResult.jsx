function SearchResult({ result }) {
  return (
    <div className="py-2 px-4 hover:bg-[#4E71F1] hover:text-rgba(255,255,255,0.87)">
      {result.name}
    </div>
  );
}

export default SearchResult;
