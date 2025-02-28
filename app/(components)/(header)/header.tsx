'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add scroll event listener to detect when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  // List of navigation items for desktop (reduced)
  const desktopNavItems = [
    { id: 'home', label: 'Acasă' },
    { id: 'despre', label: 'Despre' },
    { id: 'transformari', label: 'Transformări' },
    { id: 'servicii', label: 'Servicii' },
    { id: 'testimoniale', label: 'Testimoniale' },
    { id: 'contact', label: 'Contact' }
  ]
  
  // Full list of navigation items for mobile
  const mobileNavItems = [
    { id: 'home', label: 'Acasă' },
    { id: 'despre', label: 'Despre' },
    { id: 'experienta', label: 'Experiență' },
    { id: 'transformari', label: 'Transformări' },
    { id: 'slabire-sanatoasa', label: 'Slăbire sănătoasă' },
    { id: 'beneficii', label: 'Beneficii' },
    { id: 'odihna', label: 'Odihnă' },
    { id: 'testimoniale', label: 'Testimoniale' },
    { id: 'servicii', label: 'Servicii' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || isMenuOpen ? 'bg-black/50 backdrop-blur-lg shadow-sm' : 'bg-black/0 backdrop-blur-sm'
    }`}>
      <header className={`flex items-center justify-between max-w-7xl mx-auto px-4 transition-all duration-300 ${
        scrolled ? 'h-[60px]' : 'h-[56px] md:h-[72px]'
      }`}>
        <Link href="#home" className='font-bold text-2xl md:text-4xl uppercase italic text-white flex items-center gap-2'>
          Paul Apostol
          <Image 
            src="/paul_apostol_logo_white.png" 
            alt="Paul Apostol Logo" 
            width={36} 
            height={36}
            className="w-auto h-6 md:h-8"
          />
        </Link>
        
        {/* Desktop Navigation - using reduced list */}
        <nav className="hidden md:block">
          <ul className='flex flex-wrap space-x-6 uppercase text-white text-sm'>
            {desktopNavItems.map(item => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  onClick={(e) => handleClick(e, item.id)} 
                  className="hover:text-red-500 transition-colors whitespace-nowrap"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile menu toggle button */}
        <button 
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>
      
      {/* Mobile Navigation Menu with improved glassmorphism - using full list */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/50 backdrop-blur-lg shadow-inner border-t border-zinc-800/30 animate-fadeIn h-[calc(100vh-60px)] overflow-y-auto">
          <nav className="flex flex-col py-4 max-w-7xl mx-auto px-4">
            {mobileNavItems.map(item => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                onClick={(e) => handleClick(e, item.id)} 
                className="py-2.5 border-b border-zinc-800/30 text-white hover:text-red-500 transition-colors text-base font-medium flex items-center"
              >
                <div className="h-4 w-0.5 bg-red-600 rounded-full mr-2.5"></div>
                {item.label}
              </a>
            ))}
            
            {/* CTA Button at bottom of mobile menu */}
            <a 
              href="#contact" 
              onClick={(e) => handleClick(e, 'contact')} 
              className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2.5 px-5 rounded-md text-center font-medium transition-colors text-base"
            >
              Începe acum
            </a>
          </nav>
        </div>
      )}
    </div>
  )
}