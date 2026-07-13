import React, { useState, useEffect } from "react";
import { Star, MessageSquare, Quote } from "lucide-react";
import { TranslationDict, Language } from "../types";
import { TESTIMONIALS_DATA } from "../data";

interface TestimonialSectionProps {
  lang: Language;
  t: TranslationDict;
}

export default function TestimonialSection({ lang, t }: TestimonialSectionProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Simulated Asynchronous API Fetch to show off the premium Loading Skeleton in action!
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // 1.2 second loading simulation
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="py-24 bg-[#f8fafc] dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-[#7c3aed] dark:text-cyan-400 border border-violet-200/50">
            <MessageSquare className="h-3.5 w-3.5" />
            <span className="font-sans font-bold text-[10px] uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            {t.testiTitle}
          </h2>
          <p className="font-sans text-slate-600 dark:text-slate-400 text-sm">
            {t.testiSubtitle}
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoading
            ? // Loading Skeletons
              [...Array(3)].map((_, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50 rounded-[40px] p-8 space-y-5 animate-pulse"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex gap-3">
                      <div className="h-12 w-12 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                      <div className="space-y-2 py-1">
                        <div className="h-3 w-28 bg-slate-200 dark:bg-slate-800 rounded"></div>
                        <div className="h-2.5 w-20 bg-slate-200 dark:bg-slate-800 rounded"></div>
                      </div>
                    </div>
                    <div className="h-4 w-16 bg-slate-200 dark:bg-slate-800 rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
                    <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
                    <div className="h-3 w-2/3 bg-slate-200 dark:bg-slate-800 rounded"></div>
                  </div>
                  <div className="h-3 w-24 bg-slate-200 dark:bg-slate-800 rounded pt-2"></div>
                </div>
              ))
            : // Real Testimonials loaded
              TESTIMONIALS_DATA.map((testi) => (
                <div
                  key={testi.id}
                  className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50 rounded-[40px] p-8 sm:p-10 flex flex-col justify-between shadow-xl shadow-slate-200/40 dark:shadow-none hover:shadow-2xl transition-all duration-300 relative group overflow-hidden"
                >
                  {/* Decorative big quote icon */}
                  <Quote className="absolute -right-2 -bottom-2 h-24 w-24 text-violet-500/5 dark:text-cyan-400/5 pointer-events-none group-hover:scale-110 transition-transform" />

                  <div className="space-y-5 relative">
                    {/* Stars and rating */}
                    <div className="flex items-center gap-0.5">
                      {[...Array(testi.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                      "{testi.text}"
                    </p>
                  </div>

                  {/* Customer Bio */}
                  <div className="flex gap-3 items-center mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/60 relative">
                    <img
                      src={testi.avatar}
                      alt={testi.name}
                      referrerPolicy="no-referrer"
                      className="h-11 w-11 rounded-full object-cover border border-slate-200/60 dark:border-slate-700/60 shrink-0"
                    />
                    <div className="leading-tight">
                      <div className="font-display font-extrabold text-sm text-slate-800 dark:text-white">
                        {testi.name}
                      </div>
                      <div className="font-sans text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                        {testi.role}, <span className="font-bold text-[#7c3aed] dark:text-cyan-400">{testi.company}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>

      </div>
    </section>
  );
}
