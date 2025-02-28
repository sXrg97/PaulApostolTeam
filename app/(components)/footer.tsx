import { Facebook, Instagram, Phone, } from 'lucide-react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-bold text-xl md:text-2xl uppercase italic">
              Paul Apostol
            </span>
          </div>
          
          <div className="flex gap-6">
            <Link 
              href="https://facebook.com/paulapostolteam" 
              target="_blank"
              className="hover:text-red-500 transition-colors"
            >
              <Facebook size={24} />
            </Link>
            <Link 
              href="https://instagram.com/paulapostolteam" 
              target="_blank"
              className="hover:text-red-500 transition-colors"
            >
              <Instagram size={24} />
            </Link>
            <Link 
              href="https://wa.me/40123456789" 
              target="_blank"
              className="hover:text-red-500 transition-colors"
            >
              <Phone size={24} />
            </Link>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Paul Apostol. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  )
}
