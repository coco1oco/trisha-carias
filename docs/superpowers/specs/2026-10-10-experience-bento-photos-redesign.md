# Design Specification: Experience Section Bento Redesign & Story-Style Artifact Lightbox

- **Date:** 2026-10-10
- **Status:** Approved by User
- **Topic:** Experience Section Redesign, Scalable Photo Architecture, Inline Bento Case Studies, Story-Style Lightbox

---

## 1. Problem Statement & Motivation

The current Experience section in the portfolio places photos into a static, sticky right-hand column dedicated solely to S.P. Madrid with two hardcoded, overlapping tilted photos. This architecture has critical limitations:
1. **Lack of Scalability:** As more photos or future work experiences are added, stacking vertical photos creates an awkward, unbalanced column height compared to the timeline.
2. **Disconnected Context:** Photos and artifacts (certificates, cohort photos, UI design work) should belong to their specific company/role rather than floating in a general sidebar.
3. **Bulky OS Scrollbars:** Browser scrollbars on desktop detract from the warm, editorial bookplate aesthetic.

---

## 2. Proposed Architecture & Solution

### 2.1 Full-Width Editorial Experience Timeline
- Transform the Experience section layout from the split 2-column layout into an expansive, readable single-column flow (`max-w-5xl` centered).
- Each role retains its clean typographic identity: role title, company name, dates badge, domain tag, summary, and tools list.

### 2.2 Inline Expandable Bento Box Case Study
- Each experience card that contains artifacts/photos provides an interactive action toggle:
  `[ ✦ Explore Case Study & Photos (N) ▾ ]`
- Smoothly animates open (and collapses) without causing abrupt layout shifts.
- Inside the drawer is an editorial **Bento Box** grid composed of 4 modular tiles:
  1. **Tile 1 (Field Artifacts Reel):**
     - Archival polaroid-style photo cards with title, date, and subtle shadow.
     - Responsive grid/row with hidden scrollbars.
     - Clicking any photo opens the Story-Style Lightbox.
  2. **Tile 2 (Friction & Execution):**
     - **The Friction:** Problem statement (e.g. manual spreadsheets, unverified data pipelines).
     - **The Execution:** Engineering solution (e.g. automated Python scripts, systematic validation routines).
     - **Outcome:** Clean success badge (e.g. "Delivered zero-error client deliverables").
  3. **Tile 3 (Tangible Deliverables):**
     - Concrete outputs list (e.g. reusable scripts, spreadsheets, prototypes).
  4. **Tile 4 (Field Reflection):**
     - Key reflection quote or takeaway from that chapter of work.

### 2.3 Story / "MyDay" Style Artifact Lightbox
- Clicking any photo inside an experience's Bento Box opens an immersive, mobile-optimized lightbox.
- **Story-Style Navigation:**
  - Screen divided into two invisible tap/click zones:
    - **Left 40%:** Tap/click to go to Previous photo.
    - **Right 40%:** Tap/click to go to Next photo.
    - **Center/Navigation Arrows:** Subtle previous (`←`) and next (`→`) buttons for desktop mouse users.
  - **Top Progress Segments:** Segmented bars at the top (like Instagram / Messenger stories: `— — —`) indicating the active photo index out of total photos.
  - **Bottom Metadata Bar:** Image caption, title, role name, and date.
  - **Dismissal:** Top-right `✕` button, click outside/backdrop, or press `ESC`.
  - **Keyboard:** ArrowLeft and ArrowRight for navigation.
  - **Mobile Touch Friendly:** Prevents accidental page scrolling when open (`overflow: hidden` on body), supports touch taps on left/right zones.

### 2.4 Clean Scrollbar Removal
- Integrate comprehensive scrollbar hiding in [`src/index.css`](file:///c:/Users/GUEST-PC/star/src/index.css) to eliminate bulky browser and element scrollbars while preserving full smooth-scrolling behavior:
  ```css
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
  ```

---

## 3. Data Model Changes

In [`src/data/content.ts`](file:///c:/Users/GUEST-PC/star/src/data/content.ts), expand `ExperienceItem` to support optional structured case studies and photos:

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

### Initial Data Population:
- **S.P. Madrid:**
  - 2 photos attached: `spmPhoto2` (Certificate of Completion) and `spmPhoto1` (Intern Team Cohort).
  - Challenge: Manual operational data cleaning routines and formatting checks across large business files.
  - Execution: Python automation programs using standard data libraries to streamline file cleaning and error validation.
  - Deliverables: 3 reusable automation routines, weekly validated operational spreadsheets.
  - Takeaway: "Automation is most powerful when it builds confidence for the team using it every morning."
- **FarmForward & Dorie's:**
  - Case studies structured so photos can be attached as soon as assets are provided.

---

## 4. Component Structure & Responsiveness

### Components:
1. [`src/sections/Experience.tsx`](file:///c:/Users/GUEST-PC/star/src/sections/Experience.tsx):
   - Refactored to map experiences into full-width cards with expandable state tracking.
   - Clean entrance animations for cards with GSAP / ScrollTrigger.
2. [`src/components/ExperienceBento.tsx`](file:///c:/Users/GUEST-PC/star/src/components/ExperienceBento.tsx):
   - Dedicated component for rendering the 4-tile Bento Box layout for an experience.
   - Handles photo clicks to trigger the lightbox.
3. [`src/components/StoryLightbox.tsx`](file:///c:/Users/GUEST-PC/star/src/components/StoryLightbox.tsx):
   - Reusable modal lightbox with story-style left/right tap navigation, segmented progress indicators, accessible focus management, and keyboard controls.

### Responsive Breakpoints:
- **Desktop (`lg` / `xl`):**
  - Bento Box displays in a 2-column or 3-column asymmetric grid.
  - Left/right story navigation zones show subtle hover indicators.
- **Mobile (`< md`):**
  - Bento Box tiles stack into clean, vertical cards with generous padding and tap targets.
  - Story tap navigation fills the screen naturally for one-thumb browsing.

---

## 5. Verification Plan

1. **Visual Testing:** Verify experience timeline renders with full-width cards and without visual distortion.
2. **Expansion Test:** Click toggle on S.P. Madrid to ensure Bento Box smoothly opens and collapses.
3. **Story Lightbox Navigation:**
   - Tap/click right half of photo to advance to next photo.
   - Tap/click left half of photo to return to previous photo.
   - Verify top segmented progress bar updates properly.
   - Verify `ESC`, close button, and backdrop click close the modal cleanly.
4. **Mobile Responsiveness:** Test responsive stacking at mobile viewport dimensions (< 450px).
5. **Scrollbar Verification:** Ensure no browser scrollbars or inner element scrollbars appear in Chrome/Edge/Firefox.
