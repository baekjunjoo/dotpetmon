/**
 * DotPetMon Species Sprites — v0.2.1
 *
 * 10 creature sprite definitions for the 60×40 pin Dot Pad canvas.
 * v0.2.1: 레퍼런스 이미지에 충실하도록 모든 종 재설계.
 * 각 종은 picture-density pixel art (60x40 풀 활용)로 구체적 실루엣 표현.
 *
 * Pin coordinate system:
 *   - x ∈ [0, 59], y ∈ [0, 39]
 *   - Cell at (col = x >> 1, row = y >> 2), 8-dot braille bit packing:
 *     - Left column of cell (subX = 0): dots 1,2,3,7 → bits 0,1,2,6
 *     - Right column of cell (subX = 1): dots 4,5,6,8 → bits 3,4,5,7
 */

const DP_W = 30, PW = 60, PH = 40;

// ============================================================
// PIN-LEVEL HELPERS
// ============================================================
export function setPin(c, x, y, on = true) {
  x = Math.round(x); y = Math.round(y);
  if (x < 0 || x >= PW || y < 0 || y >= PH) return;
  const cc = x >> 1, cr = y >> 2, sx = x & 1, sy = y & 3;
  const b = (sx === 0) ? [0, 1, 2, 6][sy] : [3, 4, 5, 7][sy];
  const i = cr * DP_W + cc;
  if (on) c[i] |= (1 << b);
  else c[i] &= ~(1 << b);
}
export function rect(c, x0, y0, w, h) { for (let dy = 0; dy < h; dy++) for (let dx = 0; dx < w; dx++) setPin(c, x0 + dx, y0 + dy); }
export function hL(c, x0, y, w) { for (let i = 0; i < w; i++) setPin(c, x0 + i, y); }
export function vL(c, x, y0, h) { for (let i = 0; i < h; i++) setPin(c, x, y0 + i); }
export function line(c, x0, y0, x1, y1) {
  x0 = Math.round(x0); y0 = Math.round(y0); x1 = Math.round(x1); y1 = Math.round(y1);
  const dx = Math.abs(x1 - x0), dy = Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1;
  let err = dx - dy, x = x0, y = y0;
  while (true) {
    setPin(c, x, y);
    if (x === x1 && y === y1) break;
    const e2 = 2 * err;
    if (e2 > -dy) { err -= dy; x += sx; }
    if (e2 < dx) { err += dx; y += sy; }
  }
}
export function oval(c, cx, cy, rx, ry, fill = true) {
  for (let y = -ry; y <= ry; y++) for (let x = -rx; x <= rx; x++) {
    const d = (x * x) / (rx * rx) + (y * y) / (ry * ry);
    if (fill ? d <= 1.05 : (d <= 1.1 && d >= 0.55)) setPin(c, cx + x, cy + y);
  }
}
export function clearOval(c, cx, cy, rx, ry) {
  for (let y = -ry; y <= ry; y++) for (let x = -rx; x <= rx; x++) {
    if ((x * x) / (rx * rx) + (y * y) / (ry * ry) <= 1.05) setPin(c, cx + x, cy + y, false);
  }
}
function dot(c, x, y) { setPin(c, x, y); }
function dot2(c, x, y) { setPin(c, x, y); setPin(c, x + 1, y); setPin(c, x, y + 1); setPin(c, x + 1, y + 1); }
function smile(c, cx, cy, w) {
  hL(c, cx - Math.floor(w / 2), cy, w);
  setPin(c, cx - Math.floor(w / 2) - 1, cy - 1);
  setPin(c, cx + Math.floor(w / 2) + 1, cy - 1);
}
function bigSmile(c, cx, cy, w, h) {
  hL(c, cx - Math.floor(w / 2), cy, w);
  for (let i = 1; i <= h; i++) {
    setPin(c, cx - Math.floor(w / 2) - i, cy - i);
    setPin(c, cx + Math.floor(w / 2) + i, cy - i);
  }
}
function star4(c, cx, cy) {
  // 4-point sparkle: + with longer arms
  vL(c, cx, cy - 2, 5);
  hL(c, cx - 2, cy, 5);
  setPin(c, cx, cy);
}
function spark(c, cx, cy) {
  setPin(c, cx, cy);
  setPin(c, cx, cy - 1); setPin(c, cx, cy + 1);
  setPin(c, cx - 1, cy); setPin(c, cx + 1, cy);
}

