import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { EXTERNAL_LINK_PROPS, WHATSAPP_URL } from "../../lib/site"
import { btnPrimary, btnSecondary, eyebrow } from "../../lib/ui"

export const Hero = () => {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#050505]">
      {/* Fundal: fișier mic, deja estompat și întunecat (fără blur în CSS) */}
      <Image
        src="/fundal-sala-fitness-blur.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={60}
        className="-z-20 scale-105 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/30 to-[#050505]" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-black/70 via-black/20 to-transparent lg:block" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 pt-24 md:pt-32 lg:pt-0">
        <div className="relative z-10 flex flex-col items-start lg:min-h-[100svh] lg:w-[56%] lg:justify-center lg:py-28">
          <p className={`${eyebrow} hero-enter`}>Antrenamente 1 la 1 · Plan alimentar</p>

          <h1 className="hero-enter mt-4 font-display font-extrabold uppercase italic leading-[0.88] text-white [--enter-delay:80ms]">
            <span className="block text-[3.75rem] sm:text-7xl md:text-8xl xl:text-[8.5rem]">Paul Apostol</span>
            <span className="mt-3 block text-[2rem] leading-[0.95] text-red-500 sm:text-4xl md:text-5xl xl:text-6xl">
              Antrenor personal în Timișoara
            </span>
          </h1>

          <p className="hero-enter mt-6 max-w-md text-lg leading-relaxed text-zinc-200 [--enter-delay:160ms] md:text-xl">
            Slăbire, masă musculară și obiceiuri sănătoase, cu un plan făcut pentru tine.
          </p>

          <div className="hero-enter mt-8 flex w-full flex-col gap-3 [--enter-delay:240ms] sm:w-auto sm:flex-row">
            <a href={WHATSAPP_URL} {...EXTERNAL_LINK_PROPS} className={btnPrimary}>
              <FaWhatsapp className="h-5 w-5 shrink-0" aria-hidden="true" />
              Scrie-mi pe WhatsApp
            </a>
            <a href="#transformari" className={btnSecondary}>
              Vezi transformările
              <ArrowDown className="h-4 w-4 shrink-0 transition-transform duration-200 motion-safe:group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Decupaj: în flux pe mobil/tabletă (nu acoperă butoanele), absolut în dreapta pe desktop */}
        <div className="pointer-events-none relative mt-auto flex h-[45svh] min-h-[280px] md:h-[52svh] items-end justify-center pt-6 lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:h-[90svh] lg:max-h-[920px] lg:w-[46%] lg:pt-0">
          <Image
            src="/paul-apostol-antrenor-personal.webp"
            alt="Paul Apostol, antrenor personal în Timișoara"
            width={900}
            height={1423}
            priority
            sizes="(min-width: 1024px) 580px, 300px"
            className="h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050505] to-transparent" aria-hidden="true" />
    </section>
  )
}
