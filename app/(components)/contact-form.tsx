import { FaWhatsapp } from 'react-icons/fa'
import { EXTERNAL_LINK_PROPS, PHONE_DISPLAY, WHATSAPP_URL } from '../lib/site'
import { btnWhatsApp, card } from '../lib/ui'

export const ContactForm = () => {
  return (
    <div className={`${card} relative overflow-hidden border-red-600/30`}>
      <div className="absolute inset-x-0 top-0 h-1 bg-red-600" aria-hidden="true" />
      <h3 className="font-display text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">Contactează-mă</h3>
      <p className="mt-4 text-base leading-relaxed text-zinc-300 md:text-lg">
        Trimite-mi un mesaj pe WhatsApp și îți voi răspunde cât mai curând posibil!
      </p>
      <a href={WHATSAPP_URL} {...EXTERNAL_LINK_PROPS} className={`${btnWhatsApp} mt-8 w-full min-h-14 !px-5 !text-[13px] sm:!text-sm`}>
        <FaWhatsapp className="h-6 w-6 shrink-0" aria-hidden="true" />
        Conversează pe WhatsApp
      </a>
      <p className="mt-4 text-center text-sm text-zinc-400">
        sau scrie la <span className="whitespace-nowrap font-medium text-zinc-200">{PHONE_DISPLAY}</span>
      </p>
    </div>
  )
}
