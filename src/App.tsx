import React, { useState, useEffect } from "react";
import { Language, Theme } from "./types";
import { ID_TRANSLATION, EN_TRANSLATION } from "./data";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import ServicesSection from "./components/ServicesSection";
import TrackingSection from "./components/TrackingSection";
import PricingSection from "./components/PricingSection";
import FaqSection from "./components/FaqSection";
import TestimonialSection from "./components/TestimonialSection";
import ChatWidget from "./components/ChatWidget";
import Footer from "./components/Footer";

export default function App() {
  // Lang state, defaults to Indonesian
  const [lang, setLang] = useState<Language>("ID");
  
  // Theme state, defaults to light
  const [theme, setTheme] = useState<Theme>("light");

  // Load translations based on chosen language
  const t = lang === "ID" ? ID_TRANSLATION : EN_TRANSLATION;

  // Initialize and persist theme class on the main html element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`min-h-screen bg-[#f8fafc] dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden ${theme}`}>
      {/* Background Organic Shapes - Natural Tones Theme */}
      <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 bg-[#06b6d4]/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header / Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
        t={t}
      />

      {/* Hero fold & Rate Calculator */}
      <Hero lang={lang} t={t} />

      {/* Social proof logos */}
      <SocialProof t={t} />

      {/* Services grid (Land, Sea, Air) */}
      <ServicesSection lang={lang} t={t} />

      {/* Cargo Tracking Simulator */}
      <TrackingSection lang={lang} t={t} />

      {/* Pricing Rate Cards */}
      <PricingSection lang={lang} t={t} />

      {/* FAQ collapsible search list */}
      <FaqSection lang={lang} t={t} />

      {/* Client reviews with Loading Skeletons */}
      <TestimonialSection lang={lang} t={t} />

      {/* Interactive AI chatbot widget (Gemini full-stack) */}
      <ChatWidget lang={lang} />

      {/* Footer & Contact quote form */}
      <Footer lang={lang} t={t} />
    </div>
  );
}
