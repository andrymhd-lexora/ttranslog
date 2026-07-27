export interface DestinationRate {
  no: number;
  tlc: string;
  destination: string;
  price: number; // Price in IDR per kg
  leadTime: string; // Lead time string e.g. "1-2"
  minWeight?: number; // Minimum weight requirement if route-specific
}

export interface PortToPortRate {
  no: number;
  tlc: string;
  destination: string;
  lion: number;
  citilink: number;
  garuda: number;
  sriwijaya: number;
  pelita: number;
  leadTimeKomersil: string;
  freighterPrice: number;
  freighterJadwal: string;
  freighterLeadTime: string;
  nonKomersilPrice: number;
  nonKomersilLeadTime: string;
}

// 1. Kargo Udara - Komersil PTD (Port to Door, Min 10 Kg)
export const AIR_COMMERCIAL_PTD: DestinationRate[] = [
  { no: 1, tlc: "AAP", destination: "Samarinda", price: 42150, leadTime: "1-2" },
  { no: 2, tlc: "AMQ", destination: "Ambon", price: 64200, leadTime: "1-2" },
  { no: 3, tlc: "ARD", destination: "Alor", price: 97250, leadTime: "2-3" },
  { no: 4, tlc: "BDJ", destination: "Banjarmasin", price: 40500, leadTime: "1-2" },
  { no: 5, tlc: "BEJ", destination: "Berau", price: 84600, leadTime: "1-2" },
  { no: 6, tlc: "BIK", destination: "Biak", price: 92700, leadTime: "1-2" },
  { no: 7, tlc: "BKS", destination: "Bengkulu", price: 30200, leadTime: "1-2" },
  { no: 8, tlc: "BMU", destination: "Bima", price: 93700, leadTime: "2-3" },
  { no: 9, tlc: "BPN", destination: "Balikpapan", price: 41750, leadTime: "1-2" },
  { no: 10, tlc: "BTH", destination: "Batam", price: 37800, leadTime: "1-2" },
  { no: 11, tlc: "BTJ", destination: "Banda Aceh", price: 46300, leadTime: "1-2" },
  { no: 12, tlc: "BUU", destination: "Muara Bungo", price: 28400, leadTime: "2-3" },
  { no: 13, tlc: "BUW", destination: "Bau-Bau", price: 80550, leadTime: "2-3" },
  { no: 14, tlc: "BWX", destination: "Banyuwangi", price: 32650, leadTime: "1-2" },
  { no: 15, tlc: "DEX", destination: "Dekai", price: 129400, leadTime: "3-4" },
  { no: 16, tlc: "DJB", destination: "Jambi", price: 30400, leadTime: "1-2" },
  { no: 17, tlc: "DJJ", destination: "Jayapura", price: 88550, leadTime: "1-2" },
  { no: 18, tlc: "DOB", destination: "Dobo", price: 98300, leadTime: "2-3" },
  { no: 19, tlc: "DPS", destination: "Denpasar", price: 24850, leadTime: "1-2" },
  { no: 20, tlc: "DTB", destination: "Silangit", price: 39800, leadTime: "2-3" },
  { no: 21, tlc: "ENE", destination: "Ende", price: 80550, leadTime: "2-3" },
  { no: 22, tlc: "FKQ", destination: "Fak-Fak", price: 146800, leadTime: "2-3" },
  { no: 23, tlc: "FLZ", destination: "Sibolga", price: 64400, leadTime: "2-3" },
  { no: 24, tlc: "GNS", destination: "Gunung Sitoli", price: 54800, leadTime: "2-3" },
  { no: 25, tlc: "GTO", destination: "Gorontalo", price: 57500, leadTime: "1-2" },
  { no: 26, tlc: "KBU", destination: "Kota Baru", price: 56300, leadTime: "2-3" },
  { no: 27, tlc: "KDI", destination: "Kendari", price: 58000, leadTime: "1-2" },
  { no: 28, tlc: "KNG", destination: "Kaimana", price: 125550, leadTime: "2-3" },
  { no: 29, tlc: "KNO", destination: "Medan", price: 38150, leadTime: "1-2" },
  { no: 30, tlc: "KOE", destination: "Kupang", price: 61500, leadTime: "1-2" },
  { no: 31, tlc: "KTG", destination: "Ketapang", price: 61350, leadTime: "2-3" },
  { no: 32, tlc: "LBJ", destination: "Labuan Bajo", price: 61800, leadTime: "1-2" },
  { no: 33, tlc: "LLJ", destination: "Lubuk Linggau", price: 47200, leadTime: "2-3" },
  { no: 34, tlc: "LNU", destination: "Malinau", price: 74000, leadTime: "2-3" },
  { no: 35, tlc: "LOP", destination: "Lombok", price: 32350, leadTime: "1-2" },
  { no: 36, tlc: "LSW", destination: "Lhokseumawe", price: 53750, leadTime: "2-3" },
  { no: 37, tlc: "LUV", destination: "Tual", price: 106850, leadTime: "1-2" },
  { no: 38, tlc: "LUW", destination: "Luwuk", price: 71000, leadTime: "1-2" },
  { no: 39, tlc: "MDC", destination: "Manado", price: 58000, leadTime: "1-2" },
  { no: 40, tlc: "MJU", destination: "Mamuju", price: 91700, leadTime: "2-3" },
  { no: 41, tlc: "MKQ", destination: "Merauke", price: 92200, leadTime: "1-2" },
  { no: 42, tlc: "MKW", destination: "Manokwari", price: 94700, leadTime: "1-2" },
  { no: 43, tlc: "MLG", destination: "Malang", price: 31650, leadTime: "1-2" },
  { no: 44, tlc: "MOF", destination: "Maumere", price: 81150, leadTime: "2-3" },
  { no: 45, tlc: "MOH", destination: "Morowali", price: 74000, leadTime: "2-3" },
  { no: 46, tlc: "NAM", destination: "Namlea", price: 83600, leadTime: "2-3" },
  { no: 47, tlc: "NBX", destination: "Nabire", price: 137700, leadTime: "1-2" },
  { no: 48, tlc: "NTX", destination: "Natuna", price: 72000, leadTime: "1-2" },
  { no: 49, tlc: "OKS", destination: "Oksibil", price: 158550, leadTime: "3-4" },
  { no: 50, tlc: "PDG", destination: "Padang", price: 33250, leadTime: "1-2" },
  { no: 51, tlc: "PGK", destination: "Pangkal Pinang", price: 34550, leadTime: "1-2" },
  { no: 52, tlc: "PKN", destination: "Pangkalan Bun", price: 39650, leadTime: "1-2" },
  { no: 53, tlc: "PKU", destination: "Pekanbaru", price: 35150, leadTime: "1-2" },
  { no: 54, tlc: "PKY", destination: "Palangkaraya", price: 39200, leadTime: "1-2" },
  { no: 55, tlc: "PLM", destination: "Palembang", price: 28400, leadTime: "1-2" },
  { no: 56, tlc: "PLW", destination: "Palu", price: 58500, leadTime: "1-2" },
  { no: 57, tlc: "PNK", destination: "Pontianak", price: 37500, leadTime: "1-2" },
  { no: 58, tlc: "PSJ", destination: "Poso", price: 68000, leadTime: "2-3" },
  { no: 59, tlc: "RAQ", destination: "Raha", price: 70500, leadTime: "2-3" },
  { no: 60, tlc: "SMQ", destination: "Sampit", price: 42500, leadTime: "2-3" },
  { no: 61, tlc: "SOC", destination: "Solo", price: 25850, leadTime: "1-2" },
  { no: 62, tlc: "SOQ", destination: "Sorong", price: 86500, leadTime: "1-2" },
  { no: 63, tlc: "SRG", destination: "Semarang", price: 25850, leadTime: "1-2" },
  { no: 64, tlc: "SUB", destination: "Surabaya", price: 25550, leadTime: "1-2" },
  { no: 65, tlc: "SXK", destination: "Saumlaki", price: 107850, leadTime: "2-3" },
  { no: 66, tlc: "TIM", destination: "Timika", price: 98750, leadTime: "1-2" },
  { no: 67, tlc: "TJQ", destination: "Tj. Pandan", price: 36500, leadTime: "1-2" },
  { no: 68, tlc: "TJS", destination: "Tanjung Selor", price: 77550, leadTime: "2-3" },
  { no: 69, tlc: "TKG", destination: "Lampung", price: 28400, leadTime: "1-2" },
  { no: 70, tlc: "TMC", destination: "Tambolaka", price: 73000, leadTime: "1-2" },
  { no: 71, tlc: "TNJ", destination: "Tanjung Pinang", price: 42000, leadTime: "1-2" },
  { no: 72, tlc: "TRK", destination: "Tarakan", price: 56500, leadTime: "1-2" },
  { no: 73, tlc: "TTE", destination: "Ternate", price: 67700, leadTime: "1-2" },
  { no: 74, tlc: "UPG", destination: "Makassar", price: 44850, leadTime: "1-2" },
  { no: 75, tlc: "WGP", destination: "Waingapu", price: 75000, leadTime: "2-3" },
  { no: 76, tlc: "WMX", destination: "Wamena", price: 95200, leadTime: "1-2" },
  { no: 77, tlc: "YIA", destination: "Yogyakarta", price: 25850, leadTime: "1-2" },
  { no: 78, tlc: "ZRI", destination: "Serui", price: 158550, leadTime: "3-4" }
];

