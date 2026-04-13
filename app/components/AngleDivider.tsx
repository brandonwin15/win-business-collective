/**
 * AngleDivider — replaces flat dividers with diagonal SVG section transitions.
 *
 * direction="right"  →  `\` cut (high on left, drops to right)
 * direction="left"   →  `/` cut (rises from left, high on right)
 *
 * The `from` bg color fills the element; an SVG polygon in `to` color
 * creates the angled shape. A hairline gold line runs along the diagonal edge.
 */
export default function AngleDivider({
  from = "#ffffff",
  to = "#f5f4f2",
  direction = "right",
  height = 44,
}: {
  from?: string;
  to?: string;
  direction?: "left" | "right";
  height?: number;
}) {
  const w = 1440;

  // "right" (\): from-bg at top-right, to-color rises from bottom-left up to top-right
  // polygon covers: top-left → top-right-mid → bottom-right → bottom-left
  // diagonal line: (0, 0) → (w, h)  ... wait let me be precise:
  //
  // direction="right" (\): the cut line goes from (0,0) top-left down to (w, h) bottom-right.
  //   - `from` fills the upper-right triangle: (0,0)→(w,0)→(w,h)
  //   - `to` fills the lower-left triangle:   (0,0)→(w,h)→(0,h)
  //   polygon for `to`:  "0,0  w,h  0,h"
  //   gold line: x1=0 y1=0 → x2=w y2=h
  //
  // direction="left" (/): the cut line goes from (0, h) bottom-left up to (w, 0) top-right.
  //   - `from` fills the upper-left triangle: (0,0)→(w,0)→(0,h)
  //   - `to` fills the lower-right triangle:  (w,0)→(w,h)→(0,h)
  //   polygon for `to`:  "w,0  w,h  0,h"
  //   gold line: x1=0 y1=h → x2=w y2=0

  const polygon =
    direction === "right"
      ? `0,0 ${w},${height} 0,${height}`
      : `${w},0 ${w},${height} 0,${height}`;

  const lineCoords =
    direction === "right"
      ? { x1: 0, y1: 0, x2: w, y2: height }
      : { x1: 0, y1: height, x2: w, y2: 0 };

  return (
    <div
      style={{ background: from, lineHeight: 0, display: "block", margin: 0, padding: 0 }}
    >
      <svg
        viewBox={`0 0 ${w} ${height}`}
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: `${height}px` }}
        aria-hidden="true"
      >
        <polygon points={polygon} fill={to} />
        <line
          x1={lineCoords.x1}
          y1={lineCoords.y1}
          x2={lineCoords.x2}
          y2={lineCoords.y2}
          stroke="rgba(201,169,110,0.30)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
