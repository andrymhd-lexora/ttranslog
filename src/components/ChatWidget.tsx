import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Truck, Bot, ArrowRight, CornerDownLeft } from "lucide-react";
import { Language, ChatMessage } from "../types";

interface ChatWidgetProps {
  lang: Language;
}

export default function ChatWidget({ lang }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasNewMessageAlert, setHasNewMessageAlert] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with greeting messages depending on chosen Language
  useEffect(() => {
    const greetingText =
      lang === "ID"
        ? "Halo! Saya *T-Trans Assistant*, asisten AI dari PT Tungkal Trans Indonesia. Ada yang bisa saya bantu hari ini mengenai rute, estimasi tarif kargo, atau cara melacak resi Anda? 🚛"
        : "Hello! I am the *T-Trans Assistant*, your official AI guide at T Trans Logistik. How can I help you today regarding shipping routes, cost estimation, or tracking cargo? ✈️";

    setMessages([
      {
        id: "greet",
        role: "model",
        text: greetingText,
        timestamp: new Date()
      }
    ]);
  }, [lang]);

  // Scroll to bottom on updates
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput("");
    setIsLoading(true);

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: userText,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      // Map history for the server
      const chatHistory = messages.map((m) => ({
        role: m.role,
        text: m.text
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userText,
          history: chatHistory
        })
      });

      const data = await res.json();

      const modelMessage: ChatMessage = {
        id: `model-${Date.now()}`,
        role: "model",
        text: data.reply || "Mohon maaf, terjadi kesalahan pemrosesan jawaban.",
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, modelMessage]);
    } catch (err) {
      console.error("Chat error:", err);
      const errorMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        role: "model",
        text: "Koneksi terputus. Silakan cek koneksi internet Anda atau hubungi tim sales kami di WhatsApp untuk pelayanan langsung.",
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenWidget = () => {
    setIsOpen(true);
    setHasNewMessageAlert(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={handleOpenWidget}
          className="relative flex items-center justify-center p-4 rounded-full bg-gradient-to-tr from-[#7c3aed] to-[#06b6d4] hover:from-purple-700 hover:to-cyan-500 text-white shadow-xl hover:shadow-violet-600/30 hover:scale-105 transition-all duration-300 group cursor-pointer"
          aria-label="Open Live Chat"
        >
          <MessageSquare className="h-6 w-6 group-hover:rotate-12 transition-transform" />
          
          {/* Unread Alert Indicator Badge */}
          {hasNewMessageAlert && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500 text-[9px] font-bold text-slate-900 justify-center items-center">1</span>
            </span>
          )}

          {/* Prompt Tooltip */}
          <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
            {lang === "ID" ? "Tanya AI T-Trans" : "Ask AI T-Trans"} 🤖
          </span>
        </button>
      )}

      {/* Floating Chat Dialog Window */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[500px] bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-[32px] shadow-2xl overflow-hidden flex flex-col animate-slideUp">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#7c3aed] via-indigo-600 to-[#06b6d4] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-white/20 rounded-xl">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display font-extrabold text-sm tracking-tight">T-Trans Assistant</div>
                <div className="text-[10px] text-cyan-300 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>AI Logistics Support 24/7</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages body list */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-[#f8fafc] dark:bg-slate-900/40">
            {messages.map((m) => {
              const isModel = m.role === "model";
              return (
                <div
                  key={m.id}
                  className={`flex ${isModel ? "justify-start" : "justify-end"} animate-fadeIn`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 text-xs font-sans leading-relaxed shadow-sm ${
                      isModel
                        ? "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-100 dark:border-slate-800/50 rounded-tl-none"
                        : "bg-[#7c3aed] text-white rounded-tr-none font-medium"
                    }`}
                  >
                    {/* Parse very simple bold markdown markers like *bold* */}
                    {m.text.split("\n").map((line, lIdx) => (
                      <p key={lIdx} className={lIdx > 0 ? "mt-1" : ""}>
                        {line.split("**").map((chunk, cIdx) => {
                          if (cIdx % 2 !== 0) {
                            return <strong key={cIdx} className="font-extrabold text-slate-900 dark:text-white">{chunk}</strong>;
                          }
                          // Handle single star bold formatting
                          return chunk.split("*").map((subChunk, sIdx) => {
                            if (sIdx % 2 !== 0) {
                              return <strong key={sIdx} className="font-extrabold">{subChunk}</strong>;
                            }
                            return subChunk;
                          });
                        })}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Typing Loader anim */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50 rounded-2xl rounded-tl-none p-3.5 flex items-center gap-1 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-violet-500 animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-violet-400 animate-bounce delay-150"></span>
                  <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-bounce delay-300"></span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Chat input box footer */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={lang === "ID" ? "Ketik pesan Anda..." : "Type your query..."}
              className="flex-grow bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full px-4 py-2.5 text-xs text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#7c3aed]"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-2.5 rounded-full bg-[#7c3aed] hover:bg-purple-700 text-white shadow shadow-purple-500/10 disabled:opacity-40 transition-all flex items-center justify-center shrink-0 cursor-pointer"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
}