// 2. Kargo Udara - Freighter PTD (Port to Door, Min 25 Kg)
export const AIR_FREIGHTER_PTD: DestinationRate[] = [
  { no: 1, tlc: "AMQ", destination: "Ambon", price: 77750, leadTime: "1-2" },
  { no: 2, tlc: "BDJ", destination: "Banjarmasin", price: 41350, leadTime: "1-2" },
  { no: 3, tlc: "BPN", destination: "Balikpapan", price: 46400, leadTime: "1-2" },
  { no: 4, tlc: "BTH", destination: "Batam", price: 39300, leadTime: "1-2" },
  { no: 5, tlc: "DJJ", destination: "Jayapura", price: 100500, leadTime: "2-3" },
  { no: 6, tlc: "GTO", destination: "Gorontalo", price: 69650, leadTime: "1-2" },
  { no: 7, tlc: "KDI", destination: "Kendari", price: 56000, leadTime: "1-2" },
  { no: 8, tlc: "KOE", destination: "Kupang", price: 65150, leadTime: "1-2" },
  { no: 9, tlc: "MDC", destination: "Manado", price: 66600, leadTime: "1-2" },
  { no: 10, tlc: "PLW", destination: "Palu", price: 65400, leadTime: "1-2" },
  { no: 11, tlc: "TIM", destination: "Timika", price: 125000, leadTime: "2-3" },
  { no: 12, tlc: "TRK", destination: "Tarakan", price: 62150, leadTime: "1-2" },
  { no: 13, tlc: "TTE", destination: "Ternate", price: 71700, leadTime: "1-2" },
  { no: 14, tlc: "UPG", destination: "Makassar", price: 51450, leadTime: "1-2" },
  { no: 15, tlc: "WMX", destination: "Wamena", price: 120500, leadTime: "2-3" }
];

