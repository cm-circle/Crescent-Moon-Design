# Crescent Moon Design — Layout Improvement Plan

Current state: hero with eclipse animation → island nav → 3 service detail panels → case studies → process → automation → CTA → footer.

## Phase 1 — Hierarchy & Rhythm (highest impact, lowest risk)

1. **Section eyebrow consistency**
   - Standardize every section header: `[red uppercase tag]` + `[large display heading]` + optional right-side label (e.g. `Work / 2026`, `04`).
   - Currently service panels use inline-styled `.tag`, case studies use `.section__header` — unify into one `.section-head` component.

2. **Hero balance**
   - Moon is 58vw and pushes text to the far right edge. Cap moon at `min(52vw, 640px)`, tighten text column to a max-width with left padding so the headline block breathes.
   - The hero text currently overlaps awkwardly on mid-size screens (900–1200px). Give the text a fixed `max-width: 480px` and stop using `white-space: nowrap` on mobile only.

3. **Service detail rail spacing**
   - Sections are 100vh each — feels heavy. Reduce to `min-height: 85vh` and add a subtle divider (top border) between rails so the scroll-spy swap is readable.
   - Make the browser-frame previews consistent height (`min-height: 300px`) so visual weight doesn't jump between services.

4. **Case studies grid**
   - Two tall cards + one full-width card is uneven. Proposal:
     - Row 1: 2 cards (Social, SEO) — keep.
     - Row 2: full-width Web card — keep, but align body text with the visual (currently visual left, body right = good).
     - Add `gap: 2rem` and consistent `case-card__visual` height (240px).

## Phase 2 — Navigation & Wayfinding

5. **Header nav (right side)**
   - 6 links + brand is busy. Trim to: Web, Social, SEO & AI, Work, Contact + a compact `Start a project` button.
   - Make the header brand (moon+text) smaller on scroll — currently it's static; a 64px→40px shrink on scroll adds polish (CSS `scroll-behavior` class toggle).

6. **Island nav interaction**
   - Currently overlaps the header when both are visible (island-nav is `fixed top: 18px` while header is sticky). Move island-nav to `top: 72px` (below header) so they never collide.
   - Add `aria-current="true"` on the active item for a11y.

7. **Anchor targets**
   - All nav links (`#section-web` etc.) point to ids that no longer exist after the redesign (`#detail-web` is the new id). Fix every href in Header.astro + island-nav.

## Phase 3 — Content & Conversion

8. **Primary CTA placement**
   - "Start a Conversation" is the only CTA and it's buried at the bottom. Add a mid-page CTA strip after the service rail ("Not sure which service? Book a free 15-min audit →") to capture mid-scroll intent.

9. **Social proof strip**
   - Add a thin metrics bar under the hero: `+520% engagement · +340% organic traffic · 92 Lighthouse · 38 leads/mo`. Instantly communicates competence before the user scrolls.

10. **Case study field notes**
    - The "VIEW THE FIELD NOTES" links go to `/case-studies/<slug>` — verify all three slugs exist in the content collection (brookline-property, harrison-mcphee, holliston-ag). Fix the two broken-looking hrefs (brookline-property-group, harrison-mcphee-arboriculture).

## Phase 4 — Visual Polish

11. **Moon glow treatment**
    - Hero glow is radial red; service rail has no moon presence. Add a faint moon watermark (low-opacity, right side) behind the service rail for brand continuity.

12. **Typography scale**
    - Define a clear type ramp: `display 4rem / h2 2.5rem / h3 1.25rem / body 1rem / small 0.85rem` and apply via CSS variables. Current sizes are ad-hoc clamps.

13. **Dark-mode contrast pass**
    - `.service-detail__list li` at `rgba(255,255,255,0.05)` dividers are nearly invisible. Bump to 0.08–0.1. Muted text `#7a7585` on `#0b0b12` is borderline — verify against WCAG AA (needs ≥4.5:1 for body).

## Phase 5 — Performance & SEO

14. **Reduce motion & a11y**
    - `prefers-reduced-motion` already handled; add `:focus-visible` outlines to all nav links and buttons (currently missing).

15. **Hero image preload**
    - `nightsky.webp` is a full-screen fixed background — add `<link rel="preload" as="image">` to cut LCP.

16. **Lazy-load below-fold visuals**
    - Case card art (social/seo/web art divs) are pure CSS — free. The only real images are moon.webp (hero) — keep eager. No action needed beyond the above.

## Priority Order (suggested execution)

| # | Item | Effort | Impact |
|---|------|--------|--------|
| 1 | Fix anchor hrefs (#7) | S | High (broken nav) |
| 2 | Island-nav → top 72px (#6) | XS | High (visual collision) |
| 3 | Metrics strip under hero (#9) | S | Medium-High |
| 4 | Service rail spacing + dividers (#3) | S | Medium |
| 5 | Header nav trim + button (#5) | S | Medium |
| 6 | Hero text column fix (#2) | M | Medium |
| 7 | Section-head component (#1) | M | Medium |
| 8 | Mid-page CTA strip (#8) | S | Medium |
| 9 | Case study link verification (#10) | XS | Medium |
| 10 | Moon watermark (#11) | M | Low-Medium |
| 11 | Type ramp + contrast (#12, #13) | M | Medium |
| 12 | Focus-visible + preload (#14, #15) | S | Low |

**Recommended first sprint:** items 1–5 (broken nav, nav collision, metrics strip, rail spacing, header trim) — all small, all visible, no design risk.
