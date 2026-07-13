import { TranslationDict, TrackingData, ServiceDetail, Testimonial, FaqItem } from "./types";

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
  priceTitle: "Pilihan Tarif Hemat",
  priceSubtitle: "Kami memberikan skema harga bersahabat dengan komitmen proteksi barang tanpa kompromi.",
  priceUnitKg: "/ Kg",
  priceFeatures: [
    "Gratis Layanan Pickup (Min. berat)",
    "Asuransi Kehilangan & Kerusakan",
    "Customer Service Handal 24/7",
    "Pelacakan Online Real-time",
    "Bantuan Bongkar Muat Barang"
  ],
  priceCta: "Pilih Jalur Ini",

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
  priceTitle: "Affordable Shipping Rates",
  priceSubtitle: "We deliver customer-centric pricing models with uncompromised material protection commitments.",
  priceUnitKg: "/ Kg",
  priceFeatures: [
    "Free Pickup Service (Min. weight)",
    "Damage & Loss Full Insurance",
    "Expert Support Assistance 24/7",
    "Real-time Digital Cargo Tracking",
    "Cargo Loading & Unloading Aid"
  ],
  priceCta: "Select Cargo Route",

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

export const PRICING_PLANS = [
  {
    id: "land",
    title: "Kargo Darat (FTL / LTL)",
    priceIdr: "3.500",
    minWeight: "Min. 50 kg",
    speed: "3 - 5 Hari Kerja",
    icon: "Truck",
    popular: false,
    badge: "Tarif Hemat Sumatera-Jawa",
    desc: "Pengiriman barang retail industri, furniture, suku cadang, dan hasil komoditi lewat tol trans."
  },
  {
    id: "sea",
    title: "Kargo Laut (LCL / FCL)",
    priceIdr: "2.500",
    minWeight: "Min. 100 kg",
    speed: "7 - 14 Hari Kerja",
    icon: "Ship",
    popular: true,
    badge: "Terfavorit Antar Pulau",
    desc: "Pengiriman alat berat, tumpukan semen/pupuk, besi konstruksi, dan suplai dagang bervolume jumbo."
  },
  {
    id: "air",
    title: "Kargo Udara (Express Air)",
    priceIdr: "15.000",
    minWeight: "Min. 10 kg",
    speed: "1 - 2 Hari Kerja",
    icon: "Plane",
    popular: false,
    badge: "Kecepatan Maksimal Prioritas",
    desc: "Pengiriman dokumen penting, barang farmasi, suku cadang mesin pabrik kritis, atau gadget elektronik."
  }
];

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
