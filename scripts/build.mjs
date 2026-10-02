import { mkdir, readFile, writeFile } from 'node:fs/promises';
const source = new URL('../', import.meta.url);
const output = new URL('../dist/', import.meta.url);
const files = [
  'index.html',
  'styles.css',
  'script.js',
  'favicon.svg',
  ...[
    'kade-lockup-horizontal-primary.svg',
    'kade-lockup-horizontal-mono-espresso.svg',
    'kade-lockup-horizontal-mono-white.svg',
    'kade-symbol-espresso.svg',
    'kade-symbol-white.svg',
    'manrope.woff2',
    'Manrope-OFL.txt',
  ].map((name) => `brand/${name}`),
  ...['overview', 'till', 'kitchen', 'reports', 'close'].map(
    (name) => `images/workspace-${name}.svg`
  ),
];
for (const file of files) {
  const destination = new URL(file, output);
  await mkdir(new URL('.', destination), { recursive: true });
  await writeFile(destination, await readFile(new URL(file, source)));
}
console.log(
  `Built ${files.length} static files in dist/. No dependencies required.`
);
