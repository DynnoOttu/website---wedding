import React from "react";
import SectionReveal from "./SectionReveal";
import SectionTitle from "./SectionTitle";
import FlowerSVG from "./FlowerSVG";
import VineDivider from "./VineDivider";
import { EVENTS } from "../data/weddingData";

export default function EventsSection() {
  return (
    <>
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg,#0e0a0c,#141210,#0e0a0c)",
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: 80,
            background:
              "linear-gradient(180deg,rgba(255,252,248,0.07),transparent)",
          }}
        />
        <div className="absolute top-3 right-3 pointer-events-none">
          <FlowerSVG
            size={88}
            opacity={0.07}
            petalColor1="#fff8f0"
            petalColor2="#fff8f0"
            centerColor="#fff8f0"
            petalCount={4}
            animDuration="0s"
          />
        </div>
        <div className="absolute bottom-3 left-3 pointer-events-none">
          <FlowerSVG
            size={70}
            opacity={0.06}
            petalColor1="#fff8f0"
            petalColor2="#fff8f0"
            centerColor="#fff8f0"
            petalCount={4}
            animDuration="0s"
          />
        </div>

        <div className="relative z-10 px-5 pt-10 pb-10">
          <SectionReveal>
            <SectionTitle label="Rangkaian Acara" title="Momen Istimewa" />
          </SectionReveal>

          {EVENTS.map((ev, i) => (
            <SectionReveal
              key={ev.id}
              delay={i * 120}
              className={`reveal-delay-${i + 1}`}
            >
              <div className="card-dark ev-accent relative rounded-[18px] p-5 mb-4 overflow-hidden">
                <span
                  className="absolute right-3 top-0 font-playfair font-bold leading-none pointer-events-none select-none"
                  style={{ fontSize: 72, color: "rgba(255,255,255,0.04)" }}
                >
                  {String(ev.id).padStart(2, "0")}
                </span>

                <p
                  className="font-montserrat text-[9px] tracking-[4px] uppercase mb-1.5"
                  style={{ color: "#c9956b" }}
                >
                  {ev.type}
                </p>

                <h3 className="font-playfair font-bold text-[21px] mb-3 text-gradient-gold">
                  {ev.title}
                </h3>

                <div
                  className="font-montserrat text-[12px] leading-[2.1]"
                  style={{ color: "#a09080" }}
                >
                  <p style={{ color: "#d4a870", fontWeight: 500 }}>
                    {ev.day}, {ev.date}
                  </p>
                  <p>{ev.time}</p>
                  <p>{ev.place}</p>
                </div>

                {ev.maps && (
                  <a
                    href={ev.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 font-montserrat"
                    style={{
                      fontSize: 10,
                      letterSpacing: "2px",
                      color: "#c9956b",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      border: "1px solid rgba(201,149,107,0.25)",
                      borderRadius: 8,
                      padding: "6px 14px",
                    }}
                  >
                    📍 Buka Google Maps
                  </a>
                )}
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
      <VineDivider flip />
    </>
  );
}
