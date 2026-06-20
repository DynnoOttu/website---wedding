import React, { useEffect, useRef } from "react";
import SectionReveal from "./SectionReveal";
import SectionTitle from "./SectionTitle";
import VineDivider from "./VineDivider";
import { GALLERY } from "../data/weddingData";

export default function GallerySection() {
  const swiperEl = useRef(null);

  useEffect(() => {
    let sw = null;
    const init = () => {
      if (!window.Swiper || !swiperEl.current) return;
      sw = new window.Swiper(swiperEl.current, {
        slidesPerView: "auto",
        spaceBetween: 14,
        centeredSlides: true,
        loop: true,
        autoplay: { delay: 2600, disableOnInteraction: false },
        pagination: { el: ".swiper-pagination", clickable: true },
        grabCursor: true,
      });
    };
    if (window.Swiper) {
      init();
    } else {
      const s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
      s.onload = init;
      document.head.appendChild(s);
    }
    return () => {
      if (sw) sw.destroy(true, true);
    };
  }, []);

  return (
    <>
      <VineDivider />
      <section
        className="relative overflow-hidden py-0"
        style={{
          background: "linear-gradient(180deg,#0e0a0c,#161010,#0e0a0c)",
        }}
      >
        {/* White glow top & bottom */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: 100,
            background:
              "linear-gradient(180deg,rgba(255,252,248,0.07),transparent)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: 100,
            background:
              "linear-gradient(0deg,rgba(255,252,248,0.07),transparent)",
          }}
        />

        <div className="relative z-10 pt-10 pb-2 px-5">
          <SectionReveal>
            <SectionTitle label="Galeri Foto" title="Momen Bersama" />
          </SectionReveal>
        </div>

        {/* Swiper */}
        <div ref={swiperEl} className="swiper px-0">
          <div className="swiper-wrapper">
            {GALLERY.map((photo) => (
              <div key={photo.id} className="swiper-slide !w-[210px]">
                <div
                  className="relative rounded-[18px] overflow-hidden aspect-[3/4]"
                  style={{
                    boxShadow:
                      "0 4px 28px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)",
                  }}
                >
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(0deg,rgba(6,2,4,0.72) 0%,transparent 55%)",
                    }}
                  />
                  <p
                    className="absolute bottom-3 left-4 text-white font-montserrat font-light"
                    style={{ fontSize: 11, letterSpacing: "2px" }}
                  >
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination mt-2" />
        </div>
        <div className="pb-8" />
      </section>
      <VineDivider flip />
    </>
  );
}
