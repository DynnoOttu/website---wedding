import React from "react";
import FallingPetals from "./FallingPetals";
import FlowerSVG from "./FlowerSVG";
import { GROOM, BRIDE, HERO_BG, BIBLE_VERSE } from "../data/weddingData";
import GuestCard from "./GuestCard";

export default function HeroSection() {
  const pathName = decodeURIComponent(
    window.location.pathname.replace("/", ""),
  );

  const queryName = new URLSearchParams(window.location.search).get("to");

  const guestName = queryName || pathName || "Bapak/Ibu/Saudara/i";

  return (
    <section
      className="relative flex items-center justify-center text-center overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* BG photo */}
      <div
        className="absolute inset-0 hero-zoom bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_BG}')` }}
      />

      {/* Dark overlay + white gradient top & bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,252,248,0.28) 0%, rgba(14,10,12,0.52) 28%, rgba(14,10,12,0.40) 60%, rgba(255,252,248,0.24) 100%)",
        }}
      />

      {/* Extra white glow strips */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: 180,
          background:
            "linear-gradient(180deg,rgba(255,252,248,0.20),transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: 150,
          background:
            "linear-gradient(0deg,rgba(255,252,248,0.16),transparent)",
        }}
      />

      {/* Falling petals */}
      <FallingPetals count={10} />

      {/* Corner SVG flowers */}
      <div className="absolute top-0 left-0">
        <FlowerSVG
          size={118}
          opacity={0.52}
          petalColor1="#d4a870"
          petalColor2="#b07848"
          centerColor="#f0d8b0"
          petalCount={4}
          animDuration="6s"
        />
      </div>
      <div className="absolute top-0 right-0">
        <FlowerSVG
          size={96}
          opacity={0.44}
          petalColor1="#d4a870"
          petalColor2="#c08850"
          centerColor="#f0d8b0"
          petalCount={4}
          animDuration="8s"
          animDelay="1s"
        />
      </div>
      <div className="absolute bottom-16 left-0">
        <FlowerSVG
          size={74}
          opacity={0.32}
          petalColor1="#d4a870"
          petalColor2="#b07848"
          centerColor="#e8c890"
          petalCount={3}
          animDuration="9s"
          animDelay="2s"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-7 py-16 max-w-sm mx-auto">
        <p
          className="hero-anim-0 font-montserrat text-[10px] tracking-[6px] uppercase mb-5"
          style={{ color: "rgba(255,252,245,0.72)" }}
        >
          ✦ Undangan Pernikahan ✦
        </p>

        <h1
          className="hero-anim-1 font-playfair font-bold text-[54px] leading-none text-gradient-white"
          style={{ filter: "drop-shadow(0 2px 20px rgba(0,0,0,0.45))" }}
        >
          {GROOM.shortName}
        </h1>

        <p
          className="hero-anim-2 font-cormorant italic font-light text-[28px] my-2"
          style={{ color: "#c9956b" }}
        >
          — &amp; —
        </p>

        <h1
          className="hero-anim-3 font-playfair font-bold text-[54px] leading-none text-gradient-white"
          style={{ filter: "drop-shadow(0 2px 20px rgba(0,0,0,0.45))" }}
        >
          {BRIDE.shortName}
        </h1>

        <div className="hero-anim-4 mt-5">
          <div
            style={{
              width: 50,
              height: 1,
              background:
                "linear-gradient(90deg,transparent,rgba(255,252,245,0.48),transparent)",
              margin: "0 auto 12px",
            }}
          />
          <p
            className="font-montserrat font-light text-[11px] tracking-[4px]"
            style={{ color: "rgba(255,240,220,0.76)" }}
          >
            02 · 07 · 2026
            {/* &nbsp;·&nbsp; Rumah Bapak Hironimus Ottu */}
          </p>
        </div>

        <div className="hero-anim-5 mt-5">
          <p
            className="font-cormorant italic text-[15px] leading-[1.9]"
            style={{ color: "rgba(255,240,220,0.90)" }}
          >
            {BIBLE_VERSE.text}
          </p>
          <p
            className="font-montserrat text-[10px] tracking-[2px] mt-2"
            style={{ color: "rgba(200,160,100,0.86)" }}
          >
            — {BIBLE_VERSE.ref}
          </p>
        </div>

        <div className="mt-5 mb-5">
          <GuestCard guestName={guestName} />
        </div>

        {/* Scroll hint */}
        <div className="hero-anim-5 mt-10 flex flex-col items-center gap-1 opacity-50">
          <span
            className="font-montserrat text-[10px] tracking-[3px]"
            style={{ color: "#c9956b" }}
          >
            scroll
          </span>
          <span className="text-lg animate-bounce" style={{ color: "#c9956b" }}>
            ↓
          </span>
        </div>
      </div>
    </section>
  );
}
