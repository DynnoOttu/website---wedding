import React from "react";
import SectionReveal from "./SectionReveal";
import SectionTitle from "./SectionTitle";
import FlowerSVG from "./FlowerSVG";
import VineDivider from "./VineDivider";
import { GROOM, BRIDE, GROOM_IMG, BRIDE_IMG } from "../data/weddingData";

export default function CoupleSection() {
  return (
    <>
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg,#0e0a0c,#181010,#0e0a0c)",
        }}
      >
        {/* White glow top */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: 90,
            background:
              "linear-gradient(180deg,rgba(255,252,248,0.08),transparent)",
          }}
        />

        {/* Big ghost flower center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <FlowerSVG
            size={260}
            opacity={0.034}
            petalColor1="#fff8f0"
            petalColor2="#fff8f0"
            centerColor="#fff8f0"
            petalCount={6}
            animDuration="0s"
          />
        </div>

        {/* Corner flower */}
        <div className="absolute top-4 right-4 pointer-events-none">
          <FlowerSVG
            size={80}
            opacity={0.14}
            petalColor1="#d4a870"
            petalColor2="#b07848"
            centerColor="#e8c890"
            petalCount={4}
            animDuration="9s"
            animDelay="1s"
          />
        </div>

        <div className="relative z-10 px-5 pt-10 pb-10">
          <SectionReveal>
            <SectionTitle label="Mempelai" title="Dua Hati Bersatu" />
          </SectionReveal>

          {/* Couple cards */}
          <SectionReveal delay={150} className="reveal-delay-2">
            <div className="grid grid-cols-2 gap-3 mt-6">
              {/* Groom */}
              <div
                className="relative rounded-[18px] overflow-hidden aspect-[3/4]"
                style={{
                  boxShadow:
                    "0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
                }}
              >
                <img
                  src={GROOM_IMG}
                  alt={GROOM.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(0deg,rgba(8,2,6,0.88) 0%,transparent 52%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p
                    className="font-playfair font-bold text-white"
                    style={{ fontSize: 16 }}
                  >
                    {GROOM.shortName} D. Missa
                  </p>
                  <p
                    className="font-montserrat font-light mt-1 leading-[1.8]"
                    style={{ fontSize: 10, color: "#c9a880" }}
                  >
                    Anak {GROOM.childOrder} dari {GROOM.siblings} bersaudara
                    pasangan Bapak Kornelis Missa &amp; Ibu Odamada M.M. Nifu
                  </p>
                </div>
              </div>
              {/* Bride */}
              <div
                className="relative rounded-[18px] overflow-hidden aspect-[3/4]"
                style={{
                  boxShadow:
                    "0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
                }}
              >
                <img
                  src={BRIDE_IMG}
                  alt={BRIDE.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(0deg,rgba(8,2,6,0.88) 0%,transparent 52%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p
                    className="font-playfair font-bold text-white"
                    style={{ fontSize: 16 }}
                  >
                    {BRIDE.shortName} I. Ottu
                  </p>
                  <p
                    className="font-montserrat font-light mt-1 leading-[1.8]"
                    style={{ fontSize: 10, color: "#c9a880" }}
                  >
                    Putri ke-{BRIDE.childOrder} dari {BRIDE.siblings} bersaudara
                    <br />
                    Kel. Ottu &amp; Frans
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Parents info */}
          {/* <SectionReveal delay={280} className="reveal-delay-3">
            <div className="card-dark mt-4 p-5 text-center">
              <p
                className="font-cormorant italic leading-[2.1]"
                style={{ fontSize: 13.5, color: "#a09070" }}
              >
                Putra dari{" "}
                <b
                  className="font-semibold not-italic"
                  style={{ color: "#d4b078" }}
                >
                  Pasangan Bapak {GROOM.father}
                </b>{" "}
                &amp;{" "}
                <b
                  className="font-semibold not-italic"
                  style={{ color: "#d4b078" }}
                >
                  Ibu {GROOM.mother}
                </b>
                <br />
                Putri dari{" "}
                <b
                  className="font-semibold not-italic"
                  style={{ color: "#d4b078" }}
                >
                  Bp. {BRIDE.father}
                </b>{" "}
                &amp;{" "}
                <b
                  className="font-semibold not-italic"
                  style={{ color: "#d4b078" }}
                >
                  Ibu {BRIDE.mother}
                </b>
              </p>
            </div>
          </SectionReveal> */}
        </div>
      </section>
      <VineDivider />
    </>
  );
}
