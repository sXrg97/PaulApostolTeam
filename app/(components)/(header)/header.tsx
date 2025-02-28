'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

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

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-lg shadow-sm' : 'bg-black/0 backdrop-blur-sm'}`}>
      <header className={`flex items-center justify-between max-w-7xl mx-auto px-4 transition-all duration-300 ${
        scrolled ? 'h-[60px]' : 'h-[56px] md:h-[72px]'
      }`}>
        <span className='font-bold text-2xl md:text-4xl uppercase italic text-white'>
          Paul Apostol
        </span>
        <nav className="hidden md:block">
          <ul className='flex space-x-8 uppercase text-white'>
            <li>
              <a href='#home' onClick={(e) => handleClick(e, 'home')} className="hover:text-red-500 transition-colors">Acasa</a>
            </li>
            <li>
              <a href='#despre' onClick={(e) => handleClick(e, 'despre')} className="hover:text-red-500 transition-colors">Despre</a>
            </li>
            <li>
              <a href='#servicii' onClick={(e) => handleClick(e, 'servicii')} className="hover:text-red-500 transition-colors">Servicii</a>
            </li>
            <li>
              <a href='#contact' onClick={(e) => handleClick(e, 'contact')} className="hover:text-red-500 transition-colors">Contact</a>
            </li>
          </ul>
        </nav>
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>
      {isMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md">
          <nav className="flex flex-col items-center py-4 text-white">
            <a href="#home" onClick={(e) => handleClick(e, 'home')} className="py-2 hover:text-red-500 transition-colors">Acasa</a>
            <a href="#despre" onClick={(e) => handleClick(e, 'despre')} className="py-2 hover:text-red-500 transition-colors">Despre</a>
            <a href="#servicii" onClick={(e) => handleClick(e, 'servicii')} className="py-2 hover:text-red-500 transition-colors">Servicii</a>
            <a href="#contact" onClick={(e) => handleClick(e, 'contact')} className="py-2 hover:text-red-500 transition-colors">Contact</a>
          </nav>
        </div>
      )}
    </div>
  )
}