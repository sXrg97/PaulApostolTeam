"use client"

import React, { useState, useEffect } from 'react'

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      // Show if scrolled more than 500px
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    
    window.addEventListener('scroll', toggleVisibility)
    
    // Clean up event listener
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])
  
  return (
    <button 
      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      className={`fixed items-center justify-center w-10 h-10 rounded-full bg-red-600/90 hover:bg-red-600 text-white bottom-6 right-6 shadow-md flex z-40 transition-all duration-300 ${
        isVisible ? 'opacity-90 transform translate-y-0' : 'opacity-0 transform translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  )
} 