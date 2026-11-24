// Transformările din galerie. Fotografiile sunt publicate cu acordul clienților.

export type Transformation = {
  name: string;
  image: string;
  width: number;
  height: number;
  description: string;
  before?: number;
  after?: number;
  loss?: number;
  /**
   * Poziția (0..1) la care imaginea compusă se împarte în ÎNAINTE (stânga) și DUPĂ (dreapta).
   * Doar pentru imaginile cu două jumătăți egale se afișează sliderul de comparație.
   */
  split?: number;
};

export const TRANSFORMATIONS: Transformation[] = [
  {
    name: "Paul",
    before: 120,
    after: 80,
    image: "/paul_slim.jpg",
    width: 438,
    height: 504,
    description:
      "Paul a început acest proces la 120 kg, hotărât să își schimbe viața fără antrenamente, doar prin nutriție și reguli simple. I-am creat un plan alimentar echilibrat, bazat pe deficit caloric, ore de masă regulate, hidratare optimă și mai multă mișcare în viața de zi cu zi. Primele săptămâni au fost dificile, dar progresul l-a motivat să continue. Cu disciplină și consecvență, a ajuns la 80 kg, transformându-și complet stilul de viață. Fără antrenamente, doar prin alegeri corecte și perseverență, Paul a demonstrat că schimbarea este posibilă oricând.",
  },
  {
    name: "Rabia",
    loss: 10,
    image: "/rabia_slim.jpg",
    width: 355,
    height: 333,
    description:
      "Rabia a început antrenamentele 1 la 1 cu obiectivul clar de a slăbi și de a-și îmbunătăți compoziția corporală. În primele două luni, printr-un program bine structurat de antrenament și un plan alimentar echilibrat, a reușit să scadă 10 kg și să își tonifieze corpul.",
  },
  {
    name: "Lavinia",
    before: 75,
    after: 55,
    image: "/lavinia_slim.jpg",
    width: 1080,
    height: 1080,
    split: 0.5,
    description:
      "Prin muncă și perseverență, Lavinia a reușit să ajungă de la 75 kg la 55 kg, atingând astfel obiectivul dorit. Această schimbare nu este doar despre kilogramele pierdute, ci despre un stil de viață mai sănătos și mai echilibrat.",
  },
  {
    name: "Eduard",
    before: 85,
    after: 65,
    image: "/eduard_slim.jpg",
    width: 1137,
    height: 2048,
    description:
      "Prin consecvență și determinare, Eduard a reușit să slăbească 20 kg și să își îmbunătățească stilul de viață. Progresul lui demonstrează că, alături de un plan bine structurat și susținere, orice obiectiv poate fi atins.",
  },
  {
    name: "Daiana",
    loss: 15,
    image: "/daiana_slim.jpg",
    width: 1290,
    height: 1289,
    split: 0.5,
    description:
      "Cu perseverență și un program adaptat nevoilor ei, Daiana a reușit să dea jos 15 kg după sarcină și să revină în formă. Această transformare arată că, indiferent de provocări, cu un plan bine structurat și susținere, orice obiectiv poate fi atins.",
  },
];

export function kgLost(t: Transformation): number {
  if (t.before !== undefined && t.after !== undefined) return t.before - t.after;
  return t.loss ?? 0;
}

export function resultLabel(t: Transformation): string {
  if (t.before !== undefined && t.after !== undefined) return `De la ${t.before} kg la ${t.after} kg`;
  return `-${t.loss} kg`;
}

export function transformationAlt(t: Transformation): string {
  if (t.before !== undefined && t.after !== undefined) {
    return `Transformare ${t.name}: de la ${t.before} kg la ${t.after} kg`;
  }
  return `Transformare ${t.name}: ${t.loss} kg slăbite`;
}

export const TOTAL_KG_LOST = TRANSFORMATIONS.reduce((sum, t) => sum + kgLost(t), 0);
