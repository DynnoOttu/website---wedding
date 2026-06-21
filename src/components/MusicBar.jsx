import React, { useEffect, useRef, useState } from "react";

export default function MusicBar({ autoPlay }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = false;
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(console.log);
  }, [autoPlay]);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        audio.muted = false;
        await audio.play();
        setPlaying(true);
      }
    } catch {}
  };

  return (
    <div
      className="sticky top-0 z-50 flex items-center justify-between px-5 py-2.5"
      style={{
        background: "rgba(14,10,12,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <audio
        ref={audioRef}
        playsInline
        loop
        preload="auto"
        src="https://res.cloudinary.com/dzs9aijqab/video/upload/v1760281381/Nothing_s_Gonna_Change_My_Love_for_You_George_Benson_-_saxophone_cover_epeebt.mp3"
      />
      <div className="flex items-center gap-3">
        <div className="flex items-end gap-[3px] h-[14px]">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="eq-bar"
              style={{
                animationPlayState: playing ? "running" : "paused",
                opacity: playing ? 1 : 0.3,
              }}
            />
          ))}
        </div>
        <span
          style={{
            fontSize: 11,
            letterSpacing: "1.5px",
            color: "#b09878",
            fontFamily: "Montserrat",
          }}
        >
          Wedding - Yebes &amp; Winda
        </span>
      </div>
      <button
        onClick={toggle}
        style={{
          fontSize: 18,
          color: playing ? "#c9956b" : "#5a4a40",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        {playing ? "⏸" : "▶"}
      </button>
    </div>
  );
}
