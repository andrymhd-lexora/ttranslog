import React, { useState } from "react";
import {
  MapPin,
  Anchor,
  Plane,
  Truck,
  ShieldCheck,
  Compass,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  Building2,
  Box,
  Layers
} from "lucide-react";
import { Language } from "../types";

interface EasternIndonesiaSectionProps {
  lang: Language;
}

export default function EasternIndonesiaSection({ lang }: EasternIndonesiaSectionProps) {
  const [activeTab, setActiveTab] = useState<string>("papua");

  const regionsData = [
    {
      id: "papua",
      name: "Seluruh Wilayah Papua",
      badge: "SKEMA PRIORITAS PEDALAMAN",
      icon: <Compass className="h-5 w-5 text-[#06b6d4]" />,
      cities: [
        "Jayapura", "Sorong", "Timika (Mimika)", "Merauke", "Nabire",
        "Manokwari", "Biak", "Fakfak", "Kaimana", "Wamena (Jayawijaya)",
        "Boven Digoel", "Asmat", "Paniai", "Puncak Jaya", "Kepulauan Yapen"
      ],
      description:
        "Pengiriman ke Pulau Papua membutuhkan kombinasi kargo laut kontainer/pelayaran nasional dan penerbangan lanjutan (feeder flight) ke area pegunungan & pedalaman. T Trans Logistik berpengalaman menangani pengiriman material proyek, alat berat, barang toko/Sembako, hingga kebutuhan medis secara terencana dan aman.",
      highlights: [
        "Jadwal kapal kargo rutin via Pelabuhan Tanjung Priok / Surabaya ke Jayapura, Sorong, Timika & Merauke.",
        "Dukungan kargo udara komersil (Garuda/Lion) & pesawat freighter penerbangan pedalaman (Wamena, Puncak, Asmat).",
        "Pengamanan ekstra standar kemasan/packing kayu & waterproof wrapping khusus kelembaban tinggi."
      ],
      suitableCargo: "Alat Tambang, Material Konstruksi, Sembako, Farmasi, Generator & Sparepart Industri"
    },
    {
      id: "maluku",
      name: "Maluku & Maluku Utara",
      badge: "RUTE KEPULAUAN LCT & PELAYARAN",
      icon: <Anchor className="h-5 w-5 text-violet-400" />,
      cities: [
        "Ambon", "Ternate", "Tual", "Saumlaki (Kep. Tanimbar)", "Tobelo",
        "Tidore", "Sanana", "Namlea (Pulau Buru)", "Dobo (Kep. Aru)", "Morotai"
      ],
      description:
        "Gugusan pulau di Maluku membutuhkan keandalan transit antar-pulau (inter-island). Kami menyediakan skema pengiriman Port To Door yang memadukan pelayaran kapal kontainer utama dengan armada LCT lokal serta truk pengantar di pelabuhan tujuan.",
      highlights: [
        "Pemberangkatan kapal kargo rutin 2x seminggu dari pelabuhan utama.",
        "Kombinasi layanan kargo udara express untuk komoditas bernilai tinggi & dokumen mendesak.",
        "Tim lapangan di Ambon & Ternate untuk penanganan bongkar muat cepat."
      ],
      suitableCargo: "Hasil Bumi, Peralatan Perikanan, Material Proyek Listrik, Mesin & Barang Toko"
    },
    {
      id: "nusa_tenggara",
      name: "Nusa Tenggara (NTB & NTT)",
      badge: "JALUR PERBATASAN & PARIWISATA",
      icon: <Truck className="h-5 w-5 text-amber-400" />,
      cities: [
        "Kupang", "Mataram", "Labuan Bajo", "Ende", "Maumere",
        "Waingapu (Sumba)", "Atambua (Perbatasan Timor Leste)", "Alor", "Rote Ndao", "Bima", "Sumbawa"
      ],
      description:
        "Mendukung pesatnya pembangunan infrastruktur pariwisata di Labuan Bajo serta pemenuhan rantai pasok wilayah perbatasan negara Atambua. Kami menyediakan pilihan armada penyeberangan Ro-Ro cepat dan kapal kargo kontainer.",
      highlights: [
        "Pengiriman Door to Door langsung ke hotel, resort, dan lokasi proyek infrastruktur.",
        "Opsi truk FTL/LTL penyeberangan Ro-Ro langsung Jakarta-Surabaya-Lombok-Sumbawa-Flores-Kupang.",
        "Pengurusan dokumen pabean & karantina untuk wilayah perbatasan perairan."
      ],
      suitableCargo: "Material Perhotelan, Peralatan Konstruksi, Kendaraan Operasional, Barang Consumer Goods"
    },
    {
      id: "sulawesi",
      name: "Sulawesi (6 Provinsi)",
      badge: "HUB LOGISTIK INDONESIA TENGAH",
      icon: <Building2 className="h-5 w-5 text-emerald-400" />,
      cities: [
        "Makassar", "Manado", "Palu", "Kendari", "Gorontalo",
        "Mamuju", "Bitung", "Luwuk", "Morowali (Kawasan Industri)", "Kolaka", "Toraja", "Baubau"
      ],
      description:
        "Sulawesi merupakan pusat pertumbuhan industri pertambangan dan perdagangan Indonesia Tengah. T Trans Logistik memfasilitasi pengiriman skala Tonase besar untuk kawasan industri seperti Morowali, Kendari, dan Makassar dengan lead time terpangkas.",
      highlights: [
        "Pemberangkatan kapal kontainer FCL / LCL hampir setiap hari dari Tanjung Priok & Surabaya.",
        "Layanan kargo udara komersil express tiba di hari yang sama (Same Day / Next Day Service).",
        "Penanganan khusus kargo industri tambang (smelter) & pengawalan unit armada berat."
      ],
      suitableCargo: "Sparepart Tambang, Mesin Pabrik, Kimia Industri, Bahan Bangunan & Logistik Distribusi"
    },
    {
      id: "daerah_3t",
      name: "Daerah 3T (Tertinggal, Terdepan, Terluar)",
      badge: "SPECIALIST REMOTE AREA DELIVERY",
      icon: <ShieldCheck className="h-5 w-5 text-rose-400" />,
      cities: [
        "Kepulauan Natuna", "Anambas", "Kepulauan Aru", "Miangas", "Sebatik (Perbatasan Malaysia)",
        "Talaud", "Rote Ndao", "Mahakam Ulu", "Sangihe", "Kepulauan Mentawai"
      ],
      description:
        "Mengirimkan barang ke wilayah 3T kerap menghadapi keterbatasan fasilitas pelabuhan, jadwal penyeberangan yang tidak menentu, dan tantangan cuaca ekstrem. T Trans Logistik hadir dengan manajemen risiko berpengalaman untuk memastikan barang sampai ke titik akhir tujuan.",
      highlights: [
        "Survei kelayakan rute & pemetaan akses kargo sebelum pengiriman dilakukan.",
        "Sistem penjejakan terintegrasi dan tim agen lokal penyambung pulau.",
        "Jaminan proteksi asuransi komprehensif untuk keamanan barang bernilai tinggi."
      ],
      suitableCargo: "Peralatan Komunikasi/BTS, Bantuan Logistik Pemerintah, Alat Kesehatan & Listrik Desa"
    },
    {
      id: "sumut_kalimantan",
      name: "Sumatera, Kepri, Babel & Kalimantan",
      badge: "PENJARINGAN KORIDOR BARAT & IKN",
      icon: <Plane className="h-5 w-5 text-cyan-400" />,
      cities: [
        "Medan", "Palembang", "Jambi", "Padang", "Pekanbaru", "Lampung",
        "Batam", "Tanjung Pinang", "Pangkal Pinang", "Belitung",
        "Pontianak", "Banjarmasin", "Balikpapan", "Samarinda", "Tarakan", "IKN Nusantara"
      ],
      description:
        "Menghubungkan koridor barat Nusantara hingga wilayah pembangunan Ibu Kota Nusantara (IKN) Kalimantan. Kami menyediakan fleksibilitas penuh pengiriman darat FTL/LTL lintas Sumatera, ekspedisi laut kontainer Batam/Babel, dan kargo udara cepat.",
      highlights: [
        "Jalur darat FTL / LTL lintas Sumatera dengan sistem kargo jalan tol terintegrasi.",
        "Rute khusus percepatan pengiriman logistik pembangunan IKN Nusantara via Balikpapan/Samarinda.",
        "Prosedur Free Trade Zone (FTZ) Batam & Kepulauan Riau yang rapi dan patuh aturan."
      ],
      suitableCargo: "Logistik IKN, Peralatan Perkebunan Sawit, Komputer/Gadget Batam, General Cargo"
    }
  ];

  const currentRegion = regionsData.find((r) => r.id === activeTab) || regionsData[0];

  const getWaLink = (regionName: string) => {
    const text = `Halo Marketing T Trans Logistik, saya bermaksud berkonsultasi mengenai *PENGIRIMAN KARGO KHUSUS KE ${regionName.toUpperCase()}*.\n\nMohon info opsi moda pengiriman (Laut/Udara/LCT), estimasi ongkir, dan prosedur Port To Door. Terima kasih!`;
    return `https://wa.me/6285830831654?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="eastern-indonesia"
      className="py-20 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Decorative Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="font-sans font-extrabold text-[10px] uppercase tracking-widest">
              {lang === "ID" ? "Jangkauan Nasional & Daerah Remote 3T" : "National & 3T Remote Area Specialist"}
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            {lang === "ID"
              ? "Ahli Kargo Indonesia Timur, Papua, Sulawesi, Maluku & Daerah 3T"
              : "Experts in Eastern Indonesia, Papua, Maluku, Sulawesi & Remote Regions"}
          </h2>
          <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
            {lang === "ID"
              ? "Menjangkau pelosok terdepan, terluar, dan tertinggal di seluruh Nusantara. Menghubungkan pusat bisnis Jakarta dengan garansi pengiriman aman, terukur, dan tepat waktu."
              : "Connecting Jakarta business hubs with Papua, Maluku, Nusa Tenggara, Sulawesi, and 3T remote islands with verified intermodal freight guarantees."}
          </p>
        </div>

        {/* Region Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {regionsData.map((reg) => {
            const isSelected = activeTab === reg.id;
            return (
              <button
                key={reg.id}
                onClick={() => setActiveTab(reg.id)}
                className={`px-4 py-2.5 rounded-2xl font-sans text-xs font-extrabold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? "bg-violet-600 text-white shadow-lg shadow-purple-500/30 border border-violet-400/50 scale-105"
                    : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 hover:border-white/20"
                }`}
              >
                {reg.icon}
                <span>{reg.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Region Detailed Content Card */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[36px] p-6 sm:p-10 space-y-8 shadow-2xl animate-fadeIn">
          
          {/* Top Banner inside Card */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3.5 bg-violet-600/30 border border-violet-400/30 rounded-2xl">
                {currentRegion.icon}
              </div>
              <div>
                <span className="font-sans text-[10px] uppercase font-black tracking-widest text-cyan-300 bg-cyan-950/80 border border-cyan-500/30 px-3 py-0.5 rounded-full">
                  {currentRegion.badge}
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-1">
                  {currentRegion.name}
                </h3>
              </div>
            </div>

            <a
              href={getWaLink(currentRegion.name)}
              target="_blank"
              referrerPolicy="no-referrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-sans font-bold text-xs px-5 py-3 rounded-full shadow-lg shadow-emerald-500/20 transition-all cursor-pointer shrink-0"
            >
              <PhoneCall className="h-4 w-4" />
              <span>{lang === "ID" ? "Konsultasi Rute Ini via WA" : "Inquire Route on WA"}</span>
            </a>
          </div>

          {/* Description & Cargo Suitability Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Description & Coverage Cities */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-2">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-cyan-300 flex items-center gap-2">
                  <Compass className="h-4 w-4" />
                  Edukasi Tantangan & Strategi Logistik Rute
                </h4>
                <p className="font-sans text-sm text-slate-200 leading-relaxed">
                  {currentRegion.description}
                </p>
              </div>

              {/* Key Features Bullet List */}
              <div className="space-y-3 pt-2">
                <h5 className="font-display font-bold text-xs uppercase tracking-wider text-slate-300">
                  Keunggulan Operasional T Trans Logistik:
                </h5>
                <ul className="space-y-2.5">
                  {currentRegion.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suitable Cargo Types */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <Box className="h-3.5 w-3.5" />
                  Komoditas & Muatan Ideal Rute Ini:
                </span>
                <p className="font-sans text-xs text-slate-200 font-medium">
                  {currentRegion.suitableCargo}
                </p>
              </div>
            </div>

            {/* Right Column: Interactive City Badges Grid */}
            <div className="bg-slate-950/60 border border-white/10 rounded-3xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-display font-extrabold text-xs text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-violet-400" />
                  Cakupan Kota & Kabupaten ({currentRegion.cities.length})
                </span>
                <span className="text-[9px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                  PORT TO DOOR
                </span>
              </div>

              <div className="flex flex-wrap gap-2 max-h-[260px] overflow-y-auto pr-1">
                {currentRegion.cities.map((city, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-violet-600/40 border border-white/10 text-slate-200 text-xs px-3 py-1.5 rounded-xl font-medium transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    {city}
                  </span>
                ))}
              </div>

              <div className="pt-2 border-t border-white/10 text-[11px] text-slate-400 leading-tight italic">
                *Kota/Kabupaten lain yang tidak tercantum tetap dilayani melalui skema jalur darat/kapal charter feeder lokal.
              </div>
            </div>

          </div>

        </div>

        {/* 3 Pillars Educational Card Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3 hover:border-violet-400/40 transition-colors">
            <div className="w-10 h-10 rounded-2xl bg-violet-600/30 border border-violet-400/30 text-violet-300 flex items-center justify-center">
              <Layers className="h-5 w-5" />
            </div>
            <h4 className="font-display font-extrabold text-base text-white">
              Sistem Intermodal Terintegrasi
            </h4>
            <p className="font-sans text-xs text-slate-300 leading-relaxed">
              Memadukan moda Kapal Kontainer Pelayaran Nasional, Kapal LCT, Truk FTL/LTL, serta Pesawat Kargo Udara Pedalaman tanpa terputus.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3 hover:border-cyan-400/40 transition-colors">
            <div className="w-10 h-10 rounded-2xl bg-cyan-600/30 border border-cyan-400/30 text-cyan-300 flex items-center justify-center">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h4 className="font-display font-extrabold text-base text-white">
              Pengawalan Lapangan & Legalitas
            </h4>
            <p className="font-sans text-xs text-slate-300 leading-relaxed">
              Tim agen lokal siaga di pelabuhan & bandara tujuan untuk pengurusan karantina, izin melintas, dan pengawalan muatan sensitif.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3 hover:border-emerald-400/40 transition-colors">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600/30 border border-emerald-400/30 text-emerald-300 flex items-center justify-center">
              <Building2 className="h-5 w-5" />
            </div>
            <h4 className="font-display font-extrabold text-base text-white">
              Garansi Port To Door Tepat Waktu
            </h4>
            <p className="font-sans text-xs text-slate-300 leading-relaxed">
              Jaminan pengiriman langsung sampai ke gudang, lokasi tambang, site proyek, atau alamat penerima di seluruh pelosok Indonesia.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
