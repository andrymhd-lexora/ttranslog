import React, { useState, useEffect } from "react";
import { Menu, X, Globe, Sun, Moon, Truck } from "lucide-react";
import { Language, Theme, TranslationDict } from "../types";

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: TranslationDict;
}

export default function Navbar({ lang, setLang, theme, toggleTheme, t }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: t.navHome, href: "#home" },
    { name: t.navServices, href: "#services" },
    { name: t.navCalculator, href: "#calculator" },
    { name: t.navTracking, href: "#tracking" },
    { name: t.navPricing, href: "#pricing" },
    { name: t.navFaq, href: "#faq" },
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#f8fafc]/80 dark:bg-slate-950/80 backdrop-blur-md shadow-xl shadow-slate-200/40 dark:shadow-slate-950/40 py-3 border-b border-slate-200/30 dark:border-slate-800/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-3 group">
              <img
                src="/favicon.jpg"
                alt="T Trans Logistik Logo"
                className="w-10 h-10 rounded-xl object-contain border border-slate-100 dark:border-slate-800 shadow-lg shadow-violet-500/10 group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-800 dark:text-white">
                T TRANS <span className="text-[#06b6d4]">LOGISTIK</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-sans font-medium text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-cyan-400 transition-colors duration-200 text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Action buttons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language toggle */}
            <button
              id="lang-toggle"
              onClick={() => setLang(lang === "ID" ? "EN" : "ID")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all text-xs font-semibold"
            >
              <Globe className="h-4 w-4 text-violet-600 dark:text-cyan-400" />
              <span>{lang}</span>
            </button>

            {/* Dark mode toggle */}
            <button
              id="theme-toggle"
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4 text-amber-400" />}
            </button>

            {/* CTA Contact Button */}
            <a
              href="#contact"
              className="bg-violet-600 hover:bg-violet-700 text-white font-sans font-semibold px-5 py-2.5 rounded-xl transition-all shadow-md hover:shadow-violet-500/20 text-sm"
            >
              {t.navContact}
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Language toggle (Mobile) */}
            <button
              onClick={() => setLang(lang === "ID" ? "EN" : "ID")}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold"
            >
              <Globe className="h-3.5 w-3.5 text-violet-600 dark:text-cyan-400" />
              <span>{lang}</span>
            </button>

            {/* Dark mode toggle (Mobile) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4 text-amber-400" />}
            </button>

            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[73px] bg-[#f8fafc]/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300 transform origin-top ${
          isOpen ? "scale-y-100 opacity-100 visible" : "scale-y-0 opacity-0 invisible"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg font-sans font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-violet-600 dark:hover:text-cyan-400 transition-all"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-violet-600 hover:bg-violet-700 text-white font-sans font-semibold py-3 rounded-xl shadow-md transition-all"
            >
              {t.navContact}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
