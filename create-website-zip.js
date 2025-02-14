import archiver from 'archiver';
import fs from 'fs';
import path from 'path';

// Create output stream
const output = fs.createWriteStream('website_code.zip');
const archive = archiver('zip', {
  zlib: { level: 9 } // Maximum compression
});

output.on('close', () => {
  console.log('Website archive created successfully');
});

archive.on('error', (err) => {
  console.error('Error creating archive:', err);
});

// Pipe archive data to the file
archive.pipe(output);

// Add required files
archive.file('index.html', { name: 'index.html' });
archive.file('admin-page.html', { name: 'admin-page.html' });
archive.file('css/style.css', { name: 'css/style.css' });
archive.file('js/app.js', { name: 'js/app.js' });
archive.file('js/admin.js', { name: 'js/admin.js' });

// Add deployment instructions
const deploymentInstructions = `
# StockTrader Pro - Real-time Stock Trading Platform

## Quick Start
1. Extract all files maintaining the folder structure
2. Open index.html in your web browser
3. Login using credentials:
   - Regular user: demo/demo
   - Admin user: admin/admin

## Features
- Real-time stock price simulation
- Interactive heat map showing market performance
- Stock charts on home and watchlist pages
- Stock trading functionality (buy/sell) with:
  - Portfolio tracking with real-time updates
  - Trade requests requiring admin approval
- Account management with:
  - Deposit/withdraw money features
  - Balance updates after admin approval
- Admin panel features:
  - Trade approval system
  - Money transaction approval
  - Price/chart visibility toggle

## Notes
- This is a standalone version that works without a server
- Stock data is simulated and updates every 5 seconds
- User data is stored in browser's localStorage
- All trades and money transactions require admin approval
`;

archive.append(deploymentInstructions, { name: 'README.md' });

// Finalize the archive
archive.finalize();