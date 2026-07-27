import React from "react";
import { X, Warehouse, MapPin, Navigation, Truck, Compass, Clock, Phone, ExternalLink } from "lucide-react";
import { Language } from "../types";
import { PICKUP_LOCATIONS } from "./PickupHubsSection";

interface PickupHubsModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export default function PickupHubsModal({ isOpen, onClose, lang }: PickupHubsModalProps) {
  if (!isOpen) return null;

  const getWaPickupLink = (hubTitle: string, waNum: string = "6285830831654") => {
    const text = `Halo Admin T Trans Logistik, saya ingin request *PENJEMPUTAN KARGO (PICKUP)* ke alamat saya dari *${hubTitle}*.\n\nMohon informasi jadwal armada dan estimasi penjemputan. Terima kasih!`;
    return `https://wa.me/${waNum}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fadeIn">
      <div
        className="bg-slate-900 border border-slate-800 text-white rounded-[32px] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-violet-950 text-cyan-400 rounded-2xl border border-violet-800">
            <Warehouse className="h-6 w-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-400 text-[10px] font-bold uppercase tracking-wider mb-1 border border-cyan-800/50">
              Jaringan Hub & Warehouse PT Tungkal Trans Indonesia
            </div>
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
              {lang === "ID" ? "Lokasi Penjemputan Kargo & Hub Konsolidasi" : "Cargo Pickup Locations & Consolidation Hubs"}
            </h3>
          </div>
        </div>

        {/* Info Note */}
        <p className="text-xs text-slate-300 leading-relaxed mb-6">
          {lang === "ID"
            ? "Pilih hub terdekat untuk Drop-Off mandiri kargo Anda, atau minta layanan Penjemputan (Shuttle Pickup) langsung ke kantor/pabrik/gudang Anda di wilayah Jabodetabek."
            : "Select the nearest hub for direct cargo drop-off, or request Shuttle Pickup directly from your warehouse/office in the Greater Jakarta area."}
        </p>

        {/* Grid of Locations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {PICKUP_LOCATIONS.map((loc) => {
            const title = lang === "ID" ? loc.titleID : loc.titleEN;
            const badge = lang === "ID" ? loc.badgeID : loc.badgeEN;
            const features = lang === "ID" ? loc.featuresID : loc.featuresEN;

            return (
              <div
                key={loc.id}
                className="bg-slate-800/90 border border-slate-700 rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:border-cyan-400/60 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-violet-900/60 text-cyan-300 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                      {badge}
                    </span>
                    <span className="text-[10px] font-mono text-amber-400">{loc.region}</span>
                  </div>

                  <h4 className="font-display font-extrabold text-sm text-white leading-snug">
                    {title}
                  </h4>

                  <div className="text-[11px] text-slate-300 space-y-1.5 p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                    <div className="flex items-start gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-violet-400 shrink-0 mt-0.5" />
                      <p className="line-clamp-3">{loc.address}</p>
                    </div>
                    <div className="pt-1.5 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                      <span>Jam: {loc.hours}</span>
                      <span className="flex items-center gap-1 text-emerald-400 font-bold">
                        <Phone className="h-3 w-3" />
                        {loc.phone}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Fasilitas:</span>
                    <ul className="space-y-1 text-[11px] text-slate-300">
                      {features.map((f, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
                          <span className="truncate">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-700/80 space-y-2">
                  <a
                    href={loc.gmapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 w-full bg-slate-700 hover:bg-slate-600 text-cyan-300 font-bold py-2 rounded-xl text-xs transition-colors"
                  >
                    <Navigation className="h-3.5 w-3.5" />
                    <span>Buka Google Maps</span>
                  </a>

                  <a
                    href={getWaPickupLink(title, loc.waNumber)}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex items-center justify-center gap-1.5 w-full bg-violet-600 hover:bg-violet-500 text-white font-bold py-2 rounded-xl text-xs transition-colors shadow-md"
                  >
                    <Truck className="h-3.5 w-3.5" />
                    <span>Request Pickup WA</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Close Button */}
        <div className="pt-2">
          <button
            onClick={onClose}
            type="button"
            className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-sans font-extrabold py-3 rounded-2xl transition-all text-xs tracking-wide shadow-md uppercase cursor-pointer"
          >
            Tutup Dialog
          </button>
        </div>
      </div>
    </div>
  );
}