// ============================================================
// SPECIES SPRITES (v0.2.1 — reference-faithful)
// ============================================================

// #1 Pibbi — Light. Mouse with HUGE round ears + star tail.
export function drawPibbi(c) {
  const cx = 25, cy = 24;
  // Massive round ears (almost circles) — defining feature
  oval(c, cx - 11, cy - 11, 6, 7, true);
  oval(c, cx + 11, cy - 11, 6, 7, true);
  // Inner ears (hollow centers)
  oval(c, cx - 11, cy - 10, 3, 4, false);
  oval(c, cx + 11, cy - 10, 3, 4, false);
  // Chubby body (large round)
  oval(c, cx, cy + 1, 11, 10, true);
  // Cheek detail (small circles on sides)
  oval(c, cx - 8, cy + 4, 2, 2, false);
  oval(c, cx + 8, cy + 4, 2, 2, false);
  // Eyes (clear holes + dot inside)
  for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
    setPin(c, cx - 4 + dx, cy - 1 + dy, false);
    setPin(c, cx + 4 + dx, cy - 1 + dy, false);
  }
  dot2(c, cx - 5, cy - 2); dot2(c, cx + 3, cy - 2);
  // Tiny nose
  setPin(c, cx, cy + 2); setPin(c, cx + 1, cy + 2);
  // Smile
  hL(c, cx - 2, cy + 4, 5);
  setPin(c, cx - 3, cy + 3); setPin(c, cx + 3, cy + 3);
  // Tail with star (extends down-right)
  line(c, cx + 10, cy + 7, cx + 16, cy + 12);
  line(c, cx + 16, cy + 12, cx + 19, cy + 9);
  // Big star at tail tip
  setPin(c, cx + 22, cy + 5);
  setPin(c, cx + 22, cy + 11);
  setPin(c, cx + 19, cy + 8); setPin(c, cx + 25, cy + 8);
  setPin(c, cx + 21, cy + 7); setPin(c, cx + 23, cy + 7);
  setPin(c, cx + 21, cy + 9); setPin(c, cx + 23, cy + 9);
  setPin(c, cx + 22, cy + 8);
  // Floating sparkles
  star4(c, 8, 6); star4(c, 54, 4);
  setPin(c, 4, 32); setPin(c, 56, 34);
}

// #2 Mosshu — Nature. Teardrop hill with single sprout.
export function drawMosshu(c) {
  const cx = 30, cy = 32;
  // Teardrop body — narrow at top, wide at bottom
  // Build by stacking ovals at decreasing radius from top
  for (let i = 0; i < 22; i++) {
    const t = i / 21;
    const radius = Math.round(2 + t * t * 14);
    hL(c, cx - radius, cy - 18 + i, radius * 2 + 1);
  }
  // Round off the bottom edge slightly (already rounded by teardrop)
  // Sprout on top
  vL(c, cx, cy - 21, 4);
  // Two small leaves
  oval(c, cx - 2, cy - 22, 2, 2, true);
  oval(c, cx + 2, cy - 22, 2, 2, true);
  setPin(c, cx - 3, cy - 23); setPin(c, cx + 3, cy - 23);
  // Sleepy half-eyes near center
  hL(c, cx - 7, cy - 4, 4);
  hL(c, cx + 3, cy - 4, 4);
  // Small smile
  hL(c, cx - 2, cy, 5);
  // Subtle texture dots around outline (mossy appearance)
  for (const [x, y] of [[10, 33], [12, 36], [14, 38], [46, 38], [48, 36], [50, 33], [11, 28], [49, 28]]) setPin(c, x, y);
}

