# Kade — public marketing page

This folder is the public marketing site for **Kade** (කඩේ, means shop).

The POS, kitchen display, and owner dashboard still live in the rest of this repo (`project-pos`). This page does not change that app. Inside the staging till the chrome may still say Project POS; the public name on this page is Kade.

## Preview locally

From this folder:

```bash
# Open the file directly
xdg-open index.html
```

Or serve it with a tiny static server (avoids some `file://` quirks):

```bash
# from landing/
python3 -m http.server 4173
```

From the repo root:

```bash
python3 -m http.server 4173 --directory landing
```

Then open `http://localhost:4173`.

No build step. No React. HTML, CSS, and a few lines of JS for the mobile menu and entrance motion. Images live in `images/` and are referenced with relative `./images/...` paths.

## Future hosting

A Cloudflare Pages project named `kade` can point at this `landing/` directory (static, no build command). That project is not created here and this folder is not wired to the `project-pos` Wrangler config. Do not deploy this site by running the POS deploy scripts.
