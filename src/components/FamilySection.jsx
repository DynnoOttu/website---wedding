import React from "react";
import SectionReveal from "./SectionReveal";
import SectionTitle from "./SectionTitle";
import FlowerSVG from "./FlowerSVG";
import VineDivider from "./VineDivider";
import { FAMILIES, WITNESSES } from "../data/weddingData";

export default function FamilySection() {
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
            height: 80,
            background:
              "linear-gradient(180deg,rgba(255,252,248,0.08),transparent)",
          }}
        />

        {/* Ghost flowers corners */}
        <div className="absolute -top-4 -right-4 pointer-events-none">
          <FlowerSVG
            size={110}
            opacity={0.06}
            petalColor1="#fff8f0"
            petalColor2="#fff8f0"
            centerColor="#fff8f0"
            petalCount={6}
            animDuration="0s"
          />
        </div>
        <div className="absolute -bottom-4 -left-4 pointer-events-none">
          <FlowerSVG
            size={90}
            opacity={0.05}
            petalColor1="#fff8f0"
            petalColor2="#fff8f0"
            centerColor="#fff8f0"
            petalCount={5}
            animDuration="0s"
          />
        </div>

        <div className="relative z-10 px-5 pt-10 pb-10">
          {/* Families */}
          <SectionReveal>
            <SectionTitle label="Keluarga" title="Yang Berbahagia" />
          </SectionReveal>

          <SectionReveal delay={150} className="reveal-delay-2">
            <div className="grid grid-cols-2 gap-3 mt-2">
              {/* Groom family */}
              <div className="card-dark p-4">
                <p
                  className="font-montserrat text-[9px] tracking-[3px] uppercase pb-2 mb-3"
                  style={{
                    color: "#c9956b",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  Pihak Pria
                </p>
                {FAMILIES.groom.map((name, i) => (
                  <div key={i} className="flex items-start gap-2 mb-2">
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg,#fff,#c9956b)",
                        marginTop: 7,
                        flexShrink: 0,
                      }}
                    />
                    <p
                      className="font-montserrat font-light text-[12px] leading-[1.7]"
                      style={{ color: "#c8b098" }}
                    >
                      {name}
                    </p>
                  </div>
                ))}
              </div>
              {/* Bride family */}
              <div className="card-dark p-4">
                <p
                  className="font-montserrat text-[9px] tracking-[3px] uppercase pb-2 mb-3"
                  style={{
                    color: "#c9956b",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  Pihak Wanita
                </p>
                {FAMILIES.bride.map((name, i) => (
                  <div key={i} className="flex items-start gap-2 mb-2">
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg,#fff,#c9956b)",
                        marginTop: 7,
                        flexShrink: 0,
                      }}
                    />
                    <p
                      className="font-montserrat font-light text-[12px] leading-[1.7]"
                      style={{ color: "#c8b098" }}
                    >
                      {name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Witnesses */}
          {/* <div className="mt-10">
            <SectionReveal>
              <SectionTitle label="Saksi-Saksi" title="Pernikahan" />
            </SectionReveal>

            <SectionReveal delay={150} className="reveal-delay-2">
              <div className="grid grid-cols-2 gap-3 mt-2">
                {WITNESSES.map(w => (
                  <div key={w.id} className="card-dark p-4 text-center">
                    <p className="font-cormorant italic font-bold leading-none"
                      style={{ fontSize: 38, color: 'rgba(255,255,255,0.07)' }}>
                      {w.roman}
                    </p>
                    <p className="font-playfair text-[13px] leading-[1.45] mt-1 text-gradient-white">
                      {w.name}
                    </p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div> */}
        </div>
      </section>
      <VineDivider />
    </>
  );
}
