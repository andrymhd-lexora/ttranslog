import React, { useState } from "react";
import {
  HelpCircle,
  X,
  Calculator,
  Box,
  Scale,
  Sparkles,
  Info,
  CheckCircle2,
  ArrowRight,
  Plane,
  Ship,
  Truck
} from "lucide-react";
import { Language } from "../types";

interface VolumetricFormulaModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export default function VolumetricFormulaModal({
  isOpen,
  onClose,
  lang
}: VolumetricFormulaModalProps) {
  // Demo interactive state inside modal
  const [demoLength, setDemoLength] = useState<number | "">(60);
  const [demoWidth, setDemoWidth] = useState<number | "">(50);
  const [demoHeight, setDemoHeight] = useState<number | "">(40);
  const [demoActualWeight, setDemoActualWeight] = useState<number | "">(10);

  if (!isOpen) return null;

  const l = Number(demoLength) || 0;
  const w = Number(demoWidth) || 0;
  const h = Number(demoHeight) || 0;
  const actualW = Number(demoActualWeight) || 0;

  const volumeCm3 = l * w * h;

  const vol4000 = Math.round((volumeCm3 / 4000) * 10) / 10;
  const vol5000 = Math.round((volumeCm3 / 5000) * 10) / 10;
  const vol6000 = Math.round((volumeCm3 / 6000) * 10) / 10;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fadeIn">
      <div
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-violet-100 dark:bg-violet-950 text-[#7c3aed] dark:text-cyan-400 rounded-2xl border border-violet-200 dark:border-violet-800">
            <Box className="h-6 w-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-cyan-400 text-[10px] font-bold uppercase tracking-wider mb-1">
              Panduan Standar IATA & Logistik
            </div>
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white">
              {lang === "ID" ? "Rumus & Perhitungan Berat Volumetrik" : "Volumetric Weight Formula Guide"}
            </h3>
          </div>
        </div>

        {/* Explanation Banner */}
        <div className="space-y-6 text-xs text-slate-600 dark:text-slate-300">
          <p className="leading-relaxed font-medium">
            Dalam dunia ekspedisi dan kargo (Darat, Laut, Udara), biaya pengiriman ditentukan berdasarkan{" "}
            <strong className="text-violet-600 dark:text-cyan-400">Berat Dikenakan Charge (Chargeable Weight)</strong>,
            yaitu nilai tertinggi antara <strong className="text-slate-900 dark:text-white">Berat Timbangan Aktual</strong> dan{" "}
            <strong className="text-slate-900 dark:text-white">Berat Volumetrik Kemasan</strong>.
          </p>

          {/* Key Formula Box */}
          <div className="p-5 bg-gradient-to-br from-violet-900 via-indigo-950 to-slate-900 text-white rounded-2xl shadow-xl space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-cyan-400">
              <span className="flex items-center gap-1.5">
                <Calculator className="h-4 w-4" />
                RUMUS MATEMATIS BERAT VOLUMETRIK
              </span>
              <span className="bg-white/10 px-2.5 py-0.5 rounded-full text-[10px] uppercase text-white font-mono">
                Satuan cm & kg
              </span>
            </div>

            <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl text-center font-mono font-extrabold text-sm sm:text-base text-cyan-300 border border-white/10">
              Berat Volumetrik (Kg) = ( Panjang × Lebar × Tinggi ) ÷ Divider
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
              <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 text-center">
                <span className="text-slate-300 block text-[10px] uppercase font-bold">Kargo Laut & Darat</span>
                <span className="font-mono font-bold text-amber-400 text-sm">Divider 4.000</span>
              </div>
              <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 text-center">
                <span className="text-slate-300 block text-[10px] uppercase font-bold">Udara Lion Air Group</span>
                <span className="font-mono font-bold text-amber-400 text-sm">Divider 5.000</span>
              </div>
              <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 text-center">
                <span className="text-slate-300 block text-[10px] uppercase font-bold">Udara Garuda / Commercial</span>
                <span className="font-mono font-bold text-amber-400 text-sm">Divider 6.000</span>
              </div>
            </div>
          </div>

          {/* Interactive Calculator Simulator inside modal */}
          <div className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-700 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-display font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-violet-600 dark:text-cyan-400" />
                Simulasi Hitung Langsung
              </h4>
              <span className="text-[10px] text-slate-400 font-mono">Cobalah Ubah Dimensi</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">
                  Panjang (cm)
                </label>
                <input
                  type="number"
                  value={demoLength}
                  onChange={(e) => setDemoLength(e.target.value === "" ? "" : Number(e.target.value))}
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-2.5 py-1.5 text-xs font-mono font-bold text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-violet-500 text-center"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">
                  Lebar (cm)
                </label>
                <input
                  type="number"
                  value={demoWidth}
                  onChange={(e) => setDemoWidth(e.target.value === "" ? "" : Number(e.target.value))}
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-2.5 py-1.5 text-xs font-mono font-bold text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-violet-500 text-center"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">
                  Tinggi (cm)
                </label>
                <input
                  type="number"
                  value={demoHeight}
                  onChange={(e) => setDemoHeight(e.target.value === "" ? "" : Number(e.target.value))}
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-2.5 py-1.5 text-xs font-mono font-bold text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-violet-500 text-center"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">
                  Berat Timbangan (Kg)
                </label>
                <input
                  type="number"
                  value={demoActualWeight}
                  onChange={(e) => setDemoActualWeight(e.target.value === "" ? "" : Number(e.target.value))}
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-2.5 py-1.5 text-xs font-mono font-bold text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-violet-500 text-center"
                />
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
              <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-500 block font-bold uppercase">Divider 4.000 (Laut/Darat)</span>
                <div className="font-mono font-bold text-violet-600 dark:text-cyan-400 text-sm mt-1">
                  {vol4000} Kg
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  Charge: <strong className="text-slate-800 dark:text-slate-200">{Math.max(vol4000, actualW)} Kg</strong>
                </div>
              </div>

              <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-500 block font-bold uppercase">Divider 5.000 (Lion Air)</span>
                <div className="font-mono font-bold text-violet-600 dark:text-cyan-400 text-sm mt-1">
                  {vol5000} Kg
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  Charge: <strong className="text-slate-800 dark:text-slate-200">{Math.max(vol5000, actualW)} Kg</strong>
                </div>
              </div>

              <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-500 block font-bold uppercase">Divider 6.000 (Udara General)</span>
                <div className="font-mono font-bold text-violet-600 dark:text-cyan-400 text-sm mt-1">
                  {vol6000} Kg
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  Charge: <strong className="text-slate-800 dark:text-slate-200">{Math.max(vol6000, actualW)} Kg</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Why this rule exists */}
          <div className="space-y-2">
            <h4 className="font-display font-extrabold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
              Mengapa Menggunakan Berat Volumetrik?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600 dark:text-slate-300">
              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/80 dark:border-slate-800 space-y-1">
                <div className="font-bold text-slate-900 dark:text-white text-[11px] flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  Barang Ringan Tapi Besar
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                  Karton berisi kapas, kerajinan tangan, atau furnitur knockdown memakan ruang pesawat/kapal walau timbangannya ringan.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/80 dark:border-slate-800 space-y-1">
                <div className="font-bold text-slate-900 dark:text-white text-[11px] flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  Kapasitas Kargo Terbatas
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                  Maskapai dan armada pelayaran menghitung kombinasi berat fisik dan volume kubikasi agar pemuatan ruang berjalan adil.
                </p>
              </div>
            </div>
          </div>

          {/* Close button at bottom */}
          <div className="pt-2">
            <button
              onClick={onClose}
              type="button"
              className="w-full bg-[#7c3aed] hover:bg-purple-700 text-white font-sans font-extrabold py-3 rounded-2xl transition-all text-xs tracking-wide shadow-md uppercase cursor-pointer"
            >
              Mengerti, Tutup Panduan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