// #3 Voltchi — Electric. Quadruped with lightning tail going UP-RIGHT.
export function drawVoltchi(c) {
  // Head + body on left/center, lightning tail going up-right
  const hx = 16, hy = 22;
  // Tall pointed ears
  for (let i = 0; i < 5; i++) {
    vL(c, hx - 5 + i, hy - 10 + i, 4);
    vL(c, hx + 1 + i, hy - 6 - i, 4);
  }
  // Triangle ear outlines (fill via stacked lines)
  for (let i = 0; i <= 4; i++) hL(c, hx - 5 + Math.floor(i / 2), hy - 10 + i, 5 - i);
  for (let i = 0; i <= 4; i++) hL(c, hx + 1 + Math.floor(i / 2), hy - 10 + i, 5 - i);
  // Head (round)
  oval(c, hx, hy, 5, 5, true);
  // Body (horizontal, connected to head)
  oval(c, hx + 14, hy + 2, 8, 6, true);
  // 4 legs (short, sturdy)
  rect(c, hx + 9, hy + 7, 2, 5); rect(c, hx + 13, hy + 7, 2, 5);
  rect(c, hx + 17, hy + 7, 2, 5); rect(c, hx + 21, hy + 7, 2, 5);
  // Eyes
  for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) setPin(c, hx - 2 + dx, hy + dy, false);
  dot2(c, hx - 3, hy); dot2(c, hx + 1, hy);
  // Mouth
  setPin(c, hx + 3, hy + 2); setPin(c, hx + 4, hy + 2);
  // Lightning bolt TAIL — going UP and to the right with sharp zigzag
  const tx = hx + 22, ty = hy + 2;
  line(c, tx, ty, tx + 2, ty - 4);
  line(c, tx + 2, ty - 4, tx, ty - 7);
  line(c, tx, ty - 7, tx + 4, ty - 10);
  line(c, tx + 4, ty - 10, tx + 2, ty - 14);
  line(c, tx + 2, ty - 14, tx + 6, ty - 16);
  // Spiky fur on back (small zigzag along top of body)
  for (let i = 0; i < 4; i++) {
    setPin(c, hx + 10 + i * 3, hy - 4);
    setPin(c, hx + 11 + i * 3, hy - 5);
  }
  // Spark accents around
  star4(c, 50, 32);
}

// #4 Bubloo — Water. Whale with fan tail + water spout.
export function drawBubloo(c) {
  const bx = 24, by = 26;
  // Large whale body (horizontal oval)
  oval(c, bx, by, 14, 8, true);
  // Big fan-shaped tail on the right
  // Top fluke
  line(c, bx + 13, by - 2, bx + 22, by - 8);
  line(c, bx + 22, by - 8, bx + 22, by - 3);
  line(c, bx + 13, by - 1, bx + 22, by - 3);
  // Bottom fluke
  line(c, bx + 13, by + 2, bx + 22, by + 8);
  line(c, bx + 22, by + 8, bx + 22, by + 3);
  line(c, bx + 13, by + 1, bx + 22, by + 3);
  // Big single eye (left side, prominent)
  for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) setPin(c, bx - 8 + dx, by - 1 + dy, false);
  dot2(c, bx - 9, by - 2);
  setPin(c, bx - 7, by - 2); setPin(c, bx - 7, by - 1);
  // Mouth curve (long smile)
  hL(c, bx - 11, by + 3, 6);
  setPin(c, bx - 12, by + 2); setPin(c, bx - 5, by + 2);
  // Water spout — vertical thick stem from blowhole
  rect(c, bx - 2, by - 13, 2, 6);
  // Spray droplets (around the top of spout)
  setPin(c, bx - 6, by - 17); setPin(c, bx - 5, by - 16);
  setPin(c, bx - 3, by - 18); setPin(c, bx - 1, by - 19);
  setPin(c, bx + 1, by - 18); setPin(c, bx + 3, by - 16);
  setPin(c, bx + 5, by - 17); setPin(c, bx + 7, by - 15);
  setPin(c, bx - 8, by - 14); setPin(c, bx + 6, by - 13);
  // Pectoral fin (small triangle underneath)
  line(c, bx - 4, by + 6, bx - 6, by + 9);
  line(c, bx - 6, by + 9, bx, by + 8);
}

