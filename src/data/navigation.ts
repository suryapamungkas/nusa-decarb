import { NavItem, RegionOption } from '../types';

export const navigationItems: NavItem[] = [
  {
    id: 'what-we-do',
    label: 'Layanan ESG & Transisi',
    featured: {
      tag: 'FOKUS LAYANAN',
      title: 'Akselerasi Transisi Energi Industri 2026',
      description: 'Mendampingi BUMN dan korporasi swasta mewujudkan peta jalan emisi nol bersih yang terukur, compliant, dan kompetitif secara global.',
      cta: 'Konsultasi Sekarang',
      href: '#cta-section',
    },
    sections: [
      {
        title: 'Kategori Layanan',
        items: [
          { title: 'Audit Emisi GHG', description: 'Inventarisasi dan pemetaan emisi Lingkup 1, 2, dan 3 sesuai standar ISO 14064.', href: '#what-we-do' },
          { title: 'Integrasi PLTS Industri', description: 'Kajian kelayakan teknis, engineering, dan integrasi PLTS atap skala megawatt.', href: '#what-we-do' },
          { title: 'Sertifikasi Kredit Karbon', description: 'Registrasi SRN-PPI dan verifikasi unit karbon untuk perdagangan internasional.', href: '#what-we-do' },
          { title: 'Penasihat Finansial Hijau', description: 'Penyusunan Green Financing Framework selaras Taksonomi Hijau Indonesia 2.0.', href: '#what-we-do' },
        ],
      },
      {
        title: 'Solusi Sektoral',
        items: [
          { title: 'Dekarbonisasi Smelter & Mineral', description: 'Transisi captive power menuju PPA EBT dan solar PV hybrid skala besar.', href: '#what-we-do' },
          { title: 'Industri Semen & Kimia', description: 'Pemanfaatan bahan bakar alternatif RDF dan efisiensi termal kiln.', href: '#what-we-do' },
          { title: 'Kawasan Industri Terpadu', description: 'Pengembangan smart microgrid dan elektrifikasi utilitas kawasan terpusat.', href: '#what-we-do' },
          { title: 'Logistik Rantai Dingin Rendah Karbon', description: 'Elektrifikasi armada truk dan pemulihan panas buang fasilitas gudang.', href: '#what-we-do' },
        ],
      },
    ],
  },
  {
    id: 'what-we-think',
    label: 'Wawasan & Regulasi',
    featured: {
      tag: 'LAPORAN TAHUNAN',
      title: 'Indonesia Decarbonization Outlook 2026: Towards Net Zero Emission',
      description: 'Analisis mendalam mengenai dinamika pasar karbon IDX Carbon, taksonomi hijau nasional, dan kepatuhan CBAM Eropa.',
      cta: 'Unduh Laporan Lengkap',
      href: '#insights',
    },
    sections: [
      {
        title: 'Riset & Kebijakan',
        items: [
          { title: 'Tracker Nilai Ekonomi Karbon', description: 'Pemantauan harga unit karbon dan likuiditas transaksi perdagangan IDX Carbon.', href: '#insights' },
          { title: 'Panduan Taksonomi Hijau', description: 'Kriteria teknis kelayakan pembiayaan hijau untuk proyek retrofit industri.', href: '#insights' },
          { title: 'Peta Jalan Transisi BUMN', description: 'Studi komparatif strategi dekarbonisasi lintas klaster BUMN energi dan mineral.', href: '#insights', badge: 'BARU' },
        ],
      },
      {
        title: 'Analisis Sektoral & Global',
        items: [
          { title: 'Outlook Rantai Baterai & Nikel', description: 'Menjawab tuntutan jejak karbon global (EU Battery Regulation) smelter domestik.', href: '#insights' },
          { title: 'Kesiapan Audit CBAM Eropa', description: 'Strategi pelaporan jejak karbon produk manufaktur ekspor ke pasar Uni Eropa.', href: '#insights' },
          { title: 'Integrasi Geotermal Beban Dasar', description: 'Studi keekonomian integrasi panas bumi off-grid bagi klaster manufaktur padat energi.', href: '#insights' },
        ],
      },
    ],
  },
  {
    id: 'who-we-are',
    label: 'Tentang Platform',
    featured: {
      tag: 'KOMITMEN KAMI',
      title: 'Katalisator Menuju Net Zero Emission 2060',
      description: 'Menjembatani korporasi nasional dan BUMN dengan solusi nyata efisiensi energi serta mekanisme pasar karbon kredibel.',
      cta: 'Pelajari Metodologi Kami',
      href: '#quote-section',
    },
    sections: [
      {
        title: 'Tata Kelola & Kelembagaan',
        items: [
          { title: 'Komite Penasihat Ahli', description: 'Dewan pakar independen bidang energi terbarukan, regulasi iklim, dan pasar modal.', href: '#quote-section' },
          { title: 'Metodologi Ilmiah Terverifikasi', description: 'Kerangka kerja penghitungan baseline emisi berbasis IPCC dan standar ISO 14064.', href: '#quote-section' },
          { title: 'Integritas & Anti-Greenwashing', description: 'Prinsip transparansi audit emisi dan kepatuhan pelaporan berkelanjutan.', href: '#quote-section' },
        ],
      },
      {
        title: 'Jaringan Kolaborasi',
        items: [
          { title: 'Kemitraan BUMN & Kementerian', description: 'Sinergi strategis percepatan target Enhanced NDC Indonesia 2030.', href: '#client-spotlight' },
          { title: 'Jejaring LVV Terakreditasi', description: 'Kolaborasi Lembaga Validasi / Verifikasi independen yang diakui KAN & KLHK.', href: '#client-spotlight' },
          { title: 'Pusat Riset Emisi Industri', description: 'Bank data analitik dan pemodelan proyeksi dekarbonisasi klaster manufaktur.', href: '#client-spotlight' },
        ],
      },
    ],
  },
  {
    id: 'careers',
    label: 'Karier & Jejaring',
    featured: {
      tag: 'GABUNG TIM KAMI',
      title: 'Karier Berdampak Nyata bagi Masa Depan Hijau',
      description: 'Wujudkan kontribusi nyata Anda dalam agenda transisi energi dan keberlanjutan terbesar di Asia Tenggara.',
      cta: 'Lihat Posisi Terbuka',
      href: '#cta-section',
    },
    sections: [
      {
        title: 'Jalur Profesional',
        items: [
          { title: 'Analis Karbon & Spesialis MRV', description: 'Pengukuran, pelaporan, dan verifikasi sertifikasi unit karbon industri.', href: '#cta-section' },
          { title: 'Insinyur Sistem EBT & Microgrid', description: 'Perancangan teknis PLTS atap industri, audit termal, dan integrasi grid.', href: '#cta-section' },
          { title: 'Konsultan Finansial Hijau', description: 'Penyusunan kerangka green bond dan obligasi keberlanjutan perbankan.', href: '#cta-section' },
        ],
      },
      {
        title: 'Program Pengembangan',
        items: [
          { title: 'Akademi Transisi Energi', description: 'Pelatihan intensif sertifikasi auditor energi dan verifikator pasar karbon.', href: '#cta-section' },
          { title: 'Fellowship Riset Dekarbonisasi', description: 'Kolaborasi riset kebijakan transisi energi bersama universitas dan industri.', href: '#cta-section' },
          { title: 'Jejaring Praktisi ESG', description: 'Forum pertukaran wawasan eksekutif keberlanjutan lintas manufaktur nasional.', href: '#cta-section' },
        ],
      },
    ],
  },
];

export const regionOptions: RegionOption[] = [
  { code: 'ID', name: 'Indonesia (Bahasa Indonesia)', locale: 'id-ID', flag: '🇮🇩' },
  { code: 'GLOBAL', name: 'Global (English)', locale: 'en-US', flag: '🌐' },
  { code: 'SG', name: 'Singapore (ASEAN Hub)', locale: 'en-SG', flag: '🇸🇬' },
  { code: 'EU', name: 'European Union (CBAM Desk)', locale: 'en-GB', flag: '🇪🇺' },
  { code: 'JP', name: 'Japan (AZEC Partnership)', locale: 'ja-JP', flag: '🇯🇵' },
];
