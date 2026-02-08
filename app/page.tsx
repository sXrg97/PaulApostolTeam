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
import { Metadata } from "next";
import { 
  generateWebPageSchema, 
  generatePersonalTrainerSchema,
} from "./lib/structured-data";
import Script from "next/script";
// import Pricing from "./(components)/Pricing";

// Create schema objects
const pageSchema = generateWebPageSchema(
  "Paul Apostol - Antrenor Personal & Specialist în Nutriție",
  "Ghidul tău personalizat către o viață sănătoasă și activă. Transformă-ți corpul și obiceiurile cu planuri de nutriție și antrenamente adaptate nevoilor tale.",
  "https://paulapostol.ro",
  "https://paulapostol.ro/paul_apostol_logo_white.png",
  "2023-11-05",  // Replace with actual publish date
  new Date().toISOString()  // Current date as last modified
);

const trainerSchema = generatePersonalTrainerSchema();

// Generate metadata for this page
export function generateMetadata(): Metadata {
  return {
    title: "Paul Apostol - Antrenor Personal & Specialist în Nutriție",
    description: "Ghidul tău personalizat către o viață sănătoasă și activă. Transformă-ți corpul și obiceiurile cu planuri de nutriție și antrenamente adaptate nevoilor tale.",
    openGraph: {
      images: ["/paul_apostol_logo_white.png"],
    }
  };
}

export default function Home() {
  return (
    <>
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Script
        id="trainer-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trainerSchema) }}
      />
      <Header />
      <Hero />
      <Section id="despre" title="Cine sunt și cu ce te pot ajuta?" bg="#1a1a1a">
        <div className="flex flex-col md:flex-row items-center gap-8">
          
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              Mă numesc Apostol Paul și, din 2019, îndrum femei și bărbați în procesul de slăbire, dezvoltare musculară și adoptare a unui stil de viață sănătos, indiferent dacă aleg să se antreneze în sala de fitness sau nu.
            </p>
            <p className="text-lg mb-4">
              Am descoperit fitnessul în 2014, când nemulțumirea față de propriul corp m-a determinat să fac o schimbare. Primele luni de antrenament au fost o provocare, dar progresul vizibil și transformarea prin care am trecut m-au motivat să continui. Cu timpul, sportul a devenit mai mult decât o simplă activitate – o parte esențială a vieții mele. Odată cu experiența acumulată, tot mai mulți prieteni mi-au cerut sfaturi pentru a-și îmbunătăți forma fizică, iar în acel moment am realizat că acesta este drumul pe care vreau să merg.
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

      <Section id="experienta" title="Experiența mea" bg="#050505">
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

      <Section id="transformari" title="Transformări" bg="#1a1a1a">
        <TransformationGallery />
      </Section>

      <Section id="slabire-sanatoasa" title="Tot ce trebuie să știi pentru a slăbi sănătos" bg="#050505">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-6 rounded-lg border border-zinc-800 shadow-lg relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-red-600 opacity-5 rounded-full blur-2xl"></div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-5 w-1 bg-red-600 rounded-full"></div>
              <h3 className="text-xl font-bold text-white">1. Necesarul caloric</h3>
            </div>
            <p className="text-zinc-300 relative z-10">Cantitatea totală de calorii necesare zilnic pentru menținerea funcțiilor vitale și susținerea activității fizice.</p>
          </div>
          <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-6 rounded-lg border border-zinc-800 shadow-lg relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-red-600 opacity-5 rounded-full blur-2xl"></div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-5 w-1 bg-red-600 rounded-full"></div>
              <h3 className="text-xl font-bold text-white">2. Deficitul caloric</h3>
            </div>
            <p className="text-zinc-300 relative z-10">Reducerea aportului caloric sub necesarul zilnic pentru a determina corpul să utilizeze rezervele de grăsime.</p>
          </div>
          <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-6 rounded-lg border border-zinc-800 shadow-lg relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-red-600 opacity-5 rounded-full blur-2xl"></div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-5 w-1 bg-red-600 rounded-full"></div>
              <h3 className="text-xl font-bold text-white">3. Calitatea alimentelor</h3>
            </div>
            <p className="text-zinc-300 relative z-10">Alegerea alimentelor nutritive și echilibrate pentru a asigura sănătatea și energia necesară în procesul de slăbire.</p>
          </div>
        </div>
        <CalorieCalculator />
      </Section>

      <Section id="beneficii" title="Beneficiile Sportului" bg="#1a1a1a">
        <ul className="space-y-4 text-lg">
          <li>✓ Întărește sistemul cardiovascular</li>
          <li>✓ Crește forța musculară</li>
          <li>✓ Îmbunătățește flexibilitatea</li>
          <li>✓ Eliberează endorfine, reducând stresul și anxietatea</li>
          <li>✓ Îmbunătățește starea de spirit și calitatea somnului</li>
          <li>✓ Promovează disciplina, spiritul de echipă și perseverența</li>
        </ul>
      </Section>

      <Section id="odihna" title="Odihna și Recuperarea" bg="#050505">
        <ul className="space-y-4 text-lg">
          <li>✓ Esențiale pentru sănătate: Odihna și recuperarea sunt la fel de importante ca și antrenamentele.</li>
          <li>✓ Refacerea mușchilor: După exerciții intense, corpul are nevoie de timp pentru a-și reface mușchii și pentru a preveni accidentările.</li>
          <li>✓ Somn adecvat: Adulții ar trebui să doarmă între 7 și 9 ore pe noapte pentru a funcționa bine.</li>
          <li>✓ Concentrare mentală: Somnul joacă un rol vital în funcția cognitivă, inclusiv în concentrare, atenție și luarea deciziilor.</li>
        </ul>
      </Section>

      <Section id="testimoniale" title="Testimoniale" bg="#1a1a1a">
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

      {/* <Pricing /> */}

      <Section id="contact" title="Care sunt următorii pași?" bg="#1a1a1a">
        <p className="text-lg mb-6">
          Principiile de mai sus sunt doar o mică parte din ceea ce aplic și eu cu toți cei care aleg să colaboreze cu mine.
        </p>
        <p className="text-lg mb-6">
          Dacă îți dorești și tu să slăbești sau să pui masă musculară, <span className="uppercase text-red-500 font-bold">fără</span> să:
        </p>
        <ul className="list-disc list-inside mb-6 text-lg">
          <li>Te înfometezi</li>
          <li>Mănânci alimente care nu îți plac</li>
          <li>Faci cardio încontinuu și să nu vezi nici un rezultat</li>
          <li>Simți că stai la același nivel</li>
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
