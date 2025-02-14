#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const requiredFiles = [
  // Configuration
  'package.json',
  'tsconfig.json',
  '.env.example',
  'tailwind.config.ts',
  
  // Client pages
  'client/src/pages/home-page.tsx',
  'client/src/pages/auth-page.tsx',
  'client/src/pages/dashboard.tsx',
  
  // Components
  'client/src/components/user-portfolio.tsx',
  'client/src/components/notification-bell.tsx',
  'client/src/components/bottom-nav.tsx',
  
  // Hooks and utils
  'client/src/hooks/use-auth.tsx',
  'client/src/lib/websocket.ts',
  
  // Server files
  'server/index.ts',
  'server/routes.ts',
  'server/storage.ts',
  
  // Static assets
  'js/app.js',
  'css/style.css'
];

console.log('Verifying project setup...\n');

const missingFiles = [];
const existingFiles = [];

requiredFiles.forEach(file => {
  if (fs.existsSync(path.join(process.cwd(), file))) {
    existingFiles.push(file);
  } else {
    missingFiles.push(file);
  }
});

console.log('Found files:');
existingFiles.forEach(file => console.log('✅', file));

if (missingFiles.length > 0) {
  console.log('\nMissing files:');
  missingFiles.forEach(file => console.log('❌', file));
  console.log('\nPlease ensure all required files are present before running the application.');
} else {
  console.log('\n✨ All required files are present!');
  console.log('\nYou can now:');
  console.log('1. Run `npm install` to install dependencies');
  console.log('2. Copy .env.example to .env and configure your environment');
  console.log('3. Start the server with `npm run dev`');
}
