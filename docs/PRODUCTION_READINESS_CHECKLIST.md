# Amicable Tech Production Readiness Checklist

Audit date: 11 October 2026
Branch: `feat/amicable-tech-ui-redesign`

Status markers: `[x]` verified with evidence; `[ ]` incomplete or unverified; `[!]` blocked on information, external access, or a decision; `[-]` not applicable with explanation.

## A. Application integrity

- [x] Existing project architecture preserved. App Router, React, TypeScript, Tailwind and existing components remain in use; additions are routes and small components under `src/app`.
- [x] No unrelated user changes lost. Baseline showed pre-existing untracked `.mcp.json` and `design-reference/`; both were preserved.
- [x] No accidental secrets committed in reviewed source/config. Search covered app files and config for environment access and credentials; no secret values or `.env` files are referenced. This is not a scan of deployment settings.
- [x] Production build passes. `npm run build` completed successfully; output includes `/`, `/privacy-policy`, `/robots.txt`, and `/_not-found`.
- [x] TypeScript check passes: `npx tsc --noEmit` exited 0; Next build’s TypeScript phase also passed.
- [x] Lint passes: `npm run lint` exited 0.
- [-] Existing automated tests: no test script or test suite is present in `package.json` or repository files reviewed.
- [x] Route smoke tests passed from the built app: `/`, `/privacy-policy`, and `/robots.txt` returned 200; an unknown route returned 404. Browser console/client interaction checks remain unavailable.

## B. User experience

- [x] Hero/eyebrow and logo caption decoration reviewed. Removed the decorative horizontal prefixes from the hero label and caption in `src/app/page.tsx` / `src/app/globals.css`.
- [ ] Hero logo spacing and seven representative viewport layouts require browser verification; existing responsive CSS was reviewed.
- [ ] Mobile Services centering requires rendered viewport verification; existing single-column breakpoint and widths were reviewed in `src/app/globals.css`.
- [x] Contact destinations inspected in `src/app/page.tsx` and `src/app/site-content.ts`: Maps search, `tel:+2347018727534`, the existing WhatsApp destination, and `mailto:amicabletechempire@gmail.com` remain intact.
- [x] “Powered by EloTech Resources” added as restrained footer text; no unverified link was invented.
- [x] Sticky header configured in `src/app/globals.css`; anchor scroll padding is set. Browser scroll interaction still needs verification.
- [x] Mobile navigation uses semantic button/nav, `aria-expanded`, Escape handling, focus on open, outside pointer close, and closes after section links; browser interaction still needs verification.
- [x] Reduced-motion override exists in global CSS; back-to-top uses `auto` scrolling when reduced motion is requested.
- [x] Back-to-top control added in `src/app/back-to-top.tsx`, revealed after 640px with a 48px target and safe-area offsets.
- [ ] Responsive layouts at 320, 360, 390, 430, 768, 1024, and 1440px and horizontal overflow have not been visually inspected.
- [x] Primary business link values are unchanged in the source.

## C. Privacy and legal

- [x] Source audit for cookies, local/session storage, analytics, advertising tags, pixels, embeds, and consent tools completed with `rg`; none are present in application source. The source-only result cannot establish what a hosting platform injects.
- [x] Privacy Policy route added at `/privacy-policy` with a footer link; includes the actual website contact mechanisms, external-provider handoff, purpose, user caution, security wording, contact path, and update date.
- [!] Owner must confirm the business’s actual handling, sharing, retention/deletion process, hosting log practices, and request workflow before treating this draft as a complete operational notice.
- [x] Cookie banner decision documented: no non-essential tracking/cookie mechanism was found in source, so a consent banner would be misleading and unnecessary on current evidence. Re-audit before adding analytics, embeds, or other optional tracking.
- [-] Cookie preference controls/settings are not applicable to the current source because no optional cookies or tracking are implemented.
- [x] Third-party contact data flows identified at code level: visitor-selected WhatsApp, phone, email and Google Maps; hosting logs remain unknown pending deployment review.
- [!] Qualified Nigerian privacy/legal review is required to assess the real processing context and obligations under the Nigeria Data Protection Act 2023 and current NDPC guidance. No compliance certification is claimed.
- [-] Terms of Use page not added: current site is informational, has no accounts, checkout, booking, or on-site service contract. Reassess if transactional features or binding online terms are introduced.

