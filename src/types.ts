export interface TranslationDict {
  navHome: string;
  navServices: string;
  navCalculator: string;
  navTracking: string;
  navPricing: string;
  navFaq: string;
  navContact: string;

  // Hero Section
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  heroCtaCalc: string;
  heroCtaContact: string;
  heroActiveClients: string;
  heroSatisfaction: string;

  // Rates Calculator
  calcTitle: string;
  calcOrigin: string;
  calcDestination: string;
  calcWeight: string;
  calcVolume: string;
  calcLength: string;
  calcWidth: string;
  calcHeight: string;
  calcService: string;
  calcBtn: string;
  calcResultTitle: string;
  calcEstCost: string;
  calcEstTime: string;
  calcMinNote: string;
  calcBookBtn: string;

  // Social Proof Section
  socialProofTitle: string;

  // Services Section
  servicesTitle: string;
  servicesSubtitle: string;
  landTitle: string;
  landDesc: string;
  seaTitle: string;
  seaDesc: string;
  airTitle: string;
  airDesc: string;
  serviceFeaturesTitle: string;

  // Tracking Section
  trackTitle: string;
  trackSubtitle: string;
  trackPlaceholder: string;
  trackBtn: string;
  trackNotFound: string;
  trackDetails: string;
  trackRoute: string;
  trackStatus: string;
  trackHistory: string;

  // Pricing Section
  priceTitle: string;
  priceSubtitle: string;
  priceUnitKg: string;
  priceFeatures: string[];
  priceCta: string;

  // FAQ Section
  faqTitle: string;
  faqSubtitle: string;
  faqSearchPlaceholder: string;

  // Testimonials Section
  testiTitle: string;
  testiSubtitle: string;

  // Contact / Footer Section
  contactTitle: string;
  contactSubtitle: string;
  contactFormName: string;
  contactFormEmail: string;
  contactFormPhone: string;
  contactFormMessage: string;
  contactFormSend: string;
  contactSuccess: string;
  footerRights: string;
  footerAddress: string;
}

export type Language = "ID" | "EN";
export type Theme = "light" | "dark";

export interface TrackingStep {
  title: string;
  description: string;
  date: string;
  location: string;
  status: "completed" | "current" | "upcoming";
}

export interface TrackingData {
  id: string;
  origin: string;
  destination: string;
  service: "Land" | "Sea" | "Air";
  sender: string;
  receiver: string;
  weight: number;
  currentStatus: string;
  steps: TrackingStep[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  desc: string;
  features: string[];
  icon: string;
  details: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "service" | "price" | "tracking" | "general";
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: Date;
}
