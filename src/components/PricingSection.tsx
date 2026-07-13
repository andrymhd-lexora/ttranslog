import React from "react";
import { Check, Truck, Ship, Plane, HelpCircle, Coins } from "lucide-react";
import { TranslationDict, Language } from "../types";
import { PRICING_PLANS } from "../data";

interface PricingSectionProps {
  lang: Language;
  t: TranslationDict;
}

export default function PricingSection({ lang, t }: PricingSectionProps) {
  
  const getIcon = (id: string) => {
    switch (id) {
      case "land":
        return <Truck className="h-6 w-6 text-violet-600 dark:text-cyan-400" />;
      case "sea":
        return <Ship className="h-6 w-6 text-white" />;
      case "air":
        return <Plane className="h-6 w-6 text-violet-600 dark:text-cyan-400" />;
      default:
        return <Truck className="h-6 w-6 text-violet-600" />;
    }
  };

  const getWaLink = (planTitle: string) => {
    const text = `Halo T Trans Logistik, saya tertarik untuk menggunakan layanan kargo: *${planTitle}*.\n\nMohon informasi prosedur pemesanan lebih lanjut. Terima kasih!`;
    return `https://wa.me/6285830831654?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="pricing"
      className="py-24 bg-[#f8fafc] dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-[#7c3aed] dark:text-cyan-400 border border-violet-200/50">
            <Coins className="h-3.5 w-3.5" />
            <span className="font-sans font-bold text-[10px] uppercase tracking-wider">{t.navPricing}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            {t.priceTitle}
          </h2>
          <p className="font-sans text-slate-600 dark:text-slate-400 text-base">
            {t.priceSubtitle}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;
            
            return (
              <div
                key={plan.id}
                className={`relative border rounded-[40px] p-6 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? "bg-gradient-to-b from-[#7c3aed] to-indigo-800 text-white border-transparent shadow-2xl shadow-purple-500/20 md:-translate-y-4 scale-[1.02]"
                    : "bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-slate-100 dark:border-slate-800/50 shadow-xl shadow-slate-200/40 dark:shadow-none hover:shadow-2xl"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-400 text-slate-900 font-sans font-extrabold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                    {plan.badge}
                  </span>
                )}

                <div className="space-y-6">
                  {/* Card Icon & Header */}
                  <div className="flex justify-between items-center">
                    <div
                      className={`p-3.5 rounded-2xl ${
                        isPopular ? "bg-white/20" : "bg-violet-50 dark:bg-violet-950/40"
                      }`}
                    >
                      {getIcon(plan.id)}
                    </div>
                    {!isPopular && (
                      <span className="font-sans text-[10px] font-bold text-[#7c3aed] dark:text-cyan-400 bg-violet-50 dark:bg-violet-950/30 px-3 py-1 rounded-full">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-display font-extrabold text-lg">
                      {plan.title}
                    </h3>
                    <p className={`font-sans text-xs ${isPopular ? "text-slate-200" : "text-slate-500"}`}>
                      {plan.desc}
                    </p>
                  </div>

                  {/* Pricing Rate */}
                  <div className="py-4 border-y border-dashed border-slate-200/40 dark:border-slate-800/60 flex items-baseline gap-1">
                    <span className="font-sans text-xs font-bold uppercase">Rp</span>
                    <span className="font-display font-black text-3xl sm:text-4xl tracking-tight">
                      {plan.priceIdr}
                    </span>
                    <span className={`font-sans text-xs ${isPopular ? "text-slate-200" : "text-slate-500"}`}>
                      {t.priceUnitKg}
                    </span>
                  </div>

                  {/* Weight limit and duration */}
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className={isPopular ? "text-slate-300" : "text-slate-400"}>Minimum</span>
                      <div className="font-sans font-bold mt-0.5">{plan.minWeight}</div>
                    </div>
                    <div>
                      <span className={isPopular ? "text-slate-300" : "text-slate-400"}>Estimasi</span>
                      <div className="font-sans font-bold mt-0.5">{plan.speed}</div>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 pt-2">
                    {t.priceFeatures.map((feat, idx) => (
                      <li key={idx} className="flex gap-2.5 items-center text-xs">
                        <div
                          className={`p-0.5 rounded-full shrink-0 ${
                            isPopular ? "bg-cyan-400 text-slate-900" : "bg-violet-100 dark:bg-violet-950/40 text-[#7c3aed] dark:text-cyan-400"
                          }`}
                        >
                          <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                        <span className={isPopular ? "text-slate-100" : "text-slate-600 dark:text-slate-300"}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Choose Plan button */}
                <div className="mt-8">
                  <a
                    href={getWaLink(plan.title)}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className={`block w-full text-center font-sans font-bold py-3.5 rounded-full transition-all shadow-md text-sm cursor-pointer ${
                      isPopular
                        ? "bg-white hover:bg-slate-100 text-violet-700 hover:shadow-lg shadow-white/10"
                        : "bg-[#7c3aed] hover:bg-purple-700 text-white hover:shadow-lg shadow-purple-500/15"
                    }`}
                  >
                    {t.priceCta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
