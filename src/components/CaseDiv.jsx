function CaseDiv({ data }) {
  return (
    <div className="flex flex-col items-center text-white border-1 border-[#C94739] rounded-xl p-3 bg-[#C94739]">
      <div className="first-letter:uppercase font-mediums">{data}.</div>
    </div>
  );
}

export default CaseDiv;
