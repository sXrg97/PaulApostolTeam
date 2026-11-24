'use client'

import { useEffect, useId, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

type Option = { value: string; label: string };

type Props = {
  id: string;
  labelId: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
};

/**
 * Dropdown accesibil (pattern ARIA "select-only combobox"), cu săgeată și opțiuni stilizate.
 * Înlocuiește <select> nativ, ale cărui opțiuni nu pot fi stilizate în majoritatea browserelor.
 */
export const CustomSelect = ({ id, labelId, value, options, onChange }: Props) => {
  const [open, setOpen] = useState(false);
  const [dropUp, setDropUp] = useState(false);
  const [active, setActive] = useState(() => Math.max(0, options.findIndex((o) => o.value === value)));
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listId = useId();
  const selected = options.find((o) => o.value === value) ?? options[0];

  // Închide la click în afara componentei
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', onDown);
    return () => document.removeEventListener('pointerdown', onDown);
  }, [open]);

  // Ține opțiunea activă vizibilă în listă
  useEffect(() => {
    if (!open) return;
    // Derulăm doar lista, nu toată pagina (scrollIntoView ar mișca și fereastra)
    const list = listRef.current;
    const el = list?.children[active] as HTMLElement | undefined;
    if (!list || !el) return;
    if (el.offsetTop < list.scrollTop) list.scrollTop = el.offsetTop;
    else if (el.offsetTop + el.offsetHeight > list.scrollTop + list.clientHeight)
      list.scrollTop = el.offsetTop + el.offsetHeight - list.clientHeight;
  }, [open, active]);

  const openList = () => {
    // Deschidem în sus dacă jos nu e loc (ex. pe mobil, deasupra barei fixe de jos)
    const rect = rootRef.current?.getBoundingClientRect();
    if (rect) {
      const needed = Math.min(288, options.length * 48 + 16) + 96;
      const below = window.innerHeight - rect.bottom;
      setDropUp(below < needed && rect.top > below);
    }
    setActive(Math.max(0, options.findIndex((o) => o.value === value)));
    setOpen(true);
  };

  const choose = (index: number) => {
    onChange(options[index].value);
    setOpen(false);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!open) openList();
        else setActive((i) => Math.min(options.length - 1, i + 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (!open) openList();
        else setActive((i) => Math.max(0, i - 1));
        break;
      case 'Home':
        if (open) { e.preventDefault(); setActive(0); }
        break;
      case 'End':
        if (open) { e.preventDefault(); setActive(options.length - 1); }
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (open) choose(active);
        else openList();
        break;
      case 'Escape':
        if (open) { e.preventDefault(); setOpen(false); }
        break;
      case 'Tab':
        if (open) choose(active);
        break;
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-labelledby={`${labelId} ${id}`}
        aria-activedescendant={open ? `${listId}-${active}` : undefined}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={onKeyDown}
        className={`flex w-full min-h-12 items-center justify-between gap-3 rounded-xl border bg-black/40 px-4 text-left text-base text-white outline-none transition-colors focus-visible:border-red-500 focus-visible:ring-2 focus-visible:ring-red-500/30 ${
          open ? 'border-red-500 ring-2 ring-red-500/30' : 'border-white/10 hover:border-white/25'
        }`}
      >
        <span className="truncate">{selected.label}</span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-600/15 text-red-500 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        >
          <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
        </span>
      </button>

      {open && (
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          aria-labelledby={labelId}
          tabIndex={-1}
          className={`animate-fadeIn ${dropUp ? 'bottom-full mb-2' : 'top-full mt-2'} absolute left-0 right-0 z-30 max-h-72 overflow-auto rounded-xl border border-white/10 bg-zinc-950/95 p-1.5 shadow-2xl shadow-black/60 backdrop-blur-md`}
        >
          {options.map((o, i) => {
            const isSelected = o.value === value;
            const isActive = i === active;
            return (
              <li
                key={o.value}
                id={`${listId}-${i}`}
                role="option"
                aria-selected={isSelected}
                onPointerMove={(e) => { if (e.pointerType === 'mouse') setActive(i); }}
                onPointerDown={(e) => e.preventDefault()}
                onClick={() => choose(i)}
                className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors md:text-base ${
                  isActive ? 'bg-red-600/15 text-white' : 'text-zinc-300'
                } ${isSelected ? 'font-semibold text-white' : ''}`}
              >
                <span>{o.label}</span>
                {isSelected && <Check className="h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
