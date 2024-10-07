export default function Square({ value, onClick, highlight, winner, isDraw }) {
  // Set the background color conditionally based on the winner, highlight, or draw
  const getBgColor = () => {
    if (isDraw) return "bg-yellow-400"; // Color for draw (e.g., yellow)
    if (!highlight) return "bg-gray-200 hover:bg-gray-300"; // Default color
    return winner === "X" ? "bg-green-500" : "bg-red-500"; // X is green, O is red
  };

  return (
    <button
      className={`w-16 h-16 border border-slate-300 shadow-md sm:w-20 sm:h-20 md:w-24 md:h-24 text-5xl font-bold flex items-center justify-center transition duration-300 ${getBgColor()}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
