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
    <div className="max-w-md mx-auto text-center">
      <p className="mb-6 text-lg">
        Trimite-mi un mesaj pe WhatsApp și îți voi răspunde cât mai curând posibil!
      </p>
      
      <button 
        onClick={openWhatsApp} 
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-bold w-full flex items-center justify-center gap-2 text-xl"
      >
        <FaWhatsapp className="text-2xl" />
        Conversează pe WhatsApp
      </button>
    </div>
  );
};