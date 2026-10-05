# Portfolio Design Refinement & Mobile Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refine the portfolio's visual design, polish micro-interactions and project showcases, and fix mobile navigation, responsive typography clamping, and layout overflow issues across all viewports.

**Architecture:** A multi-agent division of labor where parallel domain specialists handle Mobile/Responsive architectural fixes (`Header.tsx`, `index.css`, layout wrappers) and Editorial/Micro-Interaction polish (`Projects.tsx`, section cards, button states), followed by a comprehensive integration and QA verification pass.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Vite

## Global Constraints

- Preserve all existing content and copy truth from `src/data/content.ts` unless enhancing markup/metadata.
- Minimum mobile viewport support: 320px width without horizontal scroll (`overflow-x: hidden` / containment).
- Minimum mobile touch target size: 48px for all mobile drawer and CTA buttons.
- Strict TypeScript: no `any` without explicit typing; `npm run build` must pass cleanly.
- Maintain editorial aesthetic (DM Sans + Newsreader serif, warm paper `#f4f0e8`, charcoal `#17201d`, terracotta `#d24a2c`, sage `#d7dfd3`).

---

### Task 1: Mobile Header Drawer, Backdrop, Keyboard Navigation & Scroll Lock

**Files:**
- Modify: `src/components/Header.tsx`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: `NAV_ITEMS`, `resumePdf`, `activeSection` from `src/data/content.ts`
- Produces: Enhanced `Header` component with animated mobile drawer, backdrop blur overlay, body scroll lock, Escape key handler, and 48px tap targets.

- [ ] **Step 1: Update Header component with overlay, scroll lock, and keyboard handling**

Add `useEffect` to `src/components/Header.tsx`:
- When `mobileMenuOpen` is true:
  - Add `overflow: hidden` to `document.body`
  - Listen for `keydown` (close on `Escape`)
- Add semi-transparent backdrop overlay:
  `<div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden" onClick={() => setMobileMenuOpen(false)} aria-hidden="true" />`
- Ensure drawer has `z-50`, `aria-modal="true"`, `role="dialog"`.
- Ensure all mobile drawer nav items have `min-h-[48px] flex items-center`.

- [ ] **Step 2: Update `src/index.css` with mobile overflow safety**

Ensure `html, body` cannot scroll horizontally:
```css
html, body {
  overflow-x: hidden;
  max-width: 100vw;
}
```

- [ ] **Step 3: Verify TypeScript and Vite build**

Run: `npm run build`
Expected: Build succeeds without error.

- [ ] **Step 4: Commit**

```bash
git add src/components/Header.tsx src/index.css
git commit -m "feat(header): add mobile backdrop blur, scroll lock, and keyboard navigation"
```

---

### Task 2: Responsive Hero Viewport Clamping & Layout Boundary Hardening

**Files:**
- Modify: `src/sections/Hero.tsx`

**Interfaces:**
- Consumes: `Arrow`, `SOCIAL_LINKS`, `trishaPortrait`
- Produces: Resilient `Hero` section that adapts fluidly down to 320px screens without overflow or excessive font size.

- [ ] **Step 1: Refactor Hero headline clamping and decorative containment**

In `src/sections/Hero.tsx`:
- Adjust headline size:
  Replace `text-[clamp(3.8rem,7.3vw,7.6rem)] leading-[0.88]`
  with `text-[clamp(2.4rem,6.8vw,6.8rem)] leading-[1.02] sm:leading-[0.92]`
- Wrap portrait decorative circles in an `overflow-hidden` container or clip boundaries so negative margins (`-top-8 -right-8`, `-bottom-8 -left-8`) never bleed outside the viewport.
- Adjust button container on mobile: `flex flex-col sm:flex-row gap-3 w-full sm:w-auto` with `w-full sm:w-fit justify-center`.
- Add active states to buttons: `active:scale-[0.98] transition-transform`.

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Build passes with no TypeScript errors.

- [ ] **Step 3: Commit**

```bash
git add src/sections/Hero.tsx
git commit -m "feat(hero): clamp headline for mobile viewports and contain decorative overflows"
```

---

### Task 3: Section Rhythm, Workflow Timeline Connectors & Paths Card Adaptation

**Files:**
- Modify: `src/sections/About.tsx`
- Modify: `src/sections/Experience.tsx`
- Modify: `src/sections/Paths.tsx`
- Modify: `src/sections/Contact.tsx`

