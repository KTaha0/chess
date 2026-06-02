import { getPiece } from "./assets/piece.js";
import styles from "./styles/square.module.css";

export default function Piece({ type, color }) {
  const src = getPiece(color, type);

  if (!src) return null;

  return <img src={src} alt="piece" className={styles.piece} />;
}
