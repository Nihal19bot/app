import archiver from "archiver";
import fs from "fs";
import path from "path";

interface FileInfo {
  path: string;
  size: number;
}

function getAllFiles(dirPath: string, arrayOfFiles: FileInfo[] = []): FileInfo[] {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!fullPath.includes('node_modules') && 
          !fullPath.includes('.git') &&
          !fullPath.includes('.cache') &&
          !fullPath.includes('.replit') &&
          !fullPath.includes('.upm') &&
          !fullPath.includes('dist')) {
        arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
      }
    } else {
      // Include only web-related files, exclude mobile/native files
      if (!path.basename(fullPath).startsWith('.') && // Skip hidden files
          !fullPath.includes('tsconfig.tsbuildinfo') &&
          !fullPath.match(/\.(log|zip|sqlite|sqlite-journal)$/) &&
          !fullPath.includes('replit.nix') &&
          !fullPath.includes('android') &&
          !fullPath.includes('.native.') &&
          !fullPath.includes('BUILD_APK') &&
          !fullPath.includes('ANDROID_BUILD')) {
        arrayOfFiles.push({
          path: fullPath,
          size: fs.statSync(fullPath).size
        });
      }
    }
  });

  return arrayOfFiles;
}

export async function generateWebsiteZip(outputPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(outputPath);
    const archive = archiver('zip', {
      zlib: { level: 9 } // Maximum compression
    });

    output.on('close', () => {
      console.log(`Website archive created successfully: ${archive.pointer()} bytes`);
      resolve();
    });

    archive.on('error', (err) => {
      reject(err);
    });

    archive.pipe(output);

    // Essential web directories to include
    const requiredDirs = [
      'client',
      'server',
      'shared',
      'css',
      'js'
    ];

    // Get all files and sort them by size
    const allFiles = getAllFiles('.');
    const sortedFiles = allFiles.sort((a, b) => a.size - b.size);

    // Add files to archive in sorted order
    sortedFiles.forEach(file => {
      const relativePath = path.relative('.', file.path);
      if (requiredDirs.some(dir => relativePath.startsWith(dir)) || 
          path.dirname(relativePath) === '.') {
        archive.file(file.path, { name: relativePath });
      }
    });

    // Add essential root files explicitly
    const essentialRootFiles = [
      'package.json',
      'tsconfig.json',
      'vite.config.ts',
      'postcss.config.js',
      'tailwind.config.ts',
      'theme.json',
      'drizzle.config.ts',
      '.env.example'
    ];

    essentialRootFiles.forEach(file => {
      if (fs.existsSync(file)) {
        archive.file(file, { name: file });
      }
    });

    archive.finalize();
  });
}

// Generate the zip file
generateWebsiteZip('website_code.zip')
  .then(() => console.log('Website code zip file created successfully'))
  .catch(error => console.error('Error creating zip file:', error));
