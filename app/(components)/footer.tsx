'use client'

import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'

export const Footer = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  // Footer navigation groups
  const footerLinks = [
    {
      title: "Navigare",
      links: [
        { id: 'home', label: 'Acasă' },
        { id: 'despre', label: 'Despre' },
        { id: 'experienta', label: 'Experiență' },
        { id: 'transformari', label: 'Transformări' },
        { id: 'contact', label: 'Contact' },
      ]
    },
    {
      title: "Servicii",
      links: [
        { id: 'servicii', label: 'Servicii și Tarife' },
        { id: 'slabire-sanatoasa', label: 'Slăbire sănătoasă' },
        { id: 'beneficii', label: 'Beneficii' },
        { id: 'odihna', label: 'Odihnă' },
        { id: 'testimoniale', label: 'Testimoniale' },
      ]
    }
  ]

  return (
    <footer className="bg-gradient-to-b from-black to-zinc-900 text-white py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 bg-[url('/noise.svg')] pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-800 via-red-600 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand & Info */}
          <div className="flex flex-col gap-4">
            <span className="font-bold text-2xl md:text-3xl uppercase italic text-red-500">
              Paul Apostol
            </span>
            <p className="text-zinc-400">Antrenor Personal & Specialist în Nutriție</p>
            
            <div className="flex gap-4 mt-2">
              <Link 
                href="https://facebook.com/ApostolPaul1996" 
                target="_blank"
                className="bg-zinc-800 hover:bg-red-700 p-2.5 rounded-full transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </Link>
              <Link 
                href="https://instagram.com/paulapostol_pt" 
                target="_blank"
                className="bg-zinc-800 hover:bg-red-700 p-2.5 rounded-full transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </Link>
              <Link 
                href="https://www.tiktok.com/@antrenorpaulapostol" 
                target="_blank"
                className="bg-zinc-800 hover:bg-red-700 p-2.5 rounded-full transition-all duration-300"
                aria-label="Instagram"
              >
                <FaTiktok size={20} />
              </Link>
              <Link 
                href="https://wa.me/40757497530" 
                target="_blank"
                className="bg-zinc-800 hover:bg-red-700 p-2.5 rounded-full transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </Link>
            </div>
          </div>
          
          {/* Column 2 & 3: Navigation Links */}
          {footerLinks.map((group, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h3 className="text-white font-bold text-lg">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.id}>
                    <a 
                      href={`#${link.id}`} 
                      onClick={(e) => handleClick(e, link.id)}
                      className="text-zinc-400 hover:text-red-500 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Column 4: Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-lg">Contact</h3>
            <p className="text-zinc-400">
              Programează o consultație și începe călătoria spre o versiune mai sănătoasă a ta.
            </p>
            <Link 
              href="#contact" 
              onClick={(e) => handleClick(e, 'contact')}
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md text-center font-medium transition-colors inline-block w-fit"
            >
              Contactează-mă
            </Link>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Paul Apostol. Toate drepturile rezervate.
          </p>
          
          {/* <div className="flex gap-6 text-sm text-zinc-400">
            <Link href="#" className="hover:text-red-500 transition-colors">Termeni și Condiții</Link>
            <Link href="#" className="hover:text-red-500 transition-colors">Politica de Confidențialitate</Link>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
