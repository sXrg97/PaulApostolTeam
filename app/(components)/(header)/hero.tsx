import Image from "next/image"
import Link from "next/link"

export const Hero = () => {
  return (
    <div id="home" className='hero text-white min-h-screen relative overflow-hidden flex flex-col md:flex-row'>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      {/* Background image with blur container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image 
          fill
          src={'/bg-hero.webp'} 
          alt={'Paul Apostol Background'} 
          className="object-cover blur-sm scale-105" /* Scale to prevent white edges when blurring */
          quality={90}
          priority
        />
      </div>

      <div className="relative z-20 flex max-w-7xl mx-auto px-4 pb-16 w-full">
        <div className="w-full md:w-[50%] flex flex-col items-center md:items-start gap-4 justify-center">
          <h1 className="text-5xl md:text-6xl font-black text-center md:text-left uppercase">
            Paul Apostol
          </h1>
          <p className="text-2xl md:text-3xl uppercase font-bold text-red-500 text-center md:text-left -mt-2 italic">
            Antrenor Personal
          </p>
          
          <div className="mt-6 space-y-2">
            <h2 className="text-2xl md:text-3xl uppercase font-bold text-center md:text-left">
              Cum să ajungi la fizicul mult visat
            </h2>
            <h3 className="text-lg md:text-xl text-center md:text-left">
              Ghidul tău despre cum sa ajungi în cea mai bună formă din viața ta
            </h3>
          </div>
          
          <Link href={'#contact'} className="bg-red-500 hover:bg-red-700 px-6 py-3 text-xl text-white font-bold cursor-pointer mt-6 rounded-md">
            Incepe acum
          </Link>
        </div>
      </div>
      
      <Image 
        width={1920} 
        height={1080} 
        src={'/paul.png'} 
        alt={'Paul Apostol'} 
        className="relative md:absolute bottom-0 right-0 md:-right-60 z-20 h-[60vh] md:h-[85vh] object-contain"
        priority
      />
    </div>
  )
}