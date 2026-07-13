import React, { useState } from "react";
import { Calculator, MapPin, Scale, HelpCircle, ArrowRight, Star, MessageSquare } from "lucide-react";
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

const ROUTE_MULTIPLIER: Record<string, Record<string, number>> = {
  Jakarta: { Jambi: 1.2, Surabaya: 1.0, Medan: 1.5, Denpasar: 1.3, Makassar: 1.8, Balikpapan: 1.7, Palembang: 1.1 },
  Surabaya: { Jakarta: 1.0, Jambi: 1.4, Medan: 1.8, Denpasar: 1.1, Makassar: 1.5, Balikpapan: 1.4, Palembang: 1.3 },
  Jambi: { Jakarta: 1.2, Surabaya: 1.4, Medan: 1.3, Denpasar: 1.7, Makassar: 2.2, Balikpapan: 2.0, Palembang: 0.8 },
  Medan: { Jakarta: 1.5, Surabaya: 1.8, Jambi: 1.3, Denpasar: 2.0, Makassar: 2.4, Balikpapan: 2.2, Palembang: 1.2 },
  Denpasar: { Jakarta: 1.3, Surabaya: 1.1, Jambi: 1.7, Medan: 2.0, Makassar: 1.6, Balikpapan: 1.7, Palembang: 1.5 },
  Makassar: { Jakarta: 1.8, Surabaya: 1.5, Jambi: 2.2, Medan: 2.4, Denpasar: 1.6, Balikpapan: 1.3, Palembang: 1.9 },
  Balikpapan: { Jakarta: 1.7, Surabaya: 1.4, Jambi: 2.0, Medan: 2.2, Denpasar: 1.7, Makassar: 1.3, Palembang: 1.8 },
  Palembang: { Jakarta: 1.1, Surabaya: 1.3, Jambi: 0.8, Medan: 1.2, Denpasar: 1.5, Makassar: 1.9, Balikpapan: 1.8 }
};