**Interfaces:**
- Consumes: `STRENGTHS`, `WORKFLOW_STEPS`, `CAREER_PATHS`, `SOCIAL_LINKS` from `src/data/content.ts`
- Produces: Polished responsive section hierarchy, mobile-friendly vertical workflow connectors, distinct card treatments in Paths, and stacked CTAs in Contact.

- [ ] **Step 1: Refactor Experience workflow steps with mobile timeline connectors**

In `src/sections/Experience.tsx`:
- Harmonize section padding: `py-16 sm:py-24 lg:py-32`.
- In `WORKFLOW_STEPS` mapping:
  - Add a vertical connecting indicator between step cards on mobile screens (`block sm:hidden text-center my-1 text-[#d24a2c] font-bold text-sm` with `↓` or subtle vertical dot-line), and keep the horizontal `→` badge for `sm:grid`.
  - Ensure card padding and typography scale cleanly on mobile (`p-5 sm:p-7`).

- [ ] **Step 2: Refactor Paths grid for mobile viewports**

In `src/sections/Paths.tsx`:
- Harmonize section padding: `py-16 sm:py-24 lg:py-32`.
- Update grid container:
  - On mobile: `flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-0 md:border-t md:border-l md:border-[#17201d]/20`.
  - Card style: on mobile `rounded-2xl border border-[#17201d]/15 bg-[#f4f0e8] p-6`, on desktop `md:rounded-none md:border-r md:border-b md:border-[#17201d]/20 md:p-9 md:bg-transparent`.

- [ ] **Step 3: Refactor Contact and About section padding & CTAs**

In `src/sections/Contact.tsx` and `src/sections/About.tsx`:
- Harmonize section padding: `py-16 sm:py-24 lg:py-32`.
- Ensure Contact CTA buttons stack comfortably on mobile: `flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto`.
- Ensure touch target heights are at least 48px (`min-h-[48px]`).

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: Build passes with no TypeScript errors.

- [ ] **Step 5: Commit**

```bash
git add src/sections/About.tsx src/sections/Experience.tsx src/sections/Paths.tsx src/sections/Contact.tsx
git commit -m "feat(sections): standardize mobile rhythm, add workflow connectors, and refine path cards"
```

---

### Task 4: Interactive Projects Lab Showcase & Visual Polish

**Files:**
- Modify: `src/sections/Projects.tsx`

**Interfaces:**
- Consumes: Interactive SVG / simulated histogram bars, workflow card states
- Produces: Rich interactive project cards with animated tooltips/states on the data histogram, process flow indicators, and technology pill badges.

- [ ] **Step 1: Enhance Project 1 (Automated Data File Analyzer) interactive preview**

In `src/sections/Projects.tsx`:
- Add interactive state for histogram bars (active/hover indicator showing simulated data values like `1,420 rows`, `Cleaned: 99.8%`, `3.2s runtime`).
- Add technology badge pills:
  - `Python`
  - `Pandas`
  - `Automated Cleaning`
  - `Summary Reports`
- Add tactile hover card lift: `hover:shadow-[0_16px_36px_rgba(23,32,29,0.08)] transition-all duration-300`.

- [ ] **Step 2: Enhance Project 2 (Service Workflow Improvement) interactive preview**

In `src/sections/Projects.tsx`:
- Add interactive stage cards with subtle micro-hover slide and visual progress bar connecting stages `01 -> 02 -> 03`.
- Add methodology badges:
  - `Process Mapping`
  - `Friction Audit`
  - `Ops Optimization`

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: TypeScript compilation clean, zero errors.

- [ ] **Step 4: Commit**

```bash
git add src/sections/Projects.tsx
git commit -m "feat(projects): enrich interactive previews, metrics, and technology badges"
```

---

### Task 5: End-to-End Build, Responsive & Accessibility Verification

**Files:**
- Audit across: all `src/` files

- [ ] **Step 1: Production build verification**

Run: `npm run build`
Expected: Zero compilation, lint, or Vite packaging errors.

- [ ] **Step 2: Static audit for mobile viewport overflow & accessibility**

Verify:
- `grep` or regex scan for any hardcoded minimum widths (`min-w-[...]`) that exceed 320px.
- Confirm all clickable interactive elements (`<a>`, `<button>`) have sufficient touch targets and accessible labels.
- Verify body overflow behavior when mobile drawer triggers.

- [ ] **Step 3: Final Commit & Clean State**

```bash
git status
```
Ensure working tree is clean.
