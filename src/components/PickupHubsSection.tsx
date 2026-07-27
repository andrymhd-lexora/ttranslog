import React from "react";
import { MapPin, Navigation, Phone, ExternalLink, ShieldCheck, Truck, Warehouse, Clock, Compass } from "lucide-react";
import { Language } from "../types";

interface PickupHubsSectionProps {
  lang: Language;
}

export const PICKUP_LOCATIONS = [
  {
    id: "hub-jakpus",
    region: "Jakarta Pusat",
    titleID: "Hub Konsolidasi Pusat Mangga Dua",
    titleEN: "Central Mangga Dua Cargo Hub",
    badgeID: "Hub Konsolidasi Utama",
    badgeEN: "Main Consolidation Hub",
    address: "Jl. Pangeran Jayakarta No.62a, RT.10/RW.010, Mangga Dua Sel., Kecamatan Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10730",
    lat: -6.144967221921647,
    lng: 106.83198172322537,
    gmapsUrl: "https://maps.app.goo.gl/yqSuBTvS3vuEhMRz8",
    featuresID: [
      "Penerimaan Kargo Komersial & Retail",
      "Area Timbangan Digital Heavy Duty",
      "Transit Cold & Dry Storage Area",
      "Armada Penjemputan Fast Response"
    ],
    featuresEN: [
      "Commercial & Retail Cargo Reception",
      "Heavy Duty Digital Scale Zone",
      "Cold & Dry Storage Area",
      "Fast Response Pickup Fleet"
    ],
    hours: "08.00 - 21.00 WIB",
    phone: "0896-3795-4637",
    waNumber: "6289637954637"
  },
  {
    id: "hub-jaktim",
    region: "Jakarta Timur",
    titleID: "Hub Cross-Docking & Transit Kramat Jati",
    titleEN: "East Kramat Jati Cross-Docking Hub",
    badgeID: "Transit & Cross-Docking",
    badgeEN: "Transit & Cross-Docking",
    address: "Kansa Residence, Jl. H. Taiman Ujung No.17 Blk G, RT.7/RW.4, Kp. Tengah, Kec. Kramat Jati, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13540",
    lat: -6.294941171308986,
    lng: 106.86768748183098,
    gmapsUrl: "https://www.google.com/maps?q=-6.294941171308986,106.86768748183098",
    featuresID: [
      "Akses Langsung Tol JORR & Jagorawi",
      "Penanganan Kargo Alat Berat & Container",
      "Layanan Packing Kayu & Wrapping",
      "Fasilitas In-Out Loading 24 Jam"
    ],
    featuresEN: [
      "Direct Access to JORR & Jagorawi Toll",
      "Heavy Cargo & Container Handling",
      "Wooden Crate Packing & Wrapping",
      "24-Hour In-Out Loading Bay"
    ],
    hours: "24 Jam Nonstop",
    phone: "0858-3083-1654",
    waNumber: "6285830831654"
  },
  {
    id: "hub-jaksel",
    region: "Jakarta Selatan",
    titleID: "Kantor Pusat & Central Warehouse Kebayoran Lama",
    titleEN: "Head Office & Main Warehouse Kebayoran Lama",
    badgeID: "Kantor Pusat & Gudang Utama",
    badgeEN: "Headquarters & Central Depot",
    address: "Jl. Bungur No.1D, RT.1/RW.1, Kby. Lama Utara, Kec. Kebayoran Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12240",
    lat: -6.247248863468717,
    lng: 106.77924482322648,
    gmapsUrl: "https://www.google.com/maps?q=-6.247248863468717,106.77924482322648",
    featuresID: [
      "Layanan Administrasi & Kontrak Korporat",
      "Warehousing & Inventory Fulfillment",
      "Monitoring Manifest & Dispatch Center",
      "Free Consultation & Waybill Counter"
    ],
    featuresEN: [
      "Corporate Contract & Admin Center",
      "Warehousing & Inventory Fulfillment",
      "Manifest & Dispatch Monitoring Center",
      "Free Consultation & Waybill Counter"
    ],
    hours: "08.00 - 20.00 WIB",
    phone: "0858-3083-1654",
    waNumber: "6285830831654"
  }
];

