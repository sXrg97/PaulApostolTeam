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
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJibGFjayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
        />
      </div>

      <div className="relative z-20 flex max-w-7xl mx-auto px-4 pb-16 w-full pt-[20vh] md:pt-0">
        <div className="w-full md:w-[50%] flex flex-col items-center md:items-start gap-4 justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-center md:text-left uppercase leading-tight">
            Paul Apostol
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl uppercase font-bold text-red-500 text-center md:text-left -mt-2 italic">
            Antrenor Personal
          </p>
          
          <div className="mt-4 md:mt-6 space-y-2 max-w-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl uppercase font-bold text-center md:text-left leading-tight">
              Cum să ajungi la fizicul mult visat
            </h2>
            <h3 className="text-base sm:text-lg md:text-xl text-center md:text-left">
              Ghidul tău despre cum sa ajungi în cea mai bună formă din viața ta
            </h3>
          </div>
          
          <Link 
            href={'#contact'} 
            className="bg-red-600 hover:bg-red-700 px-6 py-3 text-lg text-white font-bold cursor-pointer mt-6 rounded-md transition-colors shadow-lg"
          >
            Începe acum
          </Link>
        </div>
      </div>
      
      {/* Adăugăm un container cu dimensiuni predefinite pentru a preveni CLS */}
      <div className="mt-4 md:mt-0 absolute bottom-0 right-0 md:right-2 lg:-right-20 z-20 h-[40vh] sm:h-[50vh] md:h-[85vh] w-full flex justify-center md:justify-center">
        <div className="h-full w-[350px] md:w-[450px] relative">
          <Image 
            src={'/paul.png'} 
            alt={'Paul Apostol'} 
            width={900}
            height={900}
            className="object-contain bottom-0 h-full md:h-auto absolute drop-shadow-xl"
            priority
            sizes="(max-width: 768px) 350px, 450px"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJibGFjayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
          />
        </div>
      </div>
    </div>
  )
}