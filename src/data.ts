import { TranslationDict, TrackingData, ServiceDetail, Testimonial, FaqItem, PricingPlanInfo, CargoCategoryRules, Language } from "./types";

export const CARGO_RULES_DATA_ID: CargoCategoryRules[] = [
  {
    id: "sea_land",
    title: "Moda Laut & Darat",
    subtitle: "Ketentuan Pengiriman Kargo Kapal Laut & Armada Truk Darat (Port To Door)",
    badge: "Jalur Hemat & Volume Besar",
    modeType: "Darat & Laut",
    iconName: "Ship",
    popular: false,
    minWeight: "Sesuai rute / kuota minimum",
    leadTime: "Terhitung dari Keberangkatan kapal",
    dimCalc: "(Panjang X Lebar X Tinggi : 4.000 = ....Kg)",
    maxDim: "Panjang 1.200 cm X Lebar 230 cm X Tinggi 230 cm",
    maxWeight: "Bisa diangkut oleh buruh (melebihi batas dikenakan biaya mekanikal)",
    rules: [
      {
        num: 1,
        label: "Jadwal Kapal / Armada",
        value: "Jadwal Kapal mengikuti jadwal resmi yang dikeluarkan oleh pihak pelayaran / armada darat."
      },
      {
        num: 2,
        label: "Awal Hitung Lead Time",
        value: "Lead Time (estimasi waktu tiba) terhitung mulai dari hari keberangkatan kapal/armada darat dari pelabuhan asal."
      },
      {
        num: 3,
        label: "Komponen Biaya Tambahan",
        value: "Harga dasar belum termasuk packing/kayu, repacking, asuransi, pajak (tax), dan biaya admin."
      },
      {
        num: 4,
        label: "Maksimal Dimensi Barang",
        value: "Panjang 1.200 cm X Lebar 230 cm X Tinggi 230 cm."
      },
      {
        num: 5,
        label: "Batas Berat & Biaya Mekanikal",
        value: "Maksimal berat barang adalah yang bisa diangkut secara manual oleh buruh. Apabila melebihi kapasitas buruh, akan dikenakan tambahan biaya mekanikal (crane/forklift)."
      },
      {
        num: 6,
        label: "Cakupan Port To Door",
        value: "Layanan Port To Door adalah pengiriman mulai dari pelabuhan asal sampai dengan alamat penerima untuk area pengantaran dalam kota."
      },
      {
        num: 7,
        label: "Perhitungan Volumetrik",
        value: "Perhitungan dimensi kargo: (Panjang X Lebar X Tinggi dalam cm : 4.000 = ....Kg)."
      }
    ]
  },
  {
    id: "air_commercial",
    title: "Moda Udara - Komersil Flight",
    subtitle: "Ketentuan Pengiriman Kargo Penerbangan Reguler Maskapai Komersil (Port To Door)",
    badge: "Penerbangan Harian Tepat Waktu",
    modeType: "Udara Komersil",
    iconName: "Plane",
    popular: true,
    minWeight: "Min. 10 Kg",
    leadTime: "Terhitung dari Keberangkatan Pesawat",
    dimCalc: "Lion Air: PxLxT/5.000 | Maskapai Lain: PxLxT/6.000",
    maxDim: "Panjang 150 cm X Lebar 80 cm X Tinggi 80 cm",
    maxWeight: "10kg - 69kg (No SC) | 70kg - Up (SC 100%, Max 150kg)",
    rules: [
      {
        num: 1,
        label: "Berat Minimum Pengiriman",
        value: "Minimal muatan 10 Kg per Surat Muatan Udara (SMU)."
      },
      {
        num: 2,
        label: "Jadwal Flight",
        value: "Jadwal Penerbangan tersedia setiap hari (Daily Commercial Flights)."
      },
      {
        num: 3,
        label: "Awal Hitung Lead Time",
        value: "Lead Time terhitung dari tanggal/jam keberangkatan pesawat dari bandara asal."
      },
      {
        num: 4,
        label: "Komponen Biaya Tambahan",
        value: "Harga belum termasuk packing, repacking, asuransi, pajak (tax), dan admin."
      },
      {
        num: 5,
        label: "Maksimal Dimensi Barang",
        value: "Panjang 150 cm X Lebar 80 cm X Tinggi 80 cm."
      },
      {
        num: 6,
        label: "Batas Berat & Surcharge (SC)",
        value: "10kg - 69kg = Tidak Kena SC (No SC) | 70kg ke atas = SC 100% (Maksimal 150kg per koli)."
      },
      {
        num: 7,
        label: "Cakupan Port To Door",
        value: "Pengiriman dari Bandara asal sampai dengan alamat tujuan penerima untuk area pengantaran dalam kota."
      },
      {
        num: 8,
        label: "Perhitungan Dimensi Volumetrik",
        value: "Khusus Lion Air: (P X L X T : 5.000 = .... Kg) | Maskapai Lain (Garuda/Citilink/Sriwijaya): (P X L X T : 6.000 = .... Kg)."
      },
      {
        num: 9,
        label: "Surcharge Berdasarkan Komoditi Barang",
        value: "Live Animal & Human Remain = Surcharge 100% | Dangerous Goods (DG) = Surcharge 200% (diluar biaya shipdeck) | Komoditi khusus lainnya wajib konfirmasi ke Marketing."
      }
    ]
  },
  {
    id: "air_freighter",
    title: "Moda Udara - Freighter Flight",
    subtitle: "Ketentuan Pengiriman Kargo Pesawat Kargo Khusus / Freighter (Port To Door)",
    badge: "Kapasitas Besar Pesawat Kargo",
    modeType: "Udara Freighter",
    iconName: "Plane",
    popular: false,
    minWeight: "Min. 25 Kg",
    leadTime: "Terhitung dari Keberangkatan Pesawat",
    dimCalc: "(Panjang X Lebar X Tinggi : 6.000 = ....Kg)",
    maxDim: "Panjang 200 cm X Lebar 200 cm X Tinggi 200 cm",
    maxWeight: "Max 2.000 kg per koli (berlaku bertingkat SC)",
    rules: [
      {
        num: 1,
        label: "Berat Minimum Pengiriman",
        value: "Minimal muatan 25 Kg."
      },
      {
        num: 2,
        label: "Awal Hitung Lead Time",
        value: "Lead Time terhitung dari jadwal keberangkatan pesawat freighter."
      },
      {
        num: 3,
        label: "Komponen Biaya Tambahan",
        value: "Harga belum termasuk packing, repacking, asuransi, tax, admin."
      },
      {
        num: 4,
        label: "Perhitungan Dimensi",
        value: "(Panjang X Lebar X Tinggi : 6.000 = ........Kg)."
      },
      {
        num: 5,
        label: "Maksimal Dimensi Barang",
        value: "Panjang 200 cm X Lebar 200 cm X Tinggi 200 cm."
      },
      {
        num: 6,
        label: "Maksimal Berat & Surcharge",
        value: "25kg - 150kg = No SC | 151kg - 500kg = SC 50% | 251kg - 1.000kg = SC 100% | Maksimal 2.000 kg. (Khusus destinasi Ternate: 25kg - 100kg = No SC)."
      },
      {
        num: 7,
        label: "Cakupan Port To Door",
        value: "Pengiriman dari Bandara asal sampai dengan alamat penerima dengan area pengantaran dalam kota."
      },
      {
        num: 8,
        label: "Jadwal Penerbangan Freighter",
        value: "Rute BPN, BDJ, BTH, GTO, KDI, MDC, PLW, TTE, UPG = Selasa s/d Minggu | Rute AMQ, DJJ, KOE, TRK, TIM, WMX = Konfirmasi Ke Marketing."
      }
    ]
  },
  {
    id: "air_non_commercial",
    title: "Moda Udara - Non Komersil Flight",
    subtitle: "Ketentuan Pengiriman via Penerbangan Non-Komersil / Penerbangan Khusus (Port To Door)",
    badge: "Muatan Spesial & Jumbo",
    modeType: "Udara Non-Komersil",
    iconName: "Package",
    popular: false,
    minWeight: "Min. 50 Kg",
    leadTime: "Terhitung dari Keberangkatan Pesawat",
    dimCalc: "(Panjang X Lebar X Tinggi : 6.000 = ....Kg)",
    maxDim: "Panjang 1.200 cm X Lebar 250 cm X Tinggi 250 cm",
    maxWeight: "Max 7.000 kg (Heavy Cargo)",
    rules: [
      {
        num: 1,
        label: "Berat Minimum Pengiriman",
        value: "Minimal muatan 50 Kg."
      },
      {
        num: 2,
        label: "Jadwal Penerbangan",
        value: "Jadwal penerbangan wajib melakukan konfirmasi terlebih dahulu ke Marketing."
      },
      {
        num: 3,
        label: "Awal Hitung Lead Time",
        value: "Lead Time terhitung mulai dari tanggal/jam keberangkatan pesawat."
      },
      {
        num: 4,
        label: "Komponen Biaya Tambahan",
        value: "Harga belum termasuk packing, repacking, asuransi, tax, dan admin."
      },
      {
        num: 5,
        label: "Perhitungan Dimensi Barang",
        value: "(Panjang X Lebar X Tinggi : 6.000 = ....Kg)."
      },
      {
        num: 6,
        label: "Maksimal Dimensi Barang",
        value: "Panjang 1.200 cm X Lebar 250 cm X Tinggi 250 cm."
      },
      {
        num: 7,
        label: "Maksimal Berat Barang",
        value: "Barang menggunakan karung = No SC. Untuk Heavy Cargo wajib hubungi Marketing (Maksimal hingga 7.000 kg)."
      },
      {
        num: 8,
        label: "Cakupan Port To Door",
        value: "Pengiriman dari Bandara asal sampai dengan alamat penerima dengan area pengantaran adalah dalam kota."
      }
    ]
  }
];

