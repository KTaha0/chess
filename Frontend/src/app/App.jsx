import Board from "../ui/components/board.jsx";
import createBoard from "../chess/board.js"; // or wherever

export default function App() {
  const board = createBoard();

  return <Board board={board} />;
}
