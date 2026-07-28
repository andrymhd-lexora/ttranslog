import React from "react";
import { ArrowRight, Star, LogIn, Ship, Plane, Truck, Warehouse, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { Language, TranslationDict } from "../types";
import RateCalculator from "./RateCalculator";

interface HeroProps {
  lang: Language;
  t: TranslationDict;
}

export default function Hero({ lang, t }: HeroProps) {
  const servicePills = [
    {
      icon: Ship,
      color: "text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-cyan-950/50 border-blue-200 dark:border-cyan-800",
      titleID: "Kargo Laut PELNI & 3T",
      titleEN: "PELNI Sea Freight & 3T",
      descID: "Kapal cepat & tol laut terjangkau",
      descEN: "Fast vessel & affordable sea toll"
    },
    {
      icon: Plane,
      color: "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/50 border-violet-200 dark:border-violet-800",
      titleID: "Kargo Udara Flight & Freighter",
      titleEN: "Air Cargo & Freighter",
      descID: "Prioritas kilat Port-to-Door",
      descEN: "Express priority Port-to-Door"
    },
    {
      icon: Truck,
      color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800",
      titleID: "Kargo Darat Truk FTL / LTL",
      titleEN: "Land Trucking FTL / LTL",
      descID: "Lintas Jawa, Sumatera & Bali",
      descEN: "Across Java, Sumatra & Bali"
    },
    {
      icon: Warehouse,
      color: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800",
      titleID: "Gratis Shuttle Pickup Jakarta",
      titleEN: "Free Jakarta Pickup",
      descID: "3 Hub lokasi penjemputan",
      descEN: "3 Logistics pickup hubs"
    }
  ];

  return (
    <section
      id="home"
      className="relative pt-20 pb-12 md:pt-24 md:pb-16 bg-[#f8fafc] dark:bg-slate-950 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Graphic Ornaments - Natural Tones Theme */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7c3aed]/5 rounded-full filter blur-3xl -z-10 translate-x-12 -translate-y-12"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#06b6d4]/5 rounded-full filter blur-3xl -z-10 -translate-x-12 translate-y-12"></div>
      
      {/* Organic Curved Wave Overlay */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none">
        <svg className="w-full text-white dark:text-slate-900 transition-colors" viewBox="0 0 1440 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column (Rich Product Narrative & Value proposition) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-800 dark:text-cyan-300 border border-violet-200 dark:border-violet-800/60 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-violet-600 dark:text-cyan-400" />
              <span className="font-sans font-bold text-xs uppercase tracking-wider">
                PT Tungkal Trans Indonesia • Ekspedisi & Logistik Terpercaya
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl xl:text-5xl text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                {t.heroTitle}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500">
                  {t.heroHighlight}
                </span>
              </h1>
              <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                {lang === "ID"
                  ? "Mitra logistik terintegrasi untuk pengiriman kargo skala besar, ritel, dan korporat. Jangkauan terluas ke seluruh pelosok Nusantara, termasuk Papua, Maluku, NTT, NTB, dan pulau terluar 3T dengan jaringan kapal Pelni, maskapai komersil, dan armada darat."
                  : "Integrated logistics partner for commercial, retail, and corporate cargo. Broadest nationwide reach covering Papua, Maluku, Nusa Tenggara, and 3T remote regions."}
              </p>
            </div>

            {/* Product Offers 2x2 Grid Narrative */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-1">
              {servicePills.map((item, idx) => {
                const IconComponent = item.icon;
                const title = lang === "ID" ? item.titleID : item.titleEN;
                const desc = lang === "ID" ? item.descID : item.descEN;

                return (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-2.5 hover:border-violet-300 dark:hover:border-cyan-500/50 transition-all"
                  >
                    <div className={`p-2 rounded-xl border shrink-0 ${item.color}`}>
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="font-display font-bold text-xs text-slate-900 dark:text-white truncate">
                        {title}
                      </h2>
                      <p className="font-sans text-[10px] text-slate-500 dark:text-slate-400 truncate">
                        {desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-sans font-bold px-7 py-3.5 rounded-2xl shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.01] transition-all text-sm"
              >
                <span>{t.heroCtaCalc}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://ttranslog.base44.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 font-sans font-bold px-7 py-3.5 rounded-2xl shadow-sm hover:scale-[1.01] transition-all text-sm cursor-pointer"
              >
                <LogIn className="h-4 w-4 text-violet-600 dark:text-cyan-400" />
                <span>Login Dashboard</span>
              </a>
            </div>

            {/* Trust Badges & Ratings */}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold">PT</div>
                  <div className="h-8 w-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-300 dark:bg-slate-600 flex items-center justify-center text-[10px] font-bold">CV</div>
                  <div className="h-8 w-8 rounded-full border-2 border-white dark:border-slate-900 bg-violet-600 text-white flex items-center justify-center text-[10px] font-bold">+</div>
                </div>
                <div>
                  <div className="font-display font-bold text-slate-900 dark:text-white text-xs">
                    {t.heroActiveClients}
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="font-sans text-[10px] text-slate-500 dark:text-slate-400 ml-1">(4.9/5 Rating)</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-xl">
                <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300">
                  {lang === "ID" ? "Garansi Safe & Protected" : "Safe & Covered Cargo"}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column (Calculator Component) */}
          <div id="calculator" className="lg:col-span-6">
            <RateCalculator lang={lang} />
          </div>

        </div>
      </div>
    </section>
  );
}

