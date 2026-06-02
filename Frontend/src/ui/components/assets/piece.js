// Automatically grabs ALL images in these folders
const images = import.meta.glob("./**/*.png", {
  eager: true,
  import: "default",
});

function normalizePath(path) {
  // "./white/pawn.png" → "white/pawn"
  return path.replace("./", "").replace(".png", "");
}

// Build lookup table
const pieces = Object.entries(images).reduce((acc, [path, value]) => {
  const key = normalizePath(path);

  acc[key] = value;
  return acc;
}, {});

// helper function
export function getPiece(color, type) {
  return pieces[`${color}/${type}`];
}
