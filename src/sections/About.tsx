import { useEffect, useRef } from "react"
import { STRENGTHS, EDUCATION, READER_VIGNETTE } from "../data/content"
import { gsap, ScrollTrigger, isReducedMotion } from "../utils/animations"

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const readerCardRef = useRef<HTMLDivElement>(null)
  const chipsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isReducedMotion()) return

    const ctx = gsap.context(() => {
      // Heading & text reveal on scroll
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 82%",
          },
        }
      )

      // Reader vignette card reveal
      if (readerCardRef.current) {
        gsap.fromTo(
          readerCardRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: readerCardRef.current,
              start: "top 85%",
            },
          }
        )
      }

      // Strengths chips stagger
      if (chipsRef.current) {
        const chips = chipsRef.current.children
        gsap.fromTo(
          chips,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: chipsRef.current,
              start: "top 88%",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="scroll-mt-0 bg-[#17201d] px-5 pt-36 pb-20 text-[#f4f0e8] sm:px-8 sm:pt-40 sm:pb-28 lg:px-12 lg:pt-44 lg:pb-36"
    >
      <div
        ref={contentRef}
        className="mx-auto grid max-w-[90rem] gap-12 sm:gap-16 lg:grid-cols-[.55fr_1.45fr]"
      >
        {/* Left Column: Chapter folio & academic badge */}
        <div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#e66c4d]">
              Chapter 01 · About
            </span>
            <span className="h-px w-6 bg-white/20" aria-hidden="true" />
          </div>

          <div className="mt-6 flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:mt-10">
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#bac7be]">
              Academic Path
            </span>
            <p className="text-sm font-semibold text-white">
              {EDUCATION.degree}
            </p>
            <p className="text-xs text-[#bac7be]">
              {EDUCATION.institution}
            </p>
            <span className="mt-2 w-fit rounded-full border border-white/15 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-[#e66c4d]">
              {EDUCATION.expectedYear}
            </span>
          </div>
        </div>

        {/* Right Column: Narrative, reader vignette & strengths */}
        <div>
          {/* Unified headline - uninterrupted font and thought */}
          <h2
            ref={headingRef}
            className="max-w-5xl font-serif text-4xl font-normal leading-[1.08] tracking-[-0.025em] text-[#f4f0e8] sm:text-6xl lg:text-7xl"
          >
            A quick mind for learning new domains, a journalist&apos;s eye for writing, and a natural instinct to organize.
          </h2>

          <div className="mt-10 grid gap-8 border-t border-white/15 pt-8 text-base leading-relaxed text-[#bac7be] sm:grid-cols-2 sm:text-lg">
            <p>
              My foundation began in student journalism and science investigatory
              competitions—spaces that taught me to investigate methodically, ask
              the questions others overlook, and absorb unfamiliar fields with
              remarkable speed. When handed a new domain, I dive in to deconstruct
              its logic, master the tools, and translate it into practical clarity.
            </p>
            <p>
              In academic research and technical teams, I naturally step into
              orchestration. While technical partners develop algorithms, I manage
              project deliverables, structure the research paper outlines, design
              the user interfaces, and ensure the entire vision holds together.
              I bridge technical capability with human understanding.
            </p>
          </div>

          {/* Personalized Book & Romance Reader Vignette */}
          <div
            ref={readerCardRef}
            className="relative mt-12 overflow-hidden rounded-2xl border border-[#e66c4d]/30 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 sm:p-8"
          >
            {/* Subtle bookmark ribbon accent */}
            <div
              className="absolute -top-1 right-8 h-8 w-5 bg-[#e66c4d] shadow-sm"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%)" }}
              aria-hidden="true"
            />

            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#e66c4d]">
                {READER_VIGNETTE.tag}
              </span>
              <span className="h-px w-6 bg-[#e66c4d]/30" aria-hidden="true" />
            </div>

            <p className="mt-4 font-serif text-xl font-normal leading-relaxed text-[#f4f0e8] sm:text-2xl">
              &ldquo;{READER_VIGNETTE.quote}&rdquo;
            </p>

            <p className="mt-4 font-mono text-xs tracking-wide text-[#bac7be]">
              — {READER_VIGNETTE.annotation}
            </p>
          </div>

          {/* Competencies / Skills */}
          <div className="mt-12">
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#bac7be]">
              Core Toolkit & Competencies
            </p>
            <div ref={chipsRef} className="flex flex-wrap gap-2.5 sm:gap-3">
              {STRENGTHS.map((strength) => (
                <span
                  key={strength}
                  className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 font-mono text-xs text-[#dfe5df] transition-colors hover:border-[#e66c4d]/60 hover:text-white sm:text-sm"
                >
                  {strength}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
