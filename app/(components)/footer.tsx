import { Facebook, Instagram, Phone } from 'lucide-react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-zinc-900 text-white py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 bg-[url('/noise.svg')] pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-800 via-red-600 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-bold text-2xl md:text-3xl uppercase italic text-red-500">
              Paul Apostol
            </span>
            <p className="text-zinc-400 text-center md:text-left">Antrenor personal & Specialist în nutriție</p>
          </div>
          
          <div className="flex gap-8">
            <Link 
              href="https://facebook.com/paulapostolteam" 
              target="_blank"
              className="bg-zinc-800 hover:bg-red-700 p-3 rounded-full transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </Link>
            <Link 
              href="https://instagram.com/paulapostolteam" 
              target="_blank"
              className="bg-zinc-800 hover:bg-red-700 p-3 rounded-full transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </Link>
            <Link 
              href="https://wa.me/40123456789" 
              target="_blank"
              className="bg-zinc-800 hover:bg-red-700 p-3 rounded-full transition-all duration-300"
              aria-label="WhatsApp"
            >
              <Phone size={24} />
            </Link>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Paul Apostol. Toate drepturile rezervate.
          </p>
          
          <div className="flex gap-6 text-sm text-zinc-400">
            <Link href="#" className="hover:text-red-500 transition-colors">Termeni și Condiții</Link>
            <Link href="#" className="hover:text-red-500 transition-colors">Politica de Confidențialitate</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
