export default function Square({ value, onClick }) {
  return (
    <button
      className="w-16 h-16 border border-slate-300 shadow-md sm:w-20 sm:h-20 md:w-24 md:h-24 text-5xl font-bold flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition duration-300"
      onClick={onClick}
    >
      {value}
    </button>
  );
}
