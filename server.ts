import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini AI client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey && apiKey !== "MY_GEMINI_API_KEY" && apiKey.trim() !== "") {
      try {
        aiClient = new GoogleGenAI({
          apiKey: apiKey,
          httpOptions: {
            headers: {
              'User-Agent': 'aistudio-build',
            }
          }
        });
        console.log("Gemini AI client successfully initialized.");
      } catch (e) {
        console.error("Error initializing Gemini client:", e);
      }
    }
  }
  return aiClient;
}

// System Prompt for Logistics Assistant
const SYSTEM_PROMPT = `
You are the official AI Assistant of T Trans Logistik (PT Tungkal Trans Indonesia).
Your name is "T-Trans Assistant".
You provide friendly, professional, and accurate help to customers asking about cargo and shipping services.

Core info about T Trans Logistik:
- Company Name: PT Tungkal Trans Indonesia (Brand: T Trans Logistik).
- Services: Cargo shipping via Land (Darat), Sea (Laut), and Air (Udara) across Indonesia.
- Tagline: "Solusi Logistik Terpercaya untuk setiap tujuan Anda" (Your Trusted Logistics Solution for your every destination).
- Key selling points: Fast, secure, timely delivery, competitive rates, professional support.
- Routes: All provinces in Indonesia (Sumatra, Java, Kalimantan, Sulawesi, Bali, Nusa Tenggara, Maluku, Papua).
- Delivery times (estimates):
  * Air Cargo (Udara): 1 - 2 business days (Express).
  * Land Cargo (Darat): 3 - 5 business days (Trucking, FTL/LTL).
  * Sea Cargo (Laut): 7 - 14 business days (FCL/LCL, Container Ships).
- Estimator Cost (Approximate rates for user reference):
  * Land cargo starts at IDR 3,500 / kg (minimum 50kg).
  * Sea cargo starts at IDR 2,500 / kg or IDR 1,500,000 / m³ (minimum 100kg or 1m³).
  * Air cargo starts at IDR 15,000 / kg (minimum 10kg).

Style & Language:
- You must respond in the language the user uses (Indonesian or English). By default, be friendly, warm, polite, and helpful (Bilingual).
- Keep your answers concise, professional, structured, and easy to read with bullet points when applicable.
- If the user asks about rates, ask for origin, destination, estimated weight (kg), or volume dimensions (length, width, height in cm) to help them calculate!
- If they ask about tracking, explain that they can use the tracking tool on the homepage by entering their tracking number (e.g., TTC-2026-XXXX).
`;