// 3. Kargo Udara - Non Komersil PTD (Port to Door, Min 50 Kg)
export const AIR_NON_COMMERCIAL_PTD: DestinationRate[] = [
  { no: 1, tlc: "AMQ", destination: "Ambon", price: 41000, leadTime: "1-2" },
  { no: 2, tlc: "BDJ", destination: "Banjarmasin", price: 31000, leadTime: "1-2" },
  { no: 3, tlc: "BEJ", destination: "Berau", price: 46000, leadTime: "1-2" },
  { no: 4, tlc: "BIK", destination: "Biak", price: 68000, leadTime: "2-3" },
  { no: 5, tlc: "BPN", destination: "Balikpapan", price: 31000, leadTime: "1-2" },
  { no: 6, tlc: "BTH", destination: "Batam", price: 29000, leadTime: "1-2" },
  { no: 7, tlc: "DJJ", destination: "Jayapura", price: 68000, leadTime: "2-3" },
  { no: 8, tlc: "GTO", destination: "Gorontalo", price: 41000, leadTime: "1-2" },
  { no: 9, tlc: "KDI", destination: "Kendari", price: 46000, leadTime: "1-2" },
  { no: 10, tlc: "KNO", destination: "Medan", price: 31000, leadTime: "1-2" },
  { no: 11, tlc: "KOE", destination: "Kupang", price: 46000, leadTime: "1-2" },
  { no: 12, tlc: "LUV", destination: "Tual", price: 46000, leadTime: "1-2" },
  { no: 13, tlc: "LSW", destination: "Lhokseumawe", price: 41000, leadTime: "1-2" },
  { no: 14, tlc: "LUW", destination: "Luwuk", price: 46000, leadTime: "1-2" },
  { no: 15, tlc: "MDC", destination: "Manado", price: 41000, leadTime: "1-2" },
  { no: 16, tlc: "MJU", destination: "Mamuju", price: 41000, leadTime: "1-2" },
  { no: 17, tlc: "MKQ", destination: "Merauke", price: 71000, leadTime: "2-3" },
  { no: 18, tlc: "NTX", destination: "Natuna", price: 41000, leadTime: "1-2" },
  { no: 19, tlc: "OKS", destination: "Oksibil", price: 91000, leadTime: "3-4" },
  { no: 20, tlc: "PGK", destination: "Pangkal Pinang", price: 31000, leadTime: "1-2" },
  { no: 21, tlc: "PKN", destination: "Pangkalan Bun", price: 41000, leadTime: "1-2" },
  { no: 22, tlc: "PLW", destination: "Palu", price: 46000, leadTime: "1-2" },
  { no: 23, tlc: "PNK", destination: "Pontianak", price: 31000, leadTime: "1-2" },
  { no: 24, tlc: "SOQ", destination: "Sorong", price: 71000, leadTime: "2-3" },
  { no: 25, tlc: "SXK", destination: "Saumlaki", price: 46000, leadTime: "1-2" },
  { no: 26, tlc: "TIM", destination: "Timika", price: 68000, leadTime: "2-3" },
  { no: 27, tlc: "TJQ", destination: "Tj. Pandan", price: 31000, leadTime: "1-2" },
  { no: 28, tlc: "TMC", destination: "Tambolaka", price: 46000, leadTime: "1-2" },
  { no: 29, tlc: "TNJ", destination: "Tanjung Pinang", price: 31000, leadTime: "1-2" },
  { no: 30, tlc: "TRK", destination: "Tarakan", price: 41000, leadTime: "1-2" },
  { no: 31, tlc: "TTE", destination: "Ternate", price: 46000, leadTime: "1-2" },
  { no: 32, tlc: "UPG", destination: "Makassar", price: 31000, leadTime: "1-2" },
  { no: 33, tlc: "WMX", destination: "Wamena", price: 91000, leadTime: "2-3" }
];