export default function Hero({ lang, t }: HeroProps) {
  // Calculator States
  const [origin, setOrigin] = useState("Jakarta");
  const [destination, setDestination] = useState("Jambi");
  const [weight, setWeight] = useState<number | "">(100);
  const [length, setLength] = useState<number | "">("");
  const [width, setWidth] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [service, setService] = useState<"land" | "sea" | "air">("land");

  const [calcResult, setCalcResult] = useState<{
    chargeableWeight: number;
    totalCost: number;
    duration: string;
    isVolumetric: boolean;
  } | null>(null);

  const calculateRates = (e: React.FormEvent) => {
    e.preventDefault();

    const actualWeight = Number(weight) || 1;
    let volumetricWeight = 0;

    // Calculate volumetric weight if dimensions are provided
    if (length && width && height) {
      const divisor = service === "air" ? 6000 : 4000;
      volumetricWeight = (Number(length) * Number(width) * Number(height)) / divisor;
    }

    const isVolumetric = volumetricWeight > actualWeight;
    const chargeableWeight = Math.max(actualWeight, volumetricWeight);

    // Rates based on service
    let baseRate = 3500; // land
    let duration = "3 - 5 Hari Kerja";
    let minWeight = 50;

    if (service === "sea") {
      baseRate = 2500;
      duration = "7 - 14 Hari Kerja";
      minWeight = 100;
    } else if (service === "air") {
      baseRate = 15000;
      duration = "1 - 2 Hari Kerja";
      minWeight = 10;
    }

    // Apply minimum weight rule
    const finalWeightForCalc = Math.max(chargeableWeight, minWeight);

    // Apply route multipliers
    let routeMult = 1.2;
    if (origin === destination) {
      routeMult = 0.5;
    } else if (ROUTE_MULTIPLIER[origin]?.[destination]) {
      routeMult = ROUTE_MULTIPLIER[origin][destination];
    }

    const totalCost = Math.round(finalWeightForCalc * baseRate * routeMult);

    setCalcResult({
      chargeableWeight: Math.round(chargeableWeight * 10) / 10,
      totalCost,
      duration,
      isVolumetric
    });
  };

  const generateWaLink = () => {
    if (!calcResult) return "";
    const serviceName = service === "land" ? "Kargo Darat" : service === "sea" ? "Kargo Laut" : "Kargo Udara";
    const weightStr = calcResult.isVolumetric 
      ? `${calcResult.chargeableWeight} kg (Volumetrik: ${length}x${width}x${height} cm)`
      : `${weight} kg`;
    
    const text = `Halo T Trans Logistik, saya ingin memesan pengiriman kargo:\n\n` +
      `- *Layanan*: ${serviceName}\n` +
      `- *Rute*: ${origin} ke ${destination}\n` +
      `- *Berat Pengiriman*: ${weightStr}\n` +
      `- *Estimasi Biaya*: Rp ${calcResult.totalCost.toLocaleString("id-ID")}\n` +
      `- *Estimasi Waktu*: ${calcResult.duration}\n\n` +
      `Mohon dibantu info penjemputan barangnya. Terima kasih.`;
      
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
                href="https://wa.me/6285830831654?text=Halo%20T%20Trans%20Logistik,%20saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20layanan%20pengiriman%20kargo."
                target="_blank"
                referrerPolicy="no-referrer"
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 font-sans font-semibold px-8 py-4 rounded-full shadow-sm hover:scale-[1.02] transition-all duration-250 text-base"
              >
                <MessageSquare className="h-5 w-5 text-[#06b6d4]" />
                <span>{t.heroCtaContact}</span>
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
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50 rounded-[40px] shadow-2xl shadow-slate-200/50 dark:shadow-none p-6 sm:p-10 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7c3aed]/5 rounded-full blur-2xl pointer-events-none"></div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-cyan-400 rounded-xl">
                  <Calculator className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                    {t.calcTitle}
                  </h3>
                  <p className="font-sans text-xs text-slate-500 dark:text-slate-400">
                    Cek tarif instant darat, laut, & udara
                  </p>
                </div>
              </div>

              <form onSubmit={calculateRates} className="space-y-4">
                {/* Origin & Destination */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-violet-600 dark:text-cyan-400" />
                      {t.calcOrigin}
                    </label>
                    <select
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 font-sans font-semibold text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                    >
                      {CITIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-cyan-500" />
                      {t.calcDestination}
                    </label>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 font-sans font-semibold text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                    >
                      {CITIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Service type selectors */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    {t.calcService}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "land", label: lang === "ID" ? "Darat" : "Land" },
                      { id: "sea", label: lang === "ID" ? "Laut" : "Sea" },
                      { id: "air", label: lang === "ID" ? "Udara" : "Air" }
                    ].map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setService(s.id as any)}
                        className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                          service === s.id
                            ? "bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-500/10"
                            : "bg-slate-50 dark:bg-slate-800/30 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Weight Input */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1">
                    <Scale className="h-3.5 w-3.5 text-violet-600 dark:text-cyan-400" />
                    {t.calcWeight}
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value === "" ? "" : Number(e.target.value))}
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 font-sans font-semibold text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                    placeholder="Contoh: 100"
                    required
                  />
                </div>

                {/* Optional Volumetric Fields */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      {t.calcVolume}
                    </label>
                    <span className="text-[10px] text-violet-600 dark:text-cyan-400 font-bold">P x L x T</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <input
                      type="number"
                      placeholder="P (cm)"
                      value={length}
                      onChange={(e) => setLength(e.target.value === "" ? "" : Number(e.target.value))}
                      className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-center text-xs font-sans text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-violet-500"
                    />
                    <input
                      type="number"
                      placeholder="L (cm)"
                      value={width}
                      onChange={(e) => setWidth(e.target.value === "" ? "" : Number(e.target.value))}
                      className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-center text-xs font-sans text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-violet-500"
                    />
                    <input
                      type="number"
                      placeholder="T (cm)"
                      value={height}
                      onChange={(e) => setHeight(e.target.value === "" ? "" : Number(e.target.value))}
                      className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-center text-xs font-sans text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-violet-500"
                    />
                  </div>
                </div>

                {/* Action button */}
                <button
                  type="submit"
                  className="w-full bg-[#7c3aed] hover:bg-purple-700 text-white font-sans font-bold py-3.5 rounded-full transition-all shadow-md shadow-violet-500/10 hover:shadow-lg text-sm tracking-wide cursor-pointer"
                >
                  {t.calcBtn}
                </button>
              </form>

              {/* Calc Results Panel */}
              {calcResult && (
                <div className="mt-6 p-4 rounded-[24px] bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-4 animate-fadeIn">
                  <div className="border-b border-slate-200 dark:border-slate-700/50 pb-2.5">
                    <h4 className="font-display font-bold text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                      {t.calcResultTitle}
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="font-sans text-xs text-slate-500 dark:text-slate-400">
                        {t.calcEstCost}
                      </div>
                      <div className="font-display font-extrabold text-slate-900 dark:text-white text-xl">
                        Rp {calcResult.totalCost.toLocaleString("id-ID")}
                      </div>
                    </div>
                    <div>
                      <div className="font-sans text-xs text-slate-500 dark:text-slate-400">
                        {t.calcEstTime}
                      </div>
                      <div className="font-sans font-bold text-slate-800 dark:text-white text-sm mt-1">
                        {calcResult.duration}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 italic">
                    {t.calcMinNote}
                  </div>

                  <a
                    href={generateWaLink()}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold py-3.5 rounded-full transition-all text-xs shadow-md shadow-emerald-500/10"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>{t.calcBookBtn}</span>
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
