import { Metadata } from 'next';

// Define a more specific type for JSON-LD values
type JsonLdValue = 
  | string 
  | number 
  | boolean 
  | null
  | { [key: string]: JsonLdValue }
  | JsonLdValue[];

// Base organization information
const organizationData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Paul Apostol',
  url: 'https://paulapostol.ro',
  logo: 'https://paulapostol.ro/paul_apostol_logo_white.png', // Update with your actual logo path
  sameAs: [
    // Add your social profiles here
    'https://www.facebook.com/ApostolPaul1996',
    'https://www.instagram.com/paulapostol_pt/',
    'https://www.tiktok.com/@antrenorpaulapostol',
  ],
};

// Generate WebPage structured data
export function generateWebPageSchema(
  title: string,
  description: string,
  url: string,
  imageUrl?: string,
  datePublished?: string,
  dateModified?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    ...(imageUrl && { image: imageUrl }),
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    publisher: {
      '@type': 'Organization',
      name: 'Paul Apostol',
      logo: {
        '@type': 'ImageObject',
        url: 'https://paulapostol.ro/paul_apostol_logo_white.png', // Update with your actual logo path
      },
    },
  };
}

// Generate LocalBusiness structured data (if applicable)
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Paul Apostol',
    image: 'https://paulapostol.ro/paul_apostol_logo_white.png', // Update with actual image
    address: {
      // '@type': 'PostalAddress',
      // streetAddress: '123 Main St', // Update with actual address
      // addressLocality: 'Bucharest', // Update with actual city
      // addressRegion: 'Bucharest', // Update with actual region
      // postalCode: '010000', // Update with actual postal code
      // addressCountry: 'RO',
    },
    geo: {
      // '@type': 'GeoCoordinates',
      // latitude: '44.4268', // Update with actual coordinates
      // longitude: '26.1025', // Update with actual coordinates
    },
    url: 'https://paulapostol.ro',
    telephone: '+40757497530', // Update with actual phone
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  };
}

// Generate Organization structured data
export function generateOrganizationSchema() {
  return organizationData;
}

// Generate PersonalTrainer structured data
export function generatePersonalTrainerSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Servicii de Antrenament Personal și Nutriție',
    serviceType: ['Antrenament Personal', 'Consultanță Nutriție', 'Program de Slăbire', 'Dezvoltare Musculară'],
    description: 'Servicii specializate de antrenament personal și nutriție pentru slăbire, dezvoltare musculară și un stil de viață sănătos.',
    provider: {
      '@type': 'Person',
      name: 'Paul Apostol',
      description: 'Antrenor personal și specialist în nutriție cu experiență din 2019 în ghidarea clienților spre obiectivele lor de fitness.',
      image: 'https://paulapostol.ro/paul.png', // Update with actual image
      jobTitle: 'Antrenor Personal & Specialist în Nutriție',
      url: 'https://paulapostol.ro',
      sameAs: [
        // Add your social profiles here if available
        'https://www.facebook.com/ApostolPaul1996',
        'https://www.instagram.com/paulapostol_pt/',
        'https://www.tiktok.com/@antrenorpaulapostol',
      ],
      areaServed: 'Romania',
    },
    areaServed: 'Romania',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicii Fitness și Nutriție',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Program de Slăbire',
            description: 'Program personalizat pentru pierderea în greutate, combinând antrenamente și un plan nutrițional adaptat.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dezvoltare Musculară',
            description: 'Program dedicat dezvoltării masei musculare și îmbunătățirii forței, cu antrenamente specifice și suport nutrițional.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Consultanță Nutrițională',
            description: 'Servicii de consultanță pentru nutriție echilibrată și sănătoasă, adaptate stilului tău de viață.',
          },
        },
      ],
    },
  };
}

// Helper function to add JSON-LD to metadata
export function addJSONLD(jsonLd: Record<string, JsonLdValue>): Metadata {
  return {
    other: {
      'script:ld+json': JSON.stringify(jsonLd),
    },
  };
}

// Helper function to add multiple JSON-LD objects
export function addMultipleJSONLD(jsonLdArray: Record<string, JsonLdValue>[]): Metadata {
  return {
    other: {
      'script:ld+json': JSON.stringify(jsonLdArray),
    },
  };
} 