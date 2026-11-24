import Image from "next/image";
import { ArrowRight, Check, ChevronDown, FileDown, FileText, Moon, Activity } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Header } from "./(components)/(header)/header";
import { Hero } from "./(components)/(header)/hero";
import { Section } from "./(components)/section";
import { StatsStrip } from "./(components)/stats-strip";
import { Testimonial } from "./(components)/testimonial";
import { ContactForm } from "./(components)/contact-form";
import { CalorieCalculator } from "./(components)/calorie-calculator";
import { TransformationGallery } from "./(components)/transformation-gallery";
import { Footer } from "./(components)/footer";
import { GoogleReviewCta } from "./(components)/google-review-cta";
import { Faq } from "./(components)/faq";
import { JsonLd } from "./(components)/json-ld";
import { RevealObserver } from "./(components)/reveal-observer";
import { StickyCta } from "./(components)/sticky-cta";
import { buildHomeGraph } from "./lib/structured-data";
import { EXTERNAL_LINK_PROPS, GUIDE_PDF, PORTRAIT_IMAGE, WHATSAPP_URL } from "./lib/site";
import { bodyText, btnArrow, btnPrimary, btnSecondary, card, cardHover, eyebrow } from "./lib/ui";

const experience = [
  "Antrenor personal din 2019",
  "Am lucrat cu oameni cu obiective și tipuri de corp foarte diferite",
  "Am văzut foarte multe tipuri de genetică",
  "Participare la Cupa României în competiții de fitness",
];

const basics = [
  {
    title: "Necesarul caloric",
    text: "Cantitatea totală de calorii necesare zilnic pentru menținerea funcțiilor vitale și susținerea activității fizice.",
  },
  {
    title: "Deficitul caloric",
    text: "Reducerea aportului caloric sub necesarul zilnic pentru a determina corpul să utilizeze rezervele de grăsime.",
  },
  {
    title: "Calitatea alimentelor",
    text: "Alegerea alimentelor nutritive și echilibrate pentru a asigura sănătatea și energia necesară în procesul de slăbire.",
  },
];

const sportBenefits = [
  "Întărește sistemul cardiovascular",
  "Crește forța musculară",
  "Îmbunătățește flexibilitatea",
  "Eliberează endorfine, reducând stresul și anxietatea",
  "Îmbunătățește starea de spirit și calitatea somnului",
  "Promovează disciplina, spiritul de echipă și perseverența",
];

const restItems = [
  { title: "Esențiale pentru sănătate", text: "Odihna și recuperarea sunt la fel de importante ca și antrenamentele." },
  {
    title: "Refacerea mușchilor",
    text: "După exerciții intense, corpul are nevoie de timp pentru a-și reface mușchii și pentru a preveni accidentările.",
  },
  { title: "Somn adecvat", text: "Adulții ar trebui să doarmă între 7 și 9 ore pe noapte pentru a funcționa bine." },
  {
    title: "Concentrare mentală",
    text: "Somnul joacă un rol vital în funcția cognitivă, inclusiv în concentrare, atenție și luarea deciziilor.",
  },
];

const guideContents = [
  "Cine sunt, parcursul meu și experiența din competițiile de fitness",
  "Transformări reale ale oamenilor cu care am lucrat",
  "Cum îți calculezi necesarul caloric, pas cu pas",
  "Beneficiile sportului, odihna și recuperarea",
  "Care sunt următorii pași dacă vrei să lucrăm împreună",
];

const withoutList = [
  "Te înfometezi",
  "Mănânci alimente care nu îți plac",
  "Faci cardio încontinuu și să nu vezi niciun rezultat",
  "Simți că stai la același nivel",
];

const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-3">
    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600/15 text-red-500">
      <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
    </span>
    <span>{children}</span>
  </li>
);

const detailsSummary =
  "flex cursor-pointer list-none items-center justify-between gap-4 p-6 md:p-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500";

