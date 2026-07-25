import React, { useState } from "react";
import { X, ShieldCheck, FileText, CheckCircle2, Building2, PhoneCall } from "lucide-react";
import { Language } from "../types";

interface LegalModalsProps {
  isOpen: boolean;
  activeType: "terms" | "privacy" | null;
  onClose: () => void;
  lang: Language;
}

export default function LegalModals({ isOpen, activeType, onClose, lang }: LegalModalsProps) {
  const [tab, setTab] = useState<"terms" | "privacy">(activeType || "terms");

  // Keep tab synced with activeType when opened
  React.useEffect(() => {
    if (activeType) {
      setTab(activeType);
    }
  }, [activeType]);

  if (!isOpen || !activeType) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-4xl rounded-[32px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header Modal */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3.5">
            <div className="p-3 bg-violet-600/40 border border-violet-400/30 rounded-2xl">
              {tab === "terms" ? (
                <FileText className="h-6 w-6 text-cyan-400" />
              ) : (
                <ShieldCheck className="h-6 w-6 text-cyan-400" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-black tracking-widest text-cyan-300 bg-cyan-950/80 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
                  DOKUMEN HUKUM RESMI
                </span>
                <span className="text-[10px] uppercase font-bold text-slate-300">
                  TTranslog
                </span>
              </div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-white mt-1">
                PT Tungkal Trans Indonesia
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all cursor-pointer"
            aria-label="Tutup Modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-6 pt-3 gap-3">
          <button
            onClick={() => setTab("terms")}
            className={`pb-3 px-4 font-sans text-xs font-extrabold transition-all border-b-2 cursor-pointer flex items-center gap-2 ${
              tab === "terms"
                ? "border-violet-600 text-violet-600 dark:text-cyan-400"
                : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
            }`}
          >
            <FileText className="h-4 w-4" />
            <span>Syarat & Ketentuan Pengiriman</span>
          </button>
          
          <button
            onClick={() => setTab("privacy")}
            className={`pb-3 px-4 font-sans text-xs font-extrabold transition-all border-b-2 cursor-pointer flex items-center gap-2 ${
              tab === "privacy"
                ? "border-violet-600 text-violet-600 dark:text-cyan-400"
                : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
            }`}
          >
            <ShieldCheck className="h-4 w-4" />
            <span>Kebijakan Privasi Data</span>
          </button>
        </div>

        {/* Scrollable Document Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
          {tab === "terms" ? (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-900/50 text-violet-950 dark:text-violet-200 text-xs">
                <strong>Pengantar Legalitas:</strong> Syarat dan Ketentuan ini mengatur seluruh prosedur operasional, hak, serta kewajiban antara <strong>PT Tungkal Trans Indonesia (TTranslog)</strong> sebagai penyedia jasa ekspedisi/freight forwarding dengan Pengirim (Shipper) dan/atau Penerima (Consignee). Dengan menyerahkan kargo kepada kami, Anda dianggap telah membaca, memahami, dan menyetujui seluruh klausul di bawah ini.
              </div>

              {/* Section 1 */}
              <div className="space-y-2">
                <h4 className="font-display font-extrabold text-slate-900 dark:text-white text-base">
                  1. Ketentuan Muatan & Barang Dilarang (Prohibited Cargo)
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  PT Tungkal Trans Indonesia secara tegas melarang pengiriman barang-barang berbahaya dan bertentangan dengan hukum Republik Indonesia, mencakup:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
                  <li>Narkotika, psikotropika, obat-obatan terlarang, serta minuman keras/alkohol ilegal.</li>
                  <li>Bahan peledak, senjata api, amunisi, dan bahan kimia berbahaya (Dangerous Goods) tanpa izin/MSDS resmi.</li>
                  <li>Hewan langka, spesimen biologis terlarang, atau komoditas tanpa surat karantina pabean.</li>
                  <li>Uang tunai, perhiasan emas/permata murni, obligasi, dan barang berharga khusus tanpa deklarasi tertulis.</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="space-y-2">
                <h4 className="font-display font-extrabold text-slate-900 dark:text-white text-base">
                  2. Metode Perhitungan Berat & Volumetrik Kargo
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Perhitungan tarif biaya akhir ditentukan berdasarkan nilai tertinggi antara <strong>Berat Timbangan Aktual (Kg)</strong> dan <strong>Berat Volumetrik (Kg)</strong> dengan standar rumus nasional:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="font-bold block text-slate-900 dark:text-white">Kargo Laut & Darat:</span>
                    <span className="font-mono text-xs text-violet-600 dark:text-cyan-400 font-bold block mt-0.5">
                      (Panjang x Lebar x Tinggi in cm) / 4.000
                    </span>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="font-bold block text-slate-900 dark:text-white">Kargo Udara Komersil:</span>
                    <span className="font-mono text-xs text-violet-600 dark:text-cyan-400 font-bold block mt-0.5">
                      (Panjang x Lebar x Tinggi in cm) / 6.000 (Lion Air: 5.000)
                    </span>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="space-y-2">
                <h4 className="font-display font-extrabold text-slate-900 dark:text-white text-base">
                  3. Kemasan, Pembungkus (Packing) & Tanggung Jawab
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Pengirim berkewajiban membungkus barang dengan aman sesuai standar perjalanan jauh. Untuk barang cair, pecah belah, mesin, atau perangkat elektronik, Pengirim wajib menggunakan <strong>Packing Kayu</strong> dan/atau <strong>Waterproof Plastic Wrapping</strong>. PT Tungkal Trans Indonesia tidak bertanggung jawab atas kerusakan internal barang yang disebabkan oleh kelemahan kemasan awal pengirim.
                </p>
              </div>

              {/* Section 4 */}
              <div className="space-y-2">
                <h4 className="font-display font-extrabold text-slate-900 dark:text-white text-base">
                  4. Asuransi Kargo & Ganti Rugi
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Sangat disarankan mengasuransikan seluruh pengiriman kargo bernilai tinggi. Klaim ganti rugi atas kehilangan atau kerusakan barang yang diasuransikan diproses penuh sesuai polis penjamin asuransi kargo terdaftar. Bagi barang yang tidak diasuransikan, ganti rugi maksimal yang ditanggung TTranslog disesuaikan dengan aturan standar perundang-undangan (maksimal 10x biaya ongkos kirim rute terkait).
                </p>
              </div>

              {/* Section 5 */}
              <div className="space-y-2">
                <h4 className="font-display font-extrabold text-slate-900 dark:text-white text-base">
                  5. Keadaan Kahar (Force Majeure)
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  PT Tungkal Trans Indonesia dibebaskan dari tuntutan keterlambatan atau kegagalan penyerahan yang disebabkan oleh keadaan di luar kendali operasional (Force Majeure), seperti bencana alam, badai laut, erupsi gunung berapi, penutupan bandara/pelabuhan oleh otoritas, perang, huru-hara, atau kecelakaan moda transportasi utama.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 text-emerald-950 dark:text-emerald-200 text-xs">
                <strong>Komitmen Kerahasiaan Data:</strong> Kebijakan Privasi ini menjelaskan bagaimana <strong>PT Tungkal Trans Indonesia (TTranslog)</strong> mengumpulkan, menyimpan, melindungi, dan menggunakan informasi pribadi Anda saat mengakses layanan dan platform resmi kami di <code>ttranslog.my.id</code>.
              </div>

              {/* Privacy Section 1 */}
              <div className="space-y-2">
                <h4 className="font-display font-extrabold text-slate-900 dark:text-white text-base">
                  1. Informasi Yang Kami Kumpulkan
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Guna memperlancar proses penerbitan Surat Tanda Terima (STT)/Resi Kargo, invoice, dan pengantaran Port To Door, kami mengumpulkan data meliputi:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
                  <li>Nama Pengirim & Nama Penerima (Individual / PT / CV).</li>
                  <li>Alamat Penjemputan Gudang & Alamat Lengkap Tujuan Pengiriman.</li>
                  <li>Nomor Telepon & Kontak WhatsApp aktif untuk koordinasi Kurir/Dispatcher.</li>
                  <li>Alamat Email resmi untuk pengiriman Invoice & Dokumen Penawaran.</li>
                  <li>Rincian jenis muatan, estimasi berat, dimensi, dan nilai barang deklarasi.</li>
                </ul>
              </div>

              {/* Privacy Section 2 */}
              <div className="space-y-2">
                <h4 className="font-display font-extrabold text-slate-900 dark:text-white text-base">
                  2. Penggunaan & Perlindungan Informasi
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Informasi yang Anda berikan strictly digunakan untuk kepentingan transaksi kargo PT Tungkal Trans Indonesia. Kami <strong>TIDAK PERNAH</strong> menjual, menyewakan, atau memperjualbelikan data kontak pelanggan kepada pihak ketiga mana pun di luar rantai mitra operasional resmi (pelayaran, maskapai, agen karantina, atau agen pelabuhan tujuan).
                </p>
              </div>

              {/* Privacy Section 3 */}
              <div className="space-y-2">
                <h4 className="font-display font-extrabold text-slate-900 dark:text-white text-base">
                  3. Keamanan Sistem & Hak Akses Pelanggan
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Seluruh data disimpan dalam peladen aman yang dilindungi enkripsi standar industri. Pelanggan berhak memperbarui, memperbaiki, atau meminta pembersihan arsip riwayat komunikasi kargo setelah proses transaksi dan pembayaran selesai sepenuhnya.
                </p>
              </div>

              {/* Privacy Section 4 */}
              <div className="space-y-2">
                <h4 className="font-display font-extrabold text-slate-900 dark:text-white text-base">
                  4. Kontak Hukum & Layanan Pelanggan
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Jika Anda memiliki pertanyaan mengenai klausul Syarat & Ketentuan maupun Kebijakan Privasi ini, silakan hubungi tim legal & customer relation kami:
                </p>
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-1 text-xs">
                  <p className="font-bold text-slate-900 dark:text-white">PT Tungkal Trans Indonesia (TTranslog)</p>
                  <p className="text-slate-600 dark:text-slate-300">Hotline Legal / WA: +62 858-3083-1654</p>
                  <p className="text-slate-600 dark:text-slate-300">Email: info@ttranslog.my.id</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 dark:bg-slate-950 p-4 sm:p-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Building2 className="h-4 w-4 text-violet-600 dark:text-cyan-400 shrink-0" />
            <span>Dokumen Resmi Berlaku untuk PT Tungkal Trans Indonesia (TTranslog).</span>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto bg-[#7c3aed] hover:bg-purple-700 text-white font-sans font-bold text-xs px-6 py-2.5 rounded-full transition-all cursor-pointer"
          >
            Saya Mengerti & Setuju
          </button>
        </div>

      </div>
    </div>
  );
}