// 5. Kargo Laut - Kapal Cargo PTD (Port to Door, 78 tujuan, min weight per route)
export const SEA_CARGO_PTD: DestinationRate[] = [
  { no: 1, tlc: "AAP", destination: "Samarinda", price: 8025, minWeight: 100, leadTime: "5-6" },
  { no: 2, tlc: "AMQ", destination: "Ambon", price: 13800, minWeight: 50, leadTime: "12-13" },
  { no: 3, tlc: "ARD", destination: "Alor", price: 15300, minWeight: 100, leadTime: "9-10" },
  { no: 4, tlc: "BDJ", destination: "Banjarmasin", price: 8025, minWeight: 100, leadTime: "5-6" },
  { no: 5, tlc: "BEJ", destination: "Berau", price: 10800, minWeight: 50, leadTime: "8-9" },
  { no: 6, tlc: "BIK", destination: "Biak", price: 14550, minWeight: 50, leadTime: "12-13" },
  { no: 7, tlc: "BKS", destination: "Bengkulu", price: 7275, minWeight: 100, leadTime: "4-5" },
  { no: 8, tlc: "BMU", destination: "Bima", price: 10800, minWeight: 100, leadTime: "7-8" },
  { no: 9, tlc: "BPN", destination: "Balikpapan", price: 7350, minWeight: 100, leadTime: "5-6" },
  { no: 10, tlc: "BTH", destination: "Batam", price: 11850, minWeight: 100, leadTime: "5-6" },
  { no: 11, tlc: "BTJ", destination: "Banda Aceh", price: 8025, minWeight: 50, leadTime: "11-12" },
  { no: 12, tlc: "BUU", destination: "Muara Bungo", price: 10275, minWeight: 100, leadTime: "11-12" },
  { no: 13, tlc: "BUW", destination: "Bau-Bau", price: 15600, minWeight: 100, leadTime: "12-13" },
  { no: 14, tlc: "BWX", destination: "Banyuwangi", price: 9525, minWeight: 100, leadTime: "11-12" },
  { no: 15, tlc: "DEX", destination: "Dekai", price: 72150, minWeight: 100, leadTime: "15-16" },
  { no: 16, tlc: "DJB", destination: "Jambi", price: 7275, minWeight: 100, leadTime: "5-6" },
  { no: 17, tlc: "DJJ", destination: "Jayapura", price: 14550, minWeight: 100, leadTime: "13-14" },
  { no: 18, tlc: "DOB", destination: "Dobo", price: 19425, minWeight: 100, leadTime: "15-16" },
  { no: 19, tlc: "DPS", destination: "Denpasar", price: 6225, minWeight: 100, leadTime: "7-8" },
  { no: 20, tlc: "DTB", destination: "Silangit", price: 10275, minWeight: 100, leadTime: "11-12" },
  { no: 21, tlc: "ENE", destination: "Ende", price: 9975, minWeight: 50, leadTime: "8-9" },
  { no: 22, tlc: "FKQ", destination: "Fak-Fak", price: 16350, minWeight: 150, leadTime: "11-12" },
  { no: 23, tlc: "FLZ", destination: "Sibolga", price: 14850, minWeight: 100, leadTime: "11-12" },
  { no: 24, tlc: "GNS", destination: "Gunung Sitoli", price: 21675, minWeight: 100, leadTime: "11-12" },
  { no: 25, tlc: "GTO", destination: "Gorontalo", price: 12600, minWeight: 100, leadTime: "12-13" },
  { no: 26, tlc: "KBU", destination: "Kota Baru", price: 15600, minWeight: 150, leadTime: "11-12" },
  { no: 27, tlc: "KDI", destination: "Kendari", price: 12600, minWeight: 100, leadTime: "12-13" },
  { no: 28, tlc: "KNG", destination: "Kaimana", price: 19125, minWeight: 100, leadTime: "16-17" },
  { no: 29, tlc: "KNO", destination: "Medan", price: 7275, minWeight: 50, leadTime: "7-8" },
  { no: 30, tlc: "KOE", destination: "Kupang", price: 9225, minWeight: 50, leadTime: "7-8" },
  { no: 31, tlc: "KTG", destination: "Ketapang", price: 11850, minWeight: 100, leadTime: "11-12" },
  { no: 32, tlc: "LBJ", destination: "Labuan Bajo", price: 9225, minWeight: 50, leadTime: "9-10" },
  { no: 33, tlc: "LLJ", destination: "Lubuk Linggau", price: 8775, minWeight: 100, leadTime: "11-12" },
  { no: 34, tlc: "LNU", destination: "Malinau", price: 16050, minWeight: 50, leadTime: "8-9" },
  { no: 35, tlc: "LOP", destination: "Lombok", price: 8775, minWeight: 100, leadTime: "7-8" },
  { no: 36, tlc: "LSW", destination: "Lhokseumawe", price: 8025, minWeight: 100, leadTime: "11-12" },
  { no: 37, tlc: "LUV", destination: "Tual", price: 19500, minWeight: 100, leadTime: "8-9" },
  { no: 38, tlc: "LUW", destination: "Luwuk", price: 14100, minWeight: 100, leadTime: "12-13" },
  { no: 39, tlc: "MDC", destination: "Manado", price: 14100, minWeight: 100, leadTime: "12-13" },
  { no: 40, tlc: "MJU", destination: "Mamuju", price: 10275, minWeight: 100, leadTime: "12-13" },
  { no: 41, tlc: "MKQ", destination: "Merauke", price: 14550, minWeight: 100, leadTime: "13-14" },
  { no: 42, tlc: "MKW", destination: "Manokwari", price: 13050, minWeight: 50, leadTime: "12-13" },
  { no: 43, tlc: "MLG", destination: "Malang", price: 8775, minWeight: 30, leadTime: "5-6" },
  { no: 44, tlc: "MOF", destination: "Maumere", price: 12300, minWeight: 100, leadTime: "13-14" },
  { no: 45, tlc: "MOH", destination: "Morowali", price: 11850, minWeight: 100, leadTime: "12-13" },
  { no: 46, tlc: "NAM", destination: "Namlea", price: 18375, minWeight: 100, leadTime: "16-17" },
  { no: 47, tlc: "NBX", destination: "Nabire", price: 13800, minWeight: 50, leadTime: "12-13" },
  { no: 48, tlc: "NTX", destination: "Natuna", price: 25500, minWeight: 100, leadTime: "11-12" },
  { no: 49, tlc: "OKS", destination: "Oksibil", price: 87300, minWeight: 100, leadTime: "15-16" },
  { no: 50, tlc: "PDG", destination: "Padang", price: 8775, minWeight: 100, leadTime: "11-12" },
  { no: 51, tlc: "PGK", destination: "Pangkal Pinang", price: 7275, minWeight: 100, leadTime: "5-6" },
  { no: 52, tlc: "PKN", destination: "Pangkalan Bun", price: 11100, minWeight: 100, leadTime: "11-12" },
  { no: 53, tlc: "PKU", destination: "Pekanbaru", price: 6525, minWeight: 50, leadTime: "11-12" },
  { no: 54, tlc: "PKY", destination: "Palangkaraya", price: 11100, minWeight: 100, leadTime: "11-12" },
  { no: 55, tlc: "PLM", destination: "Palembang", price: 5475, minWeight: 100, leadTime: "3-4" },
  { no: 56, tlc: "PLW", destination: "Palu", price: 11850, minWeight: 100, leadTime: "12-13" },
  { no: 57, tlc: "PNK", destination: "Pontianak", price: 6525, minWeight: 100, leadTime: "5-6" },
  { no: 58, tlc: "PSJ", destination: "Poso", price: 11850, minWeight: 100, leadTime: "12-13" },
  { no: 59, tlc: "RAQ", destination: "Raha", price: 17625, minWeight: 100, leadTime: "16-17" },
  { no: 60, tlc: "SMQ", destination: "Sampit", price: 11100, minWeight: 100, leadTime: "11-12" },
  { no: 61, tlc: "SOC", destination: "Solo", price: 5025, minWeight: 100, leadTime: "3-4" },
  { no: 62, tlc: "SOQ", destination: "Sorong", price: 16050, minWeight: 50, leadTime: "12-13" },
  { no: 63, tlc: "SRG", destination: "Semarang", price: 5025, minWeight: 100, leadTime: "3-4" },
  { no: 64, tlc: "SUB", destination: "Surabaya", price: 5025, minWeight: 50, leadTime: "2-3" },
  { no: 65, tlc: "SXK", destination: "Saumlaki", price: 20925, minWeight: 150, leadTime: "11-12" },
  { no: 66, tlc: "TIM", destination: "Timika", price: 16050, minWeight: 100, leadTime: "13-14" },
  { no: 67, tlc: "TJQ", destination: "Tj. Pandan", price: 7275, minWeight: 100, leadTime: "5-6" },
  { no: 68, tlc: "TJS", destination: "Tanjung Selor", price: 12300, minWeight: 50, leadTime: "8-9" },
  { no: 69, tlc: "TKG", destination: "Lampung", price: 5475, minWeight: 100, leadTime: "3-4" },
  { no: 70, tlc: "TMC", destination: "Tambolaka", price: 18375, minWeight: 100, leadTime: "13-14" },
  { no: 71, tlc: "TNJ", destination: "Tanjung Pinang", price: 13350, minWeight: 100, leadTime: "5-6" },
  { no: 72, tlc: "TRK", destination: "Tarakan", price: 9975, minWeight: 100, leadTime: "11-12" },
  { no: 73, tlc: "TTE", destination: "Ternate", price: 13800, minWeight: 50, leadTime: "12-13" },
  { no: 74, tlc: "UPG", destination: "Makassar", price: 8025, minWeight: 100, leadTime: "5-6" },
  { no: 75, tlc: "WGP", destination: "Waingapu", price: 13050, minWeight: 100, leadTime: "13-14" },
  { no: 76, tlc: "WMX", destination: "Wamena", price: 50925, minWeight: 50, leadTime: "12-13" },
  { no: 77, tlc: "YIA", destination: "Yogyakarta", price: 5025, minWeight: 100, leadTime: "3-4" },
  { no: 78, tlc: "ZRI", destination: "Serui", price: 22200, minWeight: 50, leadTime: "12-13" }
];

