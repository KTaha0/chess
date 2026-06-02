import Piece from "./piece";
import styles from "./styles/square.module.css";

export default function Square({ piece, isDark }) {
  return (
    <div className={`${styles.square} ${isDark ? styles.dark : styles.light}`}>
      {piece && <Piece type={piece.type} color={piece.color} />}
    </div>
  );
}
