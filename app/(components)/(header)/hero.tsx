import Image from "next/image"
import Link from "next/link"

export const Hero = () => {
  return (
    <div id="home" className='hero text-white min-h-[calc(100vh-72px)] relative overflow-hidden flex flex-col md:flex-row'>
      <Image 
        width={1920} 
        height={1080} 
        src={'/bg-hero.png'} 
        alt={'Paul Apostol Team'} 
        className="absolute left-0 top-0 bottom-0 right-0 object-cover h-full w-full"
        priority
      />

      <div className="relative z-10 flex max-w-7xl mx-auto px-4 py-20 md:py-8 w-full">
        <div className="w-full md:w-[50%] flex flex-col items-center md:items-start gap-6 justify-center">
          <h1 className="text-4xl md:text-5xl uppercase font-black text-center md:text-left">
            Cum să ajungi la fizicul mult visat
          </h1>
          <h2 className="text-xl md:text-3xl text-center md:text-left">
            Ghidul tău despre cum sa ajungi în cea mai bună formă din viața ta
          </h2>
          <Link href={'#contact'} className="bg-red-500 hover:bg-red-700 px-4 py-2 text-xl text-white font-bold cursor-pointer">
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