export default function PickupHubsSection({ lang }: PickupHubsSectionProps) {
  const getWaPickupLink = (hubTitle: string, waNum: string = "6285830831654") => {
    const text = `Halo Admin T Trans Logistik, saya ingin request *PENJEMPUTAN KARGO (PICKUP)* ke lokasi saya dari *${hubTitle}*.\n\nMohon petunjuk jadwal penjemputan dan armada yang tersedia. Terima kasih!`;
    return `https://wa.me/${waNum}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="pickup-hubs" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300">
            <Warehouse className="h-3.5 w-3.5" />
            <span className="font-sans font-bold text-[10px] uppercase tracking-wider">
              {lang === "ID" ? "Jaringan Hub & Titik Penjemputan" : "Pickup Hubs & Consolidation Network"}
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            {lang === "ID"
              ? "Lokasi Penjemputan Kargo & Hub Konsolidasi Logistik"
              : "Cargo Pickup Locations & Logistics Consolidation Hubs"}
          </h2>

          <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
            {lang === "ID"
              ? "PT Tungkal Trans Indonesia menyediakan 3 titik strategis pergudangan, cross-docking, dan hub konsolidasi kargo di DKI Jakarta untuk kemudahan Drop-Off maupun layanan Shuttle Pickup Door-to-Door."
              : "PT Tungkal Trans Indonesia provides 3 strategic warehousing and consolidation hubs across Jakarta for convenient cargo drop-off and door-to-door shuttle pickup."}
          </p>
        </div>

        {/* 3 Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PICKUP_LOCATIONS.map((loc) => {
            const title = lang === "ID" ? loc.titleID : loc.titleEN;
            const badge = lang === "ID" ? loc.badgeID : loc.badgeEN;
            const features = lang === "ID" ? loc.featuresID : loc.featuresEN;

            return (
              <div
                key={loc.id}
                className="bg-slate-800/80 border border-slate-700/80 hover:border-cyan-400/60 rounded-[28px] p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="space-y-5">
                  {/* Badge & Region */}
                  <div className="flex items-center justify-between">
                    <span className="bg-violet-500/20 text-cyan-300 border border-cyan-400/30 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full">
                      {badge}
                    </span>
                    <span className="text-slate-400 text-xs font-mono flex items-center gap-1">
                      <Compass className="h-3.5 w-3.5 text-amber-400" />
                      {loc.region}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-extrabold text-lg text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {title}
                  </h3>

                  {/* Address Box */}
                  <div className="p-3.5 bg-slate-900/90 rounded-2xl border border-slate-700/60 space-y-2 text-xs">
                    <div className="flex items-start gap-2 text-slate-300 leading-relaxed">
                      <MapPin className="h-4 w-4 text-violet-400 shrink-0 mt-0.5" />
                      <span>{loc.address}</span>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1 font-mono">
                        <Clock className="h-3 w-3 text-cyan-400" />
                        {loc.hours}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-emerald-400 text-[10px]">
                        <Phone className="h-3 w-3" />
                        {loc.phone}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                      {lang === "ID" ? "Fasilitas & Layanan Hub:" : "Hub Facilities & Services:"}
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 mt-6 border-t border-slate-700/60 grid grid-cols-2 gap-2">
                  <a
                    href={loc.gmapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-slate-700 hover:bg-slate-600 text-white font-bold py-2.5 px-3 rounded-xl transition-all text-xs border border-slate-600"
                  >
                    <Navigation className="h-3.5 w-3.5 text-cyan-400" />
                    <span>Petunjuk Map</span>
                  </a>

                  <a
                    href={getWaPickupLink(title, loc.waNumber)}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex items-center justify-center gap-1.5 bg-violet-600 hover:bg-violet-500 text-white font-bold py-2.5 px-3 rounded-xl transition-all text-xs shadow-md"
                  >
                    <Truck className="h-3.5 w-3.5" />
                    <span>Request Pickup</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner Footnote */}
        <div className="p-4 sm:p-6 bg-slate-800/50 rounded-2xl border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-emerald-400 shrink-0" />
            <p>
              {lang === "ID"
                ? "Layanan Penjemputan (Shuttle Pickup) GRATIS untuk wilayah DKI Jakarta dengan ketentuan minimum tonase muatan. Hubungi Tim Marketing untuk penjadwalan."
                : "FREE Cargo Shuttle Pickup service within Jakarta subject to minimum shipment weight terms. Contact Marketing Team for dispatch scheduling."}
            </p>
          </div>
          <a
            href="https://wa.me/6285830831654?text=Halo%20Admin%20T%20Trans%20Logistik%20saya%20ingin%20jadwalkan%20penjemputan%20kargo"
            target="_blank"
            referrerPolicy="no-referrer"
            className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold px-5 py-2.5 rounded-xl transition-all shrink-0 uppercase text-xs tracking-wider"
          >
            {lang === "ID" ? "Jadwalkan Penjemputan" : "Schedule Pickup"}
          </a>
        </div>

      </div>
    </section>
  );
}
