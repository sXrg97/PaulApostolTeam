import { CountUp } from "./count-up"
import { TOTAL_KG_LOST, TRANSFORMATIONS } from "../lib/transformations"

// Anul se calculează la randare (pagina e statică, deci la build).
const currentYear = new Date().getFullYear()

const numberClass = "font-display text-5xl font-extrabold italic leading-none text-white md:text-6xl"

export const StatsStrip = () => {
  const stats = [
    { value: currentYear - 2015, suffix: "+", label: "ani în fitness" },
    { value: currentYear - 2020, suffix: "+", label: "ani ca antrenor personal" },
    {
      value: TOTAL_KG_LOST,
      suffix: " kg",
      label: `slăbite de cei ${TRANSFORMATIONS.length} clienți din galerie`,
    },
  ]

  return (
    <section aria-label="Pe scurt" className="relative border-y border-white/10 bg-[#0b0b0b]">
      <div className="mx-auto max-w-6xl px-5">
        <dl className="grid grid-cols-2 divide-white/10 md:grid-cols-4 md:divide-x">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              data-reveal
              style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}
              className="flex flex-col-reverse gap-2 py-8 pr-4 md:px-8 md:py-10 md:first:pl-0"
            >
              <dt className="text-sm leading-snug text-zinc-400">{stat.label}</dt>
              <dd className={numberClass}>
                <CountUp value={stat.value} suffix={stat.suffix} />
              </dd>
            </div>
          ))}
          <div
            data-reveal
            style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
            className="flex flex-col-reverse gap-2 py-8 pr-4 md:px-8 md:py-10"
          >
            <dt className="text-sm leading-snug text-zinc-400">competiții de fitness</dt>
            <dd className={`${numberClass} text-red-500`}>
              <span className="block text-4xl md:text-5xl">Cupa României</span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
