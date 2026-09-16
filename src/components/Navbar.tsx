import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Globe,
  Sun,
  Moon,
  Truck,
  LogIn,
  ChevronDown,
  ChevronRight,
  Warehouse,
  Layers,
  Compass,
  MapPin,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Language, Theme, TranslationDict } from "../types";
import PickupHubsModal from "./PickupHubsModal";

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
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isPickupModalOpen, setIsPickupModalOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsServicesDropdownOpen(false);
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 250); // Safe buffer period so mouse movement into menu is uninterrupted
  };

  const handleToggleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsServicesDropdownOpen((prev) => !prev);
  };

  const handleScrollTo = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsServicesDropdownOpen(false);
    setIsOpen(false);

    const elem = document.getElementById(targetId);
    if (elem) {
      const yOffset = -85;
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  // Main topbar navigation links (Spacious & Clean Layout)
  const mainNavItems = [
    { name: t.navHome, targetId: "home", href: "#home" },
    { name: t.navCalculator, targetId: "calculator", href: "#calculator" },
    { name: t.navTracking, targetId: "tracking", href: "#tracking" },
    { name: t.navPricing, targetId: "pricing", href: "#pricing" },
    { name: t.navFaq, targetId: "faq", href: "#faq" },
  ];

  const pickupHubsList = [
    {
      id: "jakpus",
      name: "Hub 1 - Jakarta Pusat",
      area: "Mangga Dua / Sawah Besar",
      address: "Jl. Pangeran Jayakarta No.62a"
    },
    {
      id: "jaktim",
      name: "Hub 2 - Jakarta Timur",
      area: "Kramat Jati / Kp. Tengah",
      address: "Kansa Residence, Jl. H. Taiman Ujung"
    },
    {
      id: "jaksel",
      name: "Hub 3 - Jakarta Selatan",
      area: "Kebayoran Lama (Kantor Pusat)",
      address: "Jl. Bungur No.1D"
    }
  ];

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#f8fafc]/90 dark:bg-slate-950/90 backdrop-blur-md shadow-xl shadow-slate-200/40 dark:shadow-slate-950/40 py-3 border-b border-slate-200/40 dark:border-slate-800/40"
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

            {/* Desktop Navigation Bar (Rapi, Uncrowded & Spacious) */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Home */}
              <a
                href="#home"
                onClick={(e) => handleScrollTo(e, "home")}
                className="font-sans font-medium text-slate-700 dark:text-slate-200 hover:text-violet-600 dark:hover:text-cyan-400 transition-colors text-sm px-2 py-1.5 rounded-lg hover:bg-slate-100/60 dark:hover:bg-slate-800/40"
              >
                {t.navHome}
              </a>

              {/* Layanan Dropdown Item - Mudah diklik & anti-tutup mendadak */}
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  id="nav-services-btn"
                  type="button"
                  onClick={handleToggleClick}
                  aria-expanded={isServicesDropdownOpen}
                  aria-haspopup="true"
                  className={`inline-flex items-center gap-1.5 font-sans font-semibold text-sm px-3.5 py-2 rounded-xl transition-all duration-200 cursor-pointer select-none ${
                    isServicesDropdownOpen
                      ? "bg-violet-100/90 dark:bg-slate-800 text-violet-700 dark:text-cyan-400 ring-1 ring-violet-200 dark:ring-slate-700 shadow-sm"
                      : "text-slate-800 dark:text-slate-100 hover:text-violet-600 dark:hover:text-cyan-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/60"
                  }`}
                >
                  <span>{t.navServices}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-violet-600 dark:text-cyan-400 transition-transform duration-200 ${
                      isServicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Submenu Mega-Dropdown Panel dengan Safe-Hover Bridge & Scrollable Interior */}
                {isServicesDropdownOpen && (
                  <div
                    className="absolute top-full left-0 pt-2 z-50 animate-fadeIn"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="w-[450px] max-h-[calc(78vh-60px)] overflow-y-auto overscroll-contain dropdown-scrollbar bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200/90 dark:border-slate-800 p-4 space-y-3">
                      
                      {/* Submenu Scroll & Category Indicator */}
                      <div className="flex items-center justify-between px-2 pb-1 border-b border-slate-100 dark:border-slate-800 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        <span className="flex items-center gap-1.5">
                          <Layers className="h-3.5 w-3.5 text-violet-600 dark:text-cyan-400" />
                          <span>{lang === "ID" ? "Pilihan Layanan Kargo" : "Cargo Freight Services"}</span>
                        </span>
                        <span className="text-[10px] text-violet-600 dark:text-cyan-400 bg-violet-50 dark:bg-slate-800 px-2 py-0.5 rounded-full font-medium">
                          {lang === "ID" ? "Bisa digulir ↓" : "Scrollable ↓"}
                        </span>
                      </div>

                      {/* Item 1: All Core Services */}
                      <a
                        href="#services"
                        onClick={(e) => handleScrollTo(e, "services")}
                        className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors group/item block border border-transparent hover:border-slate-200/70 dark:hover:border-slate-700/60"
                      >
                        <div className="p-2.5 bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-cyan-400 rounded-xl group-hover/item:scale-105 transition-transform shrink-0">
                          <Layers className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-display font-extrabold text-sm text-slate-900 dark:text-white group-hover/item:text-violet-600 dark:group-hover/item:text-cyan-400">
                              {lang === "ID" ? "Semua Moda Layanan Utama" : "All Core Freight Modes"}
                            </h4>
                            <span className="bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full">
                              Laut • Darat • Udara
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                            {lang === "ID"
                              ? "Layanan Kargo Laut PELNI & Tol Laut, Truk Darat FTL/LTL, serta Kargo Udara Komersial & Freighter."
                              : "PELNI Sea Freight, Land Truckload, and Commercial & Freighter Air Cargo flights."}
                          </p>
                        </div>
                      </a>

                      {/* Item 2: Indonesia Timur & 3T Submenu */}
                      <a
                        href="#eastern-indonesia"
                        onClick={(e) => handleScrollTo(e, "eastern-indonesia")}
                        className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors group/item block border-t border-slate-100 dark:border-slate-800/80"
                      >
                        <div className="p-2.5 bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 rounded-xl group-hover/item:scale-105 transition-transform shrink-0">
                          <Compass className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-display font-extrabold text-sm text-slate-900 dark:text-white group-hover/item:text-amber-600 dark:group-hover/item:text-amber-400">
                              {lang === "ID" ? "Spesialis Indonesia Timur & 3T" : "Eastern Indonesia & 3T Remote Area"}
                            </h4>
                            <span className="bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full">
                              Prioritas 3T
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                            {lang === "ID"
                              ? "Jangkauan Papua, Maluku, NTT, NTB, dan pulau terluar 3T dengan kapal cepat Pelni & tol laut bersubsidi."
                              : "Reliable distribution coverage across Papua, Maluku, Nusa Tenggara, & remote outer islands."}
                          </p>
                        </div>
                      </a>

                      {/* Item 3: Pickup Locations & Consolidation Hubs Submenu */}
                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                        <div className="flex items-center justify-between px-2">
                          <span className="text-[10px] font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider flex items-center gap-1.5">
                            <Warehouse className="h-3.5 w-3.5 text-violet-500" />
                            {lang === "ID" ? "3 Lokasi Hub Penjemputan Jakarta" : "3 Jakarta Cargo Pickup Hubs"}
                          </span>
                          <div className="flex items-center gap-2">
                            <a
                              href="#pickup-hubs"
                              onClick={(e) => handleScrollTo(e, "pickup-hubs")}
                              className="text-[10px] font-bold text-violet-600 dark:text-cyan-400 hover:underline cursor-pointer"
                            >
                              {lang === "ID" ? "Gulir ke Hub ↓" : "Scroll to Hubs ↓"}
                            </a>
                            <span className="text-slate-300 dark:text-slate-700">•</span>
                            <button
                              type="button"
                              onClick={() => {
                                setIsServicesDropdownOpen(false);
                                setIsPickupModalOpen(true);
                              }}
                              className="text-[10px] font-bold text-cyan-600 dark:text-cyan-400 hover:underline cursor-pointer"
                            >
                              {lang === "ID" ? "Buka Peta" : "Open Map"}
                            </button>
                          </div>
                        </div>

                        {/* 3 Hub Cards List inside Submenu */}
                        <div className="grid grid-cols-1 gap-1.5">
                          {pickupHubsList.map((hub) => (
                            <button
                              key={hub.id}
                              type="button"
                              onClick={(e) => handleScrollTo(e, "pickup-hubs")}
                              className="w-full text-left p-2.5 rounded-xl hover:bg-violet-50/80 dark:hover:bg-slate-800/90 transition-colors flex items-center justify-between group/hub cursor-pointer border border-slate-100 dark:border-slate-800/60"
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <div className="p-1.5 rounded-lg bg-violet-100/60 dark:bg-violet-950/60 text-violet-600 dark:text-cyan-400 shrink-0 group-hover/hub:scale-105 transition-transform">
                                  <MapPin className="h-3.5 w-3.5" />
                                </div>
                                <div className="min-w-0">
                                  <span className="font-bold text-xs text-slate-800 dark:text-slate-200 block group-hover/hub:text-violet-600 dark:group-hover/hub:text-cyan-400 truncate">
                                    {hub.name}
                                  </span>
                                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">
                                    {hub.area} • {hub.address}
                                  </span>
                                </div>
                              </div>
                              <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover/hub:translate-x-1 group-hover/hub:text-violet-600 dark:group-hover/hub:text-cyan-400 transition-all shrink-0 ml-2" />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Quick Calculator Shortcut inside Dropdown */}
                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                        <a
                          href="#calculator"
                          onClick={(e) => handleScrollTo(e, "calculator")}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-violet-50 to-cyan-50 dark:from-violet-950/40 dark:to-cyan-950/40 border border-violet-100 dark:border-violet-900/40 text-violet-700 dark:text-cyan-300 hover:scale-[1.01] transition-transform text-xs font-bold"
                        >
                          <span className="flex items-center gap-2">
                            <Sparkles className="h-3.5 w-3.5 text-violet-600 dark:text-cyan-400" />
                            <span>{lang === "ID" ? "Hitung Ongkir Otomatis (Kalkulator)" : "Calculate Freight Rates Online"}</span>
                          </span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </div>

                    </div>
                  </div>
                )}
              </div>

              {/* Other main nav links with smooth scrolling */}
              {mainNavItems.slice(1).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.targetId)}
                  className="font-sans font-medium text-slate-700 dark:text-slate-200 hover:text-violet-600 dark:hover:text-cyan-400 transition-colors text-sm px-2 py-1.5 rounded-lg hover:bg-slate-100/60 dark:hover:bg-slate-800/40"
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
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all text-xs font-semibold cursor-pointer"
              >
                <Globe className="h-4 w-4 text-violet-600 dark:text-cyan-400" />
                <span>{lang}</span>
              </button>

              {/* Dark mode toggle */}
              <button
                id="theme-toggle"
                onClick={toggleTheme}
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
                aria-label="Toggle Theme"
              >
                {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4 text-amber-400" />}
              </button>

              {/* CTA Login Button */}
              <a
                href="https://ttrans-log.base44.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-sans font-bold px-5 py-2.5 rounded-xl transition-all shadow-md hover:shadow-violet-500/20 text-sm cursor-pointer"
              >
                <LogIn className="h-4 w-4" />
                <span>Login Dashboard</span>
              </a>
            </div>

            {/* Mobile hamburger & toggles */}
            <div className="lg:hidden flex items-center gap-2.5">
              <button
                onClick={() => setLang(lang === "ID" ? "EN" : "ID")}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold"
              >
                <Globe className="h-3.5 w-3.5 text-violet-600 dark:text-cyan-400" />
                <span>{lang}</span>
              </button>

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

        {/* Mobile Drawer Menu */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[73px] bg-[#f8fafc]/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300 transform origin-top max-h-[85vh] overflow-y-auto ${
            isOpen ? "scale-y-100 opacity-100 visible" : "scale-y-0 opacity-0 invisible"
          }`}
        >
          <div className="px-4 pt-3 pb-6 space-y-2">
            {/* Beranda */}
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, "home")}
              className="block px-3 py-2.5 rounded-xl font-sans font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-violet-600 dark:hover:text-cyan-400 transition-all text-sm"
            >
              {t.navHome}
            </a>

            {/* Mobile Layanan Accordion Submenu */}
            <div className="border-y border-slate-200 dark:border-slate-800/80 py-2 my-1">
              <button
                type="button"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-xl font-sans font-bold text-slate-800 dark:text-slate-100 hover:text-violet-600 dark:hover:text-cyan-400 transition-all text-sm cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-violet-600 dark:text-cyan-400" />
                  <span>{t.navServices}</span>
                </span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isMobileServicesOpen && (
                <div className="pl-4 pr-2 pt-2 space-y-2 animate-fadeIn">
                  <a
                    href="#services"
                    onClick={(e) => handleScrollTo(e, "services")}
                    className="flex items-center gap-2 p-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <Layers className="h-3.5 w-3.5 text-violet-500" />
                    <span>Semua Moda Layanan Utama</span>
                  </a>

                  <a
                    href="#eastern-indonesia"
                    onClick={(e) => handleScrollTo(e, "eastern-indonesia")}
                    className="flex items-center gap-2 p-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <Compass className="h-3.5 w-3.5 text-amber-500" />
                    <span>Indonesia Timur & 3T</span>
                  </a>

                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-1">
                    <button
                      type="button"
                      onClick={(e) => handleScrollTo(e, "pickup-hubs")}
                      className="w-full text-left flex items-center justify-between p-2 rounded-lg text-xs font-bold text-violet-600 dark:text-cyan-400 bg-violet-50 dark:bg-violet-950/40"
                    >
                      <span className="flex items-center gap-1.5">
                        <Warehouse className="h-3.5 w-3.5" />
                        <span>Lokasi Penjemputan & Hub Kargo</span>
                      </span>
                      <ArrowRight className="h-3 w-3" />
                    </button>

                    {pickupHubsList.map((hub) => (
                      <button
                        key={hub.id}
                        type="button"
                        onClick={(e) => handleScrollTo(e, "pickup-hubs")}
                        className="w-full text-left pl-6 pr-2 py-1.5 text-[11px] text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-cyan-400 block truncate cursor-pointer"
                      >
                        • {hub.name} ({hub.area})
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other Nav Items */}
            {mainNavItems.slice(1).map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.targetId)}
                className="block px-3 py-2.5 rounded-xl font-sans font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-violet-600 dark:hover:text-cyan-400 transition-all text-sm"
              >
                {item.name}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <a
                href="https://ttrans-log.base44.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full text-center bg-violet-600 hover:bg-violet-700 text-white font-sans font-bold py-3 rounded-xl shadow-md transition-all text-sm"
              >
                <LogIn className="h-4 w-4" />
                <span>Login Dashboard</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Pickup Hubs Modal */}
      <PickupHubsModal
        isOpen={isPickupModalOpen}
        onClose={() => setIsPickupModalOpen(false)}
        lang={lang}
      />
    </>
  );
}
