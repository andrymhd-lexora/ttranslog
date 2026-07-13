# T Trans Logistik Landing Page

Solusi Logistik Terpercaya untuk setiap tujuan Anda — PT Tungkal Trans Indonesia.

This is a professional full-stack web application built for **T Trans Logistik**, a forwarding and cargo shipment provider under **PT Tungkal Trans Indonesia**. It provides services spanning land, sea, and air cargo with nationwide coverage across Indonesia.

---

## 🎨 Visual Design & Features

- **Organic Natural & Modern Geometric Styling**: Styled with a highly cohesive color palette featuring premium **Violet** (`#7c3aed`) and **Cyan** (`#06b6d4`) overlays, incorporating fluid curved section breaks.
- **Bilingual Interface (ID / EN)**: Fully supports toggling between Indonesian and English languages with a smooth language switcher.
- **Dark & Light Mode**: Safe on the eyes with a persistent, system-integrated dark mode toggle.
- **Interactive Cargo Shipping Calculator**: Instant pricing rates lookup for kargo Darat, Laut, or Udara. It calculates physical vs. volumetric weights automatically and adapts to route multipliers across major Indonesian cities (Jakarta, Surabaya, Jambi, Medan, Denpasar, Makassar, Balikpapan, Palembang).
- **Cargo Tracking Simulator**: Lets customers check receipt status for programmed receipts (`TTC-2026-0001`, `TTC-2026-0002`, `TTC-2026-0003`) or procedurally generated tracking milestones for arbitrary inputs.
- **Interactive AI Cargo Assistant**: Floating chat widget powered by the server-side Gemini API (`gemini-3.5-flash`), with an intelligent fallback simulation mode if the API key is not yet set.
- **Quotations Form**: Responsive business request form allowing corporate prospects to input details and send direct queries.

---

## 🛠️ Tech Stack & Architecture

- **Frontend Framework**: React 19 + TypeScript + Vite 6
- **CSS Styling**: Tailwind CSS v4.0 with customized display fonts (`Plus Jakarta Sans` for titles, `Inter` for interface, and `JetBrains Mono` for metadata)
- **Backend Server**: Express JS (handling Secure Gemini Proxy and serving static files)
- **AI Integration**: `@google/genai` (securely executed on the server side to protect secrets)

---

## ⚙️ Setup & Development Guide

### 1. Requirements
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- npm (Node Package Manager)

### 2. Environment Variables Configuration
Create a `.env` file in the root directory (or copy `.env.example`) and fill in your details:
```env
# Secure Gemini API Key
GEMINI_API_KEY="your-gemini-api-key-here"

# Application hosting URL (used for webhooks or self-referential routes)
APP_URL="http://localhost:3000"
```

### 3. Installation
Install all base dependencies:
```bash
npm install
```

### 4. Running Development Mode
Start the full-stack development server:
```bash
npm run dev
```
The server will start on port `3000` (externally bound on `0.0.0.0`). Open your browser and navigate to `http://localhost:3000`.

### 5. Production Compilation & Build
Compile both the frontend React client and bundle the Express backend with `esbuild` to generate highly optimized static assets:
```bash
npm run build
```

This compiles your output into a bundled, single-file CommonJS file at `dist/server.cjs` and places static frontend files into `dist/`.

To start the production server:
```bash
npm run start
```

---

## 📦 Project Directory Structure

```
├── dist/                     # Production compiled outputs
├── src/
│   ├── components/
│   │   ├── ChatWidget.tsx    # Secure AI chatbot interface
│   │   ├── FaqSection.tsx    # Searchable collapsible accordion
│   │   ├── Footer.tsx        # Office coordinates & Quote form
│   │   ├── Hero.tsx          # Landing banner + Interactive Rate Calculator
│   │   ├── Navbar.tsx        # Sticky navigation + Theme/Language switches
│   │   ├── PricingSection.tsx# High-fidelity rate packages
│   │   ├── ServicesSection.tsx # Land, Sea, and Air technical details
│   │   └── SocialProof.tsx   # Industrial partner monochrome logos
│   ├── App.tsx               # Primary interface orchestrator
│   ├── data.ts               # Bilingual translations, FAQs, and testimonials
│   ├── index.css             # Google Font imports & Tailwind directives
│   ├── main.tsx              # React mounting entry point
│   └── types.ts              # Custom Typescript declarations
├── .env.example              # Example environmental parameters
├── server.ts                 # Full-stack Express backend & Gemini proxy API
├── package.json              # Project manifests & deployment scripts
└── vite.config.ts            # Vite configuration engine
```
