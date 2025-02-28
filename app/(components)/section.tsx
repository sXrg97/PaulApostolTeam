import React from 'react'

type Props = {
    id?: string,
    title: string,
    children: React.ReactNode,
    bg: string
}

export const Section = ({id, title, children, bg}: Props) => {
  return (
    <section id={id} className="w-full relative" style={{'background': `${bg}`}}>
        {/* Background pattern overlay - adds subtle texture */}
        <div className="absolute inset-0 opacity-5 bg-[url('/noise.svg')] pointer-events-none"></div>
        
        {/* Red accent line on the left side */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-700 via-red-600 to-transparent"></div>
        
        {/* Mobile scroll indicator - helps indicate sections on small screens */}
        <div className="md:hidden absolute right-6 top-4 w-1.5 h-12 rounded-full bg-black/30 overflow-hidden">
          <div className="w-full h-1/3 bg-red-600 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col gap-6 py-12 sm:py-16 px-4 sm:px-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2 md:mb-4">
                {/* Red decorative element */}
                <div className="h-1 w-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full hidden md:block"></div>
                
                {/* Mobile decorative element */}
                <div className="h-5 w-1 bg-red-600 rounded-full md:hidden mr-2"></div>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    {title}
                </h3>
            </div>
            
            <div className="transition-all duration-300 ease-in-out">
                {children}
            </div>
            
            {/* Scroll to top button removed - now globally available */}
        </div>
    </section>
  )
}