import React, { useState } from "react";
import { Calculator, MapPin, Scale, HelpCircle, ArrowRight, Star, MessageSquare, LogIn } from "lucide-react";
import { Language, TranslationDict } from "../types";

interface HeroProps {
  lang: Language;
  t: TranslationDict;
}

const CITIES = [
  "Jakarta",
  "Jambi",
  "Surabaya",
  "Medan",
  "Denpasar",
  "Makassar",
  "Balikpapan",
  "Palembang"
];

// Destination cities list for auto-complete or selection
const POPULAR_DESTINATIONS = [
  "Jambi",
  "Surabaya",
  "Medan",
  "Denpasar",
  "Makassar",
  "Balikpapan",
  "Palembang",
  "Pontianak",
  "Pekanbaru",
  "Banda Aceh",
  "Padang",
  "Banjarmasin",
  "Manado",
  "Ambon",
  "Jayapura",
  "Kota Lainnya..."
];

export default function Hero({ lang, t }: HeroProps) {
  // Calculator States
  const origin = "Jakarta"; // Fixed origin as per requirement
  const [destination, setDestination] = useState("Jambi");
  const [customDestination, setCustomDestination] = useState("");
  const [weight, setWeight] = useState<number | "">(50);
  const [length, setLength] = useState<number | "">("");
  const [width, setWidth] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [mode, setMode] = useState<"sea_land" | "air_commercial" | "air_freighter" | "air_non_commercial">("sea_land");
  const [airline, setAirline] = useState<"general" | "lion">("general");

  const [calcResult, setCalcResult] = useState<{
    actualWeight: number;
    volumetricWeight: number;
    chargeableWeight: number;
    divider: number;
    minWeight: number;
    isVolumetric: boolean;
    modeTitle: string;
    finalDest: string;
  } | null>(null);

  const calculateRates = (e: React.FormEvent) => {
    e.preventDefault();

    const actual = Number(weight) || 0;
    const l = Number(length) || 0;
    const w = Number(width) || 0;
    const h = Number(height) || 0;

    let divider = 4000;
    let minWeight = 50;
    let modeTitle = "Kargo Darat & Laut";

    if (mode === "sea_land") {
      divider = 4000;
      minWeight = 50;
      modeTitle = "Moda Laut & Darat (Divider 4.000)";
    } else if (mode === "air_commercial") {
      divider = airline === "lion" ? 5000 : 6000;
      minWeight = 10;
      modeTitle = `Udara Komersil ${airline === "lion" ? "(Lion Air - Divider 5.000)" : "(Divider 6.000)"}`;
    } else if (mode === "air_freighter") {
      divider = 6000;
      minWeight = 25;
      modeTitle = "Udara Freighter Flight (Divider 6.000)";
    } else if (mode === "air_non_commercial") {
      divider = 6000;
      minWeight = 50;
      modeTitle = "Udara Non-Komersil (Divider 6.000)";
    }

    let volumetric = 0;
    if (l > 0 && w > 0 && h > 0) {
      volumetric = Math.round(((l * w * h) / divider) * 10) / 10;
    }

    const isVolumetric = volumetric > actual;
    const highestWeight = Math.max(actual, volumetric);
    const chargeableWeight = Math.max(highestWeight, minWeight);

    const finalDest = destination === "Kota Lainnya..." && customDestination ? customDestination : destination;

    setCalcResult({
      actualWeight: actual,
      volumetricWeight: volumetric,
      chargeableWeight,
      divider,
      minWeight,
      isVolumetric,
      modeTitle,
      finalDest
    });
  };

  const generateWaLink = () => {
    if (!calcResult) return "";
    const dimText = length && width && height ? `${length} x ${width} x ${height} cm` : "Tidak Diisi";
    
    const text = `Halo Marketing T Trans Logistik, saya ingin konfirmasi tarif ongkir & ketersediaan armada:\n\n` +
      `- *Kota Asal*: Jakarta\n` +
      `- *Kota Tujuan*: ${calcResult.finalDest}\n` +
      `- *Moda Kargo*: ${calcResult.modeTitle}\n` +
      `- *Berat Timbangan*: ${calcResult.actualWeight} Kg\n` +
      `- *Dimensi (PxLxT)*: ${dimText}\n` +
      `- *Berat Volumetric*: ${calcResult.volumetricWeight} Kg (Divider ${calcResult.divider})\n` +
      `- *Berat Kena Charge*: ${calcResult.chargeableWeight} Kg (Min. ${calcResult.minWeight} Kg)\n\n` +
      `Mohon info total estimasi biaya dan jadwal penjemputan barang. Terima kasih.`;
      
    return `https://wa.me/6285830831654?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#f8fafc] dark:bg-slate-950 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Graphic Ornaments - Natural Tones Theme */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7c3aed]/5 rounded-full filter blur-3xl -z-10 translate-x-12 -translate-y-12"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#06b6d4]/5 rounded-full filter blur-3xl -z-10 -translate-x-12 translate-y-12"></div>
      
      {/* Organic Curved Wave Overlay */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none">
        <svg className="w-full text-white dark:text-slate-900 transition-colors" viewBox="0 0 1440 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Copywriting) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-cyan-400 border border-violet-200 dark:border-violet-900/50">
              <span className="w-2 h-2 rounded-full bg-violet-600 dark:bg-cyan-400 animate-pulse"></span>
              <span className="font-sans font-bold text-xs uppercase tracking-wider">PT Tungkal Trans Indonesia</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl xl:text-6xl text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                {t.heroTitle}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#06b6d4]">
                  {t.heroHighlight}
                </span>
              </h1>
              <p className="font-sans text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                {t.heroSubtitle}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 bg-[#7c3aed] hover:bg-purple-700 text-white font-sans font-bold px-8 py-4 rounded-full shadow-lg shadow-purple-200/50 dark:shadow-none hover:shadow-xl hover:scale-[1.02] transition-all duration-250 text-base"
              >
                <span>{t.heroCtaCalc}</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="https://ttranslog.base44.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 font-sans font-bold px-8 py-4 rounded-full shadow-sm hover:scale-[1.02] transition-all duration-250 text-base cursor-pointer"
              >
                <LogIn className="h-5 w-5 text-violet-600 dark:text-cyan-400" />
                <span>Login</span>
              </a>
            </div>

            {/* Social Stats */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-2">
                  <div className="h-9 w-9 rounded-full border-2 border-white dark:border-slate-900 bg-slate-300 flex items-center justify-center text-xs font-bold font-sans">A</div>
                  <div className="h-9 w-9 rounded-full border-2 border-white dark:border-slate-900 bg-slate-400 flex items-center justify-center text-xs font-bold font-sans">B</div>
                  <div className="h-9 w-9 rounded-full border-2 border-white dark:border-slate-900 bg-violet-600 flex items-center justify-center text-xs font-bold text-white font-sans">+</div>
                </div>
                <div>
                  <div className="font-display font-bold text-slate-900 dark:text-white text-sm">
                    {t.heroActiveClients}
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="font-sans text-xs text-slate-500 dark:text-slate-400 ml-1">(4.9/5 Rating)</span>
                  </div>
                </div>
              </div>

              <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>

              <div>
                <div className="font-display font-extrabold text-violet-600 dark:text-cyan-400 text-lg leading-tight">
                  99.4%
                </div>
                <div className="font-sans text-xs text-slate-500 dark:text-slate-400">
                  {t.heroSatisfaction}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Calculator Card) */}
          <div id="calculator" className="lg:col-span-5">
            <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-[36px] shadow-2xl shadow-slate-200/50 dark:shadow-none p-6 sm:p-8 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7c3aed]/5 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-cyan-400 rounded-2xl">
                    <Calculator className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white">
                      {lang === "ID" ? "Kalkulator Volumetrik & Berat" : "Weight & Volumetric Calculator"}
                    </h3>
                    <p className="font-sans text-xs text-slate-500 dark:text-slate-400">
                      {lang === "ID" ? "Skema Resmi Port To Door (Asal: Jakarta)" : "Official Port To Door Scheme (Origin: Jakarta)"}
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={calculateRates} className="space-y-4">
                {/* Origin & Destination */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Origin - Fixed to Jakarta */}
                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-violet-600 dark:text-cyan-400" />
                      {lang === "ID" ? "Kota Asal (Terkunci)" : "Origin City (Fixed)"}
                    </label>
                    <div className="w-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 font-sans font-bold text-xs text-slate-800 dark:text-slate-200 flex items-center justify-between">
                      <span>JAKARTA (CGW)</span>
                      <span className="text-[10px] bg-violet-600 text-white font-extrabold px-2 py-0.5 rounded-full">FIXED</span>
                    </div>
                  </div>

                  {/* Destination */}
                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-cyan-500" />
                      {lang === "ID" ? "Kota Tujuan" : "Destination City"}
                    </label>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 font-sans font-semibold text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                    >
                      {POPULAR_DESTINATIONS.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Custom Destination input if Kota Lainnya selected */}
                {destination === "Kota Lainnya..." && (
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase">
                      {lang === "ID" ? "Tuliskan Nama Kota / Kecamatan Tujuan:" : "Type Destination City/District:"}
                    </label>
                    <input
                      type="text"
                      value={customDestination}
                      onChange={(e) => setCustomDestination(e.target.value)}
                      placeholder="Contoh: Timika, Sorong, Muara Tebo, dll."
                      className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-sans text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-violet-500"
                      required
                    />
                  </div>
                )}

                {/* Freight Mode Selectors */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    {lang === "ID" ? "Pilih Moda Kargo:" : "Select Cargo Mode:"}
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => setMode("sea_land")}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        mode === "sea_land"
                          ? "bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-500/10"
                          : "bg-slate-50 dark:bg-slate-800/30 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      <div className="font-extrabold text-[11px]">Laut & Darat</div>
                      <div className="text-[10px] opacity-80">Divider: 4.000 | Min: 50kg</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setMode("air_commercial")}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        mode === "air_commercial"
                          ? "bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-500/10"
                          : "bg-slate-50 dark:bg-slate-800/30 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      <div className="font-extrabold text-[11px]">Udara Komersil</div>
                      <div className="text-[10px] opacity-80">Divider: 6.000 | Min: 10kg</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setMode("air_freighter")}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        mode === "air_freighter"
                          ? "bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-500/10"
                          : "bg-slate-50 dark:bg-slate-800/30 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      <div className="font-extrabold text-[11px]">Udara Freighter</div>
                      <div className="text-[10px] opacity-80">Divider: 6.000 | Min: 25kg</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setMode("air_non_commercial")}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        mode === "air_non_commercial"
                          ? "bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-500/10"
                          : "bg-slate-50 dark:bg-slate-800/30 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      <div className="font-extrabold text-[11px]">Udara Non-Komersil</div>
                      <div className="text-[10px] opacity-80">Divider: 6.000 | Min: 50kg</div>
                    </button>
                  </div>
                </div>

                {/* Sub-option for Commercial Air (Lion Air vs General) */}
                {mode === "air_commercial" && (
                  <div className="p-3 bg-violet-50 dark:bg-violet-950/40 rounded-xl border border-violet-200 dark:border-violet-900/50 flex items-center justify-between text-xs">
                    <span className="font-bold text-violet-900 dark:text-violet-200 text-[11px]">
                      Maskapai Khusus Lion Air?
                    </span>
                    <div className="flex gap-2 font-bold text-[10px]">
                      <button
                        type="button"
                        onClick={() => setAirline("general")}
                        className={`px-3 py-1 rounded-lg border ${
                          airline === "general"
                            ? "bg-violet-600 text-white border-violet-600"
                            : "bg-white text-slate-700 border-slate-200"
                        }`}
                      >
                        Lainnya (6.000)
                      </button>
                      <button
                        type="button"
                        onClick={() => setAirline("lion")}
                        className={`px-3 py-1 rounded-lg border ${
                          airline === "lion"
                            ? "bg-violet-600 text-white border-violet-600"
                            : "bg-white text-slate-700 border-slate-200"
                        }`}
                      >
                        Lion Air (5.000)
                      </button>
                    </div>
                  </div>
                )}

                {/* Weight Input */}
                <div className="space-y-1">
                  <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1">
                    <Scale className="h-3.5 w-3.5 text-violet-600 dark:text-cyan-400" />
                    {lang === "ID" ? "Berat Timbangan Aktual (Kg)" : "Actual Weight (Kg)"}
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value === "" ? "" : Number(e.target.value))}
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 font-sans font-bold text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                    placeholder="Masukkan berat barang (kg)"
                    required
                  />
                </div>

                {/* Volumetric Fields */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      {lang === "ID" ? "Dimensi Kemasan (Opsional)" : "Package Dimensions (Optional)"}
                    </label>
                    <span className="text-[10px] text-violet-600 dark:text-cyan-400 font-extrabold">P x L x T (cm)</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <input
                      type="number"
                      placeholder="Panjang (cm)"
                      value={length}
                      onChange={(e) => setLength(e.target.value === "" ? "" : Number(e.target.value))}
                      className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-2 py-2 text-center text-xs font-sans text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-violet-500"
                    />
                    <input
                      type="number"
                      placeholder="Lebar (cm)"
                      value={width}
                      onChange={(e) => setWidth(e.target.value === "" ? "" : Number(e.target.value))}
                      className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-2 py-2 text-center text-xs font-sans text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-violet-500"
                    />
                    <input
                      type="number"
                      placeholder="Tinggi (cm)"
                      value={height}
                      onChange={(e) => setHeight(e.target.value === "" ? "" : Number(e.target.value))}
                      className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-2 py-2 text-center text-xs font-sans text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-violet-500"
                    />
                  </div>
                </div>

                {/* Action button */}
                <button
                  type="submit"
                  className="w-full bg-[#7c3aed] hover:bg-purple-700 text-white font-sans font-extrabold py-3 rounded-full transition-all shadow-md shadow-violet-500/10 hover:shadow-lg text-xs tracking-wide cursor-pointer uppercase"
                >
                  {lang === "ID" ? "Hitung Volumetrik & Berat Kena Charge" : "Calculate Volumetric & Charge Weight"}
                </button>
              </form>

              {/* Calc Results Panel */}
              {calcResult && (
                <div className="mt-5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-3 animate-fadeIn">
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                    <span className="font-display font-extrabold text-xs text-slate-900 dark:text-white uppercase">
                      HASIL Rincian Perhitungan Kargo
                    </span>
                    <span className="text-[10px] bg-cyan-100 text-cyan-900 font-extrabold px-2 py-0.5 rounded-full">
                      PORT TO DOOR
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                      <span className="text-[10px] text-slate-500 block uppercase font-bold">Rute Pengiriman</span>
                      <span className="font-extrabold text-slate-800 dark:text-slate-100 block text-xs mt-0.5">
                        Jakarta → {calcResult.finalDest}
                      </span>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                      <span className="text-[10px] text-slate-500 block uppercase font-bold">Berat Volumetrik</span>
                      <span className="font-mono font-bold text-slate-800 dark:text-slate-100 block text-xs mt-0.5">
                        {calcResult.volumetricWeight} Kg
                      </span>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                      <span className="text-[10px] text-slate-500 block uppercase font-bold">Berat Aktual</span>
                      <span className="font-bold text-slate-800 dark:text-slate-100 block text-xs mt-0.5">
                        {calcResult.actualWeight} Kg
                      </span>
                    </div>

                    <div className="bg-violet-600 text-white p-2.5 rounded-xl shadow-md">
                      <span className="text-[10px] text-cyan-200 block uppercase font-extrabold">Berat Kena Charge</span>
                      <span className="font-display font-black text-sm block mt-0.5">
                        {calcResult.chargeableWeight} Kg
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200/60 dark:border-amber-800/50 text-[11px] text-amber-900 dark:text-amber-200">
                    <strong>Informasi Tarif:</strong> Tarif per kg resmi untuk rute <strong>Jakarta ke {calcResult.finalDest}</strong> tersedia di tim marketing. Klik tombol di bawah untuk verifikasi total harga & armada.
                  </div>

                  <a
                    href={generateWaLink()}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-sans font-bold py-3 rounded-full transition-all text-xs shadow-md shadow-emerald-500/10 cursor-pointer"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Cek Tarif & Order via WhatsApp</span>
                  </a>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
