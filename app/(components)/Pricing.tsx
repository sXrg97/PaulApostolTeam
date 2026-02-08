import Link from 'next/link'
import React from 'react'
import { Section } from "./section";
import { Dumbbell } from 'lucide-react';


const Pricing = () => {
  return (
    <Section id="servicii" title="Servicii și Tarife" bg="#050505">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Antrenamente Personalizate */}
          <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-8 rounded-lg border border-zinc-800 shadow-xl relative flex flex-col h-full overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600 opacity-5 rounded-full blur-3xl"></div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-1 bg-red-600 rounded-full"></div>
              <h3 className="text-2xl font-bold text-white">Antrenamente Personalizate</h3>
            </div>
            <p className="text-red-500 font-semibold mb-6">🔥 Rezultate rapide cu atenție 100% asupra ta!</p>
            
            <div className="mb-6 relative z-10">
              <h4 className="text-xl font-bold mb-2">Antrenament 1 la 1 (Plată lunară)</h4>
              <p className="text-xl text-red-500 font-bold mb-4">1000 lei / lună</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2"> <Dumbbell /></span>
                  <span>Program de antrenament personalizat în funcție de obiectivele tale (slăbire, creștere musculară, tonifiere)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2"> <Dumbbell /></span>
                  <span>Corectarea tehnicii de execuție pentru eficiență maximă și prevenirea accidentărilor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2"> <Dumbbell /></span>
                  <span>Monitorizare progres și ajustare a planului de antrenament</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2"> <Dumbbell /></span>
                  <span>Recomandări privind alimentația și stilul de viață</span>
                </li>
              </ul>
            </div>
            
            <div className="relative z-10">
              <h4 className="text-xl font-bold mb-2">Ședință individuală (1 la 1)</h4>
              <p className="text-xl text-red-500 font-bold mb-4">150 lei / ședință</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2"> <Dumbbell /></span>
                  <span>Perfect pentru cei care vor să testeze un antrenament personalizat înainte de a alege un abonament</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2"> <Dumbbell /></span>
                  <span>Corectarea posturii și ajustarea antrenamentului la nevoile tale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2"> <Dumbbell /></span>
                  <span>Potrivit pentru oricine, indiferent de nivelul de experiență</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Antrenamente de Grup */}
          <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-8 rounded-lg border border-zinc-800 shadow-xl relative flex flex-col h-full overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600 opacity-5 rounded-full blur-3xl"></div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-1 bg-red-600 rounded-full"></div>
              <h3 className="text-2xl font-bold text-white">Antrenamente de Grup</h3>
            </div>
            <p className="text-red-500 font-semibold mb-6">💪 Motivație și progres împreună!</p>
            
            <div className="relative z-10">
              <h4 className="text-xl font-bold mb-2">Antrenament în grup (max. 3 persoane)</h4>
              <p className="text-xl text-red-500 font-bold mb-4">800 lei / persoană / lună</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2"> <Dumbbell /></span>
                  <span>Îmbină beneficiile antrenamentului personalizat cu energia unui grup mic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2"> <Dumbbell /></span>
                  <span>Exerciții adaptate nivelului fiecărui participant</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2"> <Dumbbell /></span>
                  <span>Suport și motivație constantă într-un mediu dinamic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2"> <Dumbbell /></span>
                  <span>Ideal pentru prieteni sau colegi care vor să se antreneze împreună</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Antrenamente Online */}
          <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-8 rounded-lg border border-zinc-800 shadow-xl relative flex flex-col h-full overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600 opacity-5 rounded-full blur-3xl"></div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-1 bg-red-600 rounded-full"></div>
              <h3 className="text-2xl font-bold text-white">Antrenamente Online</h3>
            </div>
            <p className="text-red-500 font-semibold mb-6">📲 Performanță oriunde te afli!</p>
            
            <div className="mb-6 relative z-10">
              <h4 className="text-xl font-bold mb-2">Antrenament 1 la 1 online</h4>
              <p className="text-xl text-red-500 font-bold mb-4">800 lei / lună</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2"> <Dumbbell /></span>
                  <span>Plan de antrenament personalizat, adaptat echipamentului disponibil acasă sau la sală</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2"> <Dumbbell /></span>
                  <span>Corectarea tehnicii prin sesiuni video live</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2"> <Dumbbell /></span>
                  <span>Monitorizare săptămânală și ajustare a programului</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2"> <Dumbbell /></span>
                  <span>Suport și ghidare pentru menținerea motivației</span>
                </li>
              </ul>
            </div>
            
            <div className="relative z-10">
              <h4 className="text-xl font-bold mb-2">Online Coaching (plan personalizat + suport)</h4>
              <p className="text-xl text-red-500 font-bold mb-4">500 lei / lună</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2"><Dumbbell /></span>
                  <span>Program personalizat creat în funcție de obiectivele tale și nivelul de experiență</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2"> <Dumbbell /></span>
                  <span>Plan nutrițional personalizat in funcție de stilul tău de viață</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2"> <Dumbbell /></span>
                  <span>Plan de antrenament personal in funcție de obiectivele tale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2"> <Dumbbell /></span>
                  <span>Monitorizare de 2 ori pe săptămână a rezultatelor și adaptarea planurilor in funcție de progres</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2"> <Dumbbell /></span>
                  <span>Suport prin mesaje pentru întrebări și îndrumare</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Plan Nutrițional Personalizat */}
          <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-8 rounded-lg border border-zinc-800 shadow-xl relative flex flex-col h-full overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600 opacity-5 rounded-full blur-3xl"></div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-1 bg-red-600 rounded-full"></div>
              <h3 className="text-2xl font-bold text-white">Plan Nutrițional Personalizat</h3>
            </div>
            <p className="text-red-500 font-semibold mb-6">🥗 Nutriție adaptată stilului tău de viață!</p>
            
            <div className="relative z-10">
              <h4 className="text-xl font-bold mb-2">Plan Nutrițional (plată unică)</h4>
              <p className="text-xl text-red-500 font-bold mb-4">300 lei</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2"> <Dumbbell /></span>
                  <span>Adaptat nevoilor tale – Plan creat special pentru obiectivele tale (slăbire, masă musculară, menținere, sănătate)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2"> <Dumbbell /></span>
                  <span>Evaluare detaliată – Analizăm stilul tău de viață, preferințele alimentare și eventualele restricții</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2"> <Dumbbell /></span>
                  <span>Rețete simple & gustoase – Mese echilibrate, ușor de preparat, potrivite programului tău zilnic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2"> <Dumbbell /></span>
                  <span>Lista de cumpărături – Economisești timp și bani cu o listă clară și organizată</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2"> <Dumbbell /></span>
                  <span>Plată unică – Fără abonamente – O investiție pe termen lung în sănătatea ta!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <Link href={'#contact'} className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-xl font-bold">
            Vreau să încep
          </Link>
        </div>
      </Section>
  )
}

export default Pricing