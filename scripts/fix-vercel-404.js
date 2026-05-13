import fs from 'fs';
import path from 'path';

const distDir = path.join(process.cwd(), 'dist');
const clientDir = path.join(distDir, 'client');
const assetsDir = path.join(clientDir, 'assets');

if (!fs.existsSync(clientDir)) {
  console.error('dist/client not found');
  process.exit(1);
}

const files = fs.readdirSync(assetsDir);
const jsFile = files.find(f => f.startsWith('index-') && f.endsWith('.js') && fs.readFileSync(path.join(assetsDir, f), 'utf8').includes('render'));
const cssFile = files.find(f => f.endsWith('.css'));

if (!jsFile || !cssFile) {
  console.error('Could not find JS or CSS entry points');
  process.exit(1);
}

const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dhruv Iconic — Luxury Real Estate in Patna</title>
    <link rel="stylesheet" href="/assets/${cssFile}">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/${jsFile}"></script>
  </body>
</html>`;

// Write index.html to dist/
fs.writeFileSync(path.join(distDir, 'index.html'), htmlContent);

// Move assets from dist/client/assets to dist/assets
const targetAssetsDir = path.join(distDir, 'assets');
if (!fs.existsSync(targetAssetsDir)) {
  fs.mkdirSync(targetAssetsDir);
}

files.forEach(f => {
  fs.copyFileSync(path.join(assetsDir, f), path.join(targetAssetsDir, f));
});

console.log('Successfully consolidated build output to dist/ with:', { jsFile, cssFile });
