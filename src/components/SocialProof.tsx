import React from "react";
import { ShieldCheck, Award, ThumbsUp, Building2 } from "lucide-react";
import { TranslationDict } from "../types";

interface SocialProofProps {
  t: TranslationDict;
}

export default function SocialProof({ t }: SocialProofProps) {
  const partners = [
    { name: "PT BAJA SURYA PERKASA", industry: "Steel & Construction" },
    { name: "CV MEDAN MEGA TEKNIK", industry: "Machinery Mfg" },
    { name: "PT INDO CITA COSMETIC", industry: "Chemicals & FMCG" },
    { name: "PT ELECTRONIK NUSANTARA", industry: "Consumer Electronics" },
    { name: "CV MANDIRI AGRO GRUP", industry: "Fertilizer & Agro" },
    { name: "PT SUMATERA COAL TRANS", industry: "Mining & Heavy Load" }
  ];

  return (
    <section className="py-12 bg-[#f8fafc] dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 dark:bg-slate-900/60 border border-slate-800/20 rounded-[32px] p-8 sm:p-10 shadow-xl">
          <p className="text-center font-sans font-bold text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8">
            {t.socialProofTitle}
          </p>
          
          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center justify-center p-4 rounded-2xl border border-dashed border-slate-800/40 dark:border-slate-800 bg-slate-800/20 dark:bg-slate-950/40 text-center hover:border-cyan-400/50 transition-all group"
              >
                <Building2 className="h-5 w-5 text-slate-500 group-hover:text-cyan-400 transition-colors mb-1.5" />
                <span className="font-display font-extrabold text-[10px] text-slate-300 dark:text-slate-400 tracking-wider leading-tight group-hover:text-white">
                  {partner.name}
                </span>
                <span className="font-sans text-[8px] text-slate-500 mt-0.5">
                  {partner.industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
