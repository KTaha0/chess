export default function createBoard() {
  const board = Array(8)
    .fill(null)
    .map(() => Array(8).fill(null));

  const backRow = [
    "rook",
    "knight",
    "bishop",
    "queen",
    "king",
    "bishop",
    "knight",
    "rook",
  ];

  // pawns
  for (let col = 0; col < 8; col++) {
    board[1][col] = { type: "pawn", color: "black" };
    board[6][col] = { type: "pawn", color: "white" };
  }

  // back rows
  for (let col = 0; col < 8; col++) {
    board[0][col] = { type: backRow[col], color: "black" };
    board[7][col] = { type: backRow[col], color: "white" };
  }
  return board;
}
