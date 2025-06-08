import SearchResult from './SearchResult';

function SearchResultsList({ results }) {
  return (
    <div className="flex flex-col w-[300px] max-h-[300px] bg-[#242424] border border-gray-300 rounded-xl overflow-y-auto">
      {results.map((result, id) => {
        return <SearchResult result={result} key={id} />;
      })}
    </div>
  );
}

export default SearchResultsList;
