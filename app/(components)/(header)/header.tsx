'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-[#050505] text-white'>
      <header className='flex items-center justify-between max-w-7xl mx-auto h-[56px] md:h-[72px] px-4'>
        <span className='font-bold text-2xl md:text-4xl uppercase italic'>
          Paul Apostol
        </span>
        <nav className="hidden md:block">
          <ul className='flex space-x-8 uppercase'>
            <li>
              <a href='#home' onClick={(e) => handleClick(e, 'home')} className="hover:text-red-500 transition-colors">Acasa</a>
            </li>
            <li>
              <a href='#despre' onClick={(e) => handleClick(e, 'despre')} className="hover:text-red-500 transition-colors">Despre</a>
            </li>
            <li>
              <a href='#contact' onClick={(e) => handleClick(e, 'contact')} className="hover:text-red-500 transition-colors">Contact</a>
            </li>
          </ul>
        </nav>
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4">
            <a href="#home" onClick={(e) => handleClick(e, 'home')} className="py-2 hover:text-red-500 transition-colors">Acasa</a>
            <a href="#despre" onClick={(e) => handleClick(e, 'despre')} className="py-2 hover:text-red-500 transition-colors">Despre</a>
            <a href="#contact" onClick={(e) => handleClick(e, 'contact')} className="py-2 hover:text-red-500 transition-colors">Contact</a>
          </nav>
        </div>
      )}
    </div>
  )
}