export const CARGO_RULES_DATA_EN: CargoCategoryRules[] = [
  {
    id: "sea_land",
    title: "Sea & Land Freight Mode",
    subtitle: "Terms and conditions for Maritime Ships & Trucking Fleet Shipments (Port To Door)",
    badge: "Economical & Large Volume",
    modeType: "Darat & Laut",
    iconName: "Ship",
    popular: false,
    minWeight: "Varies by route / minimum quota",
    leadTime: "Calculated from vessel departure",
    dimCalc: "(Length X Width X Height in cm : 4,000 = ....Kg)",
    maxDim: "Length 1,200 cm X Width 230 cm X Height 230 cm",
    maxWeight: "Manual labor limit (mechanical charges apply beyond limit)",
    rules: [
      {
        num: 1,
        label: "Vessel / Fleet Schedules",
        value: "Schedules strictly follow official dates released by shipping lines / land fleet operators."
      },
      {
        num: 2,
        label: "Lead Time Calculation Point",
        value: "Lead Time (estimated transit time) starts from the day the vessel/truck departs from origin port."
      },
      {
        num: 3,
        label: "Additional Charge Components",
        value: "Base rates exclude crate packing/repacking, insurance, tax, and administrative fees."
      },
      {
        num: 4,
        label: "Maximum Cargo Dimensions",
        value: "Length 1,200 cm X Width 230 cm X Height 230 cm."
      },
      {
        num: 5,
        label: "Weight Limit & Mechanical Fee",
        value: "Maximum weight per item is what can be manually carried by port laborers. Exceeding items incur additional mechanical crane/forklift fees."
      },
      {
        num: 6,
        label: "Port To Door Scope",
        value: "Port To Door includes transport from origin port up to recipient address within inner-city limits."
      },
      {
        num: 7,
        label: "Volumetric Calculation",
        value: "Cargo dimension calculation: (Length X Width X Height in cm : 4,000 = ....Kg)."
      }
    ]
  },
  {
    id: "air_commercial",
    title: "Air Freight - Commercial Flight",
    subtitle: "Terms and conditions for Regular Commercial Passenger Airline Cargo (Port To Door)",
    badge: "Daily On-Time Flights",
    modeType: "Udara Komersil",
    iconName: "Plane",
    popular: true,
    minWeight: "Min. 10 Kg",
    leadTime: "Calculated from flight departure",
    dimCalc: "Lion Air: LxWxH/5,000 | Other Airlines: LxWxH/6,000",
    maxDim: "Length 150 cm X Width 80 cm X Height 80 cm",
    maxWeight: "10kg - 69kg (No SC) | 70kg - Up (SC 100%, Max 150kg)",
    rules: [
      {
        num: 1,
        label: "Minimum Shipment Weight",
        value: "Minimum cargo weight is 10 Kg per Air Waybill (SMU)."
      },
      {
        num: 2,
        label: "Flight Schedule",
        value: "Daily flights available on commercial airline schedules."
      },
      {
        num: 3,
        label: "Lead Time Calculation Point",
        value: "Lead Time starts strictly from the flight departure time at origin airport."
      },
      {
        num: 4,
        label: "Additional Charge Components",
        value: "Rates exclude packing, repacking, insurance, tax, and administrative fees."
      },
      {
        num: 5,
        label: "Maximum Dimensions",
        value: "Length 150 cm X Width 80 cm X Height 80 cm."
      },
      {
        num: 6,
        label: "Weight Limit & Surcharges (SC)",
        value: "10kg - 69kg = No Surcharge | 70kg and above = 100% Surcharge (Max 150kg per piece)."
      },
      {
        num: 7,
        label: "Port To Door Scope",
        value: "Shipment from origin airport to recipient address within inner-city delivery zones."
      },
      {
        num: 8,
        label: "Volumetric Calculation Formula",
        value: "Lion Air Only: (L X W X H : 5,000 = .... Kg) | Other Airlines (Garuda/Citilink/Sriwijaya): (L X W X H : 6,000 = .... Kg)."
      },
      {
        num: 9,
        label: "Commodity Based Surcharges",
        value: "Live Animals & Human Remains = 100% SC | Dangerous Goods (DG) = 200% SC (excluding shipdeck fee) | Other special commodities require prior Marketing confirmation."
      }
    ]
  },
  {
    id: "air_freighter",
    title: "Air Freight - Freighter Flight",
    subtitle: "Terms and conditions for Dedicated All-Cargo Cargo Aircraft (Port To Door)",
    badge: "Large Capacity Aircraft",
    modeType: "Udara Freighter",
    iconName: "Plane",
    popular: false,
    minWeight: "Min. 25 Kg",
    leadTime: "Calculated from flight departure",
    dimCalc: "(Length X Width X Height in cm : 6,000 = ....Kg)",
    maxDim: "Length 200 cm X Width 200 cm X Height 200 cm",
    maxWeight: "Max 2,000 kg per piece (tiered SC applies)",
    rules: [
      {
        num: 1,
        label: "Minimum Shipment Weight",
        value: "Minimum cargo weight is 25 Kg."
      },
      {
        num: 2,
        label: "Lead Time Calculation Point",
        value: "Lead Time is calculated starting from freighter flight departure."
      },
      {
        num: 3,
        label: "Additional Charge Components",
        value: "Rates exclude packing, repacking, insurance, tax, and admin fees."
      },
      {
        num: 4,
        label: "Volumetric Calculation",
        value: "(Length X Width X Height in cm : 6,000 = ........Kg)."
      },
      {
        num: 5,
        label: "Maximum Cargo Dimensions",
        value: "Length 200 cm X Width 200 cm X Height 200 cm."
      },
      {
        num: 6,
        label: "Max Weight & Tiered Surcharge",
        value: "25kg - 150kg = No SC | 151kg - 500kg = 50% SC | 251kg - 1,000kg = 100% SC | Maximum 2,000 kg. (Special rule Ternate destination: 25kg - 100kg = No SC)."
      },
      {
        num: 7,
        label: "Port To Door Scope",
        value: "Shipment from origin airport up to recipient address within inner-city limits."
      },
      {
        num: 8,
        label: "Freighter Flight Schedule",
        value: "Routes BPN, BDJ, BTH, GTO, KDI, MDC, PLW, TTE, UPG = Tuesday to Sunday | Routes AMQ, DJJ, KOE, TRK, TIM, WMX = Confirm with Marketing."
      }
    ]
  },
  {
    id: "air_non_commercial",
    title: "Air Freight - Non Commercial Flight",
    subtitle: "Terms and conditions for Charter / Special Non-Commercial Air Freight (Port To Door)",
    badge: "Special & Heavy Cargo",
    modeType: "Udara Non-Komersil",
    iconName: "Package",
    popular: false,
    minWeight: "Min. 50 Kg",
    leadTime: "Calculated from flight departure",
    dimCalc: "(Length X Width X Height in cm : 6,000 = ....Kg)",
    maxDim: "Length 1,200 cm X Width 250 cm X Height 250 cm",
    maxWeight: "Max 7,000 kg (Heavy Cargo)",
    rules: [
      {
        num: 1,
        label: "Minimum Shipment Weight",
        value: "Minimum cargo weight is 50 Kg."
      },
      {
        num: 2,
        label: "Flight Schedule",
        value: "Flight schedule must be confirmed with Marketing team prior to booking."
      },
      {
        num: 3,
        label: "Lead Time Calculation Point",
        value: "Lead Time calculated from the exact departure time of the non-commercial aircraft."
      },
      {
        num: 4,
        label: "Additional Charge Components",
        value: "Rates exclude packing, repacking, insurance, tax, and admin fees."
      },
      {
        num: 5,
        label: "Volumetric Calculation",
        value: "(Length X Width X Height in cm : 6,000 = ....Kg)."
      },
      {
        num: 6,
        label: "Maximum Cargo Dimensions",
        value: "Length 1,200 cm X Width 250 cm X Height 250 cm."
      },
      {
        num: 7,
        label: "Maximum Weight & Heavy Cargo",
        value: "Sack packed items = No SC. For Heavy Cargo contact Marketing Hub (Maximum capacity up to 7,000 kg)."
      },
      {
        num: 8,
        label: "Port To Door Scope",
        value: "Shipment from origin airport up to recipient address within inner-city limits."
      }
    ]
  }
];

