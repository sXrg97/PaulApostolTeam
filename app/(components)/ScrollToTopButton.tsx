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
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  return (
    <div className="fixed bottom-4 right-4 z-50" aria-label="Scroll to top button container">
      <button 
        onClick={scrollToTop}
        className={`
          h-10 w-10 
          rounded-full 
          bg-red-600 
          flex items-center justify-center 
          text-white 
          shadow-md 
          transition-all duration-300 ease-in-out
          ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10 pointer-events-none'}
        `}
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  )
} 