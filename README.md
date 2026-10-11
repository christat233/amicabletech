# amicabletech

## Website

AMICABLE TECH's responsive single-page website is built with the Next.js App Router,
TypeScript, Tailwind CSS, npm, and ESLint. It includes service information, a three-step
enquiry process, FAQs, contact details, and WhatsApp links with contextual draft messages.

Tailwind uses its CSS-first PostCSS integration. The production build script selects
Next.js's supported Webpack backend because this workspace blocks Turbopack's CSS worker
from binding its local port.

### Brand tokens

The supplied logo was decoded as RGB pixels with the `sharp` decoder already present in
the temporary Next.js scaffold. Pixels with near-white values were excluded from colour
estimation. The green value below is the most frequent 8-level RGB quantized cluster in
the central green emblem; JPEG compression and the emblem's shading produce a range of
nearby samples, so this is a representative sampled colour rather than a source-vector
specification. The near-black is the most frequent 4-level RGB quantized dark neutral
cluster in the logo, excluding near-white pixels.

| Token | Value | Use |
| --- | --- | --- |
| Brand green | `#108840` | Sampled emblem green and primary accents |
| Brand green dark | `#0B6330` | Hover, active, link, and focus states |
| Brand near-black | `#141414` | Sampled dark wordmark cluster; headings and primary text |
| Surface | `#FFFFFF` | Cards and content surfaces |
| Muted surface | `#F7F9F7` | Page background |
| Border | `#DCE3DE` | Quiet dividers and outlines |
| Muted text | `#52605A` | Supporting text |

The sampled green has a 4.55:1 contrast ratio against white. The dark green has a 7.39:1
ratio against white. These meet WCAG AA contrast for normal text. Tokens, focus styling,
subtle shadow, and the radius scale are defined in `src/app/globals.css` as CSS custom
properties and exposed to Tailwind through its CSS-first `@theme` configuration. Dark
green is used for interactive text and primary buttons to retain clear contrast on white.

Global styles provide a mobile-first neutral baseline, readable line lengths, visible
keyboard focus, brief transitions, and a `prefers-reduced-motion` override. The logo
copy served by the site is `public/brand/amicable-tech-logo.jpeg`; the supplied source
remains in `logofolder/` unchanged.

The initial supplied asset inventory and SHA-256 hashes are recorded in
`docs/asset-integrity-baseline.txt`.