export const getCargoRules = (lang: Language): CargoCategoryRules[] => {
  return lang === "ID" ? CARGO_RULES_DATA_ID : CARGO_RULES_DATA_EN;
};

export const ID_TRANSLATION: TranslationDict = {
  navHome: "Beranda",
  navServices: "Layanan",
  navCalculator: "Kalkulator Tarif",
  navTracking: "Lacak Kargo",
  navPricing: "Paket Harga",
  navFaq: "FAQ",
  navContact: "Hubungi Kami",

  // Hero Section
  heroTitle: "Pengiriman Cargo Tanpa Hambatan,",
  heroHighlight: "Seluruh Indonesia",
  heroSubtitle: "PT Tungkal Trans Indonesia menghadirkan solusi logistik cepat, aman, tepat waktu, dan sangat kompetitif untuk kesuksesan bisnis Anda.",
  heroCtaCalc: "Hitung Tarif Sekarang",
  heroCtaContact: "Konsultasi WhatsApp",
  heroActiveClients: "1.200+ Klien Aktif",
  heroSatisfaction: "99.4% Pengiriman Tepat Waktu",

  // Rates Calculator
  calcTitle: "Estimasi Ongkir Kargo",
  calcOrigin: "Kota Asal",
  calcDestination: "Kota Tujuan",
  calcWeight: "Berat Barang (Kg)",
  calcVolume: "Dimensi Volume (Opsional)",
  calcLength: "Panjang (cm)",
  calcWidth: "Lebar (cm)",
  calcHeight: "Tinggi (cm)",
  calcService: "Jenis Jalur Kargo",
  calcBtn: "Cek Tarif Pengiriman",
  calcResultTitle: "Perkiraan Hasil Pencarian",
  calcEstCost: "Estimasi Biaya",
  calcEstTime: "Estimasi Pengiriman",
  calcMinNote: "Catatan: Tarif di atas adalah estimasi. Berlaku ketentuan berat minimal per jalur kargo.",
  calcBookBtn: "Pesan Pengiriman via WA",

  // Social Proof Section
  socialProofTitle: "Dipercaya oleh Ratusan Bisnis, Pabrik, & Distributor di Indonesia",

  // Services Section
  servicesTitle: "Layanan Ekspedisi Kami",
  servicesSubtitle: "Menghubungkan rantai pasokan Anda ke seluruh penjuru Nusantara melalui tiga pilar pengiriman handal.",
  landTitle: "Kargo Darat",
  landDesc: "Pengiriman via truk handal (CDD, Fuso, Tronton) dengan opsi FTL (Full Truck Load) dan LTL (Less than Truck Load) yang sangat hemat untuk rute Sumatera, Jawa, dan Bali.",
  seaTitle: "Kargo Laut",
  seaDesc: "Solusi logistik antar pulau berskala besar dengan kontainer FCL (Full Container) dan LCL (Less Container) menggunakan kapal cepat Pelni maupun cargo kontainer regular.",
  airTitle: "Kargo Udara",
  airDesc: "Layanan kargo udara ekspres prioritas tinggi untuk kiriman sensitif waktu, dokumen bisnis, atau barang bernilai tinggi ke seluruh bandara utama Indonesia.",
  serviceFeaturesTitle: "Keunggulan Kami",

  // Tracking Section
  trackTitle: "Lacak Posisi Kargo Anda",
  trackSubtitle: "Masukkan nomor resi T Trans Logistik Anda untuk melihat perkembangan pengiriman real-time.",
  trackPlaceholder: "Masukkan No. Resi (Contoh: TTC-2026-0001)...",
  trackBtn: "Lacak Sekarang",
  trackNotFound: "Nomor resi tidak ditemukan. Pastikan format benar (e.g., TTC-2026-0001)",
  trackDetails: "Rincian Kargo",
  trackRoute: "Rute Pengiriman",
  trackStatus: "Status Saat Ini",
  trackHistory: "Riwayat Perjalanan",

  // Pricing Section
  priceTitle: "Informasi Spesifikasi & Ketentuan Kargo",
  priceSubtitle: "Panduan lengkap spesifikasi pengiriman, estimasi durasi, dan skema kalkulasi untuk Kargo Darat, Kargo Laut, dan Kargo Udara.",
  priceUnitKg: "",
  priceFeatures: [
    "Gratis Layanan Pickup (Min. berat)",
    "Asuransi Kehilangan & Kerusakan All-Risk",
    "Customer Service & Dispatcher 24/7",
    "Pelacakan Posisi Kargo Real-time",
    "Bantuan Bongkar Muat & Packing Kayu"
  ],
  priceCta: "Tanya Tarif & Konsultasi WA",

  // FAQ Section
  faqTitle: "Pertanyaan yang Sering Diajukan",
  faqSubtitle: "Informasi lengkap seputar operasional, asuransi kargo, dan cara bertransaksi dengan kami.",
  faqSearchPlaceholder: "Cari pertanyaan Anda di sini...",

  // Testimonials Section
  testiTitle: "Suara Klien Profesional Kami",
  testiSubtitle: "Ulasan jujur dari para pemilik bisnis, manajer rantai pasok, dan distributor kargo seluruh Indonesia.",

  // Contact / Footer Section
  contactTitle: "Siap Memulai Pengiriman?",
  contactSubtitle: "Hubungi tim logistik profesional kami sekarang untuk mendapatkan penawaran korporat khusus atau jadwalkan penjemputan.",
  contactFormName: "Nama Lengkap",
  contactFormEmail: "Alamat Email",
  contactFormPhone: "Nomor WhatsApp",
  contactFormMessage: "Detail Muatan & Rute Pengiriman",
  contactFormSend: "Kirim Permintaan Kuotasi",
  contactSuccess: "Pesan berhasil terkirim! Tim kami akan menghubungi Anda dalam waktu 15 menit via WhatsApp.",
  footerRights: "Hak Cipta Dilindungi Undang-Undang.",
  footerAddress: "Jl. Bungur No. 1G, Kebayoran Lama, Jakarta Selatan, Indonesia"
};

