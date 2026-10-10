# Experience Bento Redesign & Story-Style Lightbox Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the Experience section into a scalable, full-width editorial timeline featuring inline expandable Bento Box case studies, an Instagram/MyDay-style tap-navigated photo lightbox, and Lenis-powered momentum smooth scrolling with hidden scrollbars.

**Architecture:** 
1. `lenis` handles buttery smooth inertia scrolling synchronized with GSAP's RAF ticker and ScrollTrigger.
2. `ExperienceItem` data model holds optional rich case studies and media artifacts.
3. `Experience.tsx` renders full-width timeline cards with inline collapsible drawers containing `ExperienceBento`.
4. `StoryLightbox.tsx` provides fullscreen modal viewing with left/right tap zone navigation and top segmented progress bars.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, GSAP 3.15, Lenis 1.1

## Global Constraints
- Hide browser and element scrollbars across all browsers without breaking scrollability.
- Story Lightbox must divide screen into left 40% (previous) and right 40% (next) tap zones.
- Support `prefers-reduced-motion` to disable Lenis and GSAP animations gracefully.
- Preserve all existing styling tokens (`#f4f0e8` cream background, `#17201d` charcoal ink, `#d24a2c` terracotta accent).

---

### Task 1: Install Lenis & Configure CSS for Smooth Scrolling and Hidden Scrollbars

**Files:**
- Modify: `package.json`
- Modify: `src/index.css`
- Create: `src/components/SmoothScroll.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Produces: `<SmoothScroll />` component that initializes Lenis and syncs with GSAP's ticker and ScrollTrigger.

- [ ] **Step 1: Install `lenis` package**
Run:
```bash
npm install lenis
```

- [ ] **Step 2: Add global scrollbar hiding styles to `src/index.css`**
Update `src/index.css` to add scrollbar suppression and Lenis styling:
```css
/* Hide browser scrollbars while keeping scroll functionality */
html,
body {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

::-webkit-scrollbar {
  display: none;
  width: 0px;
  height: 0px;
  background: transparent;
}

/* Lenis recommended styling */
html.lenis,
html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
```

- [ ] **Step 3: Create `src/components/SmoothScroll.tsx`**
Implement Lenis with custom exponential easing, GSAP ticker synchronization, smooth anchor link handling, and reduced motion check:
```tsx
import { useEffect } from "react"
import Lenis from "lenis"
import { gsap, ScrollTrigger, isReducedMotion } from "../utils/animations"

export function SmoothScroll() {
  useEffect(() => {
    if (isReducedMotion()) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    })

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update)

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(tickerCallback)
    gsap.ticker.lagSmoothing(0)

    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const anchor = target?.closest<HTMLAnchorElement>('a[href^="#"]')
      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href || href === "#") return

      const targetEl = document.querySelector(href)
      if (targetEl) {
        e.preventDefault()
        lenis.scrollTo(targetEl as HTMLElement, { offset: 0, duration: 1.5 })
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
      gsap.ticker.remove(tickerCallback)
      lenis.destroy()
    }
  }, [])

  return null
}
```

- [ ] **Step 4: Mount `SmoothScroll` in `src/App.tsx`**
Import and place `<SmoothScroll />` at the top of `App.tsx`.

- [ ] **Step 5: Verify build**
Run: `npm run build`  
Expected: PASS with no TypeScript or build errors.

- [ ] **Step 6: Commit**
```bash
git add package.json package-lock.json src/index.css src/components/SmoothScroll.tsx src/App.tsx
git commit -m "feat: add Lenis smooth scrolling and hide browser scrollbars"
```

---

### Task 2: Expand Data Model in `src/data/content.ts`

**Files:**
- Modify: `src/data/content.ts`

**Interfaces:**
- Produces: `ArtifactPhoto`, `ExperienceCaseStudy`, updated `ExperienceItem`, and initial case study data for `EXPERIENCES`.

- [ ] **Step 1: Define `ArtifactPhoto` and `ExperienceCaseStudy` interfaces**
Update `src/data/content.ts`:
```typescript
export interface ArtifactPhoto {
  id: string
  src: string
  title: string
  caption?: string
  date?: string
}

export interface ExperienceCaseStudy {
  headline: string
  challenge: string
  execution: string
  deliverables: string[]
  takeaway?: string
  photos: ArtifactPhoto[]
}