// 6. Kargo Laut - Kapal Pelni (Area 3T) (57 tujuan, Min 1 Kg)
export const SEA_PELNI_3T: DestinationRate[] = [
  { no: 1, tlc: "AMQ", destination: "Ambon", price: 22500, minWeight: 1, leadTime: "7-8" },
  { no: 2, tlc: "MSH", destination: "Masohi", price: 22500, minWeight: 1, leadTime: "8-10" },
  { no: 3, tlc: "HTU", destination: "Hitu", price: 27000, minWeight: 1, leadTime: "10-12" },
  { no: 4, tlc: "HLA", destination: "Hila", price: 27000, minWeight: 1, leadTime: "10-12" },
  { no: 5, tlc: "LHU", destination: "Luhu", price: 30000, minWeight: 1, leadTime: "10-12" },
  { no: 6, tlc: "PSO", destination: "Passo", price: 27000, minWeight: 1, leadTime: "10-12" },
  { no: 7, tlc: "WAE", destination: "Waeheru", price: 24000, minWeight: 1, leadTime: "10-12" },
  { no: 8, tlc: "THR", destination: "Tehoru", price: 30000, minWeight: 1, leadTime: "10-12" },
  { no: 9, tlc: "GMB", destination: "Gemba", price: 25500, minWeight: 1, leadTime: "10-12" },
  { no: 10, tlc: "NAM", destination: "Namlea", price: 25500, minWeight: 1, leadTime: "10-12" },
  { no: 11, tlc: "WSR", destination: "Waisarisa", price: 28500, minWeight: 1, leadTime: "10-12" },
  { no: 12, tlc: "PRU", destination: "Piru", price: 28500, minWeight: 1, leadTime: "10-12" },
  { no: 13, tlc: "KBS", destination: "Kobisonta", price: 28500, minWeight: 1, leadTime: "10-12" },
  { no: 14, tlc: "BLA", destination: "Bula", price: 28500, minWeight: 1, leadTime: "10-12" },
  { no: 15, tlc: "NMR", destination: "Namrole", price: 31500, minWeight: 1, leadTime: "10-12" },
  { no: 16, tlc: "BND", destination: "Banda", price: 37500, minWeight: 1, leadTime: "10-12" },
  { no: 17, tlc: "SNA", destination: "Sanana", price: 37500, minWeight: 1, leadTime: "10-12" },
  { no: 18, tlc: "WHI", destination: "Wahai", price: 25500, minWeight: 1, leadTime: "10-12" },
  { no: 19, tlc: "GSR", destination: "Geser", price: 40500, minWeight: 1, leadTime: "10-12" },
  { no: 20, tlc: "LUV", destination: "Tual", price: 19500, minWeight: 1, leadTime: "7-8" },
  { no: 21, tlc: "DOB", destination: "Dobo", price: 25500, minWeight: 1, leadTime: "10-12" },
  { no: 22, tlc: "SXK", destination: "Saumlaki", price: 33000, minWeight: 1, leadTime: "10-12" },
  { no: 23, tlc: "LRT", destination: "Larat", price: 33000, minWeight: 1, leadTime: "10-12" },
  { no: 24, tlc: "TNW", destination: "Taniwel", price: 27000, minWeight: 1, leadTime: "10-12" },
  { no: 25, tlc: "HYA", destination: "Haya", price: 30000, minWeight: 1, leadTime: "10-12" },
  { no: 26, tlc: "TML", destination: "Tamillow", price: 30000, minWeight: 1, leadTime: "10-12" },
  { no: 27, tlc: "MLK", destination: "Malaku", price: 25500, minWeight: 1, leadTime: "10-12" },
  { no: 28, tlc: "ARR", destination: "Arara", price: 33000, minWeight: 1, leadTime: "10-12" },
  { no: 29, tlc: "PSN", destination: "Pasanea", price: 27000, minWeight: 1, leadTime: "10-12" },
  { no: 30, tlc: "GLG", destination: "Gale-Gale", price: 27000, minWeight: 1, leadTime: "10-12" },
  { no: 31, tlc: "LBN", destination: "Labuan", price: 27000, minWeight: 1, leadTime: "10-12" },
  { no: 32, tlc: "TTE", destination: "Ternate", price: 28500, minWeight: 1, leadTime: "7-8" },
  { no: 33, tlc: "SFF", destination: "Sofifi", price: 33000, minWeight: 1, leadTime: "10-12" },
  { no: 34, tlc: "TDR", destination: "Tidore", price: 33000, minWeight: 1, leadTime: "10-12" },
  { no: 35, tlc: "BCN", destination: "Bacan", price: 33000, minWeight: 1, leadTime: "10-12" },
  { no: 36, tlc: "OBI", destination: "Obi", price: 33000, minWeight: 1, leadTime: "10-12" },
  { no: 37, tlc: "KWS", destination: "Kawasi", price: 33000, minWeight: 1, leadTime: "10-12" },
  { no: 38, tlc: "LLF", destination: "Lelilef", price: 33000, minWeight: 1, leadTime: "10-12" },
  { no: 39, tlc: "SNA2", destination: "Sanana (Malut)", price: 36000, minWeight: 1, leadTime: "10-12" },
  { no: 40, tlc: "MRT", destination: "Morotai", price: 36000, minWeight: 1, leadTime: "10-12" },
  { no: 41, tlc: "JLL", destination: "Jailolo", price: 36000, minWeight: 1, leadTime: "8-10" },
  { no: 42, tlc: "TBL", destination: "Tobelo", price: 40500, minWeight: 1, leadTime: "10-12" },
  { no: 43, tlc: "BLI", destination: "Buli", price: 40500, minWeight: 1, leadTime: "10-12" },
  { no: 44, tlc: "MBA", destination: "Maba", price: 40500, minWeight: 1, leadTime: "10-12" },
  { no: 45, tlc: "MOA", destination: "Moa", price: 40500, minWeight: 1, leadTime: "10-12" },
  { no: 46, tlc: "MSL", destination: "Marsela", price: 40500, minWeight: 1, leadTime: "10-12" },
  { no: 47, tlc: "BIK", destination: "Biak (3T)", price: 0, minWeight: 1, leadTime: "-" },
  { no: 48, tlc: "DJJ", destination: "Jayapura (3T)", price: 22500, minWeight: 1, leadTime: "10-12" },
  { no: 49, tlc: "FKQ", destination: "Fak-Fak (3T)", price: 22500, minWeight: 1, leadTime: "10-12" },
  { no: 50, tlc: "MKW", destination: "Manokwari (3T)", price: 22500, minWeight: 1, leadTime: "10-12" },
  { no: 51, tlc: "MKQ", destination: "Merauke (3T)", price: 0, minWeight: 1, leadTime: "-" },
  { no: 52, tlc: "NBX", destination: "Nabire (3T)", price: 0, minWeight: 1, leadTime: "-" },
  { no: 53, tlc: "KNG", destination: "Kaimana (3T)", price: 33000, minWeight: 1, leadTime: "8-10" },
  { no: 54, tlc: "SOQ", destination: "Sorong (3T)", price: 22500, minWeight: 1, leadTime: "8-10" },
  { no: 55, tlc: "TIM", destination: "Timika (3T)", price: 0, minWeight: 1, leadTime: "-" },
  { no: 56, tlc: "WMX", destination: "Wamena (3T)", price: 0, minWeight: 1, leadTime: "-" },
  { no: 57, tlc: "ZRI", destination: "Serui (3T)", price: 25500, minWeight: 1, leadTime: "10-12" }
];