export const EN_TRANSLATION: TranslationDict = {
  navHome: "Home",
  navServices: "Services",
  navCalculator: "Rate Calculator",
  navTracking: "Track Cargo",
  navPricing: "Pricing Packages",
  navFaq: "FAQ",
  navContact: "Contact Us",

  // Hero Section
  heroTitle: "Seamless Cargo Shipping,",
  heroHighlight: "Across Indonesia",
  heroSubtitle: "PT Tungkal Trans Indonesia delivers fast, secure, on-time, and highly competitive logistics solutions to power your business success.",
  heroCtaCalc: "Calculate Rates Now",
  heroCtaContact: "Consult via WhatsApp",
  heroActiveClients: "1,200+ Active Clients",
  heroSatisfaction: "99.4% On-Time Delivery Rate",

  // Rates Calculator
  calcTitle: "Cargo Shipping Calculator",
  calcOrigin: "Origin City",
  calcDestination: "Destination City",
  calcWeight: "Weight (Kg)",
  calcVolume: "Volume Dimensions (Optional)",
  calcLength: "Length (cm)",
  calcWidth: "Width (cm)",
  calcHeight: "Height (cm)",
  calcService: "Cargo Transportation Way",
  calcBtn: "Calculate Logistics Fare",
  calcResultTitle: "Estimated Results",
  calcEstCost: "Estimated Cost",
  calcEstTime: "Estimated Delivery",
  calcMinNote: "Note: Rates shown above are estimates. Minimum cargo weight limits apply depending on the service.",
  calcBookBtn: "Book Delivery via WA",

  // Social Proof Section
  socialProofTitle: "Trusted by Hundreds of Businesses, Factories, & Distributors in Indonesia",

  // Services Section
  servicesTitle: "Our Transportation Services",
  servicesSubtitle: "Connecting your supply chain to all corners of the Indonesian archipelago through our three reliable pillars.",
  landTitle: "Land Cargo",
  landDesc: "Cost-effective trucking deliveries (CDD, Fuso, Tronton) with FTL (Full Truck Load) and LTL (Less than Truck Load) options covering Sumatra, Java, and Bali routes.",
  seaTitle: "Sea Cargo",
  seaDesc: "Inter-island logistics for bulk & oversized packages utilizing FCL (Full Container Load) and LCL (Less Container Load) shipping via Pelni and regular cargo vessels.",
  airTitle: "Air Cargo",
  airDesc: "Express high-priority air cargo solutions for time-sensitive materials, legal documents, or high-value items delivering to all major Indonesian airports.",
  serviceFeaturesTitle: "Our Core Advantages",

  // Tracking Section
  trackTitle: "Track Your Cargo Shipment",
  trackSubtitle: "Enter your T Trans Logistik receipt tracking number to witness the real-time shipping milestones.",
  trackPlaceholder: "Enter tracking number (e.g. TTC-2026-0001)...",
  trackBtn: "Track Now",
  trackNotFound: "Receipt number not found. Make sure the format is correct (e.g., TTC-2026-0001)",
  trackDetails: "Cargo Details",
  trackRoute: "Shipping Route",
  trackStatus: "Current Status",
  trackHistory: "Transit Logs",

  // Pricing Section
  priceTitle: "Cargo Route & Specification Guide",
  priceSubtitle: "Comprehensive guide on shipping specs, estimated durations, and calculation rules for Land Cargo, Sea Cargo, and Air Cargo.",
  priceUnitKg: "",
  priceFeatures: [
    "Free Pickup Service (Threshold min. weight)",
    "All-Risk Loss & Damage Insurance Coverage",
    "Dedicated 24/7 Dispatcher & Support",
    "Real-time Digital Cargo Tracking",
    "Loading/Unloading & Wooden Crate Option"
  ],
  priceCta: "Inquire Rates via WA",

  // FAQ Section
  faqTitle: "Frequently Asked Questions",
  faqSubtitle: "Comprehensive guidelines on freight booking, marine cargo insurance, and cargo packaging.",
  faqSearchPlaceholder: "Search for your query...",

  // Testimonials Section
  testiTitle: "What Our Corporate Clients Say",
  testiSubtitle: "Genuine feedback from supply chain directors, manufacturers, and nationwide retail distributors.",

  // Contact / Footer Section
  contactTitle: "Ready to Initiate Shipping?",
  contactSubtitle: "Contact our professional logistics team now to receive a customized corporate cargo quote or schedule a direct pickup.",
  contactFormName: "Full Name",
  contactFormEmail: "Email Address",
  contactFormPhone: "WhatsApp Number",
  contactFormMessage: "Cargo Weight, Dimensions & Routes",
  contactFormSend: "Request Quote Now",
  contactSuccess: "Inquiry received successfully! Our logistics representative will message you on WhatsApp within 15 minutes.",
  footerRights: "All Rights Reserved.",
  footerAddress: "Jl. Bungur No. 1G, Kebayoran Lama, Jakarta Selatan, Indonesia"
};

