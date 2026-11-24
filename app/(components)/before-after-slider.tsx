"use client";

import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";
import { useCallback, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  name: string;
  /** Lățimea și înălțimea reale ale imaginii compuse (ÎNAINTE în stânga, DUPĂ în dreapta). */
  width: number;
  height: number;
  /** `sizes` pentru containerul sliderului; imaginea internă are lățime dublă. */
  sizes?: string;
  initial?: number;
  /** Dimensionarea containerului; raportul de aspect e cel al unei jumătăți. */
  className?: string;
};

const clamp = (n: number) => Math.min(100, Math.max(0, n));

/**
 * Slider de comparație pentru imagini compuse din două jumătăți egale.
 * Același fișier e afișat de două ori, la 200% lățime: stratul de jos arată jumătatea
 * din dreapta (DUPĂ), stratul de sus jumătatea din stânga (ÎNAINTE), decupat la poziția --pos.
 */
export const BeforeAfterSlider = ({
  src,
  alt,
  name,
  width,
  height,
  sizes = "(min-width: 1024px) 42vw, (min-width: 640px) 63vw, 125vw",
  initial = 50,
  className = "w-full",
}: Props) => {
  const [pos, setPos] = useState(initial);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    setPos(clamp(((clientX - rect.left) / rect.width) * 100));
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (draggingRef.current) updateFromClientX(e.clientX);
  };

  const stopDragging = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = {
      ArrowLeft: pos - 5,
      ArrowDown: pos - 5,
      ArrowRight: pos + 5,
      ArrowUp: pos + 5,
      PageDown: pos - 20,
      PageUp: pos + 20,
      Home: 0,
      End: 100,
    };
    if (e.key in keys) {
      e.preventDefault();
      setPos(clamp(keys[e.key]));
    }
  };

  const rounded = Math.round(pos);

  return (
    <div
      ref={containerRef}
      role="slider"
      tabIndex={0}
      aria-label={`Comparație înainte și după, ${name}`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={rounded}
      aria-valuetext={`${rounded}% înainte, ${100 - rounded}% după`}
      aria-orientation="horizontal"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      onKeyDown={onKeyDown}
      className={`group/slider relative cursor-ew-resize select-none overflow-hidden bg-black outline-none [touch-action:pan-y] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-500 ${className}`}
      style={{ "--pos": `${pos}%`, aspectRatio: `${width / 2} / ${height}` } as React.CSSProperties}
    >
      {/* DUPĂ: jumătatea din dreapta */}
      <div className="pointer-events-none absolute inset-y-0 -left-full w-[200%]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          draggable={false}
          className="h-full w-full object-cover"
        />
      </div>
      {/* ÎNAINTE: jumătatea din stânga, decupată la --pos */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ clipPath: "inset(0 calc(100% - var(--pos)) 0 0)" }}
        aria-hidden="true"
      >
        <div className="absolute inset-y-0 left-0 w-[200%]">
          <Image
            src={src}
            alt=""
            width={width}
            height={height}
            sizes={sizes}
            draggable={false}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Linia și butonul de tragere */}
      <div
        className="pointer-events-none absolute inset-y-0 left-[var(--pos)] w-0.5 -translate-x-1/2 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)]"
        aria-hidden="true"
      >
        <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-red-600 text-white shadow-lg transition-transform duration-200 group-active/slider:scale-110 group-focus-visible/slider:scale-110">
          <ChevronsLeftRight className="h-5 w-5" strokeWidth={2.5} />
        </span>
      </div>

    </div>
  );
};