// Master list of all unique destination names across all sheets for dropdown auto-complete
export const ALL_DESTINATION_NAMES = Array.from(
  new Set([
    ...AIR_COMMERCIAL_PTD.map((d) => d.destination),
    ...AIR_FREIGHTER_PTD.map((d) => d.destination),
    ...AIR_NON_COMMERCIAL_PTD.map((d) => d.destination),
    ...SEA_CARGO_PTD.map((d) => d.destination),
    ...SEA_PELNI_3T.map((d) => d.destination),
  ])
).sort((a, b) => a.localeCompare(b, "id"));

// Mode Definitions & Metadata
export interface ModeConfig {
  id: string;
  nameID: string;
  nameEN: string;
  category: "air" | "sea";
  badge: string;
  defaultDivider: number;
  minWeightDefault: number;
  icon: string;
  description: string;
}

export const FREIGHT_MODES: ModeConfig[] = [
  {
    id: "sea_cargo_ptd",
    nameID: "Kargo Laut - Kapal Cargo (Port to Door)",
    nameEN: "Sea Freight - Cargo Vessel (Port to Door)",
    category: "sea",
    badge: "Hemat Volume Besar",
    defaultDivider: 4000,
    minWeightDefault: 100,
    icon: "Ship",
    description: "Layanan pengiriman via Kapal Cargo sampai ke pintu alamat penerima di 78 kota tujuan."
  },
  {
    id: "sea_pelni_3t",
    nameID: "Kargo Laut - Kapal Pelni (Area 3T)",
    nameEN: "Sea Freight - Pelni Ship (Remote 3T Area)",
    category: "sea",
    badge: "Spesialis 3T (Min 1Kg)",
    defaultDivider: 4000,
    minWeightDefault: 1,
    icon: "Anchor",
    description: "Pengiriman cepat Kapal Pelni menjangkau 57 lokasi Tertinggal, Terdalam & Terluar Indonesia."
  },
  {
    id: "air_commercial_ptd",
    nameID: "Kargo Udara - Komersil Flight (Port to Door)",
    nameEN: "Air Freight - Commercial Flight (Port to Door)",
    category: "air",
    badge: "Harian Tepat Waktu",
    defaultDivider: 6000, // 5000 if Lion Air
    minWeightDefault: 10,
    icon: "Plane",
    description: "Penerbangan harian maskapai komersil regular (Garuda, Citilink, Lion, Sriwijaya, Pelita) ke 78 kota."
  },
  {
    id: "air_freighter_ptd",
    nameID: "Kargo Udara - Freighter Flight (Port to Door)",
    nameEN: "Air Freight - Freighter Flight (Port to Door)",
    category: "air",
    badge: "Pesawat Kargo Khusus",
    defaultDivider: 6000,
    minWeightDefault: 25,
    icon: "Package",
    description: "Pengiriman muatan besar via pesawat khusus kargo (Freighter) ke 15 kota tujuan."
  },
  {
    id: "air_non_commercial_ptd",
    nameID: "Kargo Udara - Non Komersil Flight (Port to Door)",
    nameEN: "Air Freight - Non Commercial Flight (Port to Door)",
    category: "air",
    badge: "Kargo Jumbo / Charter",
    defaultDivider: 6000,
    minWeightDefault: 50,
    icon: "Truck",
    description: "Penerbangan non-komersil khusus untuk barang berat (Heavy Cargo) ke 33 destinasi."
  }
];

// Lookup rate function
export function getRateForRoute(
  modeId: string,
  destinationName: string
): DestinationRate | null {
  let list: DestinationRate[] = [];

  switch (modeId) {
    case "sea_cargo_ptd":
      list = SEA_CARGO_PTD;
      break;
    case "sea_pelni_3t":
      list = SEA_PELNI_3T;
      break;
    case "air_commercial_ptd":
      list = AIR_COMMERCIAL_PTD;
      break;
    case "air_freighter_ptd":
      list = AIR_FREIGHTER_PTD;
      break;
    case "air_non_commercial_ptd":
      list = AIR_NON_COMMERCIAL_PTD;
      break;
    default:
      return null;
  }

  // Exact match first
  let match = list.find(
    (item) => item.destination.toLowerCase() === destinationName.toLowerCase()
  );

  // Partial match fallback if exact match not found
  if (!match) {
    match = list.find((item) =>
      item.destination.toLowerCase().includes(destinationName.toLowerCase()) ||
      destinationName.toLowerCase().includes(item.destination.toLowerCase())
    );
  }

  return match || null;
}