## D. Security

- [x] Environment-variable usage reviewed; no environment variables are used by application source.
- [x] Client-visible secret scan completed for source/config; no credentials or API keys found.
- [x] External link targets reviewed; links opening a new tab use `rel="noopener noreferrer"`; no user-controlled URL rendering exists.
- [-] Enquiry form handling is not applicable: no form or backend endpoint exists. Contact links hand off to external apps/services.
- [x] Source review found no unsafe HTML rendering or personal-data logging.
- [x] Baseline headers configured in `next.config.ts`: `nosniff`, frame denial, strict-origin referrer policy, and disabled unused camera/microphone/geolocation permissions. CSP was not added because third-party navigation destinations and hosting behavior should be confirmed first.
- [!] `npm audit --omit=dev` reported 0 production vulnerabilities. Full `npm audit` found 5 high findings through the development-only chain `eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces@3.0.3`. The current GitHub advisory for GHSA-vfj7-8cjw-p6xm says versions through 3.0.3 are affected and no patched version is available. npm proposes `npm audit fix --force`, which would downgrade `eslint-config-next` to 14.2.35; that breaking change was not applied. Reassess when upstream publishes a safe fix or select a compatible maintained toolchain.
- [!] Hosting-level environment, TLS, deployment protection, logs, and any platform-injected scripts require access to the live hosting project.

## E. SEO and sharing

- [x] Existing title, description, Open Graph, Twitter card and brand icons inspected in `src/app/layout.tsx`; no fake structured data was introduced.
- [!] `metadataBase`, canonical URL, and absolute social image URLs require the owner to confirm the production domain. No domain was guessed.
- [x] `src/app/robots.ts` allows public crawling; no unintended noindex was found in source.
- [!] Sitemap not emitted because the production origin is unconfirmed; add a sitemap after the owner supplies/approves the canonical domain.
- [x] Route smoke tests verified homepage, privacy route, robots route and unknown-route 404. Internal anchor navigation still needs browser interaction testing.

## F. Accessibility

- [x] Semantic landmarks, heading structure, skip link, disclosure semantics (`details`/`summary`), mobile menu accessible state, and image alternatives reviewed in source.
- [x] Visible `:focus-visible` treatment and reduced-motion CSS exist in `src/app/globals.css`.
- [ ] Keyboard, screen-reader, contrast, zoom, target-size and reflow checks require manual browser/assistive-technology review.
- [ ] Automated accessibility scan was not run; no browser test harness is configured.
- [ ] Remaining manual accessibility checks: mobile menu focus/close behavior, full keyboard traversal, 200% zoom/reflow, and contrast sampling across rendered states.

## G. Performance

- [x] Local brand images use `next/image` with explicit dimensions; no remote image host or external font download appears in source.
- [x] Client-side code is limited to mobile navigation and back-to-top scroll visibility; scroll listeners are passive and cleaned up.
- [x] Scroll animation respects reduced-motion preference; no third-party scripts or repeated reveal observers are present.
- [ ] No browser performance or Core Web Vitals measurements were available; runtime metrics remain unmeasured.

## H. Deployment

- [x] Branch and initial Git status checked: target branch is checked out; `.mcp.json` and `design-reference/` were pre-existing untracked files and remain untouched.
- [x] Next/Vercel configuration reviewed: `package.json`, `next.config.ts`, `vercel.json`, and `package-lock.json`; Vercel framework is `nextjs` and build script is `next build --webpack`.
- [x] Production build passes; `npm run build` completed successfully.
- [!] Production origin/domain, environment settings (none required by source), Vercel project/aliases, DNS, TLS, and deployment protection require owner/platform access.
- [ ] Live deployment status was not verified; no deployment or push was performed.
- [!] Release blockers: owner confirmation of operational privacy practices, qualified legal review, approved production domain for canonical/sitemap metadata, live hosting configuration review, and resolution/acceptance of the vulnerable development-tool dependency chain.
