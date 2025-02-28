'use client'

import { FaWhatsapp } from 'react-icons/fa';

export const ContactForm = () => {
  const openWhatsApp = () => {
    // Phone number should be in international format without '+' or spaces
    const phoneNumber = '40757497530'; // IMPORTANT: Replace with your actual phone number in international format (e.g., 40 for Romania + your number without the first 0)
    const message = encodeURIComponent('Bună! Sunt interesat/ă de serviciile tale de antrenament personal și nutriție.');
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open in a new tab
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-8 rounded-xl border border-zinc-800 shadow-xl relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-800 opacity-10 rounded-full blur-3xl"></div>
      
      <h4 className="text-2xl font-bold mb-6 text-white flex items-center">
        <div className="h-6 w-1 bg-red-600 rounded-full mr-3"></div>
        Contactează-mă
      </h4>
      
      <p className="mb-8 text-lg text-zinc-300 relative z-10">
        Trimite-mi un mesaj pe WhatsApp și îți voi răspunde cât mai curând posibil!
      </p>
      
      <button 
        onClick={openWhatsApp} 
        className="bg-green-600 hover:bg-green-700 text-white w-full py-3 md:py-4 rounded-lg font-bold flex items-center justify-center gap-3 text-lg md:text-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-900/30 relative z-10 min-h-[56px]"
      >
        <FaWhatsapp className="text-2xl flex-shrink-0" />
        <span>Conversează pe WhatsApp</span>
      </button>
    </div>
  );
};