import Square from "./square.jsx";
import styles from "./styles/board.module.css";

export default function Board({ board }) {
  return (
    <div className={styles.board}>
      {board.map((row, i) =>
        row.map((piece, j) => {
          const isDark = (i + j) % 2 === 1;

          return <Square key={`${i}-${j}`} piece={piece} isDark={isDark} />;
        }),
      )}
    </div>
  );
}
