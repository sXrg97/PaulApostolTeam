import React from 'react'

type Props = {
    id?: string,
    title: string,
    children: React.ReactNode,
    bg: string
}

export const Section = ({id, title, children, bg}: Props) => {
  return (
    <section id={id} className={`w-full`} style={{'background': `${bg}`}}>
        <div className='max-w-7xl mx-auto flex flex-col gap-4 py-12 px-4'>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
                {title}
            </h3>
            <div>
                {children}
            </div>
        </div>
    </section>
  )
}