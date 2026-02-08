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
  '@type': 'SportsActivityLocation',
  '@id': 'https://paulapostol.ro/#organization',
  'name': 'Paul Apostol',
  'url': 'https://paulapostol.ro',
  'logo': 'https://paulapostol.ro/paul_apostol_logo_white.png',
  'image': 'https://paulapostol.ro/paul.png',
  'description': 'Servicii specializate de antrenament personal și nutriție pentru slăbire, dezvoltare musculară și un stil de viață sănătos.',
  'address': {
    '@type': 'PostalAddress',
    'addressCountry': 'RO',
    'addressLocality': 'Timisoara',
    'addressRegion': 'Timis',
  },
  'sameAs': [
    'https://www.facebook.com/ApostolPaul1996',
    'https://www.instagram.com/paulapostol_pt/',
    'https://www.tiktok.com/@antrenorpaulapostol',
  ],
  'telephone': '+40757497530',
  'priceRange': '300-1000 RON',
  'openingHoursSpecification': [
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      'opens': '09:00',
      'closes': '18:00',
    }
  ]
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
    '@id': `${url}#webpage`,
    'isPartOf': {
      '@id': 'https://paulapostol.ro/#website'
    },
    'about': {
      '@id': 'https://paulapostol.ro/#business'
    },
    'name': title,
    'description': description,
    'url': url,
    'inLanguage': 'ro-RO',
    'mainEntity': {
      '@type': 'HealthAndBeautyBusiness',
      '@id': 'https://paulapostol.ro/#business',
      'name': 'Paul Apostol - Antrenament Personal',
      'image': 'https://paulapostol.ro/paul.png',
      'url': 'https://paulapostol.ro',
    },
    'primaryImageOfPage': {
      '@type': 'ImageObject',
      'url': imageUrl || 'https://paulapostol.ro/paul_apostol_logo_white.png'
    },
    ...(datePublished && { 'datePublished': datePublished }),
    ...(dateModified && { 'dateModified': dateModified }),
    'potentialAction': {
      '@type': 'ReadAction',
      'target': [url]
    }
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
      addressLocality: 'Timisoara', // Update with actual city
      addressRegion: 'Timis', // Update with actual region
      // postalCode: '010000', // Update with actual postal code
      addressCountry: 'RO',
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
    '@type': 'LocalBusiness',
    '@id': 'https://paulapostol.ro/#business',
    'name': 'Paul Apostol - Antrenor Personal',
    'image': 'https://paulapostol.ro/paul.png',
    'url': 'https://paulapostol.ro',
    'telephone': '+40757497530',
    'priceRange': '150-1000 RON',
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'RO'
    },
    'sameAs': [
      'https://www.facebook.com/ApostolPaul1996',
      'https://www.instagram.com/paulapostol_pt/',
      'https://www.tiktok.com/@antrenorpaulapostol',
    ],
    'makesOffer': [
      {
        '@type': 'Offer',
        'name': 'Antrenament 1 la 1 (Plată lunară)',
        'description': 'Program de antrenament personalizat în funcție de obiectivele tale (slăbire, creștere musculară, tonifiere)',
        'price': '1000.00',
        'priceCurrency': 'RON',
        'availability': 'https://schema.org/InStock',
        'url': 'https://paulapostol.ro/#servicii',
      },
      {
        '@type': 'Offer',
        'name': 'Ședință individuală (1 la 1)',
        'description': 'Perfect pentru cei care vor să testeze un antrenament personalizat înainte de a alege un abonament',
        'price': '150.00',
        'priceCurrency': 'RON',
        'availability': 'https://schema.org/InStock',
        'url': 'https://paulapostol.ro/#servicii',
      },
      {
        '@type': 'Offer',
        'name': 'Antrenament în grup (max. 3 persoane)',
        'description': 'Îmbină beneficiile antrenamentului personalizat cu energia unui grup mic',
        'price': '800.00',
        'priceCurrency': 'RON',
        'availability': 'https://schema.org/InStock',
        'url': 'https://paulapostol.ro/#servicii',
      },
      {
        '@type': 'Offer',
        'name': 'Antrenament 1 la 1 online',
        'description': 'Plan de antrenament personalizat, adaptat echipamentului disponibil acasă sau la sală',
        'price': '800.00',
        'priceCurrency': 'RON',
        'availability': 'https://schema.org/InStock',
        'url': 'https://paulapostol.ro/#servicii',
      },
      {
        '@type': 'Offer',
        'name': 'Online Coaching (plan personalizat + suport)',
        'description': 'Program personalizat creat în funcție de obiectivele tale și nivelul de experiență',
        'price': '500.00',
        'priceCurrency': 'RON',
        'availability': 'https://schema.org/InStock',
        'url': 'https://paulapostol.ro/#servicii',
      },
      {
        '@type': 'Offer',
        'name': 'Plan Nutrițional Personalizat',
        'description': 'Plan nutrițional adaptat nevoilor tale, creat special pentru obiectivele tale de slăbire, masă musculară, menținere sau sănătate',
        'price': '500.00',
        'priceCurrency': 'RON',
        'availability': 'https://schema.org/InStock',
        'url': 'https://paulapostol.ro/#servicii',
      }
    ]
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
