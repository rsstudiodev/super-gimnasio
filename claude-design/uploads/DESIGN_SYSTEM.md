# Site Template Spec — Astro Business Landing

Source: extracted format/effect patterns from this repo's sample pages. Purpose: let an agent scaffold a NEW Astro site for a DIFFERENT business, with invented copy and a swapped color palette, while keeping this layout/section/interaction contract.

Stack: Astro (islands architecture), React islands for interactive parts (`client:load` / `client:only="react"`), Tailwind CSS v4 (`@theme` tokens, `@custom-variant dark`), GSAP for reveal/marquee animation, `react-fast-marquee`, `react-compare-slider`, `@headlessui/react`, `@heroicons/react`.

## 1. Color parameterization

Do NOT hardcode real palette values here. Define theme via Tailwind `@theme` tokens in `global.css`, then reference tokens everywhere else — never raw hex in components.

```css
@theme {
  --color-brand-dark: <token>;     /* primary dark / ink, text-on-light, dark-mode bg */
  --color-brand-accent: <token>;   /* primary accent, links, icons, CTA fill */
  --color-brand-muted: <token>;    /* secondary neutral, borders, dividers */
  --color-brand-light: <token>;    /* light bg, dark-mode text */
  --color-brand-cta: <token>;      /* optional fixed-brand CTA e.g. WhatsApp green — keep independent of theme swap */
}
```

Every component consumes `bg-brand-*`, `text-brand-*`, `border-brand-*` at opacity variants (`/5`, `/10`, `/20`, `/40`, `/50`, `/60`, `/70`, `/80`) — never a bare literal color class. Swapping the palette means editing only the `@theme` block.

Light/dark is a `.dark` class toggle on `<html>`, persisted to `localStorage`, applied by an inline blocking script in the layout `<head>`/top of `<body>` before paint (avoids flash).

## 2. Typography

Two font families, both self-hosted via `@font-face`:
- **Label font** — used for all headings, nav items, labels, buttons, badges. Distinct/display face.
- **Body font** — used for paragraph copy, descriptions.

Map to Tailwind: `--font-label`, `--font-body`.

## 3. Global design contract (put as a CSS comment at top of `global.css`)

```
Section wrapper   flex flex-col items-center px-4 md:px-6 py-20 w-full
                  (exception: a full-bleed marquee section keeps padding on
                   children, not the section, so it can run edge to edge —
                   never use a vw unit to bleed, it overflows where
                   scrollbars claim layout width)
Section heading   shared <SectionHeading title subtitle /> component
Anchor offset     scroll-mt-24              (home page: fixed header only)
                  scroll-mt-36 md:scroll-mt-40  (subpages: header + sticky inner menu)
Content width     max-w-6xl grids / max-w-5xl prose+image / max-w-3xl accordion & gallery track
                  gallery cards cap at max-w-xs so a full-width row stays scannable

Card background   bg-brand-light dark:bg-brand-dark            (every card, both themes)
Card surface      rounded-2xl md:rounded-4xl                    (16px -> 32px)
Inset block       rounded-3xl                                   (24px)
Control (pill)    rounded-full
Elevation         shadow-sm hover:shadow-md
Border            border-brand-accent/10 dark:border-brand-light/20
Border hover      hover:border-brand-accent/20 dark:hover:border-brand-light/40
Transition        transition-all duration-300
Focus ring        focus:outline-none focus:ring-2 focus:ring-brand-accent/50

Photography       saturate-60 on decorative/service/facility imagery;
                  result/before-after photos stay true color for honesty
Every hover/focus state must be declared for BOTH themes — a dark-only
hover reads as dead control in light mode (light is default).
```

## 4. Layout shell