// Tracking Database
export const TRACKING_DB: TrackingData[] = [
  {
    id: "TTC-2026-0001",
    origin: "Jakarta (Sunter Warehouse)",
    destination: "Jambi City (Sipin Hub)",
    service: "Land",
    sender: "PT Global Indo Retail",
    receiver: "Toko Sinar Utama Jambi",
    weight: 250,
    currentStatus: "Delivered / Selesai",
    steps: [
      {
        title: "Kargo Diterima di Tujuan",
        description: "Barang telah diterima dengan baik oleh Bapak Rudi di Sipin Hub, Jambi. Tanda terima telah ditandatangani.",
        date: "2026-07-11 14:30",
        location: "Jambi (Sipin Hub)",
        status: "completed"
      },
      {
        title: "Kurir Menuju Lokasi Penerima",
        description: "Muatan dikeluarkan dari gudang transit Sipin Jambi menggunakan armada L300 untuk dikirim langsung ke alamat tujuan.",
        date: "2026-07-11 09:00",
        location: "Jambi (Transit)",
        status: "completed"
      },
      {
        title: "Sampai di Gudang Jambi",
        description: "Truk Tronton PT TTrans tiba dengan selamat di gudang transit Sipin Jambi. Pembongkaran barang sedang dilakukan.",
        date: "2026-07-10 18:15",
        location: "Jambi (Transit)",
        status: "completed"
      },
      {
        title: "Penyeberangan Selat Sunda",
        description: "Truk cargo menyeberang via Pelabuhan Merak ke Bakauheni menggunakan Kapal Ferry Eksekutif.",
        date: "2026-07-09 23:45",
        location: "Pelabuhan Merak-Bakauheni",
        status: "completed"
      },
      {
        title: "Kargo Diberangkatkan",
        description: "Kargo dimuat ke dalam armada Truk Fuso Box dan diberangkatkan dari Sunter Utama, Jakarta.",
        date: "2026-07-09 08:30",
        location: "Jakarta (Sunter Hub)",
        status: "completed"
      }
    ]
  },
  {
    id: "TTC-2026-0002",
    origin: "Surabaya (Tanjung Perak Port)",
    destination: "Medan (Belawan Port Hub)",
    service: "Sea",
    sender: "PT Baja Makmur Abadi",
    receiver: "CV Medan Mega Teknik",
    weight: 4500,
    currentStatus: "In Transit / Sedang Berlayar",
    steps: [
      {
        title: "Dalam Perjalanan Laut",
        description: "Kapal Kontainer MV Nusantara III sedang berada di koordinat Selat Karimata menuju pelabuhan Belawan, Medan.",
        date: "2026-07-12 06:00",
        location: "Selat Karimata",
        status: "current"
      },
      {
        title: "Keberangkatan Kapal Kontainer",
        description: "Peti kemas FCL 20ft dimuat ke kapal dan kapal resmi berangkat dari Tanjung Perak Surabaya.",
        date: "2026-07-10 11:00",
        location: "Surabaya (Tanjung Perak)",
        status: "completed"
      },
      {
        title: "Kargo Dimasukkan ke Kontainer",
        description: "Stuffing barang besi baja CV Medan Mega selesai dilakukan di area depo kontainer T Trans Surabaya.",
        date: "2026-07-09 14:00",
        location: "Surabaya Depo",
        status: "completed"
      },
      {
        title: "Pengambilan Kargo di Pabrik",
        description: "Penjemputan kargo besi baja seberat 4.5 Ton menggunakan Trailer 20ft milik PT Tungkal Trans Indonesia.",
        date: "2026-07-08 10:00",
        location: "Gresik (Factory Area)",
        status: "completed"
      }
    ]
  },
  {
    id: "TTC-2026-0003",
    origin: "Jakarta (Soekarno-Hatta Airport)",
    destination: "Denpasar (Ngurah Rai Hub)",
    service: "Air",
    sender: "PT Elektronik Nusantara",
    receiver: "Bali Gadget Center",
    weight: 45,
    currentStatus: "Processing at Warehouse / Diproses di Gudang",
    steps: [
      {
        title: "Pengecekan Keamanan Penerbangan",
        description: "Kargo elektronik sedang melalui proses X-Ray kepabeanan & Bea Cukai di Terminal Kargo Bandara Soekarno-Hatta.",
        date: "2026-07-12 09:30",
        location: "CGK Airport Cargo Area",
        status: "current"
      },
      {
        title: "Kargo Tiba di Bandara",
        description: "Pengiriman diantarkan oleh mobil box T Trans Express ke Soekarno-Hatta Terminal Kargo Internasional.",
        date: "2026-07-12 07:00",
        location: "Tangerang (CGK Airport)",
        status: "completed"
      },
      {
        title: "Kargo Dipacking Kayu & Palet",
        description: "Proses ekstra proteksi dengan pembungkusan gelembung tebal dan packing peti kayu solid untuk menjamin keamanan sirkuit elektronik.",
        date: "2026-07-11 16:00",
        location: "Jakarta (Sunter Hub)",
        status: "completed"
      }
    ]
  }
];

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "land",
    title: "Kargo Darat (Land Cargo)",
    desc: "Armada darat modern kami siap membawa muatan besar Anda melintasi pulau dengan ketepatan waktu tinggi.",
    features: [
      "Armada lengkap: CDE, CDD, Fuso Box, Tronton Wingbox, hingga Trailer Lowbed",
      "Melayani sewa truk satu armada penuh (FTL) maupun pengiriman eceran per kilogram (LTL)",
      "Jadwal keberangkatan harian rute Jakarta-Sumatera, Jawa-Bali, dan sebaliknya",
      "Dilengkapi pengikat kargo bersertifikat dan asuransi all-risk"
    ],
    icon: "Truck",
    details: "Darat"
  },
  {
    id: "sea",
    title: "Kargo Laut (Sea Cargo)",
    desc: "Opsi pengiriman ideal untuk barang berkapasitas sangat masif, alat berat, atau distribusi komoditas antar pulau.",
    features: [
      "Layanan Full Container Load (FCL) ukuran kontainer 20ft, 40ft, dan HC",
      "Layanan Less Container Load (LCL) konsolidasi cargo kubikasi hemat",
      "Kerjasama erat dengan operator pelayaran utama (Samudera Indonesia, Temas, Meratus)",
      "Melayani rute roro tercepat hingga pelabuhan terpencil di kawasan Indonesia Timur"
    ],
    icon: "Ship",
    details: "Laut"
  },
  {
    id: "air",
    title: "Kargo Udara (Air Cargo)",
    desc: "Saat waktu adalah aset paling berharga Anda. Pengiriman super cepat menggunakan rute maskapai terbaik.",
    features: [
      "Kemitraan agen resmi kargo udara dengan Garuda Indonesia, Citilink, Lion Cargo",
      "Layanan door-to-door prioritas dalam waktu 24-48 jam ke kota-kota utama Indonesia",
      "Penanganan ahli untuk komoditas sensitif (vaksin, buah segar, dokumen legal, gadget premium)",
      "Pengamanan ekstra menggunakan segel anti-tempered digital"
    ],
    icon: "Plane",
    details: "Udara"
  }
];

