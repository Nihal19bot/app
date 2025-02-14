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
archive.file('css/style.css', { name: 'css/style.css' });
archive.file('js/app.js', { name: 'js/app.js' });


// Add deployment instructions
const deploymentInstructions = `
# Website Setup Instructions

1. Extract all files from the zip archive
2. Maintain the folder structure:
   - index.html
   - css/style.css
   - js/app.js

3. Open index.html in a web browser to use the application

Note: This is a standalone website version with all functionality implemented in vanilla JavaScript.
`;

archive.append(deploymentInstructions, { name: 'README.md' });

// Finalize the archive
archive.finalize();