import { Header } from "./(components)/(header)/header";
import { Hero } from "./(components)/(header)/hero";
import { Section } from "./(components)/section";
import { Testimonial } from "./(components)/testimonial";
import { ContactForm } from "./(components)/contact-form";
import { CalorieCalculator } from "./(components)/calorie-calculator";
import { TransformationGallery } from "./(components)/transformation-gallery";
import Image from "next/image";
import { Footer } from "./(components)/footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Section id="despre" title="Cine sunt și cu ce te pot ajuta?" bg="#1a1a1a">
        <div className="flex flex-col md:flex-row items-center gap-8">
          
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              Mă numesc Apostol Paul și, din 2019, îndrum femei și bărbați în procesul de slăbire și adoptare a unui stil de viață sănătos, indiferent dacă aleg să se antreneze în sala de fitness sau nu.
            </p>
            <p className="text-lg mb-4">
              Am descoperit fitnessul în 2014, când nemulțumirea față de propriul corp m-a determinat să fac o schimbare. Primele luni de antrenament au fost o provocare, dar progresul vizibil și transformarea prin care am trecut m-au motivat să continui. Cu timpul, sportul a devenit mai mult decât o simplă activitate – o parte esențială a vieții mele. Odată cu experiența acumulată, tot mai mulți prieteni mi-au cerut sfaturi pentru a-și îmbunătăți forma fizică, iar în acel moment am realizat că acesta este drumul pe care vreau să merg.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="/paul_apostol_nameplate.png" 
              alt="Paul Apostol" 
              className="rounded-lg w-full aspect-video object-cover object-[25%_60%] shadow-lg"
              width={500}
              height={500}
            />
          </div>
        </div>
      </Section>

      <Section title="Experiența mea" bg="#050505">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <ul className="space-y-4 text-lg">
              <li>✓ 5 ani de experiență ca antrenor personal</li>
              <li>✓ Am ajutat foarte multe persoane să își îndeplinească obiectivul</li>
              <li>✓ Am văzut foarte multe tipuri de genetic</li>
              <li>✓ Participare la Cupa României în competiții de Fitness</li>
            </ul>
            <p className="mt-4 text-lg">
              Am trecut prin toate procesele: perioada de masă musculară, procesul de slăbit, și perioada de revenire după concurs. Am înțeles toate stările unei persoane care dorește să slăbească.
            </p>
            <p className="mt-4 text-lg font-bold">
              Cel mai important aspect este că AM TRECUT ȘI EU PRIN TOATE.
            </p>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="w-full max-w-md">
              <Image 
                src="/paul_apostol_cupa_romaniei.jpg" 
                alt="Paul Apostol la Cupa României" 
                width={500}
                height={500}
                className="rounded-lg shadow-lg aspect-square object-cover object-top w-full"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center sm:text-left">
          <Link href={'#contact'} className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-xl font-bold">
            Programează o consultație
          </Link>
        </div>
      </Section>

      <Section title="Transformări" bg="#1a1a1a">
        <TransformationGallery />
      </Section>

      <Section title="Tot ce trebuie să știi pentru a slăbi sănătos" bg="#050505">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">1. Necesarul caloric</h3>
            <p>Cantitatea totală de calorii necesare zilnic pentru menținerea funcțiilor vitale și susținerea activității fizice.</p>
          </div>
          <div className="bg-black p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">2. Deficitul caloric</h3>
            <p>Reducerea aportului caloric sub necesarul zilnic pentru a determina corpul să utilizeze rezervele de grăsime.</p>
          </div>
          <div className="bg-black p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">3. Calitatea alimentelor</h3>
            <p>Alegerea alimentelor nutritive și echilibrate pentru a asigura sănătatea și energia necesară în procesul de slăbire.</p>
          </div>
        </div>
        <CalorieCalculator />
      </Section>

      <Section title="Beneficiile Sportului" bg="#1a1a1a">
        <ul className="space-y-4 text-lg">
          <li>✓ Întărește sistemul cardiovascular</li>
          <li>✓ Crește forța musculară</li>
          <li>✓ Îmbunătățește flexibilitatea</li>
          <li>✓ Eliberează endorfine, reducând stresul și anxietatea</li>
          <li>✓ Îmbunătățește starea de spirit și calitatea somnului</li>
          <li>✓ Promovează disciplina, spiritul de echipă și perseverența</li>
        </ul>
      </Section>

      <Section title="Odihna și Recuperarea" bg="#050505">
        <ul className="space-y-4 text-lg">
          <li>✓ Esențiale pentru sănătate: Odihna și recuperarea sunt la fel de importante ca și antrenamentele.</li>
          <li>✓ Refacerea mușchilor: După exerciții intense, corpul are nevoie de timp pentru a-și reface mușchii și pentru a preveni accidentările.</li>
          <li>✓ Somn adecvat: Adulții ar trebui să doarmă între 7 și 9 ore pe noapte pentru a funcționa bine.</li>
          <li>✓ Concentrare mentală: Somnul joacă un rol vital în funcția cognitivă, inclusiv în concentrare, atenție și luarea deciziilor.</li>
        </ul>
      </Section>

      <Section title="Testimoniale" bg="#1a1a1a">
        <div className="grid md:grid-cols-2 gap-8">
          <Testimonial
            quote="Paul m-a ajutat să dau jos 40 de kg! Am ajuns de la 120 la 80 de kg. Sunt extrem de mulțumit de rezultate și de abordarea lui profesionistă."
            author="Alexandru M."
          />
          <Testimonial
            quote="Cu ajutorul lui Paul, am dat jos 10 kg în prima lună de colaborare! Programul personalizat și sfaturile lui au făcut toată diferența."
            author="Rabia C."
          />
        </div>
      </Section>

      <Section id="servicii" title="Servicii și Tarife" bg="#050505">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Antrenamente Personalizate */}
          <div className="bg-black p-6 rounded-lg flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-2">Antrenamente Personalizate</h3>
            <p className="text-red-500 font-semibold mb-6">🔥 Rezultate rapide cu atenție 100% asupra ta!</p>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold mb-2">Antrenament 1 la 1 (Plată lunară)</h4>
              <p className="text-xl text-red-500 font-bold mb-4">1000 lei / lună</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✔</span>
                  <span>Program de antrenament personalizat în funcție de obiectivele tale (slăbire, creștere musculară, tonifiere)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✔</span>
                  <span>Corectarea tehnicii de execuție pentru eficiență maximă și prevenirea accidentărilor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✔</span>
                  <span>Monitorizare progres și ajustare a planului de antrenament</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✔</span>
                  <span>Recomandări privind alimentația și stilul de viață</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-2">Ședință individuală (1 la 1)</h4>
              <p className="text-xl text-red-500 font-bold mb-4">150 lei / ședință</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✔</span>
                  <span>Perfect pentru cei care vor să testeze un antrenament personalizat înainte de a alege un abonament</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✔</span>
                  <span>Corectarea posturii și ajustarea antrenamentului la nevoile tale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✔</span>
                  <span>Potrivit pentru oricine, indiferent de nivelul de experiență</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Antrenamente de Grup */}
          <div className="bg-black p-6 rounded-lg flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-2">Antrenamente de Grup</h3>
            <p className="text-red-500 font-semibold mb-6">💪 Motivație și progres împreună!</p>
            
            <div>
              <h4 className="text-xl font-bold mb-2">Antrenament în grup (max. 3 persoane)</h4>
              <p className="text-xl text-red-500 font-bold mb-4">800 lei / persoană / lună</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✔</span>
                  <span>Îmbină beneficiile antrenamentului personalizat cu energia unui grup mic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✔</span>
                  <span>Exerciții adaptate nivelului fiecărui participant</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✔</span>
                  <span>Suport și motivație constantă într-un mediu dinamic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✔</span>
                  <span>Ideal pentru prieteni sau colegi care vor să se antreneze împreună</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Antrenamente Online */}
          <div className="bg-black p-6 rounded-lg flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-2">Antrenamente Online</h3>
            <p className="text-red-500 font-semibold mb-6">📲 Performanță oriunde te afli!</p>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold mb-2">Antrenament 1 la 1 online</h4>
              <p className="text-xl text-red-500 font-bold mb-4">800 lei / lună</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✔</span>
                  <span>Plan de antrenament personalizat, adaptat echipamentului disponibil acasă sau la sală</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✔</span>
                  <span>Corectarea tehnicii prin sesiuni video live</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✔</span>
                  <span>Monitorizare săptămânală și ajustare a programului</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✔</span>
                  <span>Suport și ghidare pentru menținerea motivației</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-2">Online Coaching (plan personalizat + suport)</h4>
              <p className="text-xl text-red-500 font-bold mb-4">500 lei / lună</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✔</span>
                  <span>Program personalizat creat în funcție de obiectivele tale și nivelul de experiență</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✔</span>
                  <span>Recomandări alimentare adaptate stilului tău de viață</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✔</span>
                  <span>Monitorizare constantă a progresului și ajustări periodice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✔</span>
                  <span>Suport prin mesaje pentru întrebări și îndrumare</span>
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

      <Section id="contact" title="Care sunt următorii pași?" bg="#1a1a1a">
        <p className="text-lg mb-6">
          Principiile de mai sus sunt doar o mică parte din ceea ce aplic și eu cu toți cei care aleg să colaboreze cu mine.
        </p>
        <p className="text-lg mb-6">
          Dacă îți dorești și tu să slăbești sau să pui masă musculară, <span className="uppercase text-red-500 font-bold">fără</span> să:
        </p>
        <ul className="list-disc list-inside mb-6 text-lg">
          <li>Te înfometezi</li>
          <li>Să mănânci alimente care nu îți plac</li>
          <li>Să faci cardio încontinuu și să nu vezi nici un rezultat</li>
          <li>Să simți că stai la același nivel</li>
        </ul>
        <p className="text-lg mb-6">
          Te invit să-mi trimiți un mesaj pe WhatsApp, unde vom discuta despre situația ta și vom concepe un plan personalizat împreună.
        </p>
        <ContactForm />
      </Section>
      <Footer />
    </>
  );
}