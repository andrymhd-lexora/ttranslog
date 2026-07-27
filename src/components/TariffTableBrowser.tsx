import React, { useState, useMemo } from "react";
import {
  Search,
  Plane,
  Ship,
  Anchor,
  Package,
  Truck,
  ArrowUpDown,
  Filter,
  CheckCircle2,
  HelpCircle,
  FileSpreadsheet
} from "lucide-react";
import {
  AIR_COMMERCIAL_PTD,
  AIR_FREIGHTER_PTD,
  AIR_NON_COMMERCIAL_PTD,
  SEA_CARGO_PTD,
  SEA_PELNI_3T,
  DestinationRate
} from "../tariffData";
import { Language } from "../types";

interface TariffTableBrowserProps {
  lang: Language;
}

type TableTab = "sea_cargo" | "sea_pelni" | "air_comm" | "air_freighter" | "air_non_comm";

export default function TariffTableBrowser({ lang }: TariffTableBrowserProps) {
  const [activeTab, setActiveTab] = useState<TableTab>("sea_cargo");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // Get current dataset based on tab
  const activeDataset: { title: string; minKgStr: string; dividerStr: string; data: DestinationRate[] } = useMemo(() => {
    switch (activeTab) {
      case "sea_cargo":
        return {
          title: "Kargo Laut - Kapal Cargo (Port to Door)",
          minKgStr: "Min 30 - 150 Kg (tergantung tujuan)",
          dividerStr: "4.000",
          data: SEA_CARGO_PTD
        };
      case "sea_pelni":
        return {
          title: "Kargo Laut - Kapal Pelni Area 3T",
          minKgStr: "Min 1 Kg",
          dividerStr: "4.000",
          data: SEA_PELNI_3T
        };
      case "air_comm":
        return {
          title: "Kargo Udara - Komersil Flight (Port to Door)",
          minKgStr: "Min 10 Kg",
          dividerStr: "6.000 (Lion Air 5.000)",
          data: AIR_COMMERCIAL_PTD
        };
      case "air_freighter":
        return {
          title: "Kargo Udara - Freighter Flight (Port to Door)",
          minKgStr: "Min 25 Kg",
          dividerStr: "6.000",
          data: AIR_FREIGHTER_PTD
        };
      case "air_non_comm":
        return {
          title: "Kargo Udara - Non-Komersil Flight (Port to Door)",
          minKgStr: "Min 50 Kg",
          dividerStr: "6.000",
          data: AIR_NON_COMMERCIAL_PTD
        };
    }
  }, [activeTab]);

  // Filtered and sorted data
  const processedData = useMemo(() => {
    let result = activeDataset.data;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.destination.toLowerCase().includes(q) ||
          item.tlc.toLowerCase().includes(q)
      );
    }

    return [...result].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.destination.localeCompare(b.destination);
      } else {
        return b.destination.localeCompare(a.destination);
      }
    });
  }, [activeDataset, searchQuery, sortOrder]);

  const formatRp = (price: number) => {
    if (price === 0) return "Konfirmasi WA";
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(price);
  };

  const tabsConfig = [
    { id: "sea_cargo" as TableTab, name: "Laut - Kapal Cargo", count: SEA_CARGO_PTD.length, icon: <Ship className="h-4 w-4" /> },
    { id: "sea_pelni" as TableTab, name: "Laut - Pelni (3T)", count: SEA_PELNI_3T.length, icon: <Anchor className="h-4 w-4" /> },
    { id: "air_comm" as TableTab, name: "Udara Komersil", count: AIR_COMMERCIAL_PTD.length, icon: <Plane className="h-4 w-4" /> },
    { id: "air_freighter" as TableTab, name: "Udara Freighter", count: AIR_FREIGHTER_PTD.length, icon: <Package className="h-4 w-4" /> },
    { id: "air_non_comm" as TableTab, name: "Udara Non-Komersil", count: AIR_NON_COMMERCIAL_PTD.length, icon: <Truck className="h-4 w-4" /> }
  ];

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] p-6 sm:p-8 shadow-xl shadow-slate-200/50 dark:shadow-none space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-violet-100 dark:bg-violet-950/60 text-[#7c3aed] dark:text-cyan-400 rounded-2xl border border-violet-200/50">
            <FileSpreadsheet className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white flex items-center gap-2">
              <span>{lang === "ID" ? "Daftar Tarif Resmi Port To Door" : "Official Port To Door Rates Matrix"}</span>
            </h3>
            <p className="font-sans text-xs text-slate-500 dark:text-slate-400">
              {lang === "ID"
                ? "Basis Asal Pengiriman: JAKARTA (CGK) ke Seluruh Indonesia"
                : "Origin: JAKARTA (CGK) to All Indonesian Cities"}
            </p>
          </div>
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder={lang === "ID" ? "Cari kota / TLC..." : "Search city / TLC..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl pl-10 pr-4 py-2 text-xs font-sans text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>
      </div>

      {/* Moda Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {tabsConfig.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActiveTab(t.id)}
            className={`px-4 py-2.5 rounded-2xl font-sans text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer shrink-0 ${
              activeTab === t.id
                ? "bg-violet-600 text-white shadow-lg shadow-violet-500/20"
                : "bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
            }`}
          >
            {t.icon}
            <span>{t.name}</span>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                activeTab === t.id
                  ? "bg-white/20 text-white"
                  : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
              }`}
            >
              {t.count} Rute
            </span>
          </button>
        ))}
      </div>

      {/* Dataset Metadata Pill */}
      <div className="p-3 bg-violet-50 dark:bg-violet-950/30 rounded-2xl border border-violet-200/60 dark:border-violet-900/40 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div>
          <span className="font-bold text-slate-900 dark:text-slate-100">
            {activeDataset.title}
          </span>
          <span className="text-slate-500 dark:text-slate-400 ml-2">
            ({processedData.length} rute ditemukan)
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-medium text-slate-600 dark:text-slate-300">
          <span>Syarat Min. Berat: <strong className="text-violet-600 dark:text-cyan-400">{activeDataset.minKgStr}</strong></span>
          <span>•</span>
          <span>Divider Volumetrik: <strong className="text-violet-600 dark:text-cyan-400">{activeDataset.dividerStr}</strong></span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
        <table className="w-full text-left text-xs font-sans">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 uppercase text-[10px] tracking-wider font-extrabold">
            <tr>
              <th className="p-3.5 pl-4">No</th>
              <th className="p-3.5">
                <button
                  type="button"
                  onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                  className="flex items-center gap-1 hover:text-violet-600 cursor-pointer"
                >
                  <span>Kota Tujuan</span>
                  <ArrowUpDown className="h-3 w-3" />
                </button>
              </th>
              <th className="p-3.5">Kode TLC</th>
              <th className="p-3.5">Min. Kg</th>
              <th className="p-3.5">Tarif per Kg</th>
              <th className="p-3.5">Lead Time</th>
              <th className="p-3.5 text-right pr-4">Order WA</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
            {processedData.length > 0 ? (
              processedData.map((row, idx) => {
                const minKgVal = row.minWeight !== undefined ? `${row.minWeight} Kg` : "-";
                const waText = `Halo Marketing T Trans Logistik, saya mau tanya tarif rute Jakarta ke ${row.destination} (${activeDataset.title}).`;
                const waUrl = `https://wa.me/6285830831654?text=${encodeURIComponent(waText)}`;

                return (
                  <tr
                    key={`${row.destination}-${idx}`}
                    className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <td className="p-3.5 pl-4 text-slate-400 font-mono">{idx + 1}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                      {row.destination}
                    </td>
                    <td className="p-3.5">
                      <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md text-[10px] font-bold text-violet-600 dark:text-cyan-400">
                        {row.tlc}
                      </span>
                    </td>
                    <td className="p-3.5 font-mono text-slate-600 dark:text-slate-300">
                      {minKgVal}
                    </td>
                    <td className="p-3.5 font-mono font-bold text-violet-700 dark:text-cyan-300">
                      {formatRp(row.price)}
                    </td>
                    <td className="p-3.5 text-amber-600 dark:text-amber-400 font-bold">
                      {row.leadTime && row.leadTime !== "-" ? `${row.leadTime} Hari` : "-"}
                    </td>
                    <td className="p-3.5 text-right pr-4">
                      <a
                        href={waUrl}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-[10px] px-3 py-1 rounded-full shadow-sm transition-all uppercase"
                      >
                        Pesan
                      </a>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={7} className="p-8 text-center text-slate-500">
                  Tidak ditemukan rute sesuai pencarian "{searchQuery}".
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
