import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { EXTERNAL_LINK_PROPS, SOCIAL_LINKS, WHATSAPP_URL } from '../lib/site'

const socialIcons = {
  Facebook: FaFacebook,
  Instagram: FaInstagram,
  TikTok: FaTiktok,
} as const

const footerLinks = [
  {
    title: 'Navigare',
    links: [
      { href: '/#home', label: 'Acasă' },
      { href: '/#despre', label: 'Despre' },
      { href: '/#transformari', label: 'Transformări' },
      { href: '/#testimoniale', label: 'Testimoniale' },
      { href: '/#contact', label: 'Contact' },
    ],
  },
  {
    title: 'Resurse',
    links: [
      { href: '/#ghid', label: 'Ghid gratuit' },
      { href: '/#slabire-sanatoasa', label: 'Slăbire sănătoasă' },
      { href: '/#calculator', label: 'Calculator caloric' },
      { href: '/#intrebari', label: 'Întrebări frecvente' },
    ],
  },
]

const iconLinkClass =
  'flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition-colors hover:border-red-600 hover:bg-red-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500'

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black pb-28 pt-16 text-white md:pb-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link
              href="/#home"
              className="flex w-fit items-center gap-2 font-display text-3xl font-extrabold uppercase italic leading-none tracking-wide text-white"
            >
              Paul Apostol
              <Image src="/paul_apostol_logo_white.png" alt="" width={32} height={32} sizes="32px" className="h-8 w-8 object-contain" />
            </Link>
            <p className="text-zinc-400">Antrenor personal în Timișoara. Antrenamente 1&nbsp;la&nbsp;1 și plan alimentar.</p>
            <ul className="mt-2 flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIcons[social.name]
                return (
                  <li key={social.name}>
                    <a href={social.href} {...EXTERNAL_LINK_PROPS} aria-label={social.name} className={iconLinkClass}>
                      <Icon size={18} aria-hidden="true" />
                    </a>
                  </li>
                )
              })}
              <li>
                <a href={WHATSAPP_URL} {...EXTERNAL_LINK_PROPS} aria-label="WhatsApp" className={iconLinkClass}>
                  <FaWhatsapp size={18} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          {footerLinks.map((group) => (
            <nav key={group.title} aria-label={group.title} className="flex flex-col gap-4">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">{group.title}</h2>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-zinc-300 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="flex flex-col gap-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">Contact</h2>
            <p className="text-zinc-300">Scrie-mi pe WhatsApp și stabilim împreună următorii pași.</p>
            <a
              href={WHATSAPP_URL}
              {...EXTERNAL_LINK_PROPS}
              className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-red-600 px-5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500"
            >
              <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
              Scrie-mi
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Paul Apostol. Toate drepturile rezervate.</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <Link href="/politica-de-confidentialitate" className="text-zinc-400 transition-colors hover:text-white">
              Politica de confidențialitate
            </Link>
            <p>
              Developed by{' '}
              <a
                href="https://sergiumarcu.ro"
                target="_blank"
                rel="noopener"
                className="font-medium text-zinc-400 underline-offset-4 transition-colors hover:text-red-500 hover:underline"
              >
                Sergiu Marcu
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
