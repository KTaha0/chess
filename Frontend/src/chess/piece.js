export function getPieceSymbol(piece) {
  if (!piece) return "";

  const { type, color } = piece;

  const symbols = {
    pawn: { white: "♙", black: "♟" },
    rook: { white: "♖", black: "♜" },
    knight: { white: "♘", black: "♞" },
    bishop: { white: "♗", black: "♝" },
    queen: { white: "♕", black: "♛" },
    king: { white: "♔", black: "♚" },
  };

  return symbols[type][color];
}
