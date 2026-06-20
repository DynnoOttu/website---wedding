import React, { useState, useEffect } from 'react'
import SectionReveal from './SectionReveal'
import SectionTitle from './SectionTitle'
import VineDivider from './VineDivider'
import { DEFAULT_WISHES } from '../data/weddingData'

const KEY = 'yabes_winda_2026_wishes'

function loadWishes() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : DEFAULT_WISHES
  } catch { return DEFAULT_WISHES }
}

function saveWishes(list) {
  try { localStorage.setItem(KEY, JSON.stringify(list)) } catch {}
}

export default function WishesSection() {
  const [wishes, setWishes]   = useState([])
  const [name, setName]       = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent]       = useState(false)

  useEffect(() => { setWishes(loadWishes()) }, [])

  const submit = () => {
    const n = name.trim(), m = message.trim()
    if (!n || !m) return
    const updated = [{ id: Date.now(), name: n, message: m }, ...wishes]
    setWishes(updated)
    saveWishes(updated)
    setName(''); setMessage('')
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <>
      <section className="relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg,#0e0a0c,#141210,#0e0a0c)' }}>

        {/* White glow top */}
        <div className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{ height: 80, background: 'linear-gradient(180deg,rgba(255,252,248,0.07),transparent)' }} />

        {/* Side flower decos */}
        <div className="absolute left-0 top-1/3 pointer-events-none -translate-x-1/2">
          <div style={{ width: 70, height: 70, borderRadius: '50%', background: 'radial-gradient(circle,rgba(200,150,90,0.10),transparent)' }} />
        </div>
        <div className="absolute right-0 top-2/3 pointer-events-none translate-x-1/2">
          <div style={{ width: 70, height: 70, borderRadius: '50%', background: 'radial-gradient(circle,rgba(200,150,90,0.10),transparent)' }} />
        </div>

        <div className="relative z-10 px-5 pt-10 pb-10">
          <SectionReveal>
            <SectionTitle label="Ucapan & Doa" title="Sampaikan Doamu" />
          </SectionReveal>

          {/* Form */}
          <SectionReveal delay={120} className="reveal-delay-1">
            <div className="card-dark p-5 mt-4">
              <input
                className="wish-input mb-3"
                type="text"
                placeholder="Nama kamu..."
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <textarea
                className="wish-input mb-4"
                rows={4}
                style={{ resize: 'none' }}
                placeholder="Tulis ucapan selamat dan doa terbaikmu untuk mempelai..."
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
              <button
                onClick={submit}
                className="w-full py-3.5 rounded-xl font-montserrat font-medium transition-all duration-200 active:scale-[0.97]"
                style={{
                  background: sent
                    ? 'linear-gradient(135deg,rgba(80,160,80,0.25),rgba(60,120,60,0.25))'
                    : 'linear-gradient(135deg,rgba(255,255,255,0.10),rgba(180,120,60,0.30))',
                  color: sent ? '#90e890' : '#f0dcc0',
                  border: `1px solid ${sent ? 'rgba(90,180,90,0.30)' : 'rgba(255,255,255,0.15)'}`,
                  fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase',
                }}>
                {sent ? '✓ Ucapan Terkirim!' : 'Kirim Ucapan ✦'}
              </button>
            </div>
          </SectionReveal>

          {/* Wish list */}
          <div className="mt-5 flex flex-col gap-3">
            {wishes.map((w, i) => (
              <SectionReveal key={w.id} delay={i * 60}>
                <div className="card-dark p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'linear-gradient(135deg,#fff,#c9956b)', flexShrink: 0 }} />
                    <p className="font-montserrat text-[12px]" style={{ color: '#c9956b' }}>{w.name}</p>
                  </div>
                  <p className="font-montserrat font-light text-[12px] leading-[1.85]" style={{ color: '#a09080' }}>
                    {w.message}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
      <VineDivider flip />
    </>
  )
}