// #5 Fangroo — Earth. Standing kangaroo/rabbit with floppy ears down.
export function drawFangroo(c) {
  const cx = 26, cy = 18;
  // Head (round)
  oval(c, cx, cy, 5, 5, true);
  // Long FLOPPY ears hanging DOWN (defining feature — not up)
  oval(c, cx - 4, cy + 5, 2, 5, true);
  oval(c, cx + 4, cy + 5, 2, 5, true);
  // Round body (large)
  oval(c, cx, cy + 11, 8, 8, true);
  // Small front arms
  rect(c, cx - 10, cy + 10, 2, 5);
  rect(c, cx + 8, cy + 10, 2, 5);
  // Big back feet (kangaroo style)
  rect(c, cx - 6, cy + 18, 4, 3);
  rect(c, cx + 2, cy + 18, 4, 3);
  hL(c, cx - 7, cy + 21, 6);
  hL(c, cx + 1, cy + 21, 6);
  // Long strong tail extending back (down-right)
  line(c, cx + 7, cy + 13, cx + 13, cy + 17);
  line(c, cx + 7, cy + 15, cx + 13, cy + 19);
  for (let dy = 17; dy <= 20; dy++) hL(c, cx + 9, cy + dy, 6);
  // Eyes
  dot2(c, cx - 3, cy - 1); dot2(c, cx + 1, cy - 1);
  // Nose
  setPin(c, cx, cy + 1);
  // Whiskers (small dashes on either side of nose)
  setPin(c, cx - 3, cy + 1); setPin(c, cx - 4, cy + 1);
  setPin(c, cx + 3, cy + 1); setPin(c, cx + 4, cy + 1);
}

// #6 Chikapi — Fire. Round body with prominent flame crown (3 tongues).
export function drawChikapi(c) {
  const cx = 30, cy = 27;
  // Chubby round body
  oval(c, cx, cy, 11, 9, true);
  // 3-5 prominent flame tongues on top
  // Center tall flame
  line(c, cx, cy - 9, cx, cy - 16);
  setPin(c, cx - 1, cy - 14); setPin(c, cx + 1, cy - 14);
  setPin(c, cx - 1, cy - 11); setPin(c, cx + 1, cy - 11);
  // Left flame
  line(c, cx - 4, cy - 8, cx - 5, cy - 13);
  setPin(c, cx - 4, cy - 10); setPin(c, cx - 6, cy - 11);
  // Right flame
  line(c, cx + 4, cy - 8, cx + 5, cy - 13);
  setPin(c, cx + 4, cy - 10); setPin(c, cx + 6, cy - 11);
  // Far left small flame
  setPin(c, cx - 7, cy - 9); setPin(c, cx - 8, cy - 10);
  // Far right small flame
  setPin(c, cx + 7, cy - 9); setPin(c, cx + 8, cy - 10);
  // Eyes
  for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
    setPin(c, cx - 3 + dx, cy - 1 + dy, false);
    setPin(c, cx + 3 + dx, cy - 1 + dy, false);
  }
  dot2(c, cx - 4, cy - 2); dot2(c, cx + 2, cy - 2);
  // Big open smile
  hL(c, cx - 5, cy + 3, 11);
  hL(c, cx - 4, cy + 4, 9);
  setPin(c, cx - 6, cy + 2); setPin(c, cx + 6, cy + 2);
  // Small arms
  rect(c, cx - 12, cy + 1, 2, 4);
  rect(c, cx + 10, cy + 1, 2, 4);
  // Feet
  rect(c, cx - 6, cy + 9, 4, 2);
  rect(c, cx + 2, cy + 9, 4, 2);
  // Heat shimmer
  setPin(c, 10, 8); setPin(c, 50, 8);
}