export const PRICING_PLANS_ID: PricingPlanInfo[] = [
  {
    id: "land",
    title: "Kargo Darat (Land Cargo)",
    badge: "Efisien & Terjangkau",
    popular: false,
    desc: "Pengiriman muatan via jalan darat melintasi tol dan antar pulau Sumatera, Jawa, Bali, hingga NTB.",
    serviceType: "FTL (Full Truck) & LTL (Eceran)",
    minWeight: "Min. 50 kg",
    speed: "3 - 5 Hari Kerja",
    suitableFor: "Barang Retail, Sparepart, Furniture, Komoditas, & Alat Proyek",
    coverage: "Jawa, Sumatera, Bali, & Lombok",
    calcFormula: "(P x L x T Dalam cm) / 4.000",
    features: [
      "Armada Lengkap: CDE, CDD, Fuso, Tronton Wingbox & Trailer",
      "Sewa Satu Truk Penuh (FTL) atau Pengiriman Eceran (LTL)",
      "Jadwal Keberangkatan Harian Rute Lintas Pulau",
      "Gratis Layanan Pickup untuk Berat Akumulatif Tertentu",
      "Perhitungan Berat Transparan Menggunakan Volumetrik",
      "Proteksi Asuransi All-Risk & Pengawalan Muatan"
    ]
  },
  {
    id: "sea",
    title: "Kargo Laut (Sea Cargo)",
    badge: "Terfavorit Volume Jumbo",
    popular: true,
    desc: "Solusi terhemat untuk muatan berskala masif, kontainer peti kemas, dan distribusi antar pulau Nusantara.",
    serviceType: "FCL (Kontainer) & LCL (Kubikasi)",
    minWeight: "Min. 100 kg / 1 CBM",
    speed: "7 - 14 Hari Kerja",
    suitableFor: "Alat Berat, Material Konstruksi, Hasil Pabrik, & Stok Grosir",
    coverage: "Seluruh Pelabuhan Utama & Pelosok Indonesia",
    calcFormula: "Per Kubik (CBM) atau Per Kontainer (20ft / 40ft)",
    features: [
      "Kontainer 20ft, 40ft, 40ft HC, Dry & Reefer Container",
      "Pengiriman Kubikasi Hemat (LCL) untuk Usaha Kecil-Menengah",
      "Kerjasama Kapal Cepat Pelni & Liner Utama (Meratus, Temas)",
      "Layanan Port-to-Port, Port-to-Door, hingga Door-to-Door",
      "Pengurusan Dokumen Manifest & Bill of Lading (B/L)",
      "Layanan Stuffing & Unstuffing Profesional di Depo"
    ]
  },
  {
    id: "air",
    title: "Kargo Udara (Air Cargo)",
    badge: "Kecepatan Prioritas Utama",
    popular: false,
    desc: "Pengiriman udara super cepat prioritas tinggi untuk barang bernilai tinggi dan berbatas waktu ketat.",
    serviceType: "Express Air Freight Prioritas",
    minWeight: "Min. 10 kg",
    speed: "1 - 2 Hari Kerja",
    suitableFor: "Dokumen Penting, Obat/Vaksin, Elektronik, & Sparepart Kritis",
    coverage: "Seluruh Kota Bandara Utama di Indonesia",
    calcFormula: "(P x L x T Dalam cm) / 6.000",
    features: [
      "Kemitraan Resmi Maskapai Garuda Indonesia, Citilink, & Lion Cargo",
      "Jaminan Tiba Sameday / Nextday ke Kota-Kota Besar",
      "Penanganan Khusus Dokumen & Barang Bernilai Tinggi",
      "Pengamanan Ekstra Packing Kayu & Segel Anti-Tempered Digital",
      "Proses Cepat Bea Cukai & Pengecekan X-Ray Bandara",
      "Lacak Posisi Penerbangan Real-Time"
    ]
  }
];

