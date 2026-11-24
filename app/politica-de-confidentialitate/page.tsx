import type { Metadata } from "next";
import { Header } from "../(components)/(header)/header";
import { Footer } from "../(components)/footer";
import { EXTERNAL_LINK_PROPS, PHONE_DISPLAY, SITE_NAME, SITE_TITLE, WHATSAPP_URL } from "../lib/site";
import { eyebrow } from "../lib/ui";

const title = "Politica de confidențialitate | Paul Apostol";
const description =
  "Cum sunt folosite datele tale pe paulapostol.ro: mesajele pe WhatsApp, fotografiile clienților, calculatorul caloric și statisticile de vizitare.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/politica-de-confidentialitate" },
  openGraph: {
    type: "article",
    locale: "ro_RO",
    url: "/politica-de-confidentialitate",
    siteName: SITE_NAME,
    title,
    description,
    // Setarea openGraph pe pagină înlocuiește imaginea moștenită, așa că o declarăm explicit.
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: SITE_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
};

// TODO owner: CUI/forma juridică (PFA, SRL etc.) și, dacă există, adresa sediului, pentru identificarea operatorului.

const h2 = "mt-12 font-display text-3xl font-bold uppercase tracking-wide text-white md:text-4xl";
const p = "mt-4 text-base leading-relaxed text-zinc-300 md:text-lg";
const ul = "mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-zinc-300 marker:text-red-500 md:text-lg";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="bg-[#050505] pb-24 pt-32 md:pt-40">
        <article className="mx-auto max-w-3xl px-5">
          <p className={eyebrow}>Informații legale</p>
          <h1 className="mt-4 font-display text-5xl font-extrabold uppercase italic leading-[0.9] text-white md:text-7xl">
            Politica de confidențialitate
          </h1>
          <div className="mt-6 h-1 w-12 rounded-full bg-red-600" aria-hidden="true" />

          <p className={p}>
            Această pagină explică ce date personale pot ajunge la mine când folosești site-ul paulapostol.ro sau când îmi
            scrii, de ce le folosesc și ce drepturi ai.
          </p>

          <h2 className={h2}>Cine este operatorul</h2>
          <p className={p}>
            Operatorul datelor este Paul Apostol, antrenor personal în Timișoara. Mă poți contacta pe WhatsApp la numărul{" "}
            <a href={WHATSAPP_URL} {...EXTERNAL_LINK_PROPS} className="whitespace-nowrap text-red-400 underline underline-offset-4 hover:text-red-300">
              {PHONE_DISPLAY}
            </a>
            .
          </p>

          <h2 className={h2}>Mesajele pe WhatsApp</h2>
          <p className={p}>
            Site-ul nu are formulare. Când apeși pe un buton de WhatsApp, se deschide aplicația WhatsApp, iar conversația are
            loc acolo. Folosesc numele, numărul de telefon și ce îmi scrii doar pentru a-ți răspunde și, dacă decidem să lucrăm
            împreună, pentru a-ți pregăti antrenamentele și planul alimentar.
          </p>
          <p className={p}>
            WhatsApp este un serviciu oferit de WhatsApp Ireland Limited (grupul Meta), care prelucrează datele conform propriei
            politici de confidențialitate.
          </p>

          <h2 className={h2}>Date despre sănătate</h2>
          <p className={p}>
            Pentru un plan potrivit, poți alege să îmi spui greutatea, înălțimea, vârsta, obiceiurile alimentare sau eventuale
            probleme de sănătate. Acestea sunt date sensibile (art. 9 din Regulamentul (UE) 2016/679, GDPR). Le folosesc doar
            dacă mi le trimiți tu, voluntar, iar trimiterea lor înseamnă consimțământul tău explicit pentru acest scop. Îți
            poți retrage consimțământul oricând, printr-un mesaj.
          </p>

          <h2 className={h2}>Fotografiile clienților</h2>
          <p className={p}>
            Fotografiile de tip înainte și după din secțiunea Transformări sunt publicate doar cu acordul persoanelor din ele.
            Oricine își poate retrage acordul printr-un mesaj, iar fotografia este scoasă de pe site.
          </p>

          <h2 className={h2}>Calculatorul de necesar caloric</h2>
          <p className={p}>
            Calculatorul funcționează doar în browserul tău. Valorile introduse nu sunt trimise și nu sunt salvate nicăieri.
          </p>

          <h2 className={h2}>Statistici de vizitare</h2>
          <p className={p}>
            Site-ul folosește Vercel Web Analytics și Vercel Speed Insights pentru a vedea, în mod agregat, câte vizite are și
            cât de repede se încarcă. Aceste servicii nu folosesc cookie-uri și nu îți identifică persoana.
          </p>

          <h2 className={h2}>Drepturile tale</h2>
          <p className={p}>Conform GDPR, ai dreptul:</p>
          <ul className={ul}>
            <li>să afli ce date am despre tine și să primești o copie;</li>
            <li>să ceri corectarea sau ștergerea lor;</li>
            <li>să ceri restricționarea prelucrării sau să te opui prelucrării;</li>
            <li>să primești datele într-un format ușor de transmis (portabilitate);</li>
            <li>să îți retragi consimțământul oricând, fără a afecta prelucrarea făcută înainte.</li>
          </ul>
          <p className={p}>
            Pentru oricare dintre acestea, scrie-mi pe WhatsApp. Dacă ești nemulțumit, poți depune o plângere la Autoritatea
            Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP),{" "}
            <a
              href="https://www.dataprotection.ro"
              {...EXTERNAL_LINK_PROPS}
              className="text-red-400 underline underline-offset-4 hover:text-red-300"
            >
              www.dataprotection.ro
            </a>
            .
          </p>

          <p className="mt-12 text-sm text-zinc-500">Ultima actualizare: noiembrie 2026.</p>
        </article>
      </main>
      <Footer />
    </>
  );
}
