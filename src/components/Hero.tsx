import React from "react";
import { ArrowRight, Star, LogIn } from "lucide-react";
import { Language, TranslationDict } from "../types";
import RateCalculator from "./RateCalculator";

interface HeroProps {
  lang: Language;
  t: TranslationDict;
}

export default function Hero({ lang, t }: HeroProps) {
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
          <div className="lg:col-span-6 space-y-8">
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

          {/* Right Column (Calculator Component) */}
          <div id="calculator" className="lg:col-span-6">
            <RateCalculator lang={lang} />
          </div>

        </div>
      </div>
    </section>
  );
}