// #7 Turtloop — Metal. Turtle with SPIRAL shell pattern.
export function drawTurtloop(c) {
  const cx = 30, cy = 24;
  // Shell dome (wide)
  oval(c, cx, cy, 16, 8, true);
  // Spiral pattern inside shell
  // Outer spiral arm
  for (let a = 0; a < 270; a += 8) {
    const ang = a * Math.PI / 180;
    const r = 7 - a / 50;
    const sx = Math.round(cx + Math.cos(ang) * r);
    const sy = Math.round(cy + Math.sin(ang) * r * 0.5);
    setPin(c, sx, sy, false);
  }
  // Re-draw spiral as raised lines (clear inner ring, then re-fill spiral)
  // Approach: shell is filled, clear a spiral pattern, leaving a tactile spiral
  for (let a = 30; a < 360; a += 8) {
    const ang = a * Math.PI / 180;
    const r = 6 - a / 60;
    if (r < 1) break;
    const sx = Math.round(cx + Math.cos(ang) * r);
    const sy = Math.round(cy + Math.sin(ang) * r * 0.5);
    setPin(c, sx, sy, false);
    setPin(c, sx + 1, sy, false);
  }
  // Central dot (spiral starts here)
  setPin(c, cx, cy);
  // Head (poking out front-left)
  oval(c, cx - 16, cy + 2, 3, 3, true);
  setPin(c, cx - 17, cy + 1);
  setPin(c, cx - 15, cy + 1);
  // Tail (small, right)
  line(c, cx + 16, cy + 2, cx + 19, cy + 4);
  // 4 stubby legs visible
  rect(c, cx - 12, cy + 7, 3, 4);
  rect(c, cx - 4, cy + 7, 3, 4);
  rect(c, cx + 4, cy + 7, 3, 4);
  rect(c, cx + 10, cy + 7, 3, 4);
  // Shell border (extra ring for clarity)
  oval(c, cx, cy, 16, 8, false);
}

// #8 Nibori — Dream. Sleeping cat (curled, lying).
export function drawNibori(c) {
  const cx = 30, cy = 26;
  // Body (large, lying horizontally — flatter oval)
  oval(c, cx, cy, 16, 7, true);
  // Head on left (round, facing right while resting)
  oval(c, cx - 13, cy - 3, 5, 5, true);
  // Big cat ears (triangle pointed up)
  for (let i = 0; i <= 3; i++) hL(c, cx - 17 + Math.floor(i / 2), cy - 10 + i, 4 - i);
  for (let i = 0; i <= 3; i++) hL(c, cx - 12 + Math.floor(i / 2), cy - 10 + i, 4 - i);
  // Sleeping closed eyes (curves)
  hL(c, cx - 15, cy - 3, 3);
  setPin(c, cx - 16, cy - 4); setPin(c, cx - 13, cy - 4);
  hL(c, cx - 11, cy - 3, 3);
  setPin(c, cx - 12, cy - 4); setPin(c, cx - 9, cy - 4);
  // Tiny nose
  setPin(c, cx - 13, cy - 1);
  // Body fur stripes (sleeping detail)
  for (let i = 0; i < 3; i++) hL(c, cx - 4 + i * 3, cy - 4, 2);
  // Curled tail wrapping from back to front
  line(c, cx + 15, cy + 1, cx + 18, cy - 3);
  line(c, cx + 18, cy - 3, cx + 16, cy - 8);
  line(c, cx + 16, cy - 8, cx + 11, cy - 10);
  line(c, cx + 11, cy - 10, cx + 8, cy - 7);
  // Tail tip (fluffy)
  setPin(c, cx + 7, cy - 8); setPin(c, cx + 7, cy - 6);
  // Paws underneath (folded)
  hL(c, cx - 5, cy + 6, 4); hL(c, cx + 2, cy + 6, 4);
  // Z floating above (sleep indicator)
  hL(c, cx + 3, cy - 13, 4); hL(c, cx + 3, cy - 10, 4);
  line(c, cx + 3, cy - 10, cx + 6, cy - 13);
  hL(c, cx + 8, cy - 16, 3); hL(c, cx + 8, cy - 14, 3);
  line(c, cx + 8, cy - 14, cx + 10, cy - 16);
}

