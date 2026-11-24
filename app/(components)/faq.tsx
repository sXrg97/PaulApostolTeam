import { Plus } from "lucide-react"
import { FAQ_ITEMS } from "../lib/faq"

export const Faq = () => {
  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {FAQ_ITEMS.map((item, index) => (
        <details
          key={item.question}
          data-reveal
          style={{ "--reveal-delay": `${index * 50}ms` } as React.CSSProperties}
          className="group"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500">
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white transition-colors group-hover:text-red-400 md:text-3xl">
              {item.question}
            </h3>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-red-500 transition-transform duration-300 group-open:rotate-45 group-open:border-red-600">
              <Plus className="h-5 w-5" aria-hidden="true" />
            </span>
          </summary>
          <div className="max-w-3xl pb-7 pr-14">
            <p className="text-base leading-relaxed text-zinc-300 md:text-lg">{item.answer}</p>
            {item.link && (
              <a
                href={item.link.href}
                className="mt-4 inline-flex text-sm font-semibold uppercase tracking-wider text-red-400 underline-offset-4 transition-colors hover:text-red-300 hover:underline"
              >
                {item.link.label}
              </a>
            )}
          </div>
        </details>
      ))}
    </div>
  )
}
