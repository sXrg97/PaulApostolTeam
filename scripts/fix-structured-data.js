/**
 * This script provides recommendations for fixing structured data
 * Run with: node scripts/fix-structured-data.js
 */

console.log('Structured Data Troubleshooting Guide:');
console.log('=====================================\n');

console.log('1. Verify Script Implementation:');
console.log('   - Check the page source (View Source) to ensure JSON-LD scripts appear in the HTML');
console.log('   - Your scripts should be in the <head> section with type="application/ld+json"');
console.log('\n2. Common Schema Validation Issues:');
console.log('   - Try using the specific schema types recognized by Google:');
console.log('     * "Person" instead of "Organization" for personal trainers');
console.log('     * Use "LocalBusiness" with "healthAndBeautyBusiness" more specific type');
console.log('     * For services, make sure "offers" are properly structured');
console.log('\n3. URL for Testing:');
console.log('   - Use https://validator.schema.org/ for detailed validation');
console.log('   - Use https://search.google.com/test/rich-results for Google-specific validation');
console.log('\n4. Fix Examples:');
console.log('   Example 1: For personal trainer, use:');
console.log(`
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness", 
  "name": "Paul Apostol",
  "image": "https://paulapostol.ro/paul.png",
  "@id": "https://paulapostol.ro/#person",
  "url": "https://paulapostol.ro",
  "telephone": "+40757497530",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "RO"
  },
  "geo": {
    "@type": "GeoCoordinates"
  },
  "sameAs": [
    "https://www.facebook.com/ApostolPaul1996",
    "https://www.instagram.com/paulapostol_pt/",
    "https://www.tiktok.com/@antrenorpaulapostol"
  ] 
}
`);

console.log('\n   Example 2: For fitness service:');
console.log(`
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Fitness Training",
  "provider": {
    "@type": "Person",
    "@id": "https://paulapostol.ro/#person"
  },
  "offers": {
    "@type": "Offer",
    "price": "500.00",
    "priceCurrency": "RON"
  }
}
`);

console.log('\n5. Next Steps:');
console.log('   - Update your schemas based on these examples');
console.log('   - Ensure @id properties are used for referencing between schemas');
console.log('   - Test with the Rich Results Test tool after deployment'); 