`src/layouts/Layout.astro`:
- `<!doctype html>`, `lang` attr, `class="scroll-smooth!"` on `<html>`.
- `<head>`: charset, viewport, favicon, `Astro.generator` meta, `<title>`, meta description, sitemap link, apple-touch-icon, canonical link. Accept `seo` prop `{ title, description, canonical }` with sane defaults.
- Inline blocking theme-init script (localStorage → prefers-color-scheme fallback → toggles `.dark` on `<html>`).
- `<body>`: renders `<Header client:load />`, `<slot />`, `<Footer client:load />`, a fixed floating CTA button (`client:load`).
- Trailing `<script>` module that wires up scroll/reveal animation init (see §8).

## 5. Sections (home page)

Home page composes, in order: **Hero → Services grid → Gallery → Reviews → Location**. Footer/contact lives in the global footer, not as a page section.

### 5.1 Header (fixed, all pages)
- `fixed top-0 z-100 w-full`, translucent + `backdrop-blur-3xl`, border-bottom that's transparent at rest.
- Row: logo (two swapped `<img>`s, one per theme, `dark:hidden` / `hidden dark:block`) + a single pill "Menu" button (no inline nav links in the bar itself).
- Menu opens a **right-side drawer** (`fixed top-0 right-0 h-full w-full sm:w-[400px] md:w-1/2`, slides via `translate-x-full` → `translate-x-0`, rounded left edge on desktop, dark backdrop overlay `bg-black/50` behind it, closes on overlay click or explicit close button).
- Drawer top bar: theme toggle (sun/moon icon swap) + close (X) button, both circular icon buttons.
- Drawer body: uppercase eyebrow label ("Services"/equivalent), then a vertical list of service links (large type, hover background tint); a divider `<hr>`; then a second vertical list of same-page anchor links (services / gallery / reviews / location — closes drawer on click).

### 5.2 Hero
- `min-h-svh`, full viewport section, gradient background top→bottom (light shade to base), centered content column, `max-w-5xl`.
- Rotating headline built from a fixed lead-in phrase ("in **Brand Name**") plus a GSAP-cycled top line that swaps between several short value-prop phrases (fade in/out timeline, `repeat: -1`), and a second cycled line beneath naming each service — three synced layers: cycling phrase / fixed title / cycling service name.
- Large faded brand mark/icon graphic, absolutely positioned behind the text, opacity ~20%, theme-swapped (two `<Image>`s, one per theme).
- One pill CTA button anchored to the services section, with a trailing arrow icon.

### 5.3 Services (or "what we offer") grid
- `SectionHeading` (title + subtitle) then a **12-column responsive grid** (`grid-cols-12` on `md:`, stacked on mobile) of cards with per-card `col-span` weighting (e.g. two half-width cards, three third-width cards) — asymmetric bento, not a uniform grid.
- Each card: image top (fixed height, `object-cover`, hover `scale-105`, `saturate-60`) with a bottom gradient fade into the card background, title below, pill "Learn more" link at the card's bottom with trailing arrow icon. Card links to a dedicated subpage.

### 5.4 Gallery
- `SectionHeading`, then a `max-w-3xl` 12-col grid, items span 6 or start at custom offsets to interleave.
- Two content types: a **before/after compare slider** (draggable handle, labeled corners) and a **plain image card**. Mix both.
- Cards reveal on scroll (see §8 GSAP reveal).

### 5.5 Reviews
- `SectionHeading`, then a summary card (source-logo + average rating + star icons + review count, linking out to the review platform), then a **horizontal auto-scrolling marquee** (`react-fast-marquee`, `autoFill`, `pauseOnHover`) of review cards (fixed width, star row, truncated quote `line-clamp-4`, author name).
- This section is the one exception to side padding living on the section wrapper (padding moves to children so the marquee bleeds full width).

### 5.6 Location
- `SectionHeading`, then a two-column layout: left column is a stack/crossfade of facility photos (GSAP opacity crossfade loop, `repeat: -1`, staggered), right column stacks: an address card linking out to a maps app (pin icon + name + address), an embedded map `<iframe>` (16:9 via `pt-[56.25%]` padding trick, rounded, bordered), and a public-transit link card.
- Address/contact data loads client-side from a small JSON endpoint (see §7), never hardcoded in the component beyond a fallback.

