import React, { useState } from "react";
import { Truck, MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import { TranslationDict, Language } from "../types";

interface FooterProps {
  lang: Language;
  t: TranslationDict;
}

export default function Footer({ lang, t }: FooterProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

      // Dismiss success state after 5s
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-400 pt-20 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Contact Grid (Form + Office detail) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-slate-950/40 border border-slate-800/80 rounded-[40px] p-8 sm:p-10 space-y-6 shadow-2xl">
            <div className="space-y-2">
              <h3 className="font-display font-extrabold text-2xl text-white">
                {t.contactTitle}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                {t.contactSubtitle}
              </p>
            </div>

            {isSuccess && (
              <div className="flex gap-3 items-start bg-emerald-950/40 border border-emerald-800/60 p-4 rounded-2xl text-emerald-400 text-xs sm:text-sm animate-fadeIn">
                <CheckCircle className="h-5 w-5 shrink-0 text-emerald-400 mt-0.5" />
                <span>{t.contactSuccess}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">{t.contactFormName}</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800/80 rounded-full px-5 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#7c3aed] placeholder-slate-600 transition-all"
                  placeholder="Contoh: Andi Wijaya"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">{t.contactFormEmail}</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800/80 rounded-full px-5 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#7c3aed] placeholder-slate-600 transition-all"
                    placeholder="andi@gmail.com"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">{t.contactFormPhone}</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800/80 rounded-full px-5 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#7c3aed] placeholder-slate-600 transition-all"
                    placeholder="0812xxxxxxxx"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">{t.contactFormMessage}</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800/80 rounded-[24px] px-5 py-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#7c3aed] placeholder-slate-600 transition-all resize-none"
                  placeholder="Isikan estimasi berat, dimensi (P x L x T), kota asal dan kota tujuan..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 bg-[#7c3aed] hover:bg-purple-700 text-white font-sans font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-purple-500/10 disabled:opacity-50 w-full sm:w-auto text-xs sm:text-sm cursor-pointer hover:scale-[1.02]"
              >
                {isSubmitting ? (
                  <span>Mengirim...</span>
                ) : (
                  <>
                    <span>{t.contactFormSend}</span>
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Office detail & Brand info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            
            {/* Brand details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/favicon.jpg"
                  alt="T Trans Logistik Logo"
                  className="w-10 h-10 rounded-xl object-contain border border-slate-800 shadow-lg shadow-violet-500/10"
                  referrerPolicy="no-referrer"
                />
                <span className="text-xl font-black tracking-tight text-white">
                  T TRANS <span className="text-[#06b6d4]">LOGISTIK</span>
                </span>
              </div>
              <p className="font-sans text-xs sm:text-sm leading-relaxed text-slate-400">
                Layanan ekspedisi terpercaya yang melayani kargo darat, kargo laut kontainer, dan kargo udara kargo prioritas ke seluruh 38 provinsi di Indonesia.
              </p>
            </div>

            {/* Address Details */}
            <div className="space-y-4">
              <div className="flex gap-3 items-start text-xs sm:text-sm">
                <MapPin className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white font-display">Kantor Pelabuhan Utama</div>
                  <p className="text-slate-400 mt-0.5">{t.footerAddress}</p>
                </div>
              </div>

              <div className="flex gap-3 items-center text-xs sm:text-sm">
                <Phone className="h-5 w-5 text-cyan-400 shrink-0" />
                <div>
                  <div className="font-bold text-white font-display">Hotline WhatsApp</div>
                  <p className="text-slate-400 mt-0.5">+62 858-3083-1654</p>
                </div>
              </div>

              <div className="flex gap-3 items-center text-xs sm:text-sm">
                <Mail className="h-5 w-5 text-cyan-400 shrink-0" />
                <div>
                  <div className="font-bold text-white font-display">Email Penawaran</div>
                  <p className="text-slate-400 mt-0.5">info@ttranslog.my.id</p>
                </div>
              </div>
            </div>

            {/* Certification / Badges */}
            <div className="flex items-center gap-4 pt-4">
              <div className="px-3 py-1 bg-slate-800 rounded border border-slate-700 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                ALFI/ILFA Member
              </div>
              <div className="px-3 py-1 bg-slate-800 rounded border border-slate-700 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                ISO 9001 Certified
              </div>
            </div>

          </div>

        </div>

        {/* Lower section copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p className="font-sans">
            &copy; {new Date().getFullYear()} T Trans Logistik. {t.footerRights}
          </p>
          <div className="flex gap-6 font-medium">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#tracking" className="hover:text-white transition-colors">Tracking</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="https://tungkaltransindonesia.com" className="hover:text-white transition-colors">PT Tungkal Trans Indonesia</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
