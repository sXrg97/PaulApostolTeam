import { FAQ_ITEMS } from "./faq";
import {
  LOGO_IMAGE,
  PHONE_E164,
  PORTRAIT_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  SOCIAL_LINKS,
} from "./site";

const ids = {
  person: `${SITE_URL}/#paul`,
  business: `${SITE_URL}/#business`,
  website: `${SITE_URL}/#website`,
  webpage: `${SITE_URL}/#webpage`,
  faq: `${SITE_URL}/#faq`,
};

const sameAs = SOCIAL_LINKS.map((link) => link.href);
const portraitUrl = `${SITE_URL}${PORTRAIT_IMAGE}`;

/**
 * Un singur @graph pentru pagina principală. Fără oferte, prețuri, program sau recenzii:
 * includem doar informații care apar și pe site.
 */
export function buildHomeGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": ids.person,
        name: SITE_NAME,
        jobTitle: "Antrenor personal",
        url: SITE_URL,
        image: portraitUrl,
        telephone: PHONE_E164,
        sameAs,
        worksFor: { "@id": ids.business },
        knowsAbout: ["Antrenament personal", "Slăbire", "Masă musculară", "Plan alimentar", "Fitness"],
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": ids.business,
        name: `${SITE_NAME}, antrenor personal`,
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        image: portraitUrl,
        logo: `${SITE_URL}${LOGO_IMAGE}`,
        telephone: PHONE_E164,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Timișoara",
          addressRegion: "Timiș",
          addressCountry: "RO",
        },
        areaServed: { "@type": "City", name: "Timișoara" },
        founder: { "@id": ids.person },
        sameAs,
      },
      {
        "@type": "WebSite",
        "@id": ids.website,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "ro-RO",
        publisher: { "@id": ids.business },
      },
      {
        "@type": "WebPage",
        "@id": ids.webpage,
        url: SITE_URL,
        name: SITE_TITLE,
        description: SITE_DESCRIPTION,
        inLanguage: "ro-RO",
        isPartOf: { "@id": ids.website },
        about: { "@id": ids.business },
        primaryImageOfPage: { "@type": "ImageObject", url: portraitUrl },
      },
      {
        "@type": "FAQPage",
        "@id": ids.faq,
        url: SITE_URL,
        inLanguage: "ro-RO",
        isPartOf: { "@id": ids.website },
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
}
