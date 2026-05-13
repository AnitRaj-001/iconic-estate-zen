import fs from 'fs';
import path from 'path';

const distDir = path.join(process.cwd(), 'dist');
const clientDir = path.join(distDir, 'client');
const serverFile = path.join(distDir, 'server', 'server.js');

if (!fs.existsSync(clientDir)) {
  console.error('dist/client not found');
  process.exit(1);
}

async function generate() {
  // 1. Get the latest assets
  const assetsDir = path.join(clientDir, 'assets');
  const files = fs.readdirSync(assetsDir);
  const jsFile = files.find(f => f.startsWith('index-') && f.endsWith('.js') && fs.readFileSync(path.join(assetsDir, f), 'utf8').includes('render'));
  const cssFile = files.find(f => f.endsWith('.css'));

  if (!jsFile || !cssFile) {
    console.error('Could not find JS or CSS entry points');
    process.exit(1);
  }

  // 2. Capture SSR HTML
  console.log('Capturing SSR HTML...');
  const { default: server } = await import('file://' + serverFile);
  const response = await server.fetch(new Request('http://localhost/'));
  let html = await response.text();

  // 3. Fix asset paths in the HTML
  // Replace the old JS/CSS hashes with the new ones found in the build
  // Note: We need to be careful with replacements to avoid breaking the structure
  
  // Find the old CSS path and replace it
  html = html.replace(/\/assets\/styles-[a-zA-Z0-9_-]+\.css/g, `/assets/${cssFile}`);
  
  // Find the old JS paths and replace them
  html = html.replace(/\/assets\/index-[a-zA-Z0-9_-]+\.js/g, `/assets/${jsFile}`);
  
  // Also fix any references in the serialized router state
  // (TanStack Start puts asset paths in the manifest)
  const escapedJsFile = jsFile.replace(/\./g, '\\.');
  html = html.replace(/\/assets\/index-[a-zA-Z0-9_-]+\.js/g, `/assets/${jsFile}`);

  // 4. Write index.html to dist/
  fs.writeFileSync(path.join(distDir, 'index.html'), html);

  // 5. Move ALL assets from dist/client/assets to dist/assets
  const targetAssetsDir = path.join(distDir, 'assets');
  if (!fs.existsSync(targetAssetsDir)) {
    fs.mkdirSync(targetAssetsDir);
  }

  files.forEach(f => {
    fs.copyFileSync(path.join(assetsDir, f), path.join(targetAssetsDir, f));
  });

  console.log('Successfully generated hydrated dist/index.html with:', { jsFile, cssFile });
}

generate().catch(console.error);
