const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// This script is for manually regenerating the sitemap
// You can run it with: node scripts/generate-sitemap.js

console.log('Generating sitemap...');

// Create the scripts directory if it doesn't exist
const scriptsDir = path.join(process.cwd(), 'scripts');
if (!fs.existsSync(scriptsDir)) {
  fs.mkdirSync(scriptsDir);
}

try {
  // This will trigger a Next.js build which will generate the sitemap
  // You can also use a more targeted approach if you have a large app
  execSync('next build', { stdio: 'inherit' });
  
  console.log('Sitemap generated successfully!');
  console.log('Your sitemap should be available at: https://yourdomain.com/sitemap.xml');
  console.log('Make sure to replace "yourdomain.com" with your actual domain');
} catch (error) {
  console.error('Error generating sitemap:', error);
  process.exit(1);
} 