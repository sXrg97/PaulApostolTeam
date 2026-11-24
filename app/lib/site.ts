// Date de contact și linkuri folosite în tot site-ul (o singură sursă).

export const SITE_URL = "https://paulapostol.ro";
export const SITE_NAME = "Paul Apostol";

export const SITE_TITLE = "Paul Apostol | Antrenor personal în Timișoara";
export const SITE_DESCRIPTION =
  "Antrenor personal în Timișoara din 2019. Antrenamente 1 la 1 și plan alimentar pentru slăbire sau masă musculară. Scrie-mi pe WhatsApp.";

export const PHONE_E164 = "+40757497530";
export const PHONE_DISPLAY = "+40 757 497 530";

const WHATSAPP_NUMBER = "40757497530";
const WHATSAPP_MESSAGE = "Bună, Paul! Aș vrea să discutăm despre antrenamente și planul alimentar.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const GUIDE_PDF = "/ghid-paul-apostol-slabit.pdf";

export const PORTRAIT_IMAGE = "/paul-apostol-antrenor-personal-timisoara.jpg";
export const LOGO_IMAGE = "/paul_apostol_logo_white.png";

export const SOCIAL_LINKS = [
  { name: "Facebook", href: "https://www.facebook.com/ApostolPaul1996" },
  { name: "Instagram", href: "https://www.instagram.com/paulapostol_pt/" },
  { name: "TikTok", href: "https://www.tiktok.com/@antrenorpaulapostol" },
] as const;

export const EXTERNAL_LINK_PROPS = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
