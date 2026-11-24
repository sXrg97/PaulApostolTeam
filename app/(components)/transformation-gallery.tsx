"use client";

import Image from "next/image";
import { ChevronDown, MoveHorizontal } from "lucide-react";
import { useState } from "react";
import { BeforeAfterSlider } from "./before-after-slider";
import { cardHover } from "../lib/ui";
import { TRANSFORMATIONS, resultLabel, transformationAlt } from "../lib/transformations";

const CARD_SIZES = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

export const TransformationGallery = () => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {TRANSFORMATIONS.map((t, index) => {
        const isOpen = Boolean(expanded[index]);
        const descriptionId = `transformare-${t.name.toLowerCase()}-descriere`;
        const alt = transformationAlt(t);

        return (
          <li
            key={t.name}
            data-reveal
            style={{ "--reveal-delay": `${(index % 3) * 90}ms` } as React.CSSProperties}
            className={`flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 ${cardHover}`}
          >
            <div className="relative flex aspect-[4/5] items-center justify-center bg-black">
              {t.split ? (
                <BeforeAfterSlider
                  src={t.image}
                  alt={alt}
                  name={t.name}
                  width={t.width}
                  height={t.height}
                  className="h-full"
                />
              ) : (
                <Image
                  src={t.image}
                  alt={alt}
                  width={t.width}
                  height={t.height}
                  sizes={CARD_SIZES}
                  className="h-full w-full object-contain"
                />
              )}
            </div>

            <div className="flex flex-grow flex-col p-6">
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                <h3 className="font-display text-3xl font-bold uppercase tracking-wide text-white">{t.name}</h3>
                <span className="rounded-full border border-red-500/40 bg-red-600/15 px-3 py-1 text-sm font-semibold text-red-300">
                  {resultLabel(t)}
                </span>
              </div>
              {t.split && (
                <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-zinc-400">
                  <MoveHorizontal className="h-3.5 w-3.5" aria-hidden="true" />
                  Trage de linie pentru a compara
                </p>
              )}

              <p
                id={descriptionId}
                className={`mt-3 text-sm leading-relaxed text-zinc-300 md:text-base ${isOpen ? "" : "line-clamp-3"}`}
              >
                {t.description}
              </p>

              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={descriptionId}
                onClick={() => setExpanded((prev) => ({ ...prev, [index]: !prev[index] }))}
                className="mt-4 inline-flex w-fit items-center gap-1.5 rounded text-sm font-semibold text-red-400 transition-colors hover:text-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500"
              >
                {isOpen ? "Arată mai puțin" : "Arată mai mult"}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