export interface ExperienceItem {
  id: string
  role: string
  organization: string
  period: string
  tag: string
  summary: string
  highlights: string[]
  tools: string[]
  caseStudy?: ExperienceCaseStudy
}
```

- [ ] **Step 2: Populate case study data for S.P. Madrid**
Import photos in `content.ts`:
```typescript
import spmPhoto1 from "../assets/spm-internship (1).jpg"
import spmPhoto2 from "../assets/spm-internship (2).jpg"
```
Attach `caseStudy` to the `"sp-madrid"` item:
```typescript
caseStudy: {
  headline: "Automating Operational Data Validation Routines",
  challenge:
    "Manual inspection of large spreadsheets was time-intensive and prone to schema irregularities during corporate reporting cycles.",
  execution:
    "Engineered Python automation scripts to clean and format datasets, validating row counts, datatypes, and formula accuracy in seconds.",
  deliverables: [
    "3 automated Python data processing routines",
    "Cleaned & validated corporate client spreadsheets",
    "Error-checking documentation for team workflows",
  ],
  takeaway:
    "Automation is most powerful when it builds confidence for the team using it every morning.",
  photos: [
    {
      id: "spm-cert",
      src: spmPhoto2,
      title: "Certificate of Completion",
      caption: "Awarded upon completing the data analysis internship at S.P. Madrid.",
      date: "August 2026",
    },
    {
      id: "spm-cohort",
      src: spmPhoto1,
      title: "Intern Cohort Team",
      caption: "With fellow interns holding completion certificates at the S.P. Madrid office.",
      date: "August 2026",
    },
  ],
}
```

- [ ] **Step 3: Verify build**
Run: `npm run build`  
Expected: PASS.

- [ ] **Step 4: Commit**
```bash
git add src/data/content.ts
git commit -m "feat: add case study and artifact photo schema to content data"
```

---

### Task 3: Build Story / "MyDay" Style Lightbox Component

**Files:**
- Create: `src/components/StoryLightbox.tsx`

**Interfaces:**
- Consumes: `photos: ArtifactPhoto[]`, `initialIndex: number`, `onClose: () => void`, `roleTitle: string`, `organization: string`.
- Produces: Fullscreen interactive Story lightbox modal.

- [ ] **Step 1: Implement `StoryLightbox.tsx`**
Create `src/components/StoryLightbox.tsx` with:
- Segmented top progress bars (`— — —`).
- Left 40% tap zone (`onClick` -> previous photo).
- Right 40% tap zone (`onClick` -> next photo).
- Center image card with title, caption, and date badge.
- Keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`).
- Background scroll lock via `document.body.style.overflow = "hidden"`.
- Close button (`✕`).

```tsx
import { useEffect, useState } from "react"
import { ArtifactPhoto } from "../data/content"

interface StoryLightboxProps {
  photos: ArtifactPhoto[]
  initialIndex?: number
  roleTitle: string
  organization: string
  onClose: () => void
}

export function StoryLightbox({
  photos,
  initialIndex = 0,
  roleTitle,
  organization,
  onClose,
}: StoryLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const activePhoto = photos[currentIndex]
  const total = photos.length

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : total - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < total - 1 ? prev + 1 : 0))
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") handlePrev()
      if (e.key === "ArrowRight") handleNext()
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [currentIndex, total])

  if (!activePhoto) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${activePhoto.title} - ${organization}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#17201d]/90 backdrop-blur-md p-4 sm:p-6"
    >
      <div className="relative flex flex-col w-full max-w-xl h-[88vh] max-h-[820px] bg-[#1d2623] text-white rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        {/* Top Story Header & Progress Bars */}
        <div className="relative z-20 flex flex-col gap-3 p-4 bg-gradient-to-b from-black/80 to-transparent">
          {/* Progress Segments */}
          <div className="flex gap-1.5 w-full">
            {photos.map((photo, idx) => (
              <div
                key={photo.id}
                className="h-1 flex-1 rounded-full overflow-hidden bg-white/25"
              >
                <div
                  className={`h-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "bg-white"
                      : idx < currentIndex
                        ? "bg-white/80"
                        : "bg-transparent"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Header Info & Close */}
          <div className="flex items-center justify-between">
            <div>
              <span className="font-mono text-[0.68rem] uppercase tracking-wider text-[#d24a2c] font-semibold">
                {organization}
              </span>
              <p className="text-xs text-white/80 font-medium">
                {roleTitle} · {currentIndex + 1} of {total}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white text-sm"
              aria-label="Close photo viewer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Media Canvas & Story Tap Navigation Zones */}
        <div className="relative flex-1 flex items-center justify-center overflow-hidden bg-black/40">
          <img
            key={activePhoto.id}
            src={activePhoto.src}
            alt={activePhoto.title}
            className="w-full h-full object-contain max-h-[60vh] select-none pointer-events-none"
          />

          {/* Left 40% Tap Zone (Previous) */}
          <button
            onClick={handlePrev}
            className="absolute inset-y-0 left-0 w-[40%] z-10 cursor-pointer focus:outline-none"
            aria-label="Previous photo"
          />

          {/* Right 40% Tap Zone (Next) */}
          <button
            onClick={handleNext}
            className="absolute inset-y-0 right-0 w-[40%] z-10 cursor-pointer focus:outline-none"
            aria-label="Next photo"
          />

          {/* Subtle Visual Chevrons for desktop click hint */}
          {total > 1 && (
            <>
              <div className="hidden sm:flex absolute left-3 z-10 size-9 rounded-full bg-black/40 border border-white/15 items-center justify-center pointer-events-none text-white text-sm">
                ←
              </div>
              <div className="hidden sm:flex absolute right-3 z-10 size-9 rounded-full bg-black/40 border border-white/15 items-center justify-center pointer-events-none text-white text-sm">
                →
              </div>
            </>
          )}
        </div>

        {/* Bottom Metadata Drawer */}
        <div className="relative z-20 p-4 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
          <div className="flex items-baseline justify-between gap-2">
            <h4 className="text-base font-semibold text-white tracking-tight">
              {activePhoto.title}
            </h4>
            {activePhoto.date && (
              <span className="font-mono text-xs text-[#bac7be]">
                {activePhoto.date}
              </span>
            )}
          </div>
          {activePhoto.caption && (
            <p className="mt-1 text-xs sm:text-sm text-white/80 leading-relaxed">
              {activePhoto.caption}
            </p>
          )}
          <p className="mt-2 text-[0.65rem] font-mono text-white/40 uppercase tracking-wider">
            Tap right side for next · Tap left side for previous
          </p>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Verify build**