### 5.7 Footer (global, contact)
- 4-column grid on desktop (stacked centered on mobile): (1) vertical logo + address (pin icon) + phone (`tel:` link, phone icon); (2) "Services" link list; (3) "Explore" link list (in-page anchors); (4) "Follow us" social icon row (circular icon buttons).
- Bottom bar: copyright line with current year (computed, not hardcoded) + one small secondary link.
- Same card/border/token rules as everything else; not a visually distinct "dark footer" block — follows the same light/dark tokens as the page.

## 6. Subpages (per-service detail pages)

One route per offering. Each subpage:
1. `InnerMenu` — a **sticky secondary nav** (`sticky top-20`, sits just under the fixed header) with icon + label tab-links to the page's own anchor sections (e.g. How it works / Pricing / Gallery / FAQ), horizontally scrollable on mobile, no wrap.
2. **How it works** — `SectionHeading` + alternating left/right image+paragraph blocks (`ImageParagraph`, position alternates per block) explaining the service.
3. **Pricing / cost** — `SectionHeading` + an interactive pricing calculator/estimator island (`client:load`) sized to the offering, plus a static support image (light/dark variant) with a short caption if a sizing/estimation guide helps the user self-serve.
4. **Gallery** — same compare-slider / image-card pattern as the home gallery, scoped to this service.
5. **FAQ** — `SectionHeading` + `Accordion` (native `<details>/<summary>`, custom plus-icon that rotates 45° on open, card-styled, string or bullet-list answer body).

Subpages reuse `Layout` + `Body` + the global `Header`/`Footer` exactly as the home page does; only the mid-page content differs.

## 7. Data & config conventions
- Business-identity facts that might change (address, phone numbers, map links, social URLs) live in a single `public/variables.json`, fetched client-side by the components that need them (`fetch(new URL('/variables.json', astroUrl))`), each with a hardcoded fallback constant so the UI never breaks pre-fetch.
- `seo` (title/description/canonical) is passed per-page as a prop into `Layout`, not hardcoded inside it.
- Analytics/tag scripts load via `type="text/partytown"` to stay off the main thread.

## 8. Motion conventions
- **Scroll reveal**: cards tagged with a shared reveal class animate in via one shared GSAP ScrollTrigger-driven init function, called once per page/section root, cleaned up on unmount for React islands.
- **Looping crossfade**: facility/location imagery uses a GSAP timeline with `repeat: -1` and `stagger` to crossfade opacity across a stack of absolutely-positioned images.
- **Text cycling**: hero's rotating phrases use fade in → hold → fade out timelines per phrase, `repeat: -1`, offset from the fixed title's own one-shot fade-in.
- **Marquee**: reviews scroll continuously, pause on hover, auto-fill to viewport width.
- Keep all transitions on `duration-300`/`duration-500` for hover/theme, longer (`0.7`–`2s`) only for the deliberate looping/cycling animations above.

## 9. Generation checklist for a new site

When an agent is told "create a new page for business X" from this spec:
1. Invent a business name, industry, 4–6 "services"/offerings, short taglines, FAQ content, review quotes — all fictional, none reused from a real business.
2. Pick a NEW palette and fill the `@theme` tokens in §1; do not carry over any specific color value from elsewhere.
3. Scaffold: `Layout.astro`, `Header`, `Footer`, `Whatsapp`/floating-CTA-equivalent, `common/SectionHeading`, `common/Accordion`, `common/InnerMenu`, `common/Slider`, `common/ImageCard`, `common/ImageParagraph`.
4. Build home page sections in the §5 order; build one subpage per offering following §6.
5. Add `public/variables.json` with placeholder contact fields and matching fallbacks in components.
6. Keep every rule in §3 (the design contract) — spacing, radii, border/opacity scale, focus rings, dual-theme hover — regardless of new palette or copy.
