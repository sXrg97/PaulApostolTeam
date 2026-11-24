import { Quote } from "lucide-react"
import { card, cardHover } from "../lib/ui"

type TestimonialProps = {
  quote: string
  author: string
  delay?: number
}

export const Testimonial = ({ quote, author, delay = 0 }: TestimonialProps) => {
  return (
    <figure
      data-reveal
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={`${card} ${cardHover} relative flex flex-col`}
    >
      <Quote className="h-10 w-10 text-red-600" aria-hidden="true" strokeWidth={2.5} />
      <blockquote className="mt-6 flex-grow text-lg leading-relaxed text-zinc-100 md:text-xl">
        <p>{quote}</p>
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 font-display text-xl font-bold text-white" aria-hidden="true">
          {author.charAt(0)}
        </span>
        <span className="font-semibold text-white">{author}</span>
      </figcaption>
    </figure>
  )
}
