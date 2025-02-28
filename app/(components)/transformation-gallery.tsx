import Image from "next/image";

export const TransformationGallery = () => {
    const transformations = [
      { name: 'Paul', before: 120, after: 80, image: '/paul_slim.jpg', description: 'Paul a început acest proces la 120 kg, hotărât să își schimbe viața fără antrenamente, doar prin nutriție și reguli simple. I-am creat un plan alimentar echilibrat, bazat pe deficit caloric, ore de masă regulate, hidratare optimă și mai multă mișcare în viața de zi cu zi. Primele săptămâni au fost dificile, dar progresul l-a motivat să continue. Cu disciplină și consecvență, a ajuns la 80 kg, transformându-și complet stilul de viață. Fără antrenamente, doar prin alegeri corecte și perseverență, Paul a demonstrat că schimbarea este posibilă oricând.' },
      { name: 'Rabia', loss: 10, image: '/rabia_slim.jpg', description: 'Rabia a început antrenamentele 1 la 1 cu obiectivul clar de a slăbi și de a-și îmbunătăți compoziția corporală. În doar două luni, printr-un program bine structurat de antrenament și un plan alimentar echilibrat, a reușit să scadă 10 kg și să își tonifieze corpul.' },
      { name: 'Lavinia', loss: 20, image: '/lavinia_slim.jpg', description: 'Prin muncă și perseverență, Lavinia a reușit să ajungă de la 75 kg la 55 kg, atingând astfel obiectivul dorit. Această schimbare nu este doar despre kilogramele pierdute, ci despre un stil de viață mai sănătos și mai echilibrat.' },
      { name: 'Eduard', loss: 20, image: '/eduard_slim.jpg', description: 'Prin consecvență și determinare, Eduard a reușit să slăbească 20 kg și să își îmbunătățească stilul de viață. Progresul lui demonstrează că, alături de un plan bine structurat și susținere, orice obiectiv poate fi atins.' },
      { name: 'Daiana', loss: 15, image: '/daiana_slim.jpg', description: 'Cu perseverență și un program adaptat nevoilor ei, Daiana a reușit să dea jos 15 kg după sarcină și să revină în formă. Această transformare arată că, indiferent de provocări, cu un plan bine structurat și susținere, orice obiectiv poate fi atins.' },
      // Add more transformations as needed
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {transformations.map((transformation, index) => (
          <div key={index} className="bg-black p-6 rounded-lg">
            <Image 
              src={transformation.image || "/placeholder.svg"} 
              alt={`Transformare ${transformation.name}`} 
              className="w-full aspect-square object-cover mb-4 rounded"
              height={500}
              width={500}
            />
            <h3 className="text-xl font-bold mb-2">{transformation.name}</h3>
            {transformation.before && transformation.after ? (
              <p>A ajuns de la {transformation.before} kg la {transformation.after} kg</p>
            ) : (
              <p>A dat jos {transformation.loss} kg în prima lună!</p>
            )}
            <p>{transformation.description}</p>
          </div>
        ))}
      </div>
    );
  };