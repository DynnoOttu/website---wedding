import React, { useState, useEffect, useRef } from "react";
import SectionReveal from "./SectionReveal";
import SectionTitle from "./SectionTitle";
import VineDivider from "./VineDivider";
import { supabase } from "../lib/supabase";

const INITIAL_SHOW = 3;

export default function WishesSection() {
  const [wishes, setWishes] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    fetchWishes();

    const channel = supabase
      .channel("wishes-realtime")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "wishes",
        },
        () => {
          fetchWishes();
        },
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, []);

  async function fetchWishes() {
    setLoading(true);
    const { data } = await supabase
      .from("wishes")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setWishes(data);
    setLoading(false);
  }

  const submit = async () => {
    const n = name.trim(),
      m = message.trim();
    if (!n || !m) return;

    const { error } = await supabase
      .from("wishes")
      .insert({ name: n, message: m });

    if (!error) {
      setName("");
      setMessage("");
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    }
  };

  const displayed = expanded ? wishes : wishes.slice(0, INITIAL_SHOW);
  const hasMore = wishes.length > INITIAL_SHOW;

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

        <div className="relative z-10 px-5 pt-10 pb-10">
          <SectionReveal>
            <SectionTitle label="Ucapan & Doa" title="Sampaikan Doamu" />
          </SectionReveal>

          {/* Form */}
          <SectionReveal delay={120}>
            <div className="card-dark p-5 mt-4">
              <input
                className="wish-input mb-3"
                type="text"
                placeholder="Nama kamu..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <textarea
                className="wish-input mb-4"
                rows={4}
                style={{ resize: "none" }}
                placeholder="Tulis ucapan selamat dan doa terbaikmu..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                onClick={submit}
                className="w-full py-3.5 rounded-xl font-montserrat font-medium transition-all duration-200 active:scale-[0.97]"
                style={{
                  background: sent
                    ? "linear-gradient(135deg,rgba(80,160,80,0.25),rgba(60,120,60,0.25))"
                    : "linear-gradient(135deg,rgba(255,255,255,0.10),rgba(180,120,60,0.30))",
                  color: sent ? "#90e890" : "#f0dcc0",
                  border: `1px solid ${sent ? "rgba(90,180,90,0.30)" : "rgba(255,255,255,0.15)"}`,
                  fontSize: 11,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                }}
              >
                {sent ? "✓ Ucapan Terkirim!" : "Kirim Ucapan ✦"}
              </button>
            </div>
          </SectionReveal>

          {/* Wish list */}
          <div className="mt-5" ref={listRef}>
            {loading ? (
              <div
                className="text-center py-8"
                style={{
                  color: "#5a4a40",
                  fontSize: 12,
                  letterSpacing: "2px",
                  fontFamily: "Montserrat",
                }}
              >
                Memuat ucapan...
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-3">
                  {displayed.map((w, i) => (
                    <SectionReveal key={w.id} delay={i * 60}>
                      <div className="card-dark p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div
                            style={{
                              width: 4,
                              height: 4,
                              borderRadius: "50%",
                              background:
                                "linear-gradient(135deg,#fff,#c9956b)",
                              flexShrink: 0,
                            }}
                          />
                          <p
                            className="font-montserrat text-[12px]"
                            style={{ color: "#c9956b" }}
                          >
                            {w.name}
                          </p>
                        </div>
                        <p
                          className="font-montserrat font-light text-[12px] leading-[1.85]"
                          style={{ color: "#a09080" }}
                        >
                          {w.message}
                        </p>
                      </div>
                    </SectionReveal>
                  ))}
                </div>

                {/* Tombol lihat semua / tutup */}
                {hasMore && (
                  <button
                    onClick={() => setExpanded((prev) => !prev)}
                    className="w-full mt-4 py-3 rounded-xl font-montserrat transition-all duration-200 active:scale-[0.97]"
                    style={{
                      background: "transparent",
                      border: "1px solid rgba(201,149,107,0.25)",
                      color: "#c9956b",
                      fontSize: 11,
                      letterSpacing: "2.5px",
                      textTransform: "uppercase",
                    }}
                  >
                    {expanded
                      ? "↑ Tutup"
                      : `Lihat Semua Ucapan (${wishes.length}) ↓`}
                  </button>
                )}

                {wishes.length === 0 && (
                  <p
                    className="text-center py-6 font-montserrat font-light"
                    style={{
                      color: "#5a4a40",
                      fontSize: 11,
                      letterSpacing: "2px",
                    }}
                  >
                    Jadilah yang pertama mengucapkan doa ✦
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </section>
      <VineDivider flip />
    </>
  );
}
