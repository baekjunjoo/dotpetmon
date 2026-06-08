/**
 * DotPetMon Species Sprites — v0.2
 *
 * 10 creature sprite definitions for the 60×40 pin Dot Pad canvas.
 * Each creature is drawn procedurally using primitive helpers, sharing the
 * same 8-dot braille bit packing as DotPet v0.9's pin-level drawing API.
 *
 * Pin coordinate system:
 *   - x ∈ [0, 59], y ∈ [0, 39]
 *   - Cell at (col = x >> 1, row = y >> 2), 8-dot braille bit packing:
 *     - Left column of cell (subX = 0): dots 1,2,3,7 → bits 0,1,2,6
 *     - Right column of cell (subX = 1): dots 4,5,6,8 → bits 3,4,5,7
 *
 * Usage from game code:
 *   import { SPECIES, drawSpecies } from './assets/species_sprites.js';
 *   const cells = new Uint8Array(300);  // 30 cells wide × 10 rows
 *   drawSpecies('pibbi', cells);
 *   window.DotPad.sdk.displayGraphicData(bytesToHex(cells));
 */

const DP_W = 30, PW = 60, PH = 40;

// ----- Pin-level helpers (8-dot braille bit packing) -----
export function setPin(c, x, y, on = true) {
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
    if (fill ? d <= 1.05 : (d <= 1.1 && d >= 0.6)) setPin(c, cx + x, cy + y);
  }
}
export function clearOval(c, cx, cy, rx, ry) {
  for (let y = -ry; y <= ry; y++) for (let x = -rx; x <= rx; x++) {
    if ((x * x) / (rx * rx) + (y * y) / (ry * ry) <= 1.05) setPin(c, cx + x, cy + y, false);
  }
}
function smile(c, cx, cy, w) {
  hL(c, cx - Math.floor(w / 2), cy, w);
  setPin(c, cx - Math.floor(w / 2) - 1, cy - 1);
  setPin(c, cx + Math.floor(w / 2), cy - 1);
}
function star5(c, cx, cy, r) {
  setPin(c, cx, cy - r); setPin(c, cx, cy + r); setPin(c, cx - r, cy); setPin(c, cx + r, cy);
  setPin(c, cx - 1, cy - 1); setPin(c, cx + 1, cy - 1); setPin(c, cx - 1, cy + 1); setPin(c, cx + 1, cy + 1);
  setPin(c, cx, cy);
}
function spark(c, cx, cy, r = 2) {
  setPin(c, cx, cy); setPin(c, cx, cy - r); setPin(c, cx, cy + r); setPin(c, cx - r, cy); setPin(c, cx + r, cy);
}

// ============================================================
// SPECIES DRAWING FUNCTIONS
// ============================================================

// #1 Pibbi — Light. Mouse with big ears + star tail.
export function drawPibbi(c) {
  const cx = 24, cy = 26;
  oval(c, cx - 9, cy - 13, 3, 8, true);
  oval(c, cx + 9, cy - 13, 3, 8, true);
  oval(c, cx - 9, cy - 12, 2, 5, false);
  oval(c, cx + 9, cy - 12, 2, 5, false);
  oval(c, cx, cy, 11, 9, true);
  for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
    setPin(c, cx - 4 + dx, cy - 1 + dy, false);
    setPin(c, cx + 4 + dx, cy - 1 + dy, false);
  }
  setPin(c, cx - 4, cy - 1); setPin(c, cx - 3, cy - 1);
  setPin(c, cx + 3, cy - 1); setPin(c, cx + 4, cy - 1);
  smile(c, cx, cy + 3, 5);
  line(c, cx + 10, cy + 5, cx + 18, cy + 10);
  star5(c, cx + 22, cy + 12, 2);
  spark(c, 8, 8, 1); spark(c, 52, 5, 1);
}

// #2 Mosshu — Nature. Mossy hill with leaf sprout.
export function drawMosshu(c) {
  const cx = 30, cy = 28;
  for (let i = 0; i < 16; i++) { const w = i * 2 + 2; hL(c, cx - w / 2, cy - i + 5, w); }
  hL(c, cx - 7, cy - 1, 3); hL(c, cx + 4, cy - 1, 3);
  vL(c, cx, cy - 15, 4);
  oval(c, cx - 2, cy - 14, 2, 3, true); oval(c, cx + 2, cy - 14, 2, 3, true);
  smile(c, cx, cy + 3, 5);
  for (const [x, y] of [[14, 30], [16, 33], [44, 33], [46, 30], [12, 26], [48, 26]]) setPin(c, x, y);
}

