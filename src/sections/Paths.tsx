import { useEffect, useRef } from "react"
import { CAREER_PATHS } from "../data/content"
import { gsap, ScrollTrigger, isReducedMotion } from "../utils/animations"

export function Paths() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isReducedMotion()) return

    const ctx = gsap.context(() => {
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

      if (cardsRef.current) {
        const cards = cardsRef.current.children
        gsap.fromTo(
          cards,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.18,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
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
      id="paths"
      className="scroll-mt-0 px-5 pt-36 pb-20 sm:px-8 sm:pt-40 sm:pb-28 lg:px-12 lg:pt-44 lg:pb-36"
    >
      <div className="mx-auto max-w-[90rem]">
        {/* Header */}
        <div className="mb-14 max-w-4xl sm:mb-20">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#d24a2c]">
              Chapter 03 · Pathways & Horizons
            </span>
            <span className="h-px w-8 bg-[#17201d]/20" aria-hidden="true" />
          </div>

          <h2
            ref={headingRef}
            className="mt-6 font-serif text-4xl font-normal leading-[1.08] tracking-[-0.03em] text-[#17201d] sm:text-6xl lg:text-7xl"
          >
            Where rapid learning meets structure, craft, and human impact.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#58635f] sm:text-lg">
            Rather than confining myself to a single narrow lane, I cultivate
            versatility across project orchestration, technical research, and
            human-centered design.
          </p>
        </div>

        {/* 3 Pathway Cards */}
        <div
          ref={cardsRef}
          className="grid gap-6 md:grid-cols-3 md:gap-8"
        >
          {CAREER_PATHS.map((path) => (
            <article
              key={path.number}
              className="bookplate-card group relative flex flex-col justify-between rounded-2xl border border-[#17201d]/12 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#17201d]/30 hover:shadow-lg sm:p-9"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#17201d]/10 pb-5">
                  <span className="font-mono text-2xl font-normal text-[#d24a2c]">
                    {path.number}
                  </span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#69736f]">
                    Focus Area
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[#17201d] sm:text-3xl">
                  {path.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-[#58635f] sm:text-base">
                  {path.description}
                </p>
              </div>

              <div className="mt-8 border-t border-[#17201d]/10 pt-5">
                <span className="font-mono text-[0.7rem] font-medium text-[#d24a2c]">
                  {path.focus}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