// API Route for Chat
app.post("/api/chat", async (req, res) => {
  const { message, history } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message is required." });
  }

  const client = getGeminiClient();

  if (!client) {
    // Simulated Intelligent Fallback responses if API key is not configured
    console.log("GEMINI_API_KEY is not available. Using high-quality local rule-based simulation.");
    const msgLower = message.toLowerCase();
    let reply = "";

    if (msgLower.includes("harga") || msgLower.includes("tarif") || msgLower.includes("biaya") || msgLower.includes("price") || msgLower.includes("rate") || msgLower.includes("ongkir")) {
      reply = `Halo! Terima kasih telah menanyakan tarif T Trans Logistik. 

Kami melayani 3 jalur utama dengan perkiraan biaya sebagai berikut:
1. 🚛 **Kargo Darat**: Mulai dari **Rp 3.500 / kg** (Min. 50 kg) — Estimasi 3-5 hari.
2. 🚢 **Kargo Laut**: Mulai dari **Rp 2.500 / kg** atau **Rp 1.500.000 / m³** (Min. 100 kg / 1 m³) — Estimasi 7-14 hari.
3. ✈️ **Kargo Udara**: Mulai dari **Rp 15.000 / kg** (Min. 10 kg) — Estimasi 1-2 hari.

Untuk hitungan yang lebih presisi, Anda bisa menggunakan **Kalkulator Tarif** di halaman utama kami, atau berikan detail berikut kepada saya:
- **Kota Asal & Tujuan**
- **Estimasi Berat (kg)** atau **Dimensi Barang (P x L x T dalam cm)**

Ada yang bisa saya bantu hitungkan sekarang? 😊`;
    } else if (msgLower.includes("lacak") || msgLower.includes("resi") || msgLower.includes("track") || msgLower.includes("status")) {
      reply = `Halo! Untuk melacak paket Anda di T Trans Logistik, silakan masukkan nomor resi Anda di seksi **"Lacak Pengiriman"** pada halaman utama kami (contoh format resi: **TTC-2026-0001** atau **TTC-2026-0002**).

Jika Anda tidak memilikinya, silakan sebutkan nomor resi Anda kepada saya di sini agar saya coba cek di database virtual kami!`;
    } else if (msgLower.includes("darat") || msgLower.includes("laut") || msgLower.includes("udara") || msgLower.includes("layanan") || msgLower.includes("service") || msgLower.includes("ship")) {
      reply = `T Trans Logistik menawarkan tiga jenis layanan pengiriman handal:
      
1. 🚛 **Kargo Darat (Land Cargo)**: Cocok untuk pengiriman partai besar antar pulau atau kota menggunakan armada truk kami (CDD, Fuso, Tronton) dengan harga sangat hemat.
2. 🚢 **Kargo Laut (Sea Cargo)**: Layanan terbaik untuk barang super berat/bervolume besar menggunakan peti kemas FCL (Full Container Load) maupun LCL (Less Container Load).
3. ✈️ **Kargo Udara (Air Cargo)**: Pilihan kilat untuk dokumen atau barang sensitif waktu yang membutuhkan pengiriman aman dan sampai dalam 1-2 hari.

Apakah Anda ingin berkonsultasi mengenai pengiriman barang tertentu? Kami siap membantu!`;
    } else if (msgLower.includes("kontak") || msgLower.includes("contact") || msgLower.includes("alamat") || msgLower.includes("wa") || msgLower.includes("whatsapp") || msgLower.includes("telepon")) {
      reply = `Anda dapat menghubungi tim customer service PT Tungkal Trans Indonesia secara langsung melalui:
- **WhatsApp Support**: +62 812-3456-7890 (Tersedia 24/7)
- **Email**: info@ttranslogistik.co.id
- **Kantor Pusat**: Jl. Raya Pelabuhan No. 88, Kuala Tungkal, Jambi, Indonesia.

Atau Anda juga bisa mengirim pesan melalui formulir kontak di bagian bawah landing page ini!`;
    } else {
      reply = `Halo! Saya adalah **T-Trans Assistant**, asisten AI Anda di T Trans Logistik. 💼

Ada yang bisa saya bantu hari ini? Anda bisa menanyakan kepada saya tentang:
- 💰 Perkiraan tarif pengiriman (Darat, Laut, Udara)
- 📍 Rute dan estimasi waktu pengiriman ke seluruh Indonesia
- 📦 Rekomendasi armada terbaik untuk jenis barang Anda
- ℹ️ Cara memesan dan melacak status pengiriman

Silakan tanyakan apa saja! saya siap membantu dengan ramah.`;
    }

    return res.json({ reply });
  }

  try {
    const formattedContents: any[] = [];
    
    // Process history
    if (history && Array.isArray(history)) {
      history.slice(-10).forEach((item: any) => {
        formattedContents.push({
          role: item.role === "user" ? "user" : "model",
          parts: [{ text: item.text }]
        });
      });
    }

    // Add current user message
    formattedContents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const response = await client.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });

    const text = response.text || "Mohon maaf, saya mengalami kendala teknis saat memproses pesan Anda. Silakan coba beberapa saat lagi.";
    return res.json({ reply: text });
  } catch (error: any) {
    console.error("Gemini API error:", error);
    return res.status(500).json({ 
      error: "Failed to generate AI response", 
      details: error.message,
      reply: "Maaf, terjadi gangguan saat menghubungi server AI. Tim kami siap membantu Anda secara manual di WhatsApp!" 
    });
  }
});

// Setup Vite Dev server or Production static serve
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite development middleware integrated.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Production static files server integrated.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
