import React, { useState } from "react";
import { HelpCircle, Search, ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { TranslationDict, Language } from "../types";
import { FAQ_DATA } from "../data";

interface FaqSectionProps {
  lang: Language;
  t: TranslationDict;
}

export default function FaqSection({ lang, t }: FaqSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const q = faq.question.toLowerCase();
    const a = faq.answer.toLowerCase();
    const query = searchQuery.toLowerCase();
    return q.includes(query) || a.includes(query);
  });

  return (
    <section
      id="faq"
      className="py-24 bg-[#f8fafc] dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-[#7c3aed] dark:text-cyan-400 border border-violet-200/50">
            <HelpCircle className="h-3.5 w-3.5" />
            <span className="font-sans font-bold text-[10px] uppercase tracking-wider">{t.navFaq}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            {t.faqTitle}
          </h2>
          <p className="font-sans text-slate-600 dark:text-slate-400 text-sm">
            {t.faqSubtitle}
          </p>
        </div>

        {/* FAQ Search Bar */}
        <div className="relative mb-10 max-w-xl mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.faqSearchPlaceholder}
            className="w-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50 rounded-full pl-12 pr-4 py-3.5 font-sans font-semibold text-sm text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] shadow-lg shadow-slate-200/40 dark:shadow-none"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
        </div>

        {/* FAQ List Accordion */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50 rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex justify-between items-center w-full text-left px-6 py-5 font-sans font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-all cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-[#7c3aed] dark:text-[#06b6d4] shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {/* Collapsible Answer */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-96 border-t border-slate-100 dark:border-slate-800/60" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 py-5 font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 font-sans text-slate-400 text-sm">
              Tidak ada hasil pencarian FAQ yang cocok.
            </div>
          )}
        </div>

        {/* Call-to-action help */}
        <div className="mt-12 text-center">
          <p className="font-sans text-xs text-slate-500 dark:text-slate-400">
            Masih memiliki pertanyaan lain seputar kargo Anda?
          </p>
          <a
            href="https://wa.me/6285830831654?text=Halo%20T%20Trans%20Logistik,%20saya%20memiliki%20pertanyaan%20mengenai..."
            target="_blank"
            referrerPolicy="no-referrer"
            className="inline-flex items-center gap-2 mt-3 font-sans font-bold text-sm text-[#7c3aed] dark:text-cyan-400 hover:opacity-80"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Tanyakan Langsung di WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
