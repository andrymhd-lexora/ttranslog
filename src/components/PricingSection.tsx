import React, { useState } from "react";
import { Ship, Plane, Package, Truck, Scale, Clock, MapPin, ShieldCheck, ArrowRight, CheckCircle2, PhoneCall, AlertTriangle, FileText, Anchor, Info, HelpCircle, Box, Sparkles } from "lucide-react";
import { TranslationDict, Language } from "../types";
import { getCargoRules } from "../data";
import TariffTableBrowser from "./TariffTableBrowser";
import VolumetricFormulaModal from "./VolumetricFormulaModal";

interface PricingSectionProps {
  lang: Language;
  t: TranslationDict;
}

export default function PricingSection({ lang, t }: PricingSectionProps) {
  const cargoRules = getCargoRules(lang);
  const [selectedTab, setSelectedTab] = useState<string>("all");
  const [isFormulaModalOpen, setIsFormulaModalOpen] = useState<boolean>(false);

  const getIcon = (id: string) => {
    switch (id) {
      case "sea_land":
        return <Ship className="h-6 w-6 text-white" />;
      case "air_commercial":
        return <Plane className="h-6 w-6 text-white" />;
      case "air_freighter":
        return <Plane className="h-6 w-6 text-white" />;
      case "air_non_commercial":
        return <Package className="h-6 w-6 text-white" />;
      default:
        return <Truck className="h-6 w-6 text-white" />;
    }
  };

  const getWaLink = (modeTitle: string) => {
    const text = `Halo Marketing T Trans Logistik, saya ingin bertanya dan berkonsultasi mengenai *KETENTUAN ${modeTitle.toUpperCase()} (PORT TO DOOR)*.\n\nMohon bantuan estimasi ongkir dan jadwal penjemputan barang. Terima kasih!`;
    return `https://wa.me/6285830831654?text=${encodeURIComponent(text)}`;
  };

  const filteredRules = selectedTab === "all"
    ? cargoRules
    : cargoRules.filter((item) => item.id === selectedTab);

  return (
    <section
      id="pricing"
      className="py-20 bg-[#f8fafc] dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-[#7c3aed] dark:text-cyan-400 border border-violet-200/50">
            <FileText className="h-3.5 w-3.5" />
            <span className="font-sans font-bold text-[10px] uppercase tracking-wider">
              {lang === "ID" ? "Ketentuan Resmi Forwarding" : "Official Freight Terms"}
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            {lang === "ID" ? "Ketentuan Operasional Tiap Moda Kargo" : "Operational Terms by Freight Mode"}
          </h2>
          <p className="font-sans text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === "ID"
              ? "Informasi resmi spesifikasi, batas dimensi, jadwal penerbangan/kapal, dan skema Port To Door PT Tungkal Trans Indonesia."
              : "Official specifications, dimension limits, flight/ship schedules, and Port To Door rules for PT Tungkal Trans Indonesia."}
          </p>
        </div>

        {/* Volumetric Formula Callout Card Banner */}
        <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 text-white rounded-3xl p-6 sm:p-7 shadow-xl shadow-purple-500/10 flex flex-col md:flex-row items-center justify-between gap-5 border border-purple-400/30">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl shrink-0 border border-white/20">
              <Box className="h-7 w-7 text-cyan-300" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="bg-cyan-400/20 text-cyan-200 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border border-cyan-300/30">
                  PANDUAN VOLUMETRIK
                </span>
                <span className="text-white/80 text-xs font-mono">
                  (PxLxT ÷ 4.000 / 5.000 / 6.000)
                </span>
              </div>
              <h3 className="font-display font-extrabold text-base sm:text-lg text-white">
                Mengapa Berat Volumetrik Berbeda dari Berat Timbangan Fisik?
              </h3>
              <p className="text-xs text-purple-100 max-w-2xl leading-relaxed">
                Pengiriman kargo menggunakan nilai terbesar antara berat timbangan aktual dan berat volume kubikasi barang. Pelajari rumus lengkap dan simulasi contohnya di sini.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsFormulaModalOpen(true)}
            className="inline-flex items-center gap-2 bg-white text-purple-900 hover:bg-cyan-300 hover:text-slate-900 font-sans font-extrabold text-xs px-5 py-3 rounded-full transition-all shadow-lg shrink-0 cursor-pointer uppercase tracking-wider"
          >
            <HelpCircle className="h-4 w-4 text-purple-600" />
            <span>Pelajari Rumus Volum</span>
          </button>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setSelectedTab("all")}
            className={`px-4 py-2 rounded-full font-sans text-xs font-bold transition-all cursor-pointer ${
              selectedTab === "all"
                ? "bg-[#7c3aed] text-white shadow-lg shadow-purple-500/20"
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            {lang === "ID" ? "Semua Moda (4 Ketentuan)" : "All Freight Modes"}
          </button>
          {cargoRules.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setSelectedTab(mode.id)}
              className={`px-4 py-2 rounded-full font-sans text-xs font-bold transition-all cursor-pointer ${
                selectedTab === mode.id
                  ? "bg-[#7c3aed] text-white shadow-lg shadow-purple-500/20"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {mode.title}
            </button>
          ))}
        </div>

        {/* Grid / Stack of Cargo Terms */}
        <div className="space-y-12">
          {filteredRules.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-[32px] overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none transition-all duration-300"
            >
              {/* Card Banner Header */}
              <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute right-[-20px] top-[-20px] opacity-10 pointer-events-none">
                  {getIcon(item.id)}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-violet-600/80 rounded-2xl shadow-md backdrop-blur-sm">
                      {getIcon(item.id)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-sans text-[10px] uppercase font-black tracking-widest text-cyan-400 bg-cyan-950/80 border border-cyan-500/30 px-3 py-0.5 rounded-full">
                          KETENTUAN RESMI
                        </span>
                        <span className="font-sans text-[10px] uppercase font-bold text-slate-300 bg-white/10 px-3 py-0.5 rounded-full">
                          PORT TO DOOR
                        </span>
                      </div>
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-1">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs text-slate-300 mt-0.5 max-w-2xl">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <a
                    href={getWaLink(item.title)}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-sans font-bold text-xs px-5 py-2.5 rounded-full shadow-lg transition-all cursor-pointer shrink-0"
                  >
                    <PhoneCall className="h-3.5 w-3.5" />
                    <span>{lang === "ID" ? "Hubungi Marketing" : "Contact Marketing"}</span>
                  </a>
                </div>

                {/* Key Summary Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-white/10 text-xs">
                  <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">{lang === "ID" ? "Min. Berat" : "Min. Weight"}</span>
                    <span className="font-bold text-cyan-300 text-sm mt-0.5 block">{item.minWeight}</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">{lang === "ID" ? "Awal Lead Time" : "Lead Time Start"}</span>
                    <span className="font-bold text-slate-100 text-xs mt-0.5 block">{item.leadTime}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsFormulaModalOpen(true)}
                    className="bg-white/5 hover:bg-white/10 border border-white/10 p-3 rounded-xl text-left transition-colors cursor-pointer group"
                  >
                    <span className="text-slate-400 font-bold block text-[10px] uppercase flex items-center justify-between">
                      <span>{lang === "ID" ? "Rumus Dimensi" : "Dimension Formula"}</span>
                      <Info className="h-3 w-3 text-cyan-400 opacity-60 group-hover:opacity-100" />
                    </span>
                    <span className="font-mono font-bold text-slate-200 text-[11px] mt-0.5 block">{item.dimCalc}</span>
                  </button>
                  <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">{lang === "ID" ? "Max. Dimensi" : "Max Dimensions"}</span>
                    <span className="font-bold text-slate-100 text-[11px] mt-0.5 block">{item.maxDim}</span>
                  </div>
                </div>
              </div>

              {/* Numbered Rules List Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-display font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
                    {lang === "ID" ? "Catatan Ketentuan (Poin 1 s/d " + item.rules.length + ")" : "Terms Notes (Points 1 to " + item.rules.length + ")"}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    PT Tungkal Trans Indonesia
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.rules.map((rule) => (
                    <div
                      key={rule.num}
                      className="flex gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 hover:border-violet-200 dark:hover:border-slate-700 transition-colors"
                    >
                      {/* Numbered Circular Badge */}
                      <div className="w-8 h-8 rounded-xl bg-violet-600 text-white font-display font-extrabold text-sm flex items-center justify-center shrink-0 shadow-sm">
                        {rule.num}
                      </div>

                      <div className="space-y-1">
                        <span className="font-sans font-bold text-xs text-slate-900 dark:text-slate-100 block">
                          {rule.label}
                        </span>
                        <p className="font-sans text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                          {rule.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Special Note Callout if applicable */}
                {item.id === "air_commercial" && (
                  <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 flex items-start gap-3 text-xs text-amber-900 dark:text-amber-200">
                    <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block">Penting untuk Moda Udara Komersil:</span>
                      <p className="mt-0.5 leading-relaxed">
                        Surcharge komoditi khusus seperti Live Animal/Human Remain (+100%) dan Dangerous Goods (+200%) berlaku diluar biaya shipdeck. Mohon lakukan verifikasi jenis muatan ke tim Marketing sebelum penyerahan barang.
                      </p>
                    </div>
                  </div>
                )}

                {/* Bottom Card Action Footer */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                    <span>{lang === "ID" ? "Layanan Port To Door: Pengantaran dari bandara/pelabuhan asal sampai alamat tujuan dalam kota." : "Port To Door service: Delivery from origin airport/port up to recipient address."}</span>
                  </div>

                  <a
                    href={getWaLink(item.title)}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#7c3aed] dark:text-cyan-400 hover:underline cursor-pointer"
                  >
                    <span>{lang === "ID" ? "Konsultasi Ongkir & Jadwal via WA" : "Inquire Rates & Schedule on WA"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Rate Matrix Table from Excel Datasets */}
        <TariffTableBrowser lang={lang} />

        {/* Company Core Values Banner (Matching bottom of reference flyers) */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-b border-white/10 pb-8">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-violet-600/30 border border-violet-400/30 text-cyan-300 flex items-center justify-center mx-auto">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4 className="font-display font-extrabold text-xs uppercase tracking-wider text-slate-100">
                AMAN & TERPERCAYA
              </h4>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-violet-600/30 border border-violet-400/30 text-cyan-300 flex items-center justify-center mx-auto">
                <Clock className="h-6 w-6" />
              </div>
              <h4 className="font-display font-extrabold text-xs uppercase tracking-wider text-slate-100">
                CEPAT & TEPAT WAKTU
              </h4>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-violet-600/30 border border-violet-400/30 text-cyan-300 flex items-center justify-center mx-auto">
                <MapPin className="h-6 w-6" />
              </div>
              <h4 className="font-display font-extrabold text-xs uppercase tracking-wider text-slate-100">
                JARINGAN LUAS
              </h4>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-violet-600/30 border border-violet-400/30 text-cyan-300 flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h4 className="font-display font-extrabold text-xs uppercase tracking-wider text-slate-100">
                SOLUSI LOGISTIK TERBAIK
              </h4>
            </div>
          </div>

          <div className="pt-6 text-center space-y-2">
            <p className="font-display font-black text-amber-400 text-sm uppercase tracking-widest">
              CEPAT • TEPAT • AMAN • TERPERCAYA
            </p>
            <p className="text-xs text-slate-300 font-sans">
              HUBUNGI MARKETING KAMI UNTUK INFORMASI LEBIH LANJUT: <a href="https://wa.me/6285830831654" target="_blank" className="font-bold text-cyan-300 underline">+62 858-3083-1654</a>
            </p>
          </div>
        </div>

      </div>

      {/* Volumetric Formula Explanation Modal */}
      <VolumetricFormulaModal
        isOpen={isFormulaModalOpen}
        onClose={() => setIsFormulaModalOpen(false)}
        lang={lang}
      />
    </section>
  );
}


