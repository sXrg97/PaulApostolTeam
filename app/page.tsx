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
            <Image 
              src="/bg-hero.png" 
              alt="Paul Apostol" 
              className="rounded-lg w-full h-auto object-cover shadow-lg"
              width={500}
              height={500}
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              Mă numesc Apostol Paul și încă din 2019 ajut atât femei cât și bărbați să slăbească și să își formeze obiceiuri sănătoase, cu sau fără antrenamente în sala de fitness.
            </p>
            <p className="text-lg mb-4">
              În 2014 din pricina complexelor corporale pe care le aveam, am început să mă antrenez iar după primul an de sala aveam cu 20 de kg în plus.
            </p>
            <p className="text-lg mb-4">
              După mai mulți ani de cochetare cu sala de fitness am hotărât că acesta este drumul meu, iar după mulți prieteni antrenați am decis că această este menirea mea în viață, mai exact să ajut oameni să se simtă bine în corpul lor.
            </p>
            <p className="text-lg mb-4">
              În 2019 am finalizat cursul de antrenor personal și am început să antrenez. În 2020 am finalizat încă un curs, de această dată de consultant nutriționist, iar în 2023 nivel 2 antrenor personal.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Experiența mea" bg="#050505">
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
        <div className="mt-8 text-center">
          <Link href={'#contact'} className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-bold">
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

      <Section id="contact" title="Care sunt următorii pași?" bg="#050505">
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
          Te invit să îmi lași un mesaj mai jos, unde vom evalua situația ta și vom face un plan de bătaie împreună.
        </p>
        <ContactForm />
      </Section>
      <Footer />
    </>
  );
}