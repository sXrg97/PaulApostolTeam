"use client"

import React from 'react'

export const ScrollToTopButton = () => {
  return (
    <button 
      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      className="hidden group hover:flex items-center justify-center w-10 h-10 rounded-full bg-red-600/80 hover:bg-red-600 text-white absolute bottom-4 right-4 transition-all opacity-0 hover:opacity-100 focus:opacity-100"
      aria-label="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  )
} 