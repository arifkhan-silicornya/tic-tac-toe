import { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every((square) => square !== null); // Check for draw

  const handleClick = (i) => {
    if (squares[i] || winner || isDraw) return; // Prevent changes if there's a winner or draw

    const nextSquares = squares.slice();
    nextSquares[i] = isXNext ? "X" : "O";
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  };

  const restartGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Tic-Tac-Toe</h1>
      <div className="grid grid-cols-3 gap-2">
        {squares.map((square, i) => (
          <Square key={i} value={square} onClick={() => handleClick(i)} />
        ))}
      </div>
      <div className="mt-4">
        {winner ? (
          <h2 className="text-xl font-semibold">{winner} wins!</h2>
        ) : isDraw ? (
          <h2 className="text-xl font-semibold">It's a draw!</h2>
        ) : (
          <h2 className="text-xl font-semibold">
            Next Player: {isXNext ? "X" : "O"}
          </h2>
        )}
      </div>
      <button
        onClick={restartGame}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Restart Game
      </button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
