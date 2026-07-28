import React, { useState, useMemo } from "react";
import {
  Calculator,
  MapPin,
  Scale,
  MessageSquare,
  Plane,
  Ship,
  Package,
  Truck,
  Anchor,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Search,
  Sparkles,
  Info
} from "lucide-react";
import { Language } from "../types";
import {
  ALL_DESTINATION_NAMES,
  FREIGHT_MODES,
  getRateForRoute,
  DestinationRate,
  AIR_COMMERCIAL_PTD,
  AIR_FREIGHTER_PTD,
  AIR_NON_COMMERCIAL_PTD,
  SEA_CARGO_PTD,
  SEA_PELNI_3T
} from "../tariffData";

import VolumetricFormulaModal from "./VolumetricFormulaModal";

interface RateCalculatorProps {
  lang: Language;
  compactMode?: boolean;
}

export default function RateCalculator({ lang, compactMode = false }: RateCalculatorProps) {
  const origin = "JAKARTA (CGK / JKT)";

  // Form states
  const [destination, setDestination] = useState<string>("Jambi");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [customDestination, setCustomDestination] = useState<string>("");

  const [modeId, setModeId] = useState<string>("air_commercial_ptd");
  const [airlineType, setAirlineType] = useState<"general" | "lion">("general");

  const [weight, setWeight] = useState<number | "">(50);
  const [length, setLength] = useState<number | "">("");
  const [width, setWidth] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");

  const [showComparison, setShowComparison] = useState<boolean>(false);
  const [isFormulaModalOpen, setIsFormulaModalOpen] = useState<boolean>(false);

  // Filtered destination list for search
  const filteredDestinations = useMemo(() => {
    if (!searchTerm) return ALL_DESTINATION_NAMES;
    return ALL_DESTINATION_NAMES.filter((city) =>
      city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Selected mode metadata
  const selectedMode = useMemo(
    () => FREIGHT_MODES.find((m) => m.id === modeId) || FREIGHT_MODES[0],
    [modeId]
  );

  // Active divider calculation
  const currentDivider = useMemo(() => {
    if (modeId === "air_commercial_ptd" && airlineType === "lion") {
      return 5000;
    }
    return selectedMode.defaultDivider;
  }, [modeId, airlineType, selectedMode]);

  // Effective destination name
  const effectiveDest = useMemo(() => {
    if (destination === "Kota / Kecamatan Lainnya..." && customDestination.trim()) {
      return customDestination.trim();
    }
    return destination;
  }, [destination, customDestination]);

  // Rate lookup from official dataset
  const matchedRate = useMemo(() => {
    if (!effectiveDest || destination === "Kota / Kecamatan Lainnya...") return null;
    return getRateForRoute(modeId, effectiveDest);
  }, [modeId, effectiveDest, destination]);

  // Minimum weight rules
  const applicableMinWeight = useMemo(() => {
    if (matchedRate && matchedRate.minWeight !== undefined) {
      return matchedRate.minWeight;
    }
    return selectedMode.minWeightDefault;
  }, [matchedRate, selectedMode]);

  // Volumetric weight calculation
  const volumetricWeight = useMemo(() => {
    const l = Number(length) || 0;
    const w = Number(width) || 0;
    const h = Number(height) || 0;
    if (l > 0 && w > 0 && h > 0) {
      return Math.round(((l * w * h) / currentDivider) * 10) / 10;
    }
    return 0;
  }, [length, width, height, currentDivider]);

  const actualWeightNum = Number(weight) || 0;

  // Highest weight between actual & volumetric
  const highestWeight = Math.max(actualWeightNum, volumetricWeight);

  // Chargeable Weight considering minimum threshold
  const chargeableWeight = Math.max(highestWeight, applicableMinWeight);

  // Total price calculation
  const unitPrice = matchedRate ? matchedRate.price : 0;
  const totalPrice = unitPrice > 0 ? chargeableWeight * unitPrice : 0;

  // Format currency helper
  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(val);
  };

  // Helper to get rates across ALL modes for comparison
  const modeComparisonList = useMemo(() => {
    if (!effectiveDest || destination === "Kota / Kecamatan Lainnya...") return [];

    return FREIGHT_MODES.map((mode) => {
      const rate = getRateForRoute(mode.id, effectiveDest);
      const minW = rate && rate.minWeight !== undefined ? rate.minWeight : mode.minWeightDefault;
      const divider = mode.id === "air_commercial_ptd" && airlineType === "lion" ? 5000 : mode.defaultDivider;
      
      const volW = (Number(length) || 0) * (Number(width) || 0) * (Number(height) || 0) / divider;
      const chargeW = Math.max(actualWeightNum, Math.round(volW * 10) / 10, minW);
      const totPrice = rate && rate.price > 0 ? chargeW * rate.price : 0;

      return {
        mode,
        rate,
        minW,
        chargeW,
        totPrice
      };
    });
  }, [effectiveDest, destination, actualWeightNum, length, width, height, airlineType]);

  // Generate WhatsApp prefilled message
  const generateWaUrl = (targetModeName?: string, targetRate?: DestinationRate | null) => {
    const modeName = targetModeName || selectedMode.nameID;
    const rateObj = targetRate !== undefined ? targetRate : matchedRate;
    const ratePrice = rateObj ? rateObj.price : 0;
    const tlc = rateObj ? rateObj.tlc : "-";
    const leadTime = rateObj ? rateObj.leadTime : "-";

    const dimStr =
      Number(length) > 0 && Number(width) > 0 && Number(height) > 0
        ? `${length} x ${width} x ${height} cm`
        : "Tidak Diisi";

    const calcTotalStr = ratePrice > 0 ? formatRupiah(chargeableWeight * ratePrice) : "Perlu Konfirmasi Marketing";

    const text =
      `Halo Marketing PT Tungkal Trans Indonesia,\n` +
      `Saya ingin konfirmasi tarif & pemesanan pengiriman kargo:\n\n` +
      `📌 *RUTE PENGIRIMAN*\n` +
      `- Asal: ${origin}\n` +
      `- Tujuan: ${effectiveDest} (Kode TLC: ${tlc})\n` +
      `- Moda Transportasi: ${modeName}\n\n` +
      `📦 *RINCIAN MUATAN*\n` +
      `- Berat Timbangan: ${actualWeightNum} Kg\n` +
      `- Dimensi (PxLxT): ${dimStr}\n` +
      `- Berat Volumetrik: ${volumetricWeight} Kg (Divider ${currentDivider})\n` +
      `- Syarat Min. Berat: ${applicableMinWeight} Kg\n` +
      `- *Berat Kena Charge*: ${chargeableWeight} Kg\n\n` +
      `💰 *ESTIMASI BIAYA*\n` +
      `- Tarif per Kg: ${ratePrice > 0 ? formatRupiah(ratePrice) + " / Kg" : "Konfirmasi Marketing"}\n` +
      `- Total Estimasi Base Rate: *${calcTotalStr}*\n` +
      `- Estimasi Lead Time: ${leadTime} Hari\n\n` +
      `Mohon info ketersediaan armada, jadwal penjemputan, dan prosedur pengiriman. Terima kasih!`;

    return `https://wa.me/6285830831654?text=${encodeURIComponent(text)}`;
  };

  const getModeIcon = (id: string) => {
    switch (id) {
      case "sea_cargo_ptd":
        return <Ship className="h-4 w-4" />;
      case "sea_pelni_3t":
        return <Anchor className="h-4 w-4" />;
      case "air_commercial_ptd":
        return <Plane className="h-4 w-4" />;
      case "air_freighter_ptd":
        return <Package className="h-4 w-4" />;
      case "air_non_commercial_ptd":
        return <Truck className="h-4 w-4" />;
      default:
        return <Truck className="h-4 w-4" />;
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-[32px] shadow-2xl shadow-slate-200/60 dark:shadow-none p-5 sm:p-7 relative overflow-hidden transition-all duration-300">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#7c3aed]/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Calculator Header */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-violet-100 dark:bg-violet-950/60 text-[#7c3aed] dark:text-cyan-400 rounded-2xl border border-violet-200/50 dark:border-violet-800/40 shadow-sm">
            <Calculator className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-display font-black text-xl text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <span>{lang === "ID" ? "Kalkulator Tarif Ongkir" : "Cargo Freight Calculator"}</span>
            </h3>
            <p className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {lang === "ID"
                ? "Skema Biaya Resmi PT Tungkal Trans Indonesia (Origin: Jakarta)"
                : "Official Rate Database (Origin: Jakarta CGK)"}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {/* Origin & Destination inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Origin - Fixed to Jakarta */}
          <div className="space-y-1">
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-violet-600 dark:text-cyan-400" />
              {lang === "ID" ? "Kota Asal (Terkunci)" : "Origin City (Fixed)"}
            </label>
            <div className="w-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 font-sans font-extrabold text-xs text-slate-800 dark:text-slate-100 flex items-center justify-between shadow-inner">
              <span>JAKARTA (CGK / JKT)</span>
              <span className="text-[9px] bg-emerald-500 text-white font-extrabold px-2 py-0.5 rounded-md uppercase">
                ORIGIN
              </span>
            </div>
          </div>

          {/* Destination dropdown with search */}
          <div className="space-y-1 relative">
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-cyan-500" />
              {lang === "ID" ? "Kota Tujuan Pengiriman" : "Destination City"}
            </label>

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-left text-xs font-bold text-slate-800 dark:text-white flex items-center justify-between focus:ring-2 focus:ring-violet-500 cursor-pointer"
              >
                <span className="truncate">{destination}</span>
                <Search className="h-3.5 w-3.5 text-slate-400 shrink-0 ml-2" />
              </button>

              {/* Custom Search Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 z-50 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl p-2 space-y-2 max-h-60 overflow-y-auto">
                  <div className="sticky top-0 bg-white dark:bg-slate-900 z-10 pb-1">
                    <input
                      type="text"
                      placeholder="Cari kota tujuan..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-800 dark:text-white focus:outline-none"
                      autoFocus
                    />
                  </div>

                  <div className="space-y-0.5">
                    {filteredDestinations.map((city) => (
                      <button
                        key={city}
                        type="button"
                        onClick={() => {
                          setDestination(city);
                          setIsDropdownOpen(false);
                          setSearchTerm("");
                        }}
                        className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between ${
                          destination === city
                            ? "bg-violet-600 text-white font-bold"
                            : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                        }`}
                      >
                        <span>{city}</span>
                        {destination === city && <CheckCircle2 className="h-3.5 w-3.5" />}
                      </button>
                    ))}

                    <button
                      type="button"
                      onClick={() => {
                        setDestination("Kota / Kecamatan Lainnya...");
                        setIsDropdownOpen(false);
                        setSearchTerm("");
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs font-bold text-violet-600 dark:text-cyan-400 hover:bg-violet-50 dark:hover:bg-violet-950/40 border-t border-slate-100 dark:border-slate-800 mt-1"
                    >
                      + Kota / Kecamatan Lainnya...
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Custom Destination Input if selected */}
        {destination === "Kota / Kecamatan Lainnya..." && (
          <div className="space-y-1 animate-fadeIn">
            <label className="block text-[10px] font-bold text-violet-600 dark:text-cyan-400 uppercase">
              Tuliskan Nama Kota / Kecamatan / Kabupaten Tujuan:
            </label>
            <input
              type="text"
              value={customDestination}
              onChange={(e) => setCustomDestination(e.target.value)}
              placeholder="Contoh: Masohi, Muara Tebo, Tobelo, dll."
              className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-sans font-semibold text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
        )}

        {/* Freight Mode Selector Pills */}
        <div className="space-y-1.5">
          <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
            {lang === "ID" ? "Pilih Jenis Moda Transportasi:" : "Transportation Mode:"}
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {FREIGHT_MODES.map((mode) => (
              <button
                key={mode.id}
                type="button"
                onClick={() => setModeId(mode.id)}
                className={`p-2.5 rounded-2xl border text-left transition-all flex items-start gap-2.5 cursor-pointer ${
                  modeId === mode.id
                    ? "bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-500/20 ring-2 ring-violet-400/30"
                    : "bg-slate-50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <div
                  className={`p-1.5 rounded-xl shrink-0 ${
                    modeId === mode.id
                      ? "bg-white/20 text-white"
                      : "bg-violet-100 dark:bg-slate-700 text-violet-600 dark:text-cyan-400"
                  }`}
                >
                  {getModeIcon(mode.id)}
                </div>
                <div>
                  <div className="font-extrabold text-[11px] leading-tight">
                    {lang === "ID" ? mode.nameID : mode.nameEN}
                  </div>
                  <div className="text-[10px] opacity-80 mt-0.5 font-medium flex items-center gap-1">
                    <span className="font-mono">Div: {mode.defaultDivider.toLocaleString("id-ID")}</span>
                    <span>•</span>
                    <span>Min {mode.minWeightDefault} Kg</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Airline Option for Commercial Air */}
        {modeId === "air_commercial_ptd" && (
          <div className="p-3 bg-violet-50 dark:bg-violet-950/40 rounded-2xl border border-violet-200 dark:border-violet-900/60 flex items-center justify-between text-xs animate-fadeIn">
            <span className="font-bold text-violet-900 dark:text-violet-200 text-[11px]">
              Maskapai Pengiriman:
            </span>
            <div className="flex gap-1.5 font-bold text-[10px]">
              <button
                type="button"
                onClick={() => setAirlineType("general")}
                className={`px-3 py-1 rounded-xl border transition-all ${
                  airlineType === "general"
                    ? "bg-violet-600 text-white border-violet-600 shadow-sm"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700"
                }`}
              >
                Garuda/Citilink/Sriwijaya (Divider 6.000)
              </button>
              <button
                type="button"
                onClick={() => setAirlineType("lion")}
                className={`px-3 py-1 rounded-xl border transition-all ${
                  airlineType === "lion"
                    ? "bg-violet-600 text-white border-violet-600 shadow-sm"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700"
                }`}
              >
                Lion Air (Divider 5.000)
              </button>
            </div>
          </div>
        )}

        {/* Weight & Dimensions Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Weight */}
          <div className="space-y-1">
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1">
              <Scale className="h-3.5 w-3.5 text-violet-600 dark:text-cyan-400" />
              {lang === "ID" ? "Berat Timbangan (Kg)" : "Actual Weight (Kg)"}
            </label>
            <input
              type="number"
              min="1"
              value={weight}
              onChange={(e) => setWeight(e.target.value === "" ? "" : Number(e.target.value))}
              className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 font-sans font-bold text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="Masukkan berat barang (kg)"
            />
          </div>

          {/* Dimensions */}
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                {lang === "ID" ? "Dimensi P x L x T (cm)" : "Dimensions L x W x H (cm)"}
              </label>
              <button
                type="button"
                onClick={() => setIsFormulaModalOpen(true)}
                className="inline-flex items-center gap-1 text-[10px] text-violet-600 dark:text-cyan-400 hover:underline font-extrabold cursor-pointer"
              >
                <Info className="h-3 w-3" />
                <span>Div {currentDivider.toLocaleString("id-ID")} (Rumus Volum)</span>
              </button>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              <input
                type="number"
                placeholder="P (cm)"
                value={length}
                onChange={(e) => setLength(e.target.value === "" ? "" : Number(e.target.value))}
                className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-2 py-2 text-center text-xs font-sans text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-violet-500"
              />
              <input
                type="number"
                placeholder="L (cm)"
                value={width}
                onChange={(e) => setWidth(e.target.value === "" ? "" : Number(e.target.value))}
                className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-2 py-2 text-center text-xs font-sans text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-violet-500"
              />
              <input
                type="number"
                placeholder="T (cm)"
                value={height}
                onChange={(e) => setHeight(e.target.value === "" ? "" : Number(e.target.value))}
                className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-2 py-2 text-center text-xs font-sans text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-violet-500"
              />
            </div>
          </div>
        </div>

        {/* Cost Result Display Panel */}
        <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-violet-50/30 dark:from-slate-800/80 dark:to-slate-900 border border-violet-200/80 dark:border-slate-700 space-y-3.5">
          <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-700 pb-2.5">
            <div>
              <span className="font-display font-black text-xs text-slate-900 dark:text-white uppercase tracking-wider block">
                HASIL KALKULASI ONGKIR RESMI
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">
                Jakarta → {effectiveDest} {matchedRate ? `(TLC: ${matchedRate.tlc})` : ""}
              </span>
            </div>
            {matchedRate && matchedRate.price > 0 ? (
              <span className="text-[10px] bg-emerald-500 text-white font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                TARIF TERSEDIA
              </span>
            ) : (
              <span className="text-[10px] bg-amber-500 text-white font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                KONFIRMASI WA
              </span>
            )}
          </div>

          {/* Key Metric Blocks */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800">
              <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-bold uppercase">
                Tarif / Kg
              </span>
              <span className="font-mono font-black text-violet-600 dark:text-cyan-400 block text-xs mt-0.5">
                {unitPrice > 0 ? formatRupiah(unitPrice) : "-"}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsFormulaModalOpen(true)}
              className="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800 hover:border-violet-400 text-left cursor-pointer transition-colors group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase">
                  Volumetrik
                </span>
                <Info className="h-3 w-3 text-violet-500 opacity-60 group-hover:opacity-100" />
              </div>
              <span className="font-mono font-bold text-slate-800 dark:text-slate-100 block text-xs mt-0.5">
                {volumetricWeight} Kg
              </span>
            </button>

            <div className="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800">
              <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-bold uppercase">
                Syarat Min.
              </span>
              <span className="font-mono font-bold text-slate-800 dark:text-slate-100 block text-xs mt-0.5">
                {applicableMinWeight} Kg
              </span>
            </div>

            <div className="bg-violet-600 text-white p-2.5 rounded-xl shadow-md">
              <span className="text-[10px] text-cyan-200 block font-black uppercase">
                Berat Charge
              </span>
              <span className="font-display font-black text-sm block mt-0.5">
                {chargeableWeight} Kg
              </span>
            </div>
          </div>

          {/* Total Price & Lead Time Banner */}
          <div className="bg-slate-900 dark:bg-slate-950 text-white p-4 rounded-2xl flex flex-wrap items-center justify-between gap-3 shadow-lg">
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider">
                ESTIMASI TOTAL BIAYA (BASE RATE)
              </span>
              <div className="font-display font-extrabold text-xl sm:text-2xl text-cyan-400 mt-0.5">
                {totalPrice > 0 ? formatRupiah(totalPrice) : "Hubungi Marketing"}
              </div>
            </div>

            <div className="text-right border-l border-slate-800 pl-4">
              <span className="text-[10px] text-slate-400 font-bold uppercase block">
                LEAD TIME TRANSIT
              </span>
              <span className="font-display font-bold text-amber-400 text-sm block mt-0.5">
                {matchedRate && matchedRate.leadTime && matchedRate.leadTime !== "-"
                  ? `${matchedRate.leadTime} Hari Kerja`
                  : "Sesuai Jadwal"}
              </span>
            </div>
          </div>

          {/* Special note for 0 price / specific route rules */}
          {matchedRate && matchedRate.price === 0 && (
            <div className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800/60 text-[11px] text-amber-900 dark:text-amber-200 flex items-start gap-2">
              <AlertCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                Untuk rute <strong>{effectiveDest}</strong> via {selectedMode.nameID}, tarif memerlukan verifikasi jadwal dan ketersediaan ruang kargo khusus. Silakan klik tombol di bawah untuk pesan langsung via WhatsApp.
              </span>
            </div>
          )}

          {/* Comparison Toggle Button */}
          <div className="pt-1 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setShowComparison(!showComparison)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7c3aed] dark:text-cyan-400 hover:underline cursor-pointer"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>
                {showComparison
                  ? "Sembunyikan Perbandingan Moda"
                  : `Bandingkan Semua Moda Ke ${effectiveDest}`}
              </span>
            </button>
          </div>

          {/* Mode Comparison Table */}
          {showComparison && modeComparisonList.length > 0 && (
            <div className="mt-3 p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 animate-fadeIn">
              <div className="text-[11px] font-bold text-slate-800 dark:text-slate-100 uppercase pb-1 border-b border-slate-100 dark:border-slate-800">
                Perbandingan Tarif Lengkap Rute: Jakarta → {effectiveDest}
              </div>

              <div className="space-y-1.5 text-xs">
                {modeComparisonList.map((comp) => (
                  <div
                    key={comp.mode.id}
                    className={`p-2.5 rounded-xl border flex flex-wrap items-center justify-between gap-2 transition-all ${
                      comp.mode.id === modeId
                        ? "bg-violet-50 dark:bg-violet-950/30 border-violet-300 dark:border-violet-700"
                        : "bg-slate-50 dark:bg-slate-800/40 border-slate-100 dark:border-slate-800"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="p-1 bg-violet-600 text-white rounded-lg text-[10px]">
                        {getModeIcon(comp.mode.id)}
                      </div>
                      <div>
                        <div className="font-bold text-[11px] text-slate-800 dark:text-slate-100">
                          {comp.mode.nameID}
                        </div>
                        <div className="text-[10px] text-slate-500">
                          Min {comp.minW}kg • Lead Time: {comp.rate ? comp.rate.leadTime : "-"} Hari
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-mono font-bold text-violet-600 dark:text-cyan-400 text-xs">
                        {comp.rate && comp.rate.price > 0
                          ? formatRupiah(comp.totPrice)
                          : "Konfirmasi WA"}
                      </div>
                      <div className="text-[10px] text-slate-500">
                        {comp.rate && comp.rate.price > 0
                          ? `(${formatRupiah(comp.rate.price)} / kg)`
                          : ""}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action WhatsApp Order Button */}
          <a
            href={generateWaUrl()}
            target="_blank"
            referrerPolicy="no-referrer"
            className="flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-sans font-extrabold py-3.5 rounded-full transition-all text-xs tracking-wide shadow-lg shadow-emerald-500/20 cursor-pointer uppercase mt-2"
          >
            <MessageSquare className="h-4.5 w-4.5" />
            <span>Pesan / Minta Penawaran via WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Volumetric Formula Explanation Modal */}
      <VolumetricFormulaModal
        isOpen={isFormulaModalOpen}
        onClose={() => setIsFormulaModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
