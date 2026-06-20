# 💍 Undangan Pernikahan Digital — Yabes & Winda

## 🚀 Cara Menjalankan

```bash
# 1. Install dependencies
npm install

# 2. Jalankan dev server
npm run dev

# 3. Build untuk production
npm run build
```

## 📁 Struktur File

```
src/
├── App.jsx                    # Root component
├── main.jsx                   # Entry point
├── index.css                  # Global styles + Tailwind
├── data/
│   └── weddingData.js         # ⭐ Edit data pernikahan di sini
└── components/
    ├── MusicBar.jsx           # Music player sticky top
    ├── HeroSection.jsx        # Landing hero + falling petals
    ├── GallerySection.jsx     # Swiper photo gallery
    ├── CoupleSection.jsx      # Info mempelai
    ├── EventsSection.jsx      # Acara (lamaran, pemberkatan, resepsi)
    ├── FamilySection.jsx      # Keluarga & saksi
    ├── WishesSection.jsx      # Form ucapan (simpan ke localStorage)
    ├── FooterSection.jsx      # Footer
    ├── FlowerSVG.jsx          # SVG flower reusable component
    ├── FallingPetals.jsx      # Animasi kelopak jatuh
    ├── VineDivider.jsx        # SVG vine section divider
    ├── SectionReveal.jsx      # Scroll reveal wrapper
    └── SectionTitle.jsx       # Section title reusable
```

## 🎵 Cara Tambah Musik

1. Letakkan file musik di folder `public/music.mp3`
2. Tekan tombol ▶ di music bar untuk memutar

> Musik tidak autoplay karena kebijakan browser modern (butuh interaksi user dulu).

## 📸 Cara Ganti Foto

Edit `src/data/weddingData.js`:

```js
// Ganti URL ini dengan foto asli (bisa upload ke Cloudinary/Supabase Storage)
export const HERO_BG   = '/foto-hero.jpg'       // Foto hero background
export const GROOM_IMG = '/foto-yabes.jpg'       // Foto pengantin pria
export const BRIDE_IMG = '/foto-winda.jpg'       // Foto pengantin wanita

export const GALLERY = [
  { id: 1, url: '/galeri/foto1.jpg', caption: 'Caption foto' },
  // ...
]
```

Atau simpan foto di folder `public/` lalu panggil dengan path `/nama-foto.jpg`.

## 🎨 Tema Warna

| Warna | Kode | Fungsi |
|-------|------|--------|
| Hitam utama | `#0e0a0c` | Background |
| Emas/Rose Gold | `#c9956b` | Aksen utama |
| Putih gradient | `rgba(255,252,248,x)` | Efek cahaya |
| Teks utama | `#f0e6dc` | Heading & body |

## ✨ Fitur

- ✅ Tema hitam elegan + gradasi putih
- ✅ Bunga SVG animasi di sudut (bukan emoji)
- ✅ Kelopak jatuh CSS animation di hero
- ✅ Vine SVG divider antar section
- ✅ Gallery Swiper auto-slide + swipe
- ✅ Scroll reveal setiap section
- ✅ Gradient teks emas/putih
- ✅ Music player (butuh file `/public/music.mp3`)
- ✅ Form ucapan tersimpan di localStorage
- ✅ Fully responsive mobile-first