// #9 Kricko — Sound. Insect with antennae + drum + sound waves.
export function drawKricko(c) {
  const cx = 23, cy = 26;
  // Round body
  oval(c, cx, cy, 8, 8, true);
  // Two LONG antennae extending up and out
  // Left antenna
  line(c, cx - 3, cy - 7, cx - 6, cy - 12);
  line(c, cx - 6, cy - 12, cx - 10, cy - 16);
  // Right antenna
  line(c, cx + 3, cy - 7, cx + 6, cy - 12);
  line(c, cx + 6, cy - 12, cx + 10, cy - 16);
  // Bulb tips (round balls on antennae)
  oval(c, cx - 11, cy - 17, 2, 2, true);
  oval(c, cx + 11, cy - 17, 2, 2, true);
  // Eyes (round, prominent)
  for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
    setPin(c, cx - 3 + dx, cy - 1 + dy, false);
    setPin(c, cx + 3 + dx, cy - 1 + dy, false);
  }
  dot2(c, cx - 4, cy - 2); dot2(c, cx + 2, cy - 2);
  // Mouth/mandibles
  setPin(c, cx - 2, cy + 2); setPin(c, cx, cy + 2); setPin(c, cx + 2, cy + 2);
  setPin(c, cx - 2, cy + 3); setPin(c, cx + 2, cy + 3);
  // 6 legs (3 pairs)
  for (const dx of [-7, -4, 7, 4]) line(c, cx + dx, cy + 5, Math.round(cx + dx * 1.5), cy + 10);
  for (const dx of [-3, 3]) line(c, cx + dx, cy + 7, Math.round(cx + dx * 2), cy + 10);
  // Drum on right side
  rect(c, cx + 13, cy - 1, 9, 9);
  hL(c, cx + 13, cy, 9); hL(c, cx + 13, cy + 7, 9);
  vL(c, cx + 13, cy, 8); vL(c, cx + 21, cy, 8);
  // Drum decoration (X pattern)
  line(c, cx + 14, cy + 1, cx + 20, cy + 6);
  line(c, cx + 20, cy + 1, cx + 14, cy + 6);
  // Sound waves emanating from drum (curves on right)
  for (const r of [4, 7, 10]) {
    for (let a = -40; a <= 40; a += 12) {
      const ang = a * Math.PI / 180;
      setPin(c, Math.round(cx + 24 + Math.cos(ang) * r), Math.round(cy + 3 + Math.sin(ang) * r));
    }
  }
  // Music note
  setPin(c, cx + 24, cy - 5); setPin(c, cx + 25, cy - 6); setPin(c, cx + 25, cy - 5); setPin(c, cx + 25, cy - 4);
}

// #10 Luminoa — Spirit. Deer with elaborate branching antlers + light orbs.
export function drawLuminoa(c) {
  const cx = 28, cy = 25;
  // Slim deer body
  oval(c, cx, cy + 2, 9, 5, true);
  // Head
  oval(c, cx - 3, cy - 5, 4, 4, true);
  // 4 slim legs (long)
  vL(c, cx - 7, cy + 6, 7); vL(c, cx - 3, cy + 6, 7);
  vL(c, cx + 3, cy + 6, 7); vL(c, cx + 7, cy + 6, 7);
  // Hooves (small)
  setPin(c, cx - 8, cy + 13); setPin(c, cx - 6, cy + 13);
  setPin(c, cx - 4, cy + 13); setPin(c, cx - 2, cy + 13);
  setPin(c, cx + 2, cy + 13); setPin(c, cx + 4, cy + 13);
  setPin(c, cx + 6, cy + 13); setPin(c, cx + 8, cy + 13);
  // ELABORATE BRANCHING ANTLERS — multiple Y-branches
  // Left antler trunk
  line(c, cx - 4, cy - 8, cx - 6, cy - 14);
  // Left main branches
  line(c, cx - 6, cy - 14, cx - 10, cy - 16);
  line(c, cx - 6, cy - 14, cx - 4, cy - 18);
  // Left sub-branches
  line(c, cx - 10, cy - 16, cx - 13, cy - 18);
  line(c, cx - 10, cy - 16, cx - 11, cy - 20);
  line(c, cx - 4, cy - 18, cx - 6, cy - 21);
  line(c, cx - 4, cy - 18, cx - 1, cy - 21);
  // Right antler trunk
  line(c, cx, cy - 8, cx + 3, cy - 14);
  // Right main branches
  line(c, cx + 3, cy - 14, cx + 7, cy - 16);
  line(c, cx + 3, cy - 14, cx + 1, cy - 18);
  // Right sub-branches
  line(c, cx + 7, cy - 16, cx + 10, cy - 18);
  line(c, cx + 7, cy - 16, cx + 8, cy - 20);
  line(c, cx + 1, cy - 18, cx + 3, cy - 21);
  // Light orbs at antler tips (small bright dots)
  for (const [x, y] of [
    [cx - 13, cy - 18], [cx - 11, cy - 21], [cx - 6, cy - 22],
    [cx - 1, cy - 22], [cx + 3, cy - 22], [cx + 8, cy - 21], [cx + 10, cy - 19]
  ]) {
    setPin(c, x, y); setPin(c, x + 1, y); setPin(c, x, y + 1);
  }
  // Eye
  setPin(c, cx - 4, cy - 5); setPin(c, cx - 2, cy - 5);
  // Small smile
  setPin(c, cx - 4, cy - 3); setPin(c, cx - 3, cy - 2); setPin(c, cx - 2, cy - 3);
  // Tail (small upward curl)
  line(c, cx + 9, cy + 1, cx + 11, cy - 1);
  // Floating spirit orbs around body
  spark(c, 6, 10); spark(c, 54, 14); spark(c, 8, 32); spark(c, 52, 34);
  spark(c, 50, 6);
}

