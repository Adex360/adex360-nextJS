// Shared CSS shape families for the animated gradient blobs used across the
// site: service-page hero blobs cycle to a new random shape every 3s, and the
// service-tab panels morph on every tab click. All radii use the full 8-value
// border-radius form (TL TR BR BL / TL TR BR BL) so GSAP can interpolate
// smoothly between any two shapes.

export type PanelShape = {
  radius: string;
  rotate: number;
  skewX: number;
  scale: number;
};

const rand = (min: number, max: number) =>
  Math.round(min + Math.random() * (max - min));

const full = (...v: number[]) =>
  `${v[0]}% ${v[1]}% ${v[2]}% ${v[3]}% / ${v[4]}% ${v[5]}% ${v[6]}% ${v[7]}%`;

// Every CSS-achievable silhouette gets a maker; each roll adds its own random
// variation so even repeats of the same family never look identical.
export const SHAPE_MAKERS: (() => PanelShape)[] = [
  // Organic blob — complementary pairs keep it balanced
  () => {
    const a = rand(35, 65);
    const b = rand(35, 65);
    const c = rand(35, 65);
    const d = rand(35, 65);
    return {
      radius: full(a, 100 - a, b, 100 - b, c, 100 - c, d, 100 - d),
      rotate: 0,
      skewX: 0,
      scale: 1,
    };
  },
  // Arch / dome — rounded top, flat feet
  () => ({
    radius: full(50, 50, rand(6, 14), rand(6, 14), rand(55, 64), rand(55, 64), rand(6, 12), rand(6, 12)),
    rotate: 0,
    skewX: 0,
    scale: 1,
  }),
  // Diamond — softly-rounded square rotated 45°
  () => {
    const c = rand(14, 24);
    return { radius: full(c, c, c, c, c, c, c, c), rotate: 45, skewX: 0, scale: 0.82 };
  },
  // Parallelogram — skewed rounded square
  () => {
    const c = rand(10, 18);
    const skew = rand(9, 15) * (Math.random() < 0.5 ? -1 : 1);
    return { radius: full(c, c, c, c, c, c, c, c), rotate: 0, skewX: skew, scale: 0.92 };
  },
  // Egg — circle with a heavier bottom
  () => {
    const top = rand(55, 64);
    return {
      radius: full(50, 50, 50, 50, top, top, 100 - top, 100 - top),
      rotate: rand(-8, 8),
      skewX: 0,
      scale: 1,
    };
  },
  // Leaf — opposite corners pinched
  () => {
    const big = rand(55, 70);
    const small = rand(4, 12);
    return {
      radius: full(big, small, big, small, big, small, big, small),
      rotate: rand(-12, 12),
      skewX: 0,
      scale: 0.96,
    };
  },
  // Squircle — evenly-rounded soft square
  () => {
    const c = rand(28, 38);
    return { radius: full(c, c, c, c, c, c, c, c), rotate: rand(-8, 8), skewX: 0, scale: 0.95 };
  },
];

// Pick a random shape family, never the same one twice in a row.
export function pickShape(lastIdx: number): { shape: PanelShape; idx: number } {
  let idx = Math.floor(Math.random() * SHAPE_MAKERS.length);
  if (idx === lastIdx) idx = (idx + 1) % SHAPE_MAKERS.length;
  return { shape: SHAPE_MAKERS[idx](), idx };
}
