# NusaDecarb 🌿

> **Platform Riset & Konsultasi Transisi Energi, Dekarbonisasi Industri, dan Kepatuhan Regulasi Iklim Indonesia**

[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](https://opensource.org/licenses/MIT)
[![React 19](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF.svg)](https://vitejs.dev/)
[![WCAG AAA](https://img.shields.io/badge/Accessibility-WCAG_AAA-brightgreen.svg)](https://www.w3.org/WAI/standards-guidelines/wcag/)

**NusaDecarb** adalah platform web modern kelas enterprise (*inspired by Accenture*) yang dirancang khusus untuk memfasilitasi riset strategis, audit emisi Gas Rumah Kaca (GRK), kepatuhan Taksonomi Hijau Indonesia 2.0, serta monetisasi bursa karbon (*IDX Carbon / SRN-PPI*) bagi BUMN dan korporasi manufaktur nasional menuju target **Net Zero Emission (NZE) 2060**.

---

## ✨ Fitur Unggulan

### 1. 🧭 Navigasi Mega-Menu Presisi Tengah (*Centered Mega-Menu*)
* Mega-menu dropdown enterprise yang berposisi **presisi di tengah layar** (*symmetrical layout*), mencegah elemen terpotong pada berbagai resolusi layar.
* Dilengkapi indikator menu aktif (*active navigation breadcrumb*), *subtle backdrop dimming*, dan pencarian instan minimalis.

### 2. 🔄 Kartu Interaktif Animasi Switch (*Accenture-Style Hover*)
* **Bagian Wawasan Riset & Studi Kasus**: Secara default hanya menampilkan judul, tag kategori, dan gambar industri resolusi tinggi.
* **Hover Switch**: Ketika kursor diarahkan ke gambar, gambar bertransisi memudar secara halus dan langsung digantikan oleh **teks penjelasan lengkap, metrik dampak emisi riil, serta tombol ekspansi (`Expand >`)**.

### 3. 🌌 Kanvas Partikel Jejaring Energi Bersih (*Interactive Particle Canvas*)
* Latar belakang interaktif berbasis HTML5 Canvas dengan simulasi partikel konstelasi dual-tone (Emerald Green `#10B981`, Mint Green `#6EE7B7`, dan Putih Bersih `#FFFFFF`) dengan efek repulsi kursor dinamis.

### 4. 🔍 Pencarian Pintar & Dialek Regulasi (*Live Search Modal*)
* Dialog modal pencarian instan berbasis keyboard (`Ctrl+K` / `Cmd+K` atau klik tombol *Search*).
* Memfilter artikel taksonomi, pasar karbon, dan studi kasus industri secara *real-time*.

### 5. 🎨 Palet Hijau Zamrud & Putih Bersih (WCAG AAA)
* Skema warna ramah lingkungan: **Emerald Green**, **Mint**, **Crisp White**, dan latar belakang *deep obsidian green* (`#050A07`).
* Memenuhi rasio kontras ketat **WCAG AAA** (kontras teks hingga **14:1**) tanpa adanya tabrakan warna atau teks kabur.

### 6. 🏭 Aset Fotografi Industri Lokal Berkualitas Tinggi
* Seluruh foto (PLTP Geotermal Nusantara, Smelter Nikel EBT, Pabrik Semen RDF, Smart Microgrid, dan Lantai Bursa IDX Carbon) tersimpan secara lokal di direktori `public/images/` untuk pemuatan instan tanpa dependensi pihak ketiga.

---

## 🛠️ Teknologi & Dependensi

* **Frontend Framework**: [React 19](https://react.dev/)
* **Bahasa**: [TypeScript 5.7](https://www.typescriptlang.org/)
* **Build Tool & Bundler**: [Vite 6](https://vitejs.dev/)
* **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) & [PostCSS](https://postcss.org/)
* **Ikon**: [Lucide React](https://lucide.dev/)
* **Animasi**: CSS Transitions & HTML5 Canvas API

---

## 🚀 Memulai Proyek (*Quick Start*)

### Prasyarat
Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) (versi 18 ke atas) dan `npm`.

### Instalasi & Menjalankan Lokal

```bash
# 1. Klon repositori ini
git clone https://github.com/suryapamungkas/nusadecarb.git

# 2. Masuk ke direktori proyek
cd nusadecarb

# 3. Instal dependensi
npm install

# 4. Jalankan server pengembangan lokal
npm run dev
```

Buka peramban Anda di `http://localhost:3000` (atau port yang tertera pada terminal).

### Build Produksi

```bash
# Kompilasi TypeScript dan bundel Vite
npm run build

# Meninjau hasil build lokal
npm run preview
```

Hasil build yang teroptimasi akan disimpan di folder `dist/`.

---

## 🌐 Panduan Deploy ke GitHub & Hosting

### 1. Push ke Repositori GitHub Baru

```bash
# Inisialisasi git (jika belum)
git init

# Tambahkan semua file
git add .

# Buat commit perdana
git commit -m "feat: Initial commit for NusaDecarb platform"

# Buat branch utama
git branch -M main

# Hubungkan dengan remote repository GitHub Anda
git remote add origin https://github.com/suryapamungkas/nusadecarb.git

# Push ke GitHub
git push -u origin main
```

### 2. Deploy ke Vercel (Disarankan)
1. Buka [vercel.com](https://vercel.com/) dan login menggunakan akun GitHub Anda.
2. Klik **Add New Project**, pilih repositori `nusadecarb`.
3. Vercel akan otomatis mendeteksi konfigurasi **Vite**.
4. Klik **Deploy**. Selesai dalam ~30 detik!

### 3. Deploy ke GitHub Pages
Jika ingin menggunakan GitHub Pages:
1. Pastikan di `vite.config.ts` ditambahkan base path (jika tidak menggunakan custom domain):
   ```ts
   // vite.config.ts
   export default defineConfig({
     base: '/nusadecarb/',
     plugins: [react()],
   })
   ```
2. Anda dapat memanfaatkan GitHub Actions untuk otomatisasi build dan deploy ke branch `gh-pages`.

---

## 📁 Struktur Proyek

```text
nusadecarb/
├── public/
│   └── images/               # Aset fotografi industri lokal
│       ├── clean_tech_energy.jpg
│       ├── smelter_solar_decarb.jpg
│       ├── green_cement_rdf.jpg
│       ├── smart_microgrid_park.jpg
│       ├── geothermal_power_plant.jpg
│       ├── carbon_exchange_trading.jpg
│       └── esg_director_portrait.jpg
├── src/
│   ├── components/           # Komponen UI modular
│   │   ├── Logo.tsx          # Logo SVG kustom NusaDecarb
│   │   ├── Navbar.tsx        # Header & mega-menu presisi tengah
│   │   ├── Hero.tsx          # Hero section & pilar transisi
│   │   ├── MetricsBar.tsx    # Indikator skala dampak dekarbonisasi
│   │   ├── InsightsGrid.tsx  # Grid kartu interaktif switch hover
│   │   ├── InsightDrawer.tsx # Drawer modal telaah riset mendalam
│   │   ├── LeadershipQuote.tsx # Kutipan kepemimpinan ESG
│   │   ├── ClientSpotlight.tsx # Studi kasus industri riil
│   │   ├── NewsSlider.tsx    # Warta berita & bursa karbon
│   │   ├── EnterpriseCTA.tsx # Ajakan konsultasi peta jalan NZE
│   │   ├── Footer.tsx        # Footer sitemap & kredit author
│   │   ├── SearchModal.tsx   # Modal pencarian instan
│   │   ├── LanguageModal.tsx # Modal konfigurasi wilayah & taksonomi
│   │   └── ParticleCanvas.tsx# Kanvas partikel konstelasi
│   ├── data/                 # Data artikel, navigasi, berita, dan mitra
│   ├── types/                # Definisi TypeScript
│   ├── App.tsx               # Root component
│   ├── main.tsx              # Entry point aplikasi
│   └── index.css             # Tailwind layers & utilities
├── index.html                # Entry HTML & SEO metadata
├── tailwind.config.js        # Konfigurasi palet warna hijau zamrud
├── package.json              # Metadata proyek & dependensi
├── LICENSE                   # Lisensi MIT
└── README.md                 # Dokumentasi proyek
```

---

## 👤 Author & Pengembang

Dikembangkan dengan dedikasi oleh:

* **Surya Pamungkas** ([@suryapamungkas](https://github.com/suryapamungkas))

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah lisensi [MIT License](LICENSE) © 2026 **suryapamungkas**.