// ============================================================
// SPECIES REGISTRY
// ============================================================
export const SPECIES = {
  pibbi:    { num: 1,  name: 'Pibbi',    type: 'Light',    tactile: '큰 둥근 귀, 통통한 몸, 별 꼬리',     draw: drawPibbi,    surface: '부드러움', motion: '반짝반짝 깜빡임' },
  mosshu:   { num: 2,  name: 'Mosshu',   type: 'Nature',   tactile: '물방울 모양 몸, 새싹 머리',           draw: drawMosshu,   surface: '매우 부드러움', motion: '천천히 흔들치듯' },
  voltchi:  { num: 3,  name: 'Voltchi',  type: 'Electric', tactile: '뾰족 귀, 위로 솟은 번개 꼬리, 4족',  draw: drawVoltchi,  surface: '보통', motion: '빠르고 경쾌한 진동' },
  bubloo:   { num: 4,  name: 'Bubloo',   type: 'Water',    tactile: '고래 몸, 부채 꼬리, 물 분수',         draw: drawBubloo,   surface: '매끄러움', motion: '위아래로 둥실둥실' },
  fangroo:  { num: 5,  name: 'Fangroo',  type: 'Earth',    tactile: '늘어진 긴 귀, 직립, 두꺼운 꼬리',     draw: drawFangroo,  surface: '거침', motion: '위아래로 튀어오름' },
  chikapi:  { num: 6,  name: 'Chikapi',  type: 'Fire',     tactile: '5개 불꽃 머리, 둥근 몸, 큰 입',       draw: drawChikapi,  surface: '따뜻한 울퉁퉁', motion: '열정적 깜빡임' },
  turtloop: { num: 7,  name: 'Turtloop', type: 'Metal',    tactile: '돔 등껍질에 나선형 패턴',             draw: drawTurtloop, surface: '단단하고 선명', motion: '느리고 묵직' },
  nibori:   { num: 8,  name: 'Nibori',   type: 'Dream',    tactile: '눕는 자세, 고양이 귀, 꼬리 말림, Zzz',draw: drawNibori,   surface: '매우 부드러움', motion: '느리게 숨쉬듯' },
  kricko:   { num: 9,  name: 'Kricko',   type: 'Sound',    tactile: '긴 더듬이, 드럼, 음파',               draw: drawKricko,   surface: '진동하는 느낌', motion: '리듬에 맞춰 두드림' },
  luminoa:  { num: 10, name: 'Luminoa',  type: 'Spirit',   tactile: '여러 가지 뿔, 사슴 체형, 빛 구슬',    draw: drawLuminoa,  surface: '부드럽고 섬세함', motion: '천천히 빛을 내며' },
};

export function drawSpecies(key, cells) {
  const sp = SPECIES[key];
  if (!sp) throw new Error('Unknown species: ' + key);
  sp.draw(cells);
}

export function bytesToHex(bytes) {
  let s = '';
  for (let i = 0; i < bytes.length; i++) s += bytes[i].toString(16).padStart(2, '0').toUpperCase();
  return s;
}
