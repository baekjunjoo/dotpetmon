/**
 * DotPetMon UI Mockup — "Midnight Illustrated" Design Direction
 *
 * Design Philosophy:
 * - Deep midnight navy (#0a0e1a) background with illustration-first layout
 * - Off-white frosted glass panels layered over anime RPG backgrounds
 * - Warm orange (#f97316) CTA, electric blue (#3b82f6) accessibility focus rings
 * - Gold (#fbbf24) tactile-dot motifs echoing Dot Pad branding
 * - Nunito (display) + Inter (body) typography system
 * - WCAG AA contrast, large touch targets, keyboard-accessible
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Asset URLs (uploaded to webdev CDN) ──────────────────────────────────────
const ASSETS = {
  trainerHalfbody: "/manus-storage/trainer-halfbody_84660fb3.png",
  starterPlains: "/manus-storage/starter-plains_2a736041.png",
  whisperingForest: "/manus-storage/whispering-forest_797ccf3f.png",
  sacredGrove: "/manus-storage/sacred-grove_6e33af75.png",
  battleGrass: "/manus-storage/battle-grass_0c43d0ea.png",
  battleTemple: "/manus-storage/battle-temple_c3c9a440.png",
  typeBadges: "/manus-storage/type-badges_c2a2da69.png",
  eggStages: "/manus-storage/egg-stages_42879bce.png",
  monsters: {
    pibbi: "/manus-storage/pibbi_e5662cef.png",
    mosshu: "/manus-storage/mosshu_290d87e8.png",
    voltchi: "/manus-storage/voltchi_d825cf8c.png",
    bubloo: "/manus-storage/bubloo_53779d92.png",
    fangroo: "/manus-storage/fangroo_20797524.png",
    chikapi: "/manus-storage/chikapi_e476c26b.png",
    turtloop: "/manus-storage/turtloop_9c7c7b1a.png",
    nibori: "/manus-storage/nibori_bed2c5f1.png",
    kricko: "/manus-storage/kricko_ed71f9a7.png",
    luminoa: "/manus-storage/luminoa_74f03d4d.png",
  },
};

const MONSTERS = [
  { id: "01", name: "Pibbi", type: "Light", color: "#fbbf24", img: ASSETS.monsters.pibbi, starter: true },
  { id: "02", name: "Mosshu", type: "Nature", color: "#22c55e", img: ASSETS.monsters.mosshu, starter: false },
  { id: "03", name: "Voltchi", type: "Electric", color: "#facc15", img: ASSETS.monsters.voltchi, starter: false },
  { id: "04", name: "Bubloo", type: "Water", color: "#3b82f6", img: ASSETS.monsters.bubloo, starter: true },
  { id: "05", name: "Fangroo", type: "Earth", color: "#a16207", img: ASSETS.monsters.fangroo, starter: false },
  { id: "06", name: "Chikapi", type: "Fire", color: "#ef4444", img: ASSETS.monsters.chikapi, starter: true },
  { id: "07", name: "Turtloop", type: "Metal", color: "#94a3b8", img: ASSETS.monsters.turtloop, starter: false },
  { id: "08", name: "Nibori", type: "Dream", color: "#a855f7", img: ASSETS.monsters.nibori, starter: false },
  { id: "09", name: "Kricko", type: "Sound", color: "#ec4899", img: ASSETS.monsters.kricko, starter: false },
  { id: "10", name: "Luminoa", type: "Spirit", color: "#14b8a6", img: ASSETS.monsters.luminoa, starter: false },
];

const REGIONS = [
  { name: "Starter Plains", bg: ASSETS.starterPlains, desc: "평화로운 초원 — 첫 번째 모험의 시작", badge: "초급", badgeColor: "#22c55e" },
  { name: "Whispering Forest", bg: ASSETS.whisperingForest, desc: "새벽 안개 속 마법의 숲", badge: "중급", badgeColor: "#a855f7" },
  { name: "Sacred Grove", bg: ASSETS.sacredGrove, desc: "황금빛 빛구슬이 떠도는 성스러운 숲", badge: "고급", badgeColor: "#fbbf24" },
];

type Tab = "home" | "explore" | "battle";

// ── Sub-components ────────────────────────────────────────────────────────────

function NavBar({ activeTab, setActiveTab }: { activeTab: Tab; setActiveTab: (t: Tab) => void }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
      style={{ background: "rgba(10,14,26,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black"
          style={{ background: "linear-gradient(135deg,#f97316,#fbbf24)", color: "#0a0e1a" }}>D</div>
        <span className="font-black text-white text-lg tracking-tight" style={{ fontFamily: "'Nunito',sans-serif" }}>
          Dot<span style={{ color: "#f97316" }}>Pet</span>Mon
        </span>
        <span className="text-xs px-2 py-0.5 rounded-full font-bold ml-1"
          style={{ background: "rgba(249,115,22,0.2)", color: "#f97316", border: "1px solid rgba(249,115,22,0.4)" }}>BETA</span>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 rounded-xl p-1" style={{ background: "rgba(255,255,255,0.05)" }}>
        {(["home", "explore", "battle"] as Tab[]).map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className="px-4 py-1.5 rounded-lg text-sm font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{
              fontFamily: "'Nunito',sans-serif",
              background: activeTab === tab ? "#f97316" : "transparent",
              color: activeTab === tab ? "#fff" : "rgba(255,255,255,0.5)",
              transform: activeTab === tab ? "scale(1)" : "scale(0.97)",
            }}>
            {tab === "home" ? "HOME" : tab === "explore" ? "EXPLORE" : "BATTLE"}
          </button>
        ))}
      </div>

      {/* Utility buttons */}
      <div className="flex items-center gap-2">
        {["PAD", "Voice", "FX"].map((label) => (
          <button key={label} className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-150 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ background: "rgba(59,130,246,0.15)", color: "#93c5fd", border: "1px solid rgba(59,130,246,0.3)", fontFamily: "'Nunito',sans-serif" }}>
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}

