// Sistemul comun de butoane și carduri (clase Tailwind).

const btnBase =
  "group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-7 text-sm font-semibold uppercase tracking-[0.08em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500";

export const btnPrimary = `${btnBase} bg-red-600 text-white shadow-lg shadow-red-950/40 hover:bg-red-500`;
export const btnSecondary = `${btnBase} border border-white/20 text-white hover:border-white/50 hover:bg-white/5`;
export const btnWhatsApp = `${btnBase} bg-green-700 text-white hover:bg-green-600`;

// Săgeata din butoane se mișcă ușor la hover (doar dacă mișcarea e permisă).
export const btnArrow = "h-4 w-4 shrink-0 transition-transform duration-200 motion-safe:group-hover:translate-x-1";

export const card = "rounded-2xl border border-white/10 bg-zinc-900/60 p-6 md:p-8";
export const cardHover =
  "transition duration-300 motion-safe:md:hover:-translate-y-1 md:hover:border-red-600/50";

export const eyebrow = "text-xs font-semibold uppercase tracking-[0.2em] text-red-500 md:text-sm";
export const bodyText = "text-base leading-relaxed text-zinc-300 md:text-lg";
