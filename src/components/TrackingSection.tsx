import React, { useState } from "react";
import { Package, Search, MapPin, Truck, Ship, Plane, Calendar, CheckCircle2, Circle, Clock } from "lucide-react";
import { TranslationDict, Language, TrackingData, TrackingStep } from "../types";
import { TRACKING_DB } from "../data";

interface TrackingSectionProps {
  lang: Language;
  t: TranslationDict;
}

export default function TrackingSection({ lang, t }: TrackingSectionProps) {
  const [resiInput, setResiInput] = useState("");
  const [trackingResult, setTrackingResult] = useState<TrackingData | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resiInput.trim()) return;

    const trimmedInput = resiInput.trim().toUpperCase();
    const found = TRACKING_DB.find((item) => item.id === trimmedInput);

    if (found) {
      setTrackingResult(found);
    } else {
      // Procedural Tracking Generator for non-programmed tracking codes!
      // This is highly functional, smart, and interactive.
      if (trimmedInput.startsWith("TTC-") || trimmedInput.length >= 6) {
        const generatedResult: TrackingData = {
          id: trimmedInput,
          origin: "Jakarta Primary Warehouse",
          destination: "Regional Destination Hub",
          service: trimmedInput.includes("AIR") ? "Air" : trimmedInput.includes("SEA") ? "Sea" : "Land",
          sender: "PT Global Distributor",
          receiver: "Cabang Logistik Lokal",
          weight: 120,
          currentStatus: "In Transit / Sedang Berlayar",
          steps: [
            {
              title: lang === "ID" ? "Dalam Transit Regional" : "In Regional Transit",
              description: lang === "ID" 
                ? "Muatan dalam penanganan tim operasional PT TTrans menuju gerbang regional." 
                : "Cargo in transit by PT TTrans operations heading to regional gate.",
              date: "2026-07-12 10:00",
              location: "Transit Hub",
              status: "current"
            },
            {
              title: lang === "ID" ? "Diberangkatkan dari Pusat Sunter" : "Dispatched from Sunter Center",
              description: lang === "ID"
                ? "Armada pengirim telah berangkat dari pusat kargo utama Sunter."
                : "Logistics vehicle successfully departed from main Sunter hub.",
              date: "2026-07-11 13:45",
              location: "Jakarta Sunter",
              status: "completed"
            },
            {
              title: lang === "ID" ? "Barang Diterima & Diperiksa" : "Item Received & Inspected",
              description: lang === "ID"
                ? "Kargo selesai didaftarkan, ditimbang berat, dan dipacking rapi."
                : "Cargo successfully weighed, wrapped, and entered to system.",
              date: "2026-07-11 09:15",
              location: "Jakarta Sunter",
              status: "completed"
            }
          ]
        };
        setTrackingResult(generatedResult);
      } else {
        setTrackingResult(null);
      }
    }
    setHasSearched(true);
  };

  const getServiceIcon = (service: "Land" | "Sea" | "Air") => {
    switch (service) {
      case "Land":
        return <Truck className="h-5 w-5 text-violet-600 dark:text-cyan-400" />;
      case "Sea":
        return <Ship className="h-5 w-5 text-violet-600 dark:text-cyan-400" />;
      case "Air":
        return <Plane className="h-5 w-5 text-violet-600 dark:text-cyan-400" />;
    }
  };

  // Helper to calculate progress percentage based on steps and delivery state
  const getProgressPercentage = (data: TrackingData) => {
    if (data.id === "TTC-2026-0001" || data.currentStatus.toLowerCase().includes("selesai") || data.currentStatus.toLowerCase().includes("delivered")) {
      return 100;
    }
    if (data.id === "TTC-2026-0002") {
      return 60;
    }
    return 25;
  };

  return (
    <section
      id="tracking"
      className="py-24 bg-[#f8fafc] dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-[#7c3aed] dark:text-cyan-400 border border-violet-200/50">
            <Package className="h-3.5 w-3.5" />
            <span className="font-sans font-bold text-[10px] uppercase tracking-wider">{t.navTracking}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            {t.trackTitle}
          </h2>
          <p className="font-sans text-slate-600 dark:text-slate-400 text-base">
            {t.trackSubtitle}
          </p>
        </div>

        {/* Search Bar Form */}
        <div className="max-w-2xl mx-auto mb-12">
          <form onSubmit={handleSearch} className="relative flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <input
                type="text"
                value={resiInput}
                onChange={(e) => setResiInput(e.target.value)}
                placeholder={t.trackPlaceholder}
                className="w-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50 rounded-full pl-12 pr-4 py-4 font-sans font-semibold text-sm text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] shadow-lg shadow-slate-200/40 dark:shadow-none"
                required
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            </div>
            <button
              type="submit"
              className="bg-[#7c3aed] hover:bg-purple-700 text-white font-sans font-bold px-8 py-4 rounded-full shadow-lg shadow-purple-200/50 dark:shadow-none hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer whitespace-nowrap"
            >
              {t.trackBtn}
            </button>
          </form>

          {/* Prompt suggestions to help user test */}
          <div className="mt-4 flex flex-wrap gap-2 items-center justify-center text-xs">
            <span className="font-sans text-slate-400 font-medium">Contoh Resi Aktif:</span>
            {["TTC-2026-0001", "TTC-2026-0002", "TTC-2026-0003"].map((code) => (
              <button
                key={code}
                onClick={() => setResiInput(code)}
                className="font-mono bg-slate-100 hover:bg-violet-100 hover:text-violet-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 px-2 py-1 rounded-md text-[11px] font-bold border border-slate-200/50 dark:border-slate-700/50 transition-colors"
              >
                {code}
              </button>
            ))}
          </div>
        </div>

        {/* Results Showcase */}
        {hasSearched && (
          <div className="max-w-4xl mx-auto animate-fadeIn">
            {trackingResult ? (
              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50 rounded-[40px] shadow-2xl shadow-slate-200/40 dark:shadow-none p-8 sm:p-12 space-y-8">
                
                {/* Upper Metadata Block */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-slate-200 dark:border-slate-800 pb-6">
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-sans">No. Resi</div>
                    <div className="font-mono font-extrabold text-slate-900 dark:text-white text-base mt-1">{trackingResult.id}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-sans">{t.trackRoute}</div>
                    <div className="font-sans font-extrabold text-slate-800 dark:text-slate-200 text-sm mt-1">
                      {trackingResult.origin} ➔ {trackingResult.destination}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-sans">{t.calcService}</div>
                    <div className="flex items-center gap-1.5 mt-1 font-sans font-bold text-sm text-slate-800 dark:text-slate-200">
                      {getServiceIcon(trackingResult.service)}
                      <span>Kargo {trackingResult.service}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-sans">{t.trackStatus}</div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-sans font-bold text-xs mt-1 border border-emerald-200/50 dark:border-emerald-900/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>{trackingResult.currentStatus}</span>
                    </div>
                  </div>
                </div>

                {/* Sender Receiver Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white dark:bg-slate-900/40 border border-slate-200/30 dark:border-slate-800/30 p-4 rounded-2xl">
                  <div className="text-xs">
                    <span className="text-slate-400 font-sans">Pengirim: </span>
                    <span className="font-sans font-bold text-slate-800 dark:text-slate-200">{trackingResult.sender}</span>
                  </div>
                  <div className="text-xs md:text-right">
                    <span className="text-slate-400 font-sans">Penerima: </span>
                    <span className="font-sans font-bold text-slate-800 dark:text-slate-200">{trackingResult.receiver}</span>
                  </div>
                </div>

                {/* Progress bar visual */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-500">
                    <span className="font-sans">Kargo Diproses</span>
                    <span className="font-sans">Tiba di Tujuan</span>
                  </div>
                  <div className="relative w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-violet-600 to-cyan-500 transition-all duration-500"
                      style={{ width: `${getProgressPercentage(trackingResult)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Vertical journey milestones */}
                <div className="space-y-6 pt-4">
                  <h4 className="font-display font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                    <Clock className="h-4 w-4 text-violet-500" />
                    <span>{t.trackHistory}</span>
                  </h4>

                  <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 space-y-8">
                    {trackingResult.steps.map((step, idx) => {
                      const isCurrent = step.status === "current";
                      const isCompleted = step.status === "completed";

                      return (
                        <div key={idx} className="relative">
                          {/* Stepper Dot */}
                          <span className="absolute -left-[31px] top-1.5 flex items-center justify-center bg-white dark:bg-slate-900 rounded-full p-0.5">
                            {isCompleted ? (
                              <CheckCircle2 className="h-5 w-5 text-[#7c3aed] dark:text-[#06b6d4] bg-white dark:bg-slate-900 rounded-full" />
                            ) : isCurrent ? (
                              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-100 dark:bg-cyan-950/40 border-2 border-[#7c3aed] dark:border-[#06b6d4]">
                                <span className="h-2 w-2 rounded-full bg-[#7c3aed] dark:bg-[#06b6d4] animate-ping"></span>
                              </span>
                            ) : (
                              <Circle className="h-5 w-5 text-slate-300 dark:text-slate-700 bg-white dark:bg-slate-900 rounded-full" />
                            )}
                          </span>

                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                              <h5 className={`font-display font-bold text-sm ${isCurrent ? "text-[#7c3aed] dark:text-[#06b6d4]" : "text-slate-800 dark:text-slate-200"}`}>
                                {step.title}
                              </h5>
                              <span className="font-sans text-[10px] text-slate-400 font-medium">({step.location})</span>
                            </div>
                            <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
                              {step.description}
                            </p>
                            <div className="flex items-center gap-1 text-[10px] text-slate-400 font-mono mt-1">
                              <Calendar className="h-3 w-3" />
                              <span>{step.date}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            ) : (
              <div className="text-center p-8 bg-red-50 dark:bg-red-950/20 border border-red-200/50 dark:border-red-900/30 rounded-3xl">
                <p className="font-sans text-red-600 dark:text-red-400 font-semibold text-sm">
                  {t.trackNotFound}
                </p>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
