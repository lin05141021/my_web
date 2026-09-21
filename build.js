import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 [Build] Preparing Vite source index.html from index.dev.html...');
fs.copyFileSync('index.dev.html', 'index.html');

console.log('⚙️ [Build] Running vite build...');
execSync('npx vite build', { stdio: 'inherit' });

console.log('📦 [Build] Syncing dist output to root index.html, 404.html, and assets/...');
fs.copyFileSync('dist/index.html', 'index.html');
fs.copyFileSync('dist/index.html', '404.html');

if (!fs.existsSync('assets')) {
  fs.mkdirSync('assets', { recursive: true });
}
const assetFiles = fs.readdirSync('dist/assets');
for (const file of assetFiles) {
  fs.copyFileSync(path.join('dist/assets', file), path.join('assets', file));
}

console.log('✅ [Build] Successfully generated and synced production files!');
