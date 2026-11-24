"use client";

import { useEffect, useState } from "react";
import { FileDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { EXTERNAL_LINK_PROPS, WHATSAPP_URL } from "../lib/site";

/**
 * Bară fixă pe mobil: apare după ce hero-ul iese din ecran și dispare cât timp #contact e vizibil.
 */
export const StickyCta = () => {
  const [heroVisible, setHeroVisible] = useState(true);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home");
    const contact = document.getElementById("contact");
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) setHeroVisible(entry.isIntersecting);
        if (entry.target === contact) setContactVisible(entry.isIntersecting);
      }
    });
    if (hero) observer.observe(hero);
    if (contact) observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  const visible = !heroVisible && !contactVisible;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/90 px-4 pt-3 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      aria-hidden={!visible}
    >
      <div className="flex gap-3">
        <a
          href={WHATSAPP_URL}
          {...EXTERNAL_LINK_PROPS}
          tabIndex={visible ? undefined : -1}
          className="flex min-h-12 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-green-700 px-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors active:bg-green-600"
        >
          <FaWhatsapp className="h-5 w-5 shrink-0" aria-hidden="true" />
          WhatsApp
        </a>
        <a
          href="#ghid"
          tabIndex={visible ? undefined : -1}
          className="flex min-h-12 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/20 px-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors active:bg-white/10"
        >
          <FileDown className="h-4 w-4 shrink-0" aria-hidden="true" />
          Ghid gratuit
        </a>
      </div>
    </div>
  );
};
