import React from 'react'
import { eyebrow as eyebrowClass } from '../lib/ui'

type Props = {
  id?: string
  eyebrow?: string
  title: string
  intro?: React.ReactNode
  children: React.ReactNode
  tone?: 'base' | 'raised'
  className?: string
}

const tones = {
  base: 'bg-[#050505]',
  raised: 'bg-[#111111]',
}

export const Section = ({ id, eyebrow, title, intro, children, tone = 'base', className = '' }: Props) => {
  const headingId = id ? `${id}-titlu` : undefined

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`relative scroll-mt-16 border-t border-white/5 py-20 md:scroll-mt-20 md:py-28 ${tones[tone]} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5">
        <div data-reveal className="mb-12 max-w-3xl md:mb-16">
          {eyebrow && <p className={`${eyebrowClass} mb-4`}>{eyebrow}</p>}
          <h2
            id={headingId}
            className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            {title}
          </h2>
          <div className="mt-6 h-1 w-12 rounded-full bg-red-600" aria-hidden="true" />
          {intro && <div className="mt-6 text-base leading-relaxed text-zinc-300 md:text-lg">{intro}</div>}
        </div>
        {children}
      </div>
    </section>
  )
}