export const PRICING_PLANS_EN: PricingPlanInfo[] = [
  {
    id: "land",
    title: "Land Cargo (FTL / LTL)",
    badge: "Efficient & Cost-Effective",
    popular: false,
    desc: "Flexible overland transportation connecting major cities across Java, Sumatra, Bali, and Lombok.",
    serviceType: "FTL (Full Truck) & LTL (Part Load)",
    minWeight: "Min. 50 kg",
    speed: "3 - 5 Business Days",
    suitableFor: "Retail Goods, Machinery Parts, Furniture, Commodities & Project Cargo",
    coverage: "Java, Sumatra, Bali, & Lombok Routes",
    calcFormula: "(L x W x H in cm) / 4,000",
    features: [
      "Complete Fleet: CDE, CDD, Fuso, Tronton Wingbox & Trailers",
      "Full Truck Load (FTL) or Less Than Truck Load (LTL) options",
      "Daily Scheduled Departures Across Main Highways",
      "Free Doorstep Pickup for Minimum Threshold Weights",
      "Transparent Pricing based on Actual or Volume Weight",
      "Full All-Risk Cargo Insurance & Fleet Tracking"
    ]
  },
  {
    id: "sea",
    title: "Sea Cargo (FCL / LCL)",
    badge: "Most Popular for Bulk Cargo",
    popular: true,
    desc: "Economical solution for heavy machinery, bulk merchandise, and nationwide inter-island containers.",
    serviceType: "FCL (Full Container) & LCL (Consolidated)",
    minWeight: "Min. 100 kg / 1 CBM",
    speed: "7 - 14 Business Days",
    suitableFor: "Heavy Machinery, Construction Supplies, Industrial Bulk, & Wholesale Stock",
    coverage: "All Major Ports & Island Hubs Nationwide",
    calcFormula: "Per Cubic Meter (CBM) or Per Container (20ft / 40ft)",
    features: [
      "20ft, 40ft, 40ft High Cube Dry & Specialized Containers",
      "LCL Consolidation for Smaller Cubic Volume Cargo",
      "Direct Partnerships with Pelni, Meratus, & Temas Liners",
      "Flexible Options: Port-to-Port, Port-to-Door, & Door-to-Door",
      "Port Document Handling & Bill of Lading (B/L) Management",
      "Professional Cargo Stuffing & Depot Handling"
    ]
  },
  {
    id: "air",
    title: "Air Cargo (Express Air)",
    badge: "Maximum Priority Speed",
    popular: false,
    desc: "Ultra-fast priority air freight for time-critical, high-value, and sensitive shipments.",
    serviceType: "Priority Express Air Freight",
    minWeight: "Min. 10 kg",
    speed: "1 - 2 Business Days",
    suitableFor: "Legal Documents, Pharmaceuticals, Electronics, & Critical Machinery Parts",
    coverage: "All Major Airport Cities in Indonesia",
    calcFormula: "(L x W x H in cm) / 6,000",
    features: [
      "Official Cargo Agent for Garuda Indonesia, Citilink, & Lion Air",
      "Sameday / Nextday Delivery Guarantee to Main Metropolitan Hubs",
      "Specialized Handling for High-Value & Sensitive Shipments",
      "Extra Protection: Wooden Crate & Digital Anti-Temper Seals",
      "Fast-Track Airport X-Ray Security Clearing",
      "Real-Time Air Freight Flight Tracking"
    ]
  }
];

