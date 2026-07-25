import React, { useState } from "react";
import { Truck, Ship, Plane, Package, ShieldCheck, Clock, Layers, ChevronDown, ChevronUp, Scale, ArrowRight, PhoneCall, CheckCircle2 } from "lucide-react";
import { TranslationDict, Language } from "../types";
import { getCargoRules } from "../data";

interface ServicesSectionProps {
  lang: Language;
  t: TranslationDict;
}

export default function ServicesSection({ lang, t }: ServicesSectionProps) {
  const cargoServices = getCargoRules(lang);
  const [activeTab, setActiveTab] = useState<string | null>("air_commercial"); // Default open 1 tab or null

  const getIcon = (id: string) => {
    switch (id) {
      case "sea_land":
        return <Ship className="h-7 w-7 text-violet-600 dark:text-cyan-400" />;
      case "air_commercial":
        return <Plane className="h-7 w-7 text-violet-600 dark:text-cyan-400" />;
      case "air_freighter":
        return <Plane className="h-7 w-7 text-violet-600 dark:text-cyan-400" />;
      case "air_non_commercial":
        return <Package className="h-7 w-7 text-violet-600 dark:text-cyan-400" />;
      default:
        return <Truck className="h-7 w-7 text-violet-600 dark:text-cyan-400" />;
    }
  };

  const getWaLink = (modeTitle: string) => {
    const text = `Halo Marketing T Trans Logistik, saya ingin bertanya dan berkonsultasi mengenai *LAYANAN ${modeTitle.toUpperCase()}*.\n\nMohon informasi ongkir, jadwal penerbangan/kapal, dan prosedur penjemputan. Terima kasih!`;
    return `https://wa.me/6285830831654?text=${encodeURIComponent(text)}`;
  };

  const extraAdvantageID = [
    { title: "Sertifikasi Asuransi All-Risk", desc: "Setiap muatan dilindungi jaminan asuransi kargo ternama Indonesia." },
    { title: "Sistem Port To Door", desc: "Pengantaran aman dari bandara/pelabuhan asal hingga alamat tujuan penerima." },
    { title: "Dukungan Customer Service 24/7", desc: "Akses hotline khusus marketing & dispatcher untuk update status barang Anda." }
  ];

  const extraAdvantageEN = [
    { title: "All-Risk Cargo Insurance", desc: "Every shipment is fully backed by reputable Indonesian cargo insurance firms." },
    { title: "Port To Door System", desc: "Secure delivery from origin airport/port up to recipient doorstep address." },
    { title: "24/7 Priority Support", desc: "Instant access to dedicated marketing hotlines keeping you updated on shipment status." }
  ];

  const advantages = lang === "ID" ? extraAdvantageID : extraAdvantageEN;

  return (
    <section
      id="services"
      className="py-20 bg-[#f8fafc] dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-[#7c3aed] dark:text-cyan-400 border border-violet-200/50">
            <Layers className="h-3.5 w-3.5" />
            <span className="font-sans font-bold text-[10px] uppercase tracking-wider">
              {lang === "ID" ? "Solusi Ekspedisi Forwarding" : "Forwarding Logistics Services"}
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            {lang === "ID" ? "4 Moda Layanan Utama PT Tungkal Trans Indonesia" : "4 Core Cargo Services of PT Tungkal Trans Indonesia"}
          </h2>
          <p className="font-sans text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === "ID"
              ? "Menghubungkan rantai pasok bisnis Anda ke seluruh Indonesia melalui empat spesifikasi moda kargo laut, darat, dan penerbangan udara resmi."
              : "Connecting your business supply chain across Indonesia through our four official sea, land, and air freight services."}
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {cargoServices.map((service) => {
            const isOpen = activeTab === service.id;
            const isPopular = service.popular;

            return (
              <div
                key={service.id}
                className={`bg-white dark:bg-slate-900 border rounded-[32px] p-6 flex flex-col justify-between shadow-xl transition-all duration-300 relative ${
                  isPopular
                    ? "border-violet-500/80 shadow-purple-500/10 ring-2 ring-purple-500/20"
                    : "border-slate-200/80 dark:border-slate-800 shadow-slate-200/40 dark:shadow-none hover:border-violet-300 dark:hover:border-slate-700"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <span className="absolute -top-3 left-6 bg-cyan-400 text-slate-950 font-sans font-extrabold text-[9px] uppercase tracking-widest px-3 py-0.5 rounded-full shadow-sm">
                    {service.badge}
                  </span>
                )}

                <div className="space-y-5">
                  {/* Icon & Mode Badge */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="p-3 bg-violet-50 dark:bg-violet-950/50 rounded-2xl">
                      {getIcon(service.id)}
                    </div>
                    <span className="font-sans text-[10px] font-extrabold text-violet-700 dark:text-cyan-400 bg-violet-50 dark:bg-violet-950/40 border border-violet-100 dark:border-violet-900/50 px-2.5 py-1 rounded-full uppercase">
                      {service.modeType}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1.5">
                    <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white leading-snug">
                      {service.title}
                    </h3>
                    <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Specification Breakdown Box */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-2.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 dark:text-slate-400 font-medium text-[11px] flex items-center gap-1">
                        <Scale className="h-3 w-3 text-cyan-500" />
                        Min. Weight
                      </span>
                      <span className="font-bold text-slate-800 dark:text-slate-200 text-[11px]">{service.minWeight}</span>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-200/50 dark:border-slate-700/40 pt-2">
                      <span className="text-slate-500 dark:text-slate-400 font-medium text-[11px] flex items-center gap-1">
                        <Clock className="h-3 w-3 text-cyan-500" />
                        Awal Lead Time
                      </span>
                      <span className="font-bold text-slate-800 dark:text-slate-200 text-[10px] truncate max-w-[110px]" title={service.leadTime}>
                        {service.leadTime}
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-200/50 dark:border-slate-700/40 pt-2">
                      <span className="text-slate-500 dark:text-slate-400 font-medium text-[11px] flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3 text-cyan-500" />
                        Dimensi Max
                      </span>
                      <span className="font-bold text-slate-800 dark:text-slate-200 text-[10px] truncate max-w-[110px]" title={service.maxDim}>
                        {service.maxDim}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Collapsible Rules Summary */}
                <div className="mt-6 border-t border-slate-100 dark:border-slate-800 pt-4 space-y-3">
                  <button
                    onClick={() => setActiveTab(isOpen ? null : service.id)}
                    className="flex items-center justify-between w-full text-left font-sans font-bold text-xs text-[#7c3aed] dark:text-cyan-400 hover:opacity-85 cursor-pointer"
                  >
                    <span>{isOpen ? "Sembunyikan Poin Ringkas" : "Lihat Poin Ringkas Layanan"}</span>
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>

                  {isOpen && (
                    <div className="space-y-2 pt-1 animate-fadeIn">
                      {service.rules.slice(0, 4).map((rule) => (
                        <div key={rule.num} className="flex items-start gap-2 text-[11px]">
                          <span className="w-4 h-4 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-cyan-300 font-bold flex items-center justify-center shrink-0 text-[9px] mt-0.5">
                            {rule.num}
                          </span>
                          <span className="text-slate-600 dark:text-slate-300 leading-tight">
                            <strong>{rule.label}:</strong> {rule.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Consultation WA Button */}
                  <a
                    href={getWaLink(service.title)}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="mt-2 flex items-center justify-center gap-2 w-full bg-[#7c3aed] hover:bg-purple-700 text-white font-sans font-bold py-2.5 px-3 rounded-full transition-all text-xs cursor-pointer shadow-sm"
                  >
                    <PhoneCall className="h-3.5 w-3.5" />
                    <span>Konsultasi WA</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Grid at Bottom */}
        <div className="border-t border-slate-200 dark:border-slate-800/60 pt-16">
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

