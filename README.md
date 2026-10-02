# Kade marketing site

Public website for Kade, the browser POS and manager workspace for single-location cafés and small restaurants.

## Run locally

Node.js 18 or newer is sufficient; there are no install dependencies.

```sh
npm run lint
npm test
npm run build
npm start
```

Open http://127.0.0.1:5191. Set PORT to use another local port. The local server serves only dist, not repository/configuration files.

## Publishing

Verified on 2026-10-02 using the GitHub Pages API: https://minutechreview.github.io/kade/ is published from the main branch, repository root, using GitHub's legacy Pages build. There is no custom domain and no Actions publishing workflow in this repository. Publishing requires committing approved source changes to main; GitHub Pages then rebuilds the root. Release verification is recorded with the POS final product review; publishing requires a completed Pages build for the pushed commit.

The owner account and sign-in links point to https://project-pos.pages.dev/login. The signup option uses ?register=1. The previous staging demo links were removed to keep public actions on the production account entry. No form is submitted by this website.

## Product and visual accuracy

The public website uses the supplied KADE Brand Kit v1.0 identity: Rice #FFF7EA, Espresso #291F1B, Vermilion #E64B35, and Soft Peach #F2CDBA. The header uses the supplied primary outlined lockup; the footer uses espresso and the closing section uses white. Artwork is unmodified, with a 180px minimum lockup width and at least a quarter-symbol-height of clear space. Ordinary text and buttons use strong espresso/rice contrast; vermilion is decorative. The locally hosted variable Manrope font uses 400 body and 600 headings/labels; its supplied SIL OFL is included in brand/Manrope-OFL.txt. Navigation supports keyboard use, visible focus, a skip link, 44px minimum targets, and a usable no-JavaScript fallback. Reduced-motion and reduced-transparency preferences are supported; the small entrance fade is 200ms and logos remain static.

Five lightweight SVG illustrations show the current workspace structure with fictional Willow & Co. sample data; they are explicitly labeled as illustrative interfaces rather than customer screenshots. Their functional UI retains the approved forest workspace colors, while their headers use the supplied till symbol rather than the discarded K. Regenerate with `node scripts/generate-previews.mjs`. The older PNGs remain in source for history, but are not referenced or included in the distribution build.

Pricing remains indicative pilot pricing. The copy does not promise automated subscriptions, payment processing, offline startup, supplier order sending, or dedicated thermal printer compatibility. Ask is described as available where enabled and review-only. Exact service availability is confirmed during guided setup.

Static checks verify local destinations, image alternatives/dimensions, production links, keyboard navigation behavior, and illustration provenance. They do not replace rendered phone/tablet/desktop verification, print-device checks, or live account workflow testing.
