import React, { useState } from "react";
import { Truck, Ship, Plane, ShieldCheck, Clock, Layers, ChevronDown, ChevronUp } from "lucide-react";
import { TranslationDict, Language } from "../types";
import { SERVICES_DATA } from "../data";

interface ServicesSectionProps {
  lang: Language;
  t: TranslationDict;
}

export default function ServicesSection({ lang, t }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Truck":
        return <Truck className="h-8 w-8 text-violet-600 dark:text-cyan-400" />;
      case "Ship":
        return <Ship className="h-8 w-8 text-violet-600 dark:text-cyan-400" />;
      case "Plane":
        return <Plane className="h-8 w-8 text-violet-600 dark:text-cyan-400" />;
      default:
        return <Truck className="h-8 w-8 text-violet-600 dark:text-cyan-400" />;
    }
  };

  const extraAdvantageID = [
    { title: "Sertifikasi Asuransi", desc: "Setiap muatan dilindungi jaminan asuransi all-risk ternama Indonesia." },
    { title: "Armada Terawat", desc: "Seluruh armada truk dan kontainer menjalani inspeksi berkala pra-keberangkatan." },
    { title: "Dukungan 24/7", desc: "Akses hotline khusus customer service yang siap menjawab posisi pengiriman Anda." }
  ];

  const extraAdvantageEN = [
    { title: "Cargo Insurance", desc: "Every shipment is fully backed by reputable Indonesian cargo insurance firms." },
    { title: "Maintained Fleet", desc: "All trucking and container fleets undergo meticulous pre-journey safety checks." },
    { title: "24/7 Priority Support", desc: "Instant access to dedicated hotlines keeping you updated on shipment status." }
  ];

  const advantages = lang === "ID" ? extraAdvantageID : extraAdvantageEN;

  return (
    <section
      id="services"
      className="py-24 bg-[#f8fafc] dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-[#7c3aed] dark:text-cyan-400 border border-violet-200/50">
            <Layers className="h-3.5 w-3.5" />
            <span className="font-sans font-bold text-[10px] uppercase tracking-wider">{t.navServices}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            {t.servicesTitle}
          </h2>
          <p className="font-sans text-slate-600 dark:text-slate-400 text-base">
            {t.servicesSubtitle}
          </p>
        </div>

        {/* Services Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const isOpen = activeTab === service.id;
            // Let's translate some fields manually or load from data
            const title = index === 0 ? t.landTitle : index === 1 ? t.seaTitle : t.airTitle;
            const desc = index === 0 ? t.landDesc : index === 1 ? t.seaDesc : t.airDesc;

            return (
              <div
                key={service.id}
                className={`bg-white dark:bg-slate-900 border rounded-[40px] p-6 sm:p-10 hover:-translate-y-1 shadow-xl shadow-slate-200/40 dark:shadow-none transition-all duration-300 flex flex-col justify-between ${
                  isOpen 
                    ? "border-[#7c3aed] dark:border-[#06b6d4] ring-2 ring-[#7c3aed]/10" 
                    : "border-slate-100 dark:border-slate-800/50"
                }`}
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="p-4 bg-violet-50 dark:bg-violet-950/40 rounded-2xl w-16 h-16 flex items-center justify-center">
                    {getIcon(service.icon)}
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white">
                      {title}
                    </h3>
                    <p className="font-sans text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>

                {/* Technical details toggle */}
                <div className="mt-8 border-t border-slate-100 dark:border-slate-800/60 pt-6">
                  <button
                    onClick={() => setActiveTab(isOpen ? null : service.id)}
                    className="flex items-center justify-between w-full text-left font-sans font-bold text-xs text-[#7c3aed] dark:text-cyan-400 hover:opacity-85 cursor-pointer"
                  >
                    <span>{isOpen ? (lang === "ID" ? "Tutup Detail Teknis" : "Close Technical Details") : (lang === "ID" ? "Lihat Detail & Armada" : "View Details & Fleet")}</span>
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>

                  {isOpen && (
                    <div className="mt-4 space-y-3 animate-fadeIn">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex gap-2 items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] mt-1.5 shrink-0"></span>
                          <span className="font-sans text-xs text-slate-600 dark:text-slate-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Grid at Bottom */}
        <div className="mt-20 border-t border-slate-200 dark:border-slate-800/60 pt-16">
          <h3 className="font-display font-extrabold text-xl text-center text-slate-900 dark:text-white mb-10">
            {t.serviceFeaturesTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((adv, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-6 rounded-[24px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50 shadow-lg shadow-slate-200/20 dark:shadow-none hover:shadow-xl transition-all"
              >
                <div className="p-3 bg-[#06b6d4]/10 text-[#06b6d4] rounded-2xl shrink-0 h-12 w-12 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                    {adv.title}
                  </h4>
                  <p className="font-sans text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
