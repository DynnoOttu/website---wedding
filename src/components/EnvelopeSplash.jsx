import React, { useState, useEffect, useRef } from "react";
import "../EnvelopeSplash.css";

export default function EnvelopeSplash({ onEnter }) {
  const [opened, setOpened] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let stars = [];

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      stars = Array.from({ length: 60 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3,
        a: Math.random(),
        da: (Math.random() - 0.5) * 0.008,
      }));
    }

    function draw() {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const g = ctx.createRadialGradient(
        W * 0.5,
        H * 0.4,
        0,
        W * 0.5,
        H * 0.5,
        W * 0.85,
      );
      g.addColorStop(0, "#1e1208");
      g.addColorStop(0.5, "#110c0e");
      g.addColorStop(1, "#0a0608");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      const g2 = ctx.createRadialGradient(
        W * 0.2,
        H * 0.15,
        0,
        W * 0.2,
        H * 0.15,
        W * 0.5,
      );
      g2.addColorStop(0, "rgba(201,149,107,0.07)");
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, W, H);

      stars.forEach((s) => {
        s.a += s.da;
        if (s.a < 0 || s.a > 1) s.da *= -1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,240,210,${s.a * 0.6})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
    setTimeout(() => onEnter?.(), 2400);
  };

  const petalColors = ["#e8a4a4", "#f5c5c5", "#f0d5c8", "#f7e0e0", "#f2c4b8"];
  const petals = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    color: petalColors[Math.floor(Math.random() * petalColors.length)],
    duration: 6 + Math.random() * 8,
    delay: Math.random() * 10,
    width: 6 + Math.random() * 6,
    height: 9 + Math.random() * 8,
    flip: Math.random() > 0.5,
  }));

  return (
    <div className="splash-overlay" onClick={handleOpen}>
      <canvas ref={canvasRef} className="splash-canvas" />

      <div className="petals-container">
        {petals.map((p) => (
          <div
            key={p.id}
            className="petal"
            style={{
              left: `${p.left}%`,
              background: p.color,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              width: `${p.width}px`,
              height: `${p.height}px`,
              borderRadius: p.flip ? "50% 0 50% 0" : "0 50% 0 50%",
            }}
          />
        ))}
      </div>

      <div className="ornament-br">❧</div>
      <div class="ornament-br">❧</div>

      <div className={`env-wrap ${opened ? "opened" : ""}`}>
        <div className="env-shadow" />
        <div className="env-body">
          <div className="env-inner-v" />
          <div className="env-left" />
          <div className="env-right" />
        </div>

        <div className={`card-inside ${opened ? "show" : ""}`}>
          <p className="c-sub">you are invited to</p>
          <div className="c-div" />
          <p className="c-names">Yebes &amp; Winda</p>
          <div className="c-div" />
          <p className="c-sub">wedding celebration</p>
        </div>

        <div className={`env-flap ${opened ? "open" : ""}`} />
        <div className={`env-flap-shine ${opened ? "hide" : ""}`} />
        <div className={`wax-seal ${opened ? "hide" : ""}`}>💍</div>
      </div>

      <p className="names-out">Yebes &amp; Winda</p>
      <div className="divider-gold">
        <span>✦</span>
      </div>
      <p className={`tap-hint ${opened ? "hide" : ""}`}>✦ tap to open ✦</p>
    </div>
  );
}
