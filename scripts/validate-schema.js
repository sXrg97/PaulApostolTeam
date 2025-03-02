const https = require('https');
const readline = require('readline');

// Simple script to test your structured data implementation using Google's Rich Results Test
// Run with: node scripts/validate-schema.js

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Get the URL to test from user input
rl.question('Enter the URL to test (e.g., https://paulapostol.ro): ', (url) => {
  console.log(`Testing structured data for: ${url}`);
  
  // Construct the request URL for Google's Rich Results Test
  const apiUrl = `https://search.google.com/test/rich-results?url=${encodeURIComponent(url)}`;
  
  console.log('\nPlease visit the following URL in your browser to test your structured data:');
  console.log(apiUrl);
  console.log('\nAlternative tools:');
  console.log('1. Schema.org Validator: https://validator.schema.org/');
  console.log('2. Google Search Console: https://search.google.com/search-console');
  
  rl.close();
}); 