export const getPricingPlans = (lang: Language): PricingPlanInfo[] => {
  return lang === "ID" ? PRICING_PLANS_ID : PRICING_PLANS_EN;
};

export const PRICING_PLANS = PRICING_PLANS_ID;

export const FAQ_DATA: FaqItem[] = [
  {
    category: "general",
    question: "Apa itu PT Tungkal Trans Indonesia (T Trans Logistik)?",
    answer: "PT Tungkal Trans Indonesia adalah perusahaan penyedia jasa forwarding kargo yang melayani pengiriman logistik darat, laut, dan udara ke seluruh Indonesia secara profesional dengan komitmen aman, cepat, dan kompetitif."
  },
  {
    category: "service",
    question: "Apakah T Trans Logistik melayani pickup / penjemputan barang langsung ke kantor/gudang saya?",
    answer: "Ya! Kami menyediakan layanan gratis penjemputan (free pickup) untuk wilayah area cakupan utama kami (seperti Jambi, Jakarta, Tangerang, Bekasi, Surabaya) dengan berat kargo akumulatif minimal 100 kg."
  },
  {
    category: "price",
    question: "Bagaimana cara menghitung berat volume untuk kargo ringan berukuran besar?",
    answer: "Untuk kargo bervolume besar namun ringan, tarif dihitung dengan berat volume sesuai standar regulasi asosiasi logistik internasional:\n- Jalur Darat & Laut: (Panjang x Lebar x Tinggi) / 4.000 = Kg\n- Jalur Udara: (Panjang x Lebar x Tinggi) / 6.000 = Kg"
  },
  {
    category: "tracking",
    question: "Bagaimana cara melacak posisi pengiriman kargo saya?",
    answer: "Anda dapat memantau perjalanan cargo Anda secara real-time melalui fitur 'Lacak Kargo' di website ini dengan memasukkan nomor resi yang diberikan saat pendaftaran kargo (misal: TTC-2026-0001)."
  },
  {
    category: "general",
    question: "Apakah barang yang dikirim melalui T Trans Logistik dilindungi asuransi?",
    answer: "Ya, kami bekerja sama dengan perusahaan asuransi terpercaya untuk menjamin muatan Anda terlindungi dari risiko kerusakan, pencurian, atau bencana selama proses pengiriman berlangsung."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Direktur Rantai Pasok",
    company: "PT Baja Surya Perkasa",
    text: "T Trans Logistik telah menjadi mitra pengiriman besi baja kami selama lebih dari 3 tahun. Pengiriman laut FCL mereka dari Surabaya ke pelosok Sumatera selalu tiba tepat waktu, dan asuransi kargonya sangat lengkap. Sangat terpercaya!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 2,
    name: "Fiona Christina",
    role: "Manajer Logistik & Distribusi",
    company: "PT Indo Cita Kosmetik",
    text: "Untuk pengiriman kosmetik bernilai tinggi yang sensitif suhu, kami selalu memakai Kargo Udara dari T Trans. Proses bea cukai cepat, penanganannya aman dengan peti kayu tambahan, dan tim support mereka selalu sedia 24/7 di WhatsApp.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 3,
    name: "Ahmad Hidayat",
    role: "Pemilik Bisnis Retail",
    company: "CV Mandiri Agro Perkasa",
    text: "Ekspedisi darat antar pulau T Trans sangat bersahabat bagi pelaku UMKM. Tarif per kg untuk kiriman pupuk dan benih ke Jambi sangat murah, ditambah fasilitas pickup gratis langsung ke gudang kami di Bekasi.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  }
];
