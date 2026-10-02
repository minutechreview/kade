import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFile, stat } from 'node:fs/promises';
import vm from 'node:vm';
const root = new URL('../', import.meta.url);
const html = await readFile(new URL('index.html', root), 'utf8');
const script = await readFile(new URL('script.js', root), 'utf8');

test('every local image, stylesheet, script, and anchor destination exists', async () => {
  const ids = new Set(
    [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1])
  );
  for (const [, destination] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (destination.startsWith('#'))
      assert(ids.has(destination.slice(1)), `Missing anchor ${destination}`);
    else if (destination.startsWith('./'))
      assert(
        (await stat(new URL(destination, root))).isFile(),
        `Missing file ${destination}`
      );
    else
      assert(
        destination.startsWith('https://'),
        `Unexpected external scheme ${destination}`
      );
  }
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
  for (const tag of html.matchAll(/<img\b[^>]+>/g)) {
    assert.match(tag[0], /alt="[^"]+"/);
    assert.match(tag[0], /width="\d+"/);
    assert.match(tag[0], /height="\d+"/);
  }
});

test('links use the production account entry and publish domain, not a stale demo branch', () => {
  assert(html.includes('https://minutechreview.github.io/kade/'));
  assert(html.includes('https://project-pos.pages.dev/login?register=1'));
  assert(!html.includes('phase-8-auth'));
  assert(html.includes('illustrative café data'));
  assert.match(html, /not\s+automated\s+subscriptions/);
});

test('branding uses outlined supplied artwork and a locally licensed WOFF2 font', async () => {
  assert(!html.includes('class="brand-mark"'));
  for (const variant of ['primary', 'mono-espresso', 'mono-white']) {
    const asset = `brand/kade-lockup-horizontal-${variant}.svg`;
    assert(html.includes(asset));
    const artwork = await readFile(new URL(asset, root), 'utf8');
    assert(artwork.includes('<path'));
    assert(!artwork.includes('<text'));
  }
  const font = await readFile(new URL('brand/manrope.woff2', root));
  assert.equal(font.subarray(0, 4).toString(), 'wOF2');
  const license = await readFile(
    new URL('brand/Manrope-OFL.txt', root),
    'utf8'
  );
  assert(license.includes('SIL OPEN FONT LICENSE'));
});

test('mobile navigation supports open, Escape focus return, link close, focus departure and resize', () => {
  const handlers = new Map();
  const links = [{}, {}];
  const classes = new Set();
  let focused = false;
  let expanded = 'false';
  let breakpoint;
  const bind = (target, type, callback) =>
    handlers.set(`${target}:${type}`, callback);
  const toggle = {
    getAttribute: () => expanded,
    setAttribute: (_name, value) => {
      expanded = value;
    },
    focus: () => {
      focused = true;
    },
    addEventListener: (type, callback) => bind('toggle', type, callback),
  };
  const nav = {
    classList: {
      toggle: (name, on) => (on ? classes.add(name) : classes.delete(name)),
    },
    querySelectorAll: () =>
      links.map((_, i) => ({
        addEventListener: (type, callback) => bind(`link${i}`, type, callback),
      })),
    addEventListener: (type, callback) => bind('nav', type, callback),
    contains: (item) => links.includes(item),
  };
  const document = {
    getElementById: () => nav,
    querySelector: () => toggle,
    documentElement: { classList: { add: (name) => classes.add(name) } },
    addEventListener: (type, callback) => bind('document', type, callback),
  };
  vm.runInNewContext(script, {
    document,
    window: {
      matchMedia: () => ({
        matches: true,
        addEventListener: (_type, callback) => {
          breakpoint = callback;
        },
      }),
    },
  });
  assert(classes.has('nav-ready'));
  handlers.get('toggle:click')();
  assert.equal(expanded, 'true');
  assert(classes.has('is-open'));
  handlers.get('document:keydown')({ key: 'Escape' });
  assert.equal(expanded, 'false');
  assert(focused);
  handlers.get('toggle:click')();
  handlers.get('link0:click')();
  assert.equal(expanded, 'false');
  handlers.get('toggle:click')();
  handlers.get('nav:focusout')({ relatedTarget: {} });
  assert.equal(expanded, 'false');
  handlers.get('toggle:click')();
  breakpoint();
  assert.equal(expanded, 'false');
});

test('sample illustration sales and payment figures reconcile', async () => {
  const overview = await readFile(
    new URL('images/workspace-overview.svg', root),
    'utf8'
  );
  assert(overview.includes('KWD 103.500'));
  assert.equal(36 + 67.5, 103.5);
  assert.equal(
    [81.5, 94.75, 90.5, 105, 116.25, 136.75, 103.5].reduce(
      (sum, value) => sum + value,
      0
    ),
    728.25
  );
  for (const surface of ['overview', 'till', 'kitchen', 'reports', 'close']) {
    const svg = await readFile(
      new URL(`images/workspace-${surface}.svg`, root),
      'utf8'
    );
    assert(svg.includes('Fictional sample data'));
    assert(!svg.includes('<script'));
  }
});
