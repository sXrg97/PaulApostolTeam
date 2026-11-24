'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { EXTERNAL_LINK_PROPS, WHATSAPP_URL } from '../../lib/site'
import { btnPrimary } from '../../lib/ui'

// Linkurile au forma "/#id" ca să funcționeze și de pe alte pagini (ex. politica de confidențialitate).
const navItems = [
  { id: 'despre', label: 'Despre' },
  { id: 'transformari', label: 'Transformări' },
  { id: 'testimoniale', label: 'Testimoniale' },
  { id: 'ghid', label: 'Ghid gratuit' },
  { id: 'intrebari', label: 'Întrebări' },
  { id: 'contact', label: 'Contact' },
]

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)
  const solid = scrolled || isMenuOpen

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'border-b border-white/10 bg-black/80 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <header className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20">
        <Link
          href="/#home"
          onClick={closeMenu}
          className="flex items-center gap-2 font-display text-[1.7rem] font-extrabold uppercase italic leading-none tracking-wide text-white md:text-4xl"
          aria-label="Paul Apostol, mergi la începutul paginii"
        >
          Paul Apostol
          <Image
            src="/paul_apostol_logo_white.png"
            alt=""
            width={40}
            height={40}
            sizes="40px"
            priority
            className="h-8 w-8 object-contain md:h-10 md:w-10"
          />
        </Link>

        <nav aria-label="Navigare principală" className="ml-8 hidden lg:block">
          <ul className="flex items-center gap-6 text-[13px] font-medium uppercase tracking-[0.1em] text-zinc-200">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/#${item.id}`}
                  className="relative whitespace-nowrap py-2 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-red-600 after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={WHATSAPP_URL}
          {...EXTERNAL_LINK_PROPS}
          className="hidden min-h-10 items-center gap-2 rounded-full bg-red-600 px-5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500 xl:inline-flex"
        >
          <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
          Scrie-mi
        </a>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500 lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'Închide meniul' : 'Deschide meniul'}
          aria-expanded={isMenuOpen}
          aria-controls="meniu-mobil"
        >
          {isMenuOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </header>

      {isMenuOpen && (
        <div
          id="meniu-mobil"
          className="animate-fadeIn h-[calc(100svh-4rem)] overflow-y-auto border-t border-white/10 bg-black/95 lg:hidden"
        >
          <nav aria-label="Navigare mobil" className="mx-auto flex max-w-6xl flex-col px-5 py-6">
            {[{ id: 'home', label: 'Acasă' }, ...navItems].map((item) => (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-white/10 py-4 font-display text-3xl font-bold uppercase tracking-wide text-white transition-colors hover:text-red-500"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              {...EXTERNAL_LINK_PROPS}
              onClick={closeMenu}
              className={`${btnPrimary} mt-8 w-full`}
            >
              <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
              Scrie-mi pe WhatsApp
            </a>
          </nav>
        </div>
      )}
    </div>
  )
}