Run: `npm run build`  
Expected: PASS.

- [ ] **Step 3: Commit**
```bash
git add src/components/StoryLightbox.tsx
git commit -m "feat: create StoryLightbox with myday-style tap navigation and progress bars"
```

---

### Task 4: Build Inline Bento Box Component

**Files:**
- Create: `src/components/ExperienceBento.tsx`

**Interfaces:**
- Consumes: `caseStudy: ExperienceCaseStudy`, `roleTitle: string`, `organization: string`, `onOpenPhoto: (photoIndex: number) => void`.
- Produces: 4-tile Bento layout component.

- [ ] **Step 1: Implement `ExperienceBento.tsx`**
Create `src/components/ExperienceBento.tsx` with:
- Tile 1: Photo artifacts reel with clean thumbnails, title, date, and `onClick` lightbox trigger.
- Tile 2: Friction & Execution story cards.
- Tile 3: Key deliverables list with bullet indicators.
- Tile 4: Field takeaway reflection quote.

```tsx
import { ExperienceCaseStudy } from "../data/content"

interface ExperienceBentoProps {
  caseStudy: ExperienceCaseStudy
  roleTitle: string
  organization: string
  onOpenPhoto: (index: number) => void
}

export function ExperienceBento({
  caseStudy,
  onOpenPhoto,
}: ExperienceBentoProps) {
  const { headline, challenge, execution, deliverables, takeaway, photos } = caseStudy

  return (
    <div className="mt-6 border-t border-[#17201d]/10 pt-6">
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#d24a2c]">
          Case Study & Field Notes
        </span>
        <span className="font-mono text-[0.68rem] text-[#69736f]">
          {headline}
        </span>
      </div>

      {/* Responsive Bento Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
        {/* Tile 1: Photos Reel (Spans 7 cols on desktop) */}
        {photos && photos.length > 0 && (
          <div className="sm:col-span-2 lg:col-span-7 rounded-xl border border-[#17201d]/10 bg-[#e8e2d5]/50 p-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#17201d]/10">
              <span className="font-mono text-[0.68rem] uppercase tracking-wider text-[#17201d] font-semibold">
                📸 Field Artifacts ({photos.length})
              </span>
              <span className="font-mono text-[0.65rem] text-[#69736f]">
                Tap photo for story view &rarr;
              </span>
            </div>

            {/* Photos Strip */}
            <div className="mt-3 grid grid-cols-2 gap-3">
              {photos.map((photo, idx) => (
                <button
                  key={photo.id}
                  onClick={() => onOpenPhoto(idx)}
                  className="archival-photo group relative text-left rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded bg-[#17201d]/5">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <div className="mt-2 px-1">
                    <p className="font-mono text-xs font-semibold text-[#17201d] truncate">
                      {photo.title}
                    </p>
                    {photo.date && (
                      <span className="font-mono text-[0.62rem] text-[#69736f]">
                        {photo.date}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tile 2: Friction & Execution (Spans 5 cols on desktop) */}
        <div className="sm:col-span-2 lg:col-span-5 rounded-xl border border-[#17201d]/10 bg-white/70 p-4 flex flex-col justify-between">
          <div>
            <span className="font-mono text-[0.68rem] uppercase tracking-wider text-[#d24a2c] font-semibold">
              The Friction & Solution
            </span>
            <div className="mt-3 space-y-3 text-xs sm:text-[0.82rem] leading-relaxed text-[#4c5652]">
              <div>
                <strong className="text-[#17201d] font-semibold block font-mono text-[0.7rem] uppercase">
                  Friction:
                </strong>
                <p className="mt-0.5">{challenge}</p>
              </div>
              <div>
                <strong className="text-[#17201d] font-semibold block font-mono text-[0.7rem] uppercase">
                  Execution:
                </strong>
                <p className="mt-0.5">{execution}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tile 3: Key Deliverables (Spans 6 cols on desktop) */}
        <div className="sm:col-span-1 lg:col-span-6 rounded-xl border border-[#17201d]/10 bg-white/70 p-4">
          <span className="font-mono text-[0.68rem] uppercase tracking-wider text-[#69736f] font-semibold">
            Tangible Deliverables
          </span>
          <ul className="mt-3 space-y-2">
            {deliverables.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs sm:text-[0.82rem] text-[#4c5652]"
              >
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-[#d24a2c]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tile 4: Takeaway Quote (Spans 6 cols on desktop) */}
        {takeaway && (
          <div className="sm:col-span-1 lg:col-span-6 rounded-xl border border-[#17201d]/10 bg-[#f4f0e8] p-4 flex flex-col justify-center">
            <span className="font-mono text-[0.68rem] uppercase tracking-wider text-[#69736f] font-semibold">
              Field Reflection
            </span>
            <blockquote className="mt-2 text-xs sm:text-[0.85rem] italic text-[#17201d] leading-relaxed">
              "{takeaway}"
            </blockquote>
          </div>
        )}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Verify build**
Run: `npm run build`  
Expected: PASS.

- [ ] **Step 3: Commit**
```bash
git add src/components/ExperienceBento.tsx
git commit -m "feat: create ExperienceBento component with modular 4-tile layout"
```

---

### Task 5: Refactor Experience Section & Integrate Bento Drawers and Lightbox

**Files:**
- Modify: `src/sections/Experience.tsx`

**Interfaces:**
- Consumes: `EXPERIENCES` from `content.ts`, `ExperienceBento`, `StoryLightbox`.
- Produces: Redesigned Experience section with full-width cards, inline accordion toggles, and connected lightbox modal.

- [ ] **Step 1: Refactor `src/sections/Experience.tsx`**
- Replace the 2-column grid and sticky hardcoded photo vignette with a centered full-width layout (`max-w-5xl mx-auto`).
- Add state:
  - `expandedId: string | null` (defaults to `"sp-madrid"` so visitors immediately see the Bento case study on load).
  - `activeLightbox: { experienceId: string; photoIndex: number } | null`.
- Add accordion toggle button:
  `[ ✦ Explore Case Study & Photos (N) ▴ / ▾ ]`.
- Render `ExperienceBento` when expanded.
- Render `StoryLightbox` when `activeLightbox` is not null.
- Remove hardcoded photo vignette and the duplicated mobile photo section.
- Keep GSAP entrance animation on heading and card children.

- [ ] **Step 2: Verify build**
Run: `npm run build`  
Expected: PASS with no errors.

- [ ] **Step 3: Commit**
```bash
git add src/sections/Experience.tsx
git commit -m "refactor: redesign Experience section into full-width timeline with expandable Bento drawers"
```

---

### Task 6: Visual & Interactive Verification

**Files:**
- Test running Vite dev server

- [ ] **Step 1: Run production build check**
Run: `npm run build`  
Expected: Zero type errors, clean bundle output.

- [ ] **Step 2: Test in browser**
Verify:
1. Browser scrollbar is hidden on all edges.
2. Smooth scrolling glides with momentum wheel inputs and anchor navigation.
3. Experience section renders as a full-width timeline.
4. S.P. Madrid Bento Box expands and collapses smoothly with the toggle button.
5. Clicking a photo opens the Story Lightbox with top progress bars.
6. Tapping/clicking the right side advances to the next photo.
7. Tapping/clicking the left side moves to the previous photo.
8. `ESC`, close button, and backdrop dismiss the lightbox properly.

- [ ] **Step 3: Final Commit & Summary**
```bash
git commit -am "chore: complete experience bento redesign and story lightbox integration"
```
