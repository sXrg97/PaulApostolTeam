"use client";

import { useEffect } from "react";

/**
 * Un singur IntersectionObserver pentru toate elementele cu [data-reveal].
 * Când elementul intră în ecran primește [data-visible] (o singură dată).
 * Deschide și <details> când linkul are ancora lor (ex. #beneficii, #odihna).
 */
export const RevealObserver = () => {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    let observer: IntersectionObserver | undefined;

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.setAttribute("data-visible", ""));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.setAttribute("data-visible", "");
              observer?.unobserve(entry.target);
            }
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.01 }
      );
      elements.forEach((el) => observer?.observe(el));
    }

    const openDetailsFromHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      const target = document.getElementById(id);
      if (target instanceof HTMLDetailsElement) target.open = true;
    };
    openDetailsFromHash();
    window.addEventListener("hashchange", openDetailsFromHash);

    return () => {
      observer?.disconnect();
      window.removeEventListener("hashchange", openDetailsFromHash);
    };
  }, []);

  return null;
};
