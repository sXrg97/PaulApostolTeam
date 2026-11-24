// Întrebările frecvente: aceeași sursă pentru secțiunea vizibilă și pentru schema FAQPage.

export type FaqItem = {
  question: string;
  answer: string;
  link?: { href: string; label: string };
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Unde ții antrenamentele?",
    answer:
      "Antrenamentele 1 la 1 au loc în Timișoara. Pentru detalii despre sală și programul disponibil, scrie-mi pe WhatsApp.",
    link: { href: "#contact", label: "Mergi la contact" },
  },
  {
    question: "Pot slăbi fără sală?",
    answer:
      "Da. Slăbirea pornește de la alimentație și de la deficitul caloric. Paul, unul dintre oamenii din galeria de transformări, a ajuns de la 120 kg la 80 kg fără antrenamente, doar prin nutriție și reguli simple.",
    link: { href: "#transformari", label: "Vezi transformările" },
  },
  {
    question: "Trebuie să țin o dietă strictă?",
    answer:
      "Nu. Nu trebuie să te înfometezi și nici să mănânci alimente care nu îți plac. Planul alimentar pornește de la necesarul tău caloric și de la alimentele care îți plac, ca să îl poți urma pe termen lung.",
  },
  {
    question: "Cum îmi calculez necesarul caloric?",
    answer:
      "Poți folosi calculatorul de pe această pagină, care estimează necesarul zilnic în funcție de gen, greutate, înălțime, vârstă și nivelul de activitate. Ghidul gratuit explică pas cu pas cum îți calculezi necesarul caloric.",
    link: { href: "#calculator", label: "Deschide calculatorul" },
  },
  {
    question: "Ce experiență ai?",
    answer:
      "Am descoperit fitnessul în 2014 și sunt antrenor personal din 2019. Am participat la Cupa României în competiții de fitness și am trecut și eu prin perioade de masă musculară, de slăbire și de revenire după concurs.",
  },
  {
    question: "Ghidul e gratuit?",
    answer:
      "Da. Ghidul este un PDF de 8 pagini pe care îl descarci direct de pe site, fără înregistrare.",
    link: { href: "#ghid", label: "Vezi ghidul" },
  },
];