export default function Home() {
  return (
    <>
      <JsonLd data={buildHomeGraph()} />
      <Header />
      <main>
        <Hero />
        <StatsStrip />

        {/* DESPRE + EXPERIENȚĂ */}
        <Section id="despre" eyebrow="Despre mine" title="Cine sunt și cu ce te pot ajuta?">
          <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
            <div data-reveal className="relative mx-auto w-full max-w-md md:order-1">
              <div className="absolute -left-3 -top-3 h-24 w-24 border-l-4 border-t-4 border-red-600" aria-hidden="true" />
              <Image
                src={PORTRAIT_IMAGE}
                alt="Paul Apostol, antrenor personal, în sala de fitness din Timișoara"
                width={1200}
                height={1800}
                sizes="(min-width: 768px) 448px, calc(100vw - 40px)"
                className="relative aspect-[2/3] w-full rounded-2xl object-cover object-top"
              />
            </div>
            <div data-reveal className={`${bodyText} space-y-5 md:order-2`}>
              <p className="text-xl leading-relaxed text-white md:text-2xl">
                Sunt Paul Apostol, antrenor personal în Timișoara. Din 2019 lucrez cu femei și bărbați care vor să slăbească,
                să pună masă musculară sau să aibă un stil de viață mai sănătos, la sală sau fără sală.
              </p>
              <p>
                Am descoperit fitnessul în 2014, când nemulțumirea față de propriul corp m-a determinat să fac o schimbare.
                Primele luni de antrenament au fost o provocare, dar progresul vizibil și transformarea prin care am trecut
                m-au motivat să continui. Cu timpul, sportul a devenit mai mult decât o simplă activitate, o parte esențială a
                vieții mele. Odată cu experiența acumulată, tot mai mulți prieteni mi-au cerut sfaturi pentru a-și îmbunătăți
                forma fizică, iar în acel moment am realizat că acesta este drumul pe care vreau să merg.
              </p>
            </div>
          </div>

          <div className="mt-20 grid items-center gap-12 md:mt-28 md:grid-cols-2 lg:gap-20">
            <div data-reveal>
              <span id="experienta" className="block scroll-mt-24" aria-hidden="true" />
              <p className={eyebrow}>Din 2019</p>
              <h3 className="mt-3 font-display text-3xl font-bold uppercase leading-none tracking-tight text-white md:text-5xl">
                Experiența mea
              </h3>
              <ul className={`${bodyText} mt-8 space-y-4`}>
                {experience.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
              <p className={`${bodyText} mt-6`}>
                Am trecut prin toate procesele: perioada de masă musculară, procesul de slăbit și perioada de revenire după
                concurs. Am înțeles toate stările unei persoane care dorește să slăbească.
              </p>
              <p className="mt-6 border-l-4 border-red-600 pl-4 font-display text-2xl font-bold uppercase italic leading-tight text-white md:text-3xl">
                Cel mai important aspect este că am trecut și eu prin toate.
              </p>
              <a href="#contact" className={`${btnPrimary} mt-10`}>
                Programează o consultație
                <ArrowRight className={btnArrow} aria-hidden="true" />
              </a>
            </div>
            <figure data-reveal className="relative mx-auto w-full max-w-md">
              <div className="absolute -bottom-3 -right-3 h-24 w-24 border-b-4 border-r-4 border-red-600" aria-hidden="true" />
              <Image
                src="/paul-apostol-cupa-romaniei-fitness.jpg"
                alt="Paul Apostol pe scenă la Cupa României, competiție de fitness"
                width={1000}
                height={1333}
                sizes="(min-width: 768px) 448px, calc(100vw - 40px)"
                className="relative aspect-[3/4] w-full rounded-2xl object-cover object-top"
              />
              <figcaption className="mt-3 text-sm text-zinc-500">Cupa României, competiție de fitness</figcaption>
            </figure>
          </div>
        </Section>

        {/* TRANSFORMĂRI */}
        <Section
          id="transformari"
          eyebrow="Rezultate reale"
          title="Transformări"
          tone="raised"
          intro="Oameni reali cu care am lucrat. Fotografiile sunt publicate cu acordul lor."
        >
          <TransformationGallery />
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-zinc-400">
            Rezultatele diferă de la o persoană la alta și depind de consecvență, alimentație și starea de sănătate.
          </p>
          <div data-reveal className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={WHATSAPP_URL} {...EXTERNAL_LINK_PROPS} className={btnPrimary}>
              <FaWhatsapp className="h-5 w-5 shrink-0" aria-hidden="true" />
              Vreau să încep și eu
            </a>
          </div>
        </Section>

        {/* TESTIMONIALE */}
        <Section id="testimoniale" eyebrow="Ce spun clienții" title="Testimoniale">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <Testimonial
              quote="Paul m-a ajutat să dau jos 40 de kg! Am ajuns de la 120 la 80 de kg. Sunt extrem de mulțumit de rezultate și de abordarea lui profesionistă."
              author="Alexandru M."
            />
            <Testimonial
              quote="Cu ajutorul lui Paul, am dat jos 10 kg în prima lună de colaborare! Programul personalizat și sfaturile lui au făcut toată diferența."
              author="Rabia C."
              delay={100}
            />
          </div>
          <GoogleReviewCta />
        </Section>

        {/* GHID GRATUIT */}
        <Section id="ghid" eyebrow="Ghid gratuit" title="Cum să ajungi la fizicul mult visat" tone="raised">
          <div className="grid items-start gap-12 md:grid-cols-[1.4fr_1fr] lg:gap-20">
            <div data-reveal>
              <p className={bodyText}>
                Ghidul meu gratuit, în format PDF (8 pagini), strânge într-un singur loc principiile de bază pentru a slăbi
                sănătos.
              </p>
              <ul className={`${bodyText} mt-8 space-y-4`}>
                {guideContents.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href={GUIDE_PDF} download className={btnPrimary}>
                  <FileDown className="h-5 w-5 shrink-0" aria-hidden="true" />
                  Descarcă ghidul (PDF)
                </a>
                <span className="text-sm text-zinc-400">Fără înregistrare, fără email.</span>
              </div>
            </div>

            <a
              href={GUIDE_PDF}
              download
              data-reveal
              aria-label="Descarcă ghidul gratuit în format PDF"
              className="group relative mx-auto block w-full max-w-sm"
            >
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-red-600/40" aria-hidden="true" />
              <div className="relative flex min-h-[22rem] flex-col justify-between gap-8 overflow-hidden md:aspect-[3/4] md:min-h-0 rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8 transition duration-300 motion-safe:md:group-hover:-translate-y-1 md:group-hover:border-red-600/50">
                <div className="absolute inset-y-0 left-0 w-2 bg-red-600" aria-hidden="true" />
                <div className="flex items-center justify-between">
                  <span className={eyebrow}>Ghid gratuit</span>
                  <FileText className="h-6 w-6 text-zinc-500" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-4xl font-extrabold uppercase italic leading-[0.9] text-white md:text-5xl">
                    Cum să ajungi la fizicul mult visat
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed text-zinc-400">
                    Ghidul tău despre cum să ajungi în cea mai bună formă din viața ta, scris de Paul Apostol, antrenor personal.
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-5 text-sm text-zinc-300">
                  <span>PDF · 8 pagini</span>
                  <span className="font-display text-lg font-bold uppercase italic text-white">Paul Apostol</span>
                </div>
              </div>
            </a>
          </div>
        </Section>

        {/* SLĂBIRE SĂNĂTOASĂ (include Beneficii și Odihnă) */}
        <Section id="slabire-sanatoasa" eyebrow="Principii de bază" title="Bazele unei slăbiri sănătoase">
          <ol className="grid gap-6 md:grid-cols-3">
            {basics.map((item, index) => (
              <li
                key={item.title}
                data-reveal
                style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
                className={`${card} ${cardHover}`}
              >
                <span className="font-display text-5xl font-extrabold italic leading-none text-red-600">0{index + 1}</span>
                <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-zinc-300">{item.text}</p>
              </li>
            ))}
          </ol>

          <div data-reveal className="mt-10">
            <CalorieCalculator />
          </div>

          <div className="mt-10 grid items-start gap-6 md:grid-cols-2">
            <details id="beneficii" data-reveal className={`${card} group scroll-mt-24 !p-0`}>
              <summary className={detailsSummary}>
                <span className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-600/15 text-red-500">
                    <Activity className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
                    Beneficiile sportului
                  </h3>
                </span>
                <ChevronDown className="h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
              </summary>
              <ul className="space-y-3 px-6 pb-8 text-zinc-300 md:px-8">
                {sportBenefits.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </details>

            <details id="odihna" data-reveal className={`${card} group scroll-mt-24 !p-0`}>
              <summary className={detailsSummary}>
                <span className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-600/15 text-red-500">
                    <Moon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
                    Odihna și recuperarea
                  </h3>
                </span>
                <ChevronDown className="h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
              </summary>
              <ul className="space-y-4 px-6 pb-8 text-zinc-300 md:px-8">
                {restItems.map((item) => (
                  <CheckItem key={item.title}>
                    <strong className="font-semibold text-white">{item.title}:</strong> {item.text}
                  </CheckItem>
                ))}
              </ul>
            </details>
          </div>
        </Section>

        {/* ÎNTREBĂRI FRECVENTE */}
        <Section id="intrebari" eyebrow="Întrebări frecvente" title="Ai întrebări?" tone="raised">
          <Faq />
        </Section>

        {/* CONTACT */}
        <Section id="contact" eyebrow="Contact" title="Care sunt următorii pași?">
          <div className="grid items-start gap-12 md:grid-cols-2 lg:gap-20">
            <div data-reveal className={`${bodyText} space-y-6`}>
              <p>
                Principiile de pe această pagină sunt doar o mică parte din ceea ce aplic și eu cu toți cei care aleg să
                colaboreze cu mine.
              </p>
              <p>
                Dacă îți dorești și tu să slăbești sau să pui masă musculară,{" "}
                <span className="font-bold uppercase text-red-500">fără</span> să:
              </p>
              <ul className="space-y-3">
                {withoutList.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[0.7em] h-0.5 w-4 shrink-0 bg-red-600" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Te invit să-mi trimiți un mesaj pe WhatsApp, unde vom discuta despre situația ta și vom concepe un plan
                personalizat împreună.
              </p>
              <a href={GUIDE_PDF} download className={btnSecondary}>
                <FileDown className="h-4 w-4 shrink-0" aria-hidden="true" />
                Descarcă mai întâi ghidul
              </a>
            </div>
            <div data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
              <ContactForm />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
      <StickyCta />
      <RevealObserver />
    </>
  );
}