// #3 Voltchi — Electric. Quadruped cat with lightning tail.
export function drawVoltchi(c) {
  const hx = 15, hy = 20, bx = 30, by = 23;
  oval(c, hx, hy, 5, 5, true);
  for (let i = 0; i < 4; i++) { vL(c, hx - 4 + i, hy - 7 + i, 3); vL(c, hx + 1 + i, hy - 4 - i, 3); }
  setPin(c, hx - 4, hy - 8); setPin(c, hx - 3, hy - 7); setPin(c, hx - 2, hy - 6); setPin(c, hx - 1, hy - 5);
  setPin(c, hx + 4, hy - 8); setPin(c, hx + 3, hy - 7); setPin(c, hx + 2, hy - 6); setPin(c, hx + 1, hy - 5);
  oval(c, bx, by, 9, 6, true);
  rect(c, bx - 7, by + 5, 2, 5); rect(c, bx - 3, by + 5, 2, 5);
  rect(c, bx + 3, by + 5, 2, 5); rect(c, bx + 7, by + 5, 2, 5);
  for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) setPin(c, hx - 2 + dx, hy + dy, false);
  setPin(c, hx - 2, hy); setPin(c, hx + 2, hy);
  const tx = bx + 9, ty = by - 3;
  line(c, tx, ty, tx + 4, ty - 2); line(c, tx + 4, ty - 2, tx + 2, ty - 5); line(c, tx + 2, ty - 5, tx + 8, ty - 8);
  spark(c, 52, 32, 1);
}

// #4 Bubloo — Water. Whale with water spout.
export function drawBubloo(c) {
  const bx = 27, by = 27;
  oval(c, bx, by, 14, 7, true);
  line(c, bx + 13, by - 2, bx + 20, by - 6); line(c, bx + 13, by + 2, bx + 20, by + 6);
  line(c, bx + 20, by - 6, bx + 20, by + 6);
  for (let dy = -5; dy <= 5; dy++) setPin(c, bx + 19, by + dy);
  for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) setPin(c, bx - 7 + dx, by - 1 + dy, false);
  setPin(c, bx - 7, by - 1); setPin(c, bx - 6, by - 1);
  hL(c, bx - 9, by + 3, 4);
  vL(c, bx - 2, by - 13, 6);
  setPin(c, bx - 5, by - 15); setPin(c, bx - 4, by - 16); setPin(c, bx - 1, by - 16);
  setPin(c, bx + 2, by - 15); setPin(c, bx + 1, by - 16);
  setPin(c, bx - 7, by - 13); setPin(c, bx + 4, by - 13);
}

// #5 Fangroo — Earth. Kangaroo with pouch + thick tail.
export function drawFangroo(c) {
  const cx = 24, cy = 22;
  oval(c, cx, cy - 9, 5, 5, true);
  vL(c, cx - 3, cy - 15, 4); vL(c, cx + 3, cy - 15, 4);
  oval(c, cx, cy + 2, 7, 8, true);
  clearOval(c, cx, cy + 5, 4, 3);
  rect(c, cx - 9, cy, 2, 4); rect(c, cx + 7, cy, 2, 4);
  rect(c, cx - 5, cy + 9, 3, 8); rect(c, cx + 2, cy + 9, 3, 8);
  hL(c, cx - 6, cy + 17, 5); hL(c, cx + 1, cy + 17, 5);
  line(c, cx + 6, cy + 5, cx + 15, cy + 10); line(c, cx + 6, cy + 7, cx + 15, cy + 12);
  for (let dy = 10; dy <= 12; dy++) hL(c, cx + 11, cy + dy, 5);
  setPin(c, cx - 2, cy - 9); setPin(c, cx + 2, cy - 9);
}

// #6 Chikapi — Fire. Round body with flame crown.
export function drawChikapi(c) {
  const cx = 30, cy = 27;
  oval(c, cx, cy, 11, 9, true);
  const fy = cy - 12;
  for (let i = 0; i < 5; i++) { const xx = cx - 6 + i * 3; vL(c, xx, fy + (i % 2 ? 2 : 0), 5 - (i % 2)); }
  vL(c, cx, cy - 15, 5); setPin(c, cx - 1, cy - 14); setPin(c, cx + 1, cy - 14);
  setPin(c, cx - 3, cy - 13); setPin(c, cx + 3, cy - 13);
  setPin(c, cx - 5, cy - 11); setPin(c, cx + 5, cy - 11);
  for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
    setPin(c, cx - 3 + dx, cy + dy, false); setPin(c, cx + 3 + dx, cy + dy, false);
  }
  setPin(c, cx - 3, cy); setPin(c, cx + 3, cy);
  hL(c, cx - 4, cy + 4, 9); setPin(c, cx - 5, cy + 3); setPin(c, cx + 5, cy + 3);
  rect(c, cx - 6, cy + 9, 3, 2); rect(c, cx + 3, cy + 9, 3, 2);
  setPin(c, 12, 8); setPin(c, 48, 8); setPin(c, 10, 12); setPin(c, 50, 12);
}

// #7 Turtloop — Metal. Turtle with maze-patterned shell.
export function drawTurtloop(c) {
  const cx = 30, cy = 24;
  oval(c, cx, cy, 15, 8, true);
  for (let i = 0; i < 5; i++) { const x = cx - 10 + i * 5; vL(c, x, cy - 5, 4); }
  hL(c, cx - 10, cy - 2, 21); hL(c, cx - 10, cy + 1, 21);
  setPin(c, cx - 8, cy - 4); setPin(c, cx - 3, cy - 4); setPin(c, cx + 2, cy - 4); setPin(c, cx + 7, cy - 4);
  oval(c, cx - 15, cy + 2, 3, 3, true);
  setPin(c, cx - 16, cy + 1);
  line(c, cx + 15, cy + 2, cx + 19, cy + 4);
  rect(c, cx - 12, cy + 8, 3, 3); rect(c, cx - 4, cy + 8, 3, 3);
  rect(c, cx + 4, cy + 8, 3, 3); rect(c, cx + 10, cy + 8, 3, 3);
}

// #8 Nibori — Dream. Sleeping cat with curled tail.
export function drawNibori(c) {
  const cx = 30, cy = 27;
  oval(c, cx, cy, 15, 7, true);
  oval(c, cx - 13, cy - 3, 5, 5, true);
  for (let i = 0; i < 4; i++) { vL(c, cx - 17 + i, cy - 10 + i, 3); vL(c, cx - 13 + i, cy - 7 - i, 3); }
  setPin(c, cx - 18, cy - 11); setPin(c, cx - 9, cy - 11);
  hL(c, cx - 15, cy - 3, 2); hL(c, cx - 12, cy - 3, 2);
  line(c, cx + 14, cy + 1, cx + 17, cy - 3); line(c, cx + 17, cy - 3, cx + 15, cy - 8);
  line(c, cx + 15, cy - 8, cx + 11, cy - 9); line(c, cx + 11, cy - 9, cx + 9, cy - 6);
  hL(c, cx + 5, cy - 13, 3); hL(c, cx + 5, cy - 10, 3);
  setPin(c, cx + 7, cy - 12); setPin(c, cx + 6, cy - 11);
  hL(c, cx + 10, cy - 16, 3); hL(c, cx + 10, cy - 14, 3);
  setPin(c, cx + 12, cy - 15);
}

// #9 Kricko — Sound. Insect with antennae + drum + sound waves.
export function drawKricko(c) {
  const cx = 24, cy = 26;
  oval(c, cx, cy, 7, 7, true);
  line(c, cx - 3, cy - 7, cx - 7, cy - 13); line(c, cx - 7, cy - 13, cx - 10, cy - 16);
  line(c, cx + 3, cy - 7, cx + 7, cy - 13); line(c, cx + 7, cy - 13, cx + 10, cy - 16);
  oval(c, cx - 11, cy - 17, 2, 2, true); oval(c, cx + 11, cy - 17, 2, 2, true);
  for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
    setPin(c, cx - 2 + dx, cy + dy, false); setPin(c, cx + 2 + dx, cy + dy, false);
  }
  setPin(c, cx - 2, cy); setPin(c, cx + 2, cy);
  for (const dx of [-7, -5, -3, 3, 5, 7]) line(c, cx + dx, cy + 5, Math.round(cx + dx * 1.5), cy + 9);
  rect(c, cx + 12, cy - 1, 8, 8);
  hL(c, cx + 12, cy, 8); hL(c, cx + 12, cy + 7, 8);
  vL(c, cx + 12, cy, 8); vL(c, cx + 19, cy, 8);
  line(c, cx + 13, cy + 1, cx + 18, cy + 6); line(c, cx + 18, cy + 1, cx + 13, cy + 6);
  for (const r of [3, 6, 9]) {
    for (let a = -30; a <= 30; a += 15) {
      const ang = a * Math.PI / 180;
      setPin(c, Math.round(cx + 22 + Math.cos(ang) * r), Math.round(cy + 3 + Math.sin(ang) * r));
    }
  }
}

// #10 Luminoa — Spirit. Deer with branching antlers + light orbs.
export function drawLuminoa(c) {
  const cx = 28, cy = 24;
  oval(c, cx, cy + 2, 9, 5, true);
  oval(c, cx - 2, cy - 6, 4, 4, true);
  line(c, cx - 3, cy - 9, cx - 6, cy - 15); line(c, cx + 1, cy - 9, cx + 4, cy - 15);
  line(c, cx - 6, cy - 15, cx - 10, cy - 17); line(c, cx - 6, cy - 15, cx - 4, cy - 19);
  line(c, cx + 4, cy - 15, cx + 8, cy - 17); line(c, cx + 4, cy - 15, cx + 2, cy - 19);
  line(c, cx - 10, cy - 17, cx - 13, cy - 19); line(c, cx - 10, cy - 17, cx - 9, cy - 20);
  line(c, cx + 8, cy - 17, cx + 11, cy - 19); line(c, cx + 8, cy - 17, cx + 7, cy - 20);
  setPin(c, cx - 13, cy - 20); setPin(c, cx - 9, cy - 21); setPin(c, cx - 4, cy - 20);
  setPin(c, cx + 2, cy - 20); setPin(c, cx + 7, cy - 21); setPin(c, cx + 11, cy - 20);
  setPin(c, cx - 1, cy - 6); setPin(c, cx + 1, cy - 6);
  vL(c, cx - 7, cy + 7, 6); vL(c, cx - 3, cy + 7, 6); vL(c, cx + 3, cy + 7, 6); vL(c, cx + 7, cy + 7, 6);
  line(c, cx + 9, cy, cx + 12, cy - 3);
  spark(c, 8, 8, 1); spark(c, 52, 30, 1); spark(c, 10, 32, 1);
}

// ============================================================
// SPECIES REGISTRY
// ============================================================

export const SPECIES = {
  pibbi:    { num: 1,  name: 'Pibbi',    type: 'Light',    tactile: '큰 귀, 둥근 몸, 별 꼬리',           draw: drawPibbi,   surface: '부드러움', motion: '반짝반짝 깜빡임' },
  mosshu:   { num: 2,  name: 'Mosshu',   type: 'Nature',   tactile: '뾰족 잎, 부드러운 언덕 몸',          draw: drawMosshu,  surface: '매우 부드러움', motion: '천천히 흔들치듯' },
  voltchi:  { num: 3,  name: 'Voltchi',  type: 'Electric', tactile: '뾰족 귀, 번개 꼬리, 4족보행',        draw: drawVoltchi, surface: '보통', motion: '빠르고 경쾌한 진동' },
  bubloo:   { num: 4,  name: 'Bubloo',   type: 'Water',    tactile: '둥근 몸, 머리 분수, 넓은 꼬리',      draw: drawBubloo,  surface: '매끄러움', motion: '위아래로 둥실둥실' },
  fangroo:  { num: 5,  name: 'Fangroo',  type: 'Earth',    tactile: '주머니, 튼튼한 꼬리, 직립',          draw: drawFangroo, surface: '거침', motion: '위아래로 튀어오름' },
  chikapi:  { num: 6,  name: 'Chikapi',  type: 'Fire',     tactile: '불꽃 머리, 둥근 몸, 큰 입',          draw: drawChikapi, surface: '따뜻한 울퉁퉁', motion: '열정적 깜빡임' },
  turtloop: { num: 7,  name: 'Turtloop', type: 'Metal',    tactile: '단단한 등껍질, 미로 패턴',           draw: drawTurtloop,surface: '단단하고 선명', motion: '느리고 묵직' },
  nibori:   { num: 8,  name: 'Nibori',   type: 'Dream',    tactile: '고양이 귀, 자는 자세, 꼬리 말림',    draw: drawNibori,  surface: '매우 부드러움', motion: '느리게 숨쉬듯' },
  kricko:   { num: 9,  name: 'Kricko',   type: 'Sound',    tactile: '더듬이, 드럼, 음파',                 draw: drawKricko,  surface: '진동하는 느낌', motion: '리듬에 맞춰 두드림' },
  luminoa:  { num: 10, name: 'Luminoa',  type: 'Spirit',   tactile: '가지 뿔, 우아한 사슴 체형, 빛 구슬', draw: drawLuminoa, surface: '부드럽고 섬세함', motion: '천천히 빛을 내며' },
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
