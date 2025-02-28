"use client"

import Image from "next/image";
import { useState } from "react";

export const TransformationGallery = () => {
    const transformations = [
      { name: 'Paul', before: 120, after: 80, image: '/paul_slim.jpg', description: 'Paul a început acest proces la 120 kg, hotărât să își schimbe viața fără antrenamente, doar prin nutriție și reguli simple. I-am creat un plan alimentar echilibrat, bazat pe deficit caloric, ore de masă regulate, hidratare optimă și mai multă mișcare în viața de zi cu zi. Primele săptămâni au fost dificile, dar progresul l-a motivat să continue. Cu disciplină și consecvență, a ajuns la 80 kg, transformându-și complet stilul de viață. Fără antrenamente, doar prin alegeri corecte și perseverență, Paul a demonstrat că schimbarea este posibilă oricând.' },
      { name: 'Rabia', loss: 10, image: '/rabia_slim.jpg', description: 'Rabia a început antrenamentele 1 la 1 cu obiectivul clar de a slăbi și de a-și îmbunătăți compoziția corporală. În doar două luni, printr-un program bine structurat de antrenament și un plan alimentar echilibrat, a reușit să scadă 10 kg și să își tonifieze corpul.' },
      { name: 'Lavinia', before: 75, after: 55, image: '/lavinia_slim.jpg', description: 'Prin muncă și perseverență, Lavinia a reușit să ajungă de la 75 kg la 55 kg, atingând astfel obiectivul dorit. Această schimbare nu este doar despre kilogramele pierdute, ci despre un stil de viață mai sănătos și mai echilibrat.' },
      { name: 'Eduard', before: 85, after: 65, image: '/eduard_slim.jpg', description: 'Prin consecvență și determinare, Eduard a reușit să slăbească 20 kg și să își îmbunătățească stilul de viață. Progresul lui demonstrează că, alături de un plan bine structurat și susținere, orice obiectiv poate fi atins.' },
      { name: 'Daiana', loss: 15, image: '/daiana_slim.jpg', description: 'Cu perseverență și un program adaptat nevoilor ei, Daiana a reușit să dea jos 15 kg după sarcină și să revină în formă. Această transformare arată că, indiferent de provocări, cu un plan bine structurat și susținere, orice obiectiv poate fi atins.' },
      // Add more transformations as needed
    ];
  
    // State to track expanded/collapsed state for each card
    const [expandedStates, setExpandedStates] = useState<boolean[]>(transformations.map(() => false));
  
    // Toggle expanded state for a specific card
    const toggleExpand = (index: number) => {
      const newStates = [...expandedStates];
      newStates[index] = !newStates[index];
      setExpandedStates(newStates);
    };
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {transformations.map((transformation, index) => (
          <div 
            key={index} 
            className="group bg-gradient-to-br from-zinc-900 via-black to-zinc-900 rounded-xl overflow-hidden hover:shadow-xl border border-zinc-800 transition-all duration-300 hover:border-red-900 flex flex-col h-full"
          >
            <div className="relative overflow-hidden">
              <Image 
                src={transformation.image || "/placeholder.svg"} 
                alt={`Transformare ${transformation.name}`} 
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                height={500}
                width={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-5 w-1 bg-red-600 rounded-full"></div>
                <h3 className="text-2xl font-bold text-white">{transformation.name}</h3>
              </div>
              
              <div className="mb-4 inline-block bg-red-900/30 text-red-400 font-semibold px-3 py-1 rounded-full text-sm">
                {transformation.before && transformation.after ? (
                  <span>De la {transformation.before} kg la {transformation.after} kg</span>
                ) : (
                  <span>-{transformation.loss} kg în prima lună</span>
                )}
              </div>
              
              <div className="text-zinc-300 text-sm flex-grow">
                {expandedStates[index] ? (
                  // Expanded view - show full text
                  <p>{transformation.description}</p>
                ) : (
                  // Collapsed view - show preview with gradient fade at bottom
                  <div className="relative">
                    <p className="line-clamp-3">{transformation.description}</p>
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black to-transparent"></div>
                  </div>
                )}
                
                {/* Toggle button */}
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    toggleExpand(index);
                  }}
                  className="mt-3 text-red-400 hover:text-red-300 text-sm font-medium focus:outline-none transition-colors"
                >
                  {expandedStates[index] ? 'Arată mai puțin' : 'Arată mai mult'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };