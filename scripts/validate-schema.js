/**
 * Validează datele structurate (JSON-LD) din HTML-ul generat, fără interacțiune.
 *
 * Utilizare:
 *   node scripts/validate-schema.js                      (citește .next/server/app/index.html după `npm run build`)
 *   node scripts/validate-schema.js http://localhost:3000 (citește pagina de pe un server pornit)
 *   node scripts/validate-schema.js cale/catre/pagina.html
 *
 * Verifică: JSON-ul se parsează, @id-urile referite există în @graph, câmpurile obligatorii,
 * lipsa câmpurilor nedorite (prețuri, oferte, program, recenzii) și scrierea „Timișoara” cu diacritice.
 * Ieșire cu cod 1 dacă există erori.
 */
const fs = require('fs');
const path = require('path');

async function loadHtml(source) {
  if (/^https?:\/\//.test(source)) {
    const res = await fetch(source);
    if (!res.ok) throw new Error(`HTTP ${res.status} pentru ${source}`);
    return res.text();
  }
  return fs.readFileSync(source, 'utf8');
}

const FORBIDDEN_KEYS = [
  'offers',
  'makesOffer',
  'priceRange',
  'openingHours',
  'openingHoursSpecification',
  'review',
  'aggregateRating',
];

const REQUIRED = {
  Person: ['name', 'url'],
  LocalBusiness: ['name', 'address', 'telephone', 'url'],
  WebSite: ['url', 'name'],
  WebPage: ['url', 'name', 'isPartOf'],
  FAQPage: ['mainEntity'],
};

function walk(value, visit, trail = []) {
  if (Array.isArray(value)) {
    value.forEach((item, i) => walk(item, visit, [...trail, i]));
  } else if (value && typeof value === 'object') {
    visit(value, trail);
    for (const [key, child] of Object.entries(value)) walk(child, visit, [...trail, key]);
  }
}

async function main() {
  const source = process.argv[2] || path.join(process.cwd(), '.next', 'server', 'app', 'index.html');
  const html = await loadHtml(source);
  const errors = [];
  const blocks = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);

  if (blocks.length === 0) errors.push('Nu am găsit niciun bloc application/ld+json.');

  const nodes = [];
  blocks.forEach((raw, index) => {
    try {
      const data = JSON.parse(raw);
      const list = Array.isArray(data['@graph']) ? data['@graph'] : [data];
      nodes.push(...list);
    } catch (err) {
      errors.push(`Blocul JSON-LD #${index + 1} nu se parsează: ${err.message}`);
    }
  });

  const definedIds = new Set(nodes.map((n) => n['@id']).filter(Boolean));

  for (const node of nodes) {
    const types = [].concat(node['@type'] || []);
    const label = `${types.join('/') || 'fără @type'} ${node['@id'] || ''}`.trim();
    if (types.length === 0) errors.push(`Nod fără @type: ${JSON.stringify(node).slice(0, 80)}`);

    for (const type of types) {
      for (const field of REQUIRED[type] || []) {
        if (node[field] === undefined) errors.push(`${label}: lipsește câmpul obligatoriu "${field}"`);
      }
    }

    if (types.includes('FAQPage')) {
      (node.mainEntity || []).forEach((q, i) => {
        if (q['@type'] !== 'Question' || !q.name || !q.acceptedAnswer || !q.acceptedAnswer.text) {
          errors.push(`${label}: întrebarea #${i + 1} nu are name/acceptedAnswer.text`);
        }
      });
    }

    walk(node, (obj, trail) => {
      for (const key of FORBIDDEN_KEYS) {
        if (key in obj) errors.push(`${label}: câmp nepermis "${key}" la ${trail.join('.') || 'rădăcină'}`);
      }
      const keys = Object.keys(obj);
      if (keys.length === 1 && keys[0] === '@id' && !definedIds.has(obj['@id'])) {
        errors.push(`${label}: referința ${obj['@id']} nu există în @graph`);
      }
    });
  }

  const allText = JSON.stringify(nodes);
  if (/Timisoara/.test(allText)) errors.push('Apare "Timisoara" fără diacritice.');

  console.log(`Sursă: ${source}`);
  console.log(`Blocuri JSON-LD: ${blocks.length}, noduri: ${nodes.length}`);
  nodes.forEach((n) => console.log(`  - ${[].concat(n['@type']).join('/')} ${n['@id'] || ''}`));

  if (errors.length) {
    console.error(`\n${errors.length} erori:`);
    errors.forEach((e) => console.error(`  x ${e}`));
    process.exit(1);
  }
  console.log('\nOK: datele structurate sunt valide.');
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