function DotPattern() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.04 }}>
      <svg width="100%" height="100%">
        <defs>
          <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.5" fill="#fbbf24" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  );
}

// ── HOME SCREEN ───────────────────────────────────────────────────────────────

function HomeScreen() {
  const [hoveredMonster, setHoveredMonster] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden" style={{ background: "#0a0e1a" }}>
      <DotPattern />

      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[60%] h-[70%] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(249,115,22,0.12) 0%, transparent 60%)" }} />
      <div className="absolute bottom-0 left-0 w-[40%] h-[50%] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 20% 80%, rgba(59,130,246,0.08) 0%, transparent 60%)" }} />

      {/* Hero Section */}
      <section className="relative container mx-auto px-6 pt-12 pb-8 flex items-start gap-8">
        {/* Left: Text + CTA */}
        <motion.div className="flex-1 max-w-lg pt-4"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-bold"
            style={{ background: "rgba(249,115,22,0.12)", color: "#fb923c", border: "1px solid rgba(249,115,22,0.25)" }}>
            <span>⊙</span> DOT ARCADE · BETA
          </div>
          <h1 className="text-6xl font-black leading-none mb-4" style={{ fontFamily: "'Nunito',sans-serif", color: "#fff" }}>
            닷펫몬<br />
            <span style={{ color: "#f97316" }}>DOTPETMON</span>
          </h1>
          <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter',sans-serif" }}>
            세계 최초 <strong style={{ color: "#fff" }}>시각장애 친화 턴제 몬스터 수집 RPG</strong>.<br />
            닷패드 위 촉각 시그너처로 10종의 닷펫몬을 만나고,<br />
            알에서 부화한 첫 친구와 8개 지역을 모험하세요.
          </p>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-base transition-all duration-150 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-400"
              style={{ background: "#f97316", color: "#fff", fontFamily: "'Nunito',sans-serif", boxShadow: "0 4px 20px rgba(249,115,22,0.4)" }}>
              ▶ 새 게임 시작
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-base transition-all duration-150 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.12)", fontFamily: "'Nunito',sans-serif" }}>
              ▷ 이어하기
            </button>
          </div>
        </motion.div>

        {/* Right: Trainer + Dot Pad Preview */}
        <motion.div className="flex gap-4 items-start"
          initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          {/* Trainer */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl" style={{ background: "radial-gradient(ellipse at 50% 80%, rgba(249,115,22,0.25) 0%, transparent 70%)" }} />
            <img src={ASSETS.trainerHalfbody} alt="DotPetMon 트레이너" className="relative w-72 object-contain drop-shadow-2xl" />
          </div>

          {/* Dot Pad Preview Panel */}
          <div className="w-56 rounded-2xl p-4 mt-8"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(59,130,246,0.35)", backdropFilter: "blur(12px)" }}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#3b82f6" }} />
              <span className="text-xs font-bold" style={{ color: "#93c5fd", fontFamily: "'Nunito',sans-serif" }}>실시간 닷패드 미리보기</span>
            </div>
            <div className="rounded-xl p-3 mb-3" style={{ background: "#0d1117", border: "1px solid rgba(251,191,36,0.2)" }}>
              {/* Tactile dot grid simulation */}
              <div className="grid gap-0.5" style={{ gridTemplateColumns: "repeat(20, 1fr)" }}>
                {Array.from({ length: 200 }).map((_, i) => {
                  const active = [22, 23, 24, 41, 44, 60, 64, 79, 84, 98, 104, 117, 124, 136, 144, 155, 164].includes(i);
                  return <div key={i} className="rounded-full aspect-square" style={{ background: active ? "#fbbf24" : "rgba(255,255,255,0.06)" }} />;
                })}
              </div>
            </div>
            <p className="text-center text-xs font-semibold" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Nunito',sans-serif" }}>Kricko · Sound</p>
          </div>
        </motion.div>
      </section>

      {/* Monster Grid */}
      <section className="container mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black" style={{ fontFamily: "'Nunito',sans-serif", color: "#fff" }}>
            만나게 될 닷펫몬 10종
          </h2>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter',sans-serif" }}>
            ★ 4종은 스타터 풀 — 알 부화 시 랜덤 1마리
          </span>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {MONSTERS.map((m, i) => (
            <motion.div key={m.id}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i, duration: 0.35 }}
              onMouseEnter={() => setHoveredMonster(m.id)} onMouseLeave={() => setHoveredMonster(null)}
              className="rounded-2xl p-3 cursor-pointer transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500"
              style={{
                background: hoveredMonster === m.id ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.04)",
                border: `1px solid ${hoveredMonster === m.id ? m.color + "60" : "rgba(255,255,255,0.08)"}`,
                transform: hoveredMonster === m.id ? "translateY(-4px)" : "translateY(0)",
                boxShadow: hoveredMonster === m.id ? `0 8px 24px ${m.color}25` : "none",
              }}>
              <div className="relative mb-2">
                {m.starter && (
                  <span className="absolute top-0 right-0 text-xs px-1.5 py-0.5 rounded-full font-bold z-10"
                    style={{ background: "rgba(251,191,36,0.2)", color: "#fbbf24", border: "1px solid rgba(251,191,36,0.4)", fontSize: "9px" }}>★</span>
                )}
                <img src={m.img} alt={m.name} className="w-full aspect-square object-contain" />
              </div>
              <p className="text-center text-xs font-bold mb-1" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter',sans-serif" }}>#{m.id}</p>
              <p className="text-center text-sm font-black" style={{ fontFamily: "'Nunito',sans-serif", color: "#fff" }}>{m.name}</p>
              <div className="mt-2 flex justify-center">
                <span className="text-xs px-2 py-0.5 rounded-full font-bold"
                  style={{ background: m.color + "25", color: m.color, border: `1px solid ${m.color}50`, fontFamily: "'Nunito',sans-serif" }}>
                  {m.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ── EXPLORE SCREEN ────────────────────────────────────────────────────────────

function ExploreScreen() {
  const [selectedRegion, setSelectedRegion] = useState(0);
  const region = REGIONS[selectedRegion];

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden" style={{ background: "#0a0e1a" }}>
      {/* Full-bleed background */}
      <AnimatePresence mode="wait">
        <motion.div key={selectedRegion} className="absolute inset-0"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
          <img src={region.bg} alt="" className="w-full h-full object-cover" style={{ opacity: 0.35 }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,14,26,0.92) 0%, rgba(10,14,26,0.6) 50%, rgba(10,14,26,0.4) 100%)" }} />
        </motion.div>
      </AnimatePresence>

      <DotPattern />

      <div className="relative container mx-auto px-6 pt-10 pb-16 flex gap-8 min-h-[calc(100vh-4rem)]">
        {/* Left: Party + Navigation */}
        <div className="w-52 flex flex-col gap-4">
          <div className="rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}>
            <p className="text-xs font-bold mb-3" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Nunito',sans-serif" }}>PARTY</p>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="flex items-center gap-2 py-2 border-b last:border-b-0" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{ background: n === 1 ? "rgba(249,115,22,0.2)" : "rgba(255,255,255,0.05)", color: n === 1 ? "#f97316" : "rgba(255,255,255,0.2)", border: `1px solid ${n === 1 ? "rgba(249,115,22,0.4)" : "rgba(255,255,255,0.08)"}` }}>
                  {n}
                </div>
                <span className="text-xs" style={{ color: n === 1 ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.2)", fontFamily: "'Inter',sans-serif" }}>
                  {n === 1 ? "Pibbi" : "—"}
                </span>
              </div>
            ))}
          </div>

          {/* Region selector */}
          <div className="rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}>
            <p className="text-xs font-bold mb-3" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Nunito',sans-serif" }}>REGIONS</p>
            {REGIONS.map((r, i) => (
              <button key={i} onClick={() => setSelectedRegion(i)}
                className="w-full text-left px-3 py-2 rounded-xl mb-1 transition-all duration-150 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  background: selectedRegion === i ? "rgba(249,115,22,0.15)" : "transparent",
                  color: selectedRegion === i ? "#f97316" : "rgba(255,255,255,0.4)",
                  border: `1px solid ${selectedRegion === i ? "rgba(249,115,22,0.3)" : "transparent"}`,
                  fontFamily: "'Nunito',sans-serif",
                }}>
                {r.name}
              </button>
            ))}
          </div>
        </div>

        {/* Center: Region info */}
        <div className="flex-1 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div key={selectedRegion}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>
              <div className="mb-2">
                <span className="text-xs px-2 py-1 rounded-full font-bold mr-2"
                  style={{ background: region.badgeColor + "25", color: region.badgeColor, border: `1px solid ${region.badgeColor}50`, fontFamily: "'Nunito',sans-serif" }}>
                  {region.badge}
                </span>
              </div>
              <h2 className="text-4xl font-black mb-2" style={{ fontFamily: "'Nunito',sans-serif", color: "#fff" }}>{region.name}</h2>
              <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter',sans-serif" }}>{region.desc}</p>

              {/* Encounter info cards */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { label: "인카운트 확률", value: "35%", icon: "⚡" },
                  { label: "발견 가능 종", value: "4종", icon: "✦" },
                  { label: "추천 레벨", value: "Lv. 1–5", icon: "⊙" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="text-xl font-black mb-1" style={{ fontFamily: "'Nunito',sans-serif", color: "#fff" }}>{stat.value}</div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter',sans-serif" }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Tactile clue */}
              <div className="rounded-xl p-4 mb-8" style={{ background: "rgba(251,191,36,0.06)", border: "1px solid rgba(251,191,36,0.2)" }}>
                <p className="text-xs font-bold mb-1" style={{ color: "#fbbf24", fontFamily: "'Nunito',sans-serif" }}>⊙ 닷패드 촉각 단서</p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter',sans-serif" }}>
                  부드러운 곡선 패턴이 반복되는 지형 — 언덕과 꽃밭의 촉각 시그너처
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Action dock */}
          <div className="flex gap-3">
            <button className="flex-1 py-3 rounded-xl font-bold text-base transition-all duration-150 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-400"
              style={{ background: "#f97316", color: "#fff", fontFamily: "'Nunito',sans-serif", boxShadow: "0 4px 20px rgba(249,115,22,0.35)" }}>
              ⛰ 탐험 시작
            </button>
            {["♥ 케어", "✦ 도감", "⇄ 트레이드"].map((label) => (
              <button key={label} className="px-5 py-3 rounded-xl font-bold text-sm transition-all duration-150 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400"
                style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.1)", fontFamily: "'Nunito',sans-serif" }}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Dot Pad mini panel */}
        <div className="w-48 flex flex-col gap-4">
          <div className="rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(59,130,246,0.3)", backdropFilter: "blur(12px)" }}>
            <p className="text-xs font-bold mb-3" style={{ color: "#93c5fd", fontFamily: "'Nunito',sans-serif" }}>PAD 미리보기</p>
            <div className="rounded-xl p-2" style={{ background: "#0d1117" }}>
              <div className="grid gap-0.5" style={{ gridTemplateColumns: "repeat(16, 1fr)" }}>
                {Array.from({ length: 128 }).map((_, i) => {
                  const active = [18, 19, 33, 36, 48, 52, 63, 68, 78, 84, 93, 100].includes(i);
                  return <div key={i} className="rounded-full aspect-square" style={{ background: active ? "#fbbf24" : "rgba(255,255,255,0.05)" }} />;
                })}
              </div>
            </div>
            <p className="text-center text-xs mt-2 font-semibold" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Nunito',sans-serif" }}>Pibbi · Light</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── BATTLE SCREEN ─────────────────────────────────────────────────────────────

function BattleScreen() {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  const actions = [
    { id: "attack", label: "공격", icon: "⚔", color: "#ef4444", desc: "상대에게 공격 기술 사용" },
    { id: "care", label: "케어", icon: "♥", color: "#22c55e", desc: "HP와 에너지 회복" },
    { id: "tactile", label: "촉각", icon: "⊙", color: "#fbbf24", desc: "닷패드로 상대 시그너처 감지" },
    { id: "run", label: "도망", icon: "↩", color: "#94a3b8", desc: "배틀에서 탈출" },
  ];

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden" style={{ background: "#0a0e1a" }}>
      {/* Battle background */}
      <div className="absolute inset-0">
        <img src={ASSETS.battleGrass} alt="" className="w-full h-full object-cover" style={{ opacity: 0.5 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,14,26,0.95) 0%, rgba(10,14,26,0.4) 50%, rgba(10,14,26,0.6) 100%)" }} />
      </div>
      <DotPattern />

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-6 py-3 mt-2">
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <span className="text-sm font-black" style={{ fontFamily: "'Nunito',sans-serif", color: "#fff" }}>TURN 1</span>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter',sans-serif" }}>플레이어 턴</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter',sans-serif" }}>상대</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="w-2 h-2 rounded-full" style={{ background: n <= 3 ? "#ef4444" : "rgba(255,255,255,0.15)" }} />
            ))}
          </div>
        </div>
      </div>

      {/* Battle arena */}
      <div className="relative z-10 flex justify-between items-end px-12 pb-4" style={{ height: "280px" }}>
        {/* Player creature slot */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-36 h-36 rounded-2xl flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(249,115,22,0.3)" }}>
            <img src={ASSETS.monsters.pibbi} alt="Pibbi" className="w-28 h-28 object-contain drop-shadow-xl" />
          </div>
          <div className="rounded-xl px-4 py-2 w-44" style={{ background: "rgba(10,14,26,0.85)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-black" style={{ fontFamily: "'Nunito',sans-serif", color: "#fff" }}>Pibbi</span>
              <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: "rgba(251,191,36,0.2)", color: "#fbbf24", fontFamily: "'Nunito',sans-serif", fontSize: "10px" }}>Light</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter',sans-serif", fontSize: "10px" }}>HP</span>
              <div className="flex-1 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
                <div className="h-full rounded-full" style={{ width: "78%", background: "#22c55e" }} />
              </div>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter',sans-serif", fontSize: "10px" }}>78/100</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter',sans-serif", fontSize: "10px" }}>EN</span>
              <div className="flex-1 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
                <div className="h-full rounded-full" style={{ width: "60%", background: "#3b82f6" }} />
              </div>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter',sans-serif", fontSize: "10px" }}>60/100</span>
            </div>
          </div>
        </div>

        {/* Opponent creature slot */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-36 h-36 rounded-2xl flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(239,68,68,0.3)" }}>
            <img src={ASSETS.monsters.voltchi} alt="Voltchi" className="w-28 h-28 object-contain drop-shadow-xl" style={{ transform: "scaleX(-1)" }} />
          </div>
          <div className="rounded-xl px-4 py-2 w-44" style={{ background: "rgba(10,14,26,0.85)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-black" style={{ fontFamily: "'Nunito',sans-serif", color: "#fff" }}>Voltchi</span>
              <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: "rgba(250,204,21,0.2)", color: "#facc15", fontFamily: "'Nunito',sans-serif", fontSize: "10px" }}>Electric</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter',sans-serif", fontSize: "10px" }}>HP</span>
              <div className="flex-1 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
                <div className="h-full rounded-full" style={{ width: "45%", background: "#f97316" }} />
              </div>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter',sans-serif", fontSize: "10px" }}>45/100</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter',sans-serif", fontSize: "10px" }}>EN</span>
              <div className="flex-1 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
                <div className="h-full rounded-full" style={{ width: "80%", background: "#3b82f6" }} />
              </div>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter',sans-serif", fontSize: "10px" }}>80/100</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom HUD */}
      <div className="relative z-10 px-6 pb-6 flex gap-4">
        {/* Action panel */}
        <div className="flex-1 rounded-2xl p-4" style={{ background: "rgba(10,14,26,0.9)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(16px)" }}>
          <p className="text-xs font-bold mb-3 flex items-center gap-1" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Nunito',sans-serif" }}>
            <span style={{ color: "#fbbf24" }}>✦</span> 행동 선택
          </p>
          <div className="grid grid-cols-4 gap-3 mb-3">
            {actions.map((action) => (
              <button key={action.id} onClick={() => setSelectedAction(action.id)}
                className="rounded-xl py-3 flex flex-col items-center gap-1 transition-all duration-150 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  background: selectedAction === action.id ? action.color + "25" : "rgba(255,255,255,0.05)",
                  border: `1px solid ${selectedAction === action.id ? action.color + "60" : "rgba(255,255,255,0.08)"}`,
                  boxShadow: selectedAction === action.id ? `0 4px 16px ${action.color}30` : "none",
                }}>
                <span className="text-xl">{action.icon}</span>
                <span className="text-xs font-black" style={{ fontFamily: "'Nunito',sans-serif", color: selectedAction === action.id ? action.color : "#fff" }}>
                  {action.label}
                </span>
              </button>
            ))}
          </div>
          {selectedAction && (
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter',sans-serif" }}>
              {actions.find((a) => a.id === selectedAction)?.desc}
            </p>
          )}
        </div>

        {/* Battle log */}
        <div className="w-64 rounded-2xl p-4" style={{ background: "rgba(10,14,26,0.9)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(16px)" }}>
          <p className="text-xs font-bold mb-3" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Nunito',sans-serif" }}>배틀 로그</p>
          <div className="space-y-1.5">
            {[
              { text: "배틀 시작! Voltchi가 도전해왔다!", color: "#3b82f6" },
              { text: "턴 1: 당신의 차례입니다.", color: "#fbbf24" },
              { text: "행동을 선택하세요.", color: "rgba(255,255,255,0.4)" },
            ].map((log, i) => (
              <p key={i} className="text-xs leading-relaxed" style={{ color: log.color, fontFamily: "'Inter',sans-serif" }}>{log.text}</p>
            ))}
          </div>
        </div>

        {/* Dot Pad panel */}
        <div className="w-44 rounded-2xl p-4" style={{ background: "rgba(10,14,26,0.9)", border: "1px solid rgba(59,130,246,0.3)", backdropFilter: "blur(16px)" }}>
          <p className="text-xs font-bold mb-3" style={{ color: "#93c5fd", fontFamily: "'Nunito',sans-serif" }}>Dot Pad</p>
          <div className="rounded-xl p-2 mb-2" style={{ background: "#0d1117" }}>
            <div className="grid gap-0.5" style={{ gridTemplateColumns: "repeat(14, 1fr)" }}>
              {Array.from({ length: 98 }).map((_, i) => {
                const active = [14, 15, 28, 31, 42, 45, 56, 59, 70, 73].includes(i);
                return <div key={i} className="rounded-full aspect-square" style={{ background: active ? "#fbbf24" : "rgba(255,255,255,0.05)" }} />;
              })}
            </div>
          </div>
          <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Nunito',sans-serif" }}>촉각 감지 중...</p>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  return (
    <div style={{ fontFamily: "'Nunito','Inter',sans-serif", background: "#0a0e1a", minHeight: "100vh" }}>
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <AnimatePresence mode="wait">
        <motion.div key={activeTab}
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
          {activeTab === "home" && <HomeScreen />}
          {activeTab === "explore" && <ExploreScreen />}
          {activeTab === "battle" && <BattleScreen />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
