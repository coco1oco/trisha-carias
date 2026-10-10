import { useEffect, useRef, useState } from "react"
import { EXPERIENCES } from "../data/content"
import { ExperienceBento } from "../components/ExperienceBento"
import { StoryLightbox } from "../components/StoryLightbox"
import { gsap, isReducedMotion } from "../utils/animations"

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  // Default open to "sp-madrid" so visitors immediately discover the Bento case study
  const [expandedId, setExpandedId] = useState<string | null>("sp-madrid")
  const [activeLightbox, setActiveLightbox] = useState<{
    experienceId: string
    photoIndex: number
  } | null>(null)

  useEffect(() => {
    if (isReducedMotion()) return

    const ctx = gsap.context(() => {
      // Header reveal
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

      // Timeline items reveal
      if (timelineRef.current) {
        const cards = timelineRef.current.children
        gsap.fromTo(
          cards,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 78%",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const currentLightboxExperience = EXPERIENCES.find(
    (exp) => exp.id === activeLightbox?.experienceId
  )

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="scroll-mt-0 px-5 pt-36 pb-20 sm:px-8 sm:pt-40 sm:pb-28 lg:px-12 lg:pt-44 lg:pb-36"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#d24a2c]">
              Chapter 02 · Journey & Experience
            </span>
            <span className="h-px w-8 bg-[#17201d]/20" aria-hidden="true" />
          </div>

          <h2
            ref={headingRef}
            className="mt-6 font-serif text-4xl font-normal leading-[1.08] tracking-[-0.03em] text-[#17201d] sm:text-6xl lg:text-7xl"
          >
            Learning through real-world systems, collaboration, and practice.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#58635f] sm:text-lg">
            A progression of experiences where classroom theory transformed into
            practical delivery—from writing automated data routines in a corporate
            office to crafting user interfaces and visual designs.
          </p>
        </div>

        {/* Full-width Chronological Timeline */}
        <div ref={timelineRef} className="mt-14 flex flex-col gap-8">
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedId === exp.id
            const hasCaseStudy = Boolean(exp.caseStudy)
            const photoCount = exp.caseStudy?.photos?.length ?? 0

            return (
              <article
                key={exp.id}
                className="bookplate-card group relative rounded-2xl border border-[#17201d]/12 p-6 transition-all duration-300 hover:border-[#17201d]/30 hover:shadow-md sm:p-8"
              >
                {/* Header row */}
                <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-[#17201d]/10 pb-4">
                  <div>
                    <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#d24a2c]">
                      {exp.tag}
                    </span>
                    <h3 className="mt-1 text-2xl font-semibold tracking-tight text-[#17201d] sm:text-3xl">
                      {exp.role}
                    </h3>
                    <p className="mt-0.5 text-base font-medium text-[#58635f]">
                      {exp.organization}
                    </p>
                  </div>

                  <span className="rounded-full border border-[#17201d]/15 bg-[#f4f0e8] px-3.5 py-1 font-mono text-xs font-medium text-[#17201d]">
                    {exp.period}
                  </span>
                </div>

                {/* Summary */}
                <p className="mt-5 text-sm leading-relaxed text-[#4c5652] sm:text-base">
                  {exp.summary}
                </p>

                {/* Highlights */}
                <ul className="mt-4 flex flex-col gap-2">
                  {exp.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-[#58635f] sm:text-sm"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#d24a2c]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer Bar: Tool Pills & Interactive Bento Toggle Button */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {exp.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md border border-[#17201d]/10 bg-white/70 px-2.5 py-1 font-mono text-[0.7rem] text-[#4c5652]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Toggle Drawer Button */}
                  {hasCaseStudy && (
                    <button
                      type="button"
                      onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                      className="inline-flex items-center gap-2 rounded-xl border border-[#d24a2c]/35 bg-[#fff5f2] px-3.5 py-2 font-mono text-xs font-semibold text-[#d24a2c] transition-all hover:bg-[#d24a2c] hover:text-white cursor-pointer shadow-xs"
                      aria-expanded={isExpanded}
                    >
                      <span>
                        {isExpanded ? "Collapse Case Study" : "✦ Explore Case Study"}
                      </span>
                      {photoCount > 0 && (
                        <span
                          className={`rounded-full px-2 py-0.5 text-[0.68rem] transition-colors ${
                            isExpanded
                              ? "bg-white/20 text-white"
                              : "bg-[#d24a2c]/10 text-[#d24a2c]"
                          }`}
                        >
                          {photoCount} {photoCount === 1 ? "photo" : "photos"}
                        </span>
                      )}
                      <span className="text-[0.75rem] font-bold">
                        {isExpanded ? "▴" : "▾"}
                      </span>
                    </button>
                  )}
                </div>

                {/* Inline Bento Box Drawer */}
                {isExpanded && exp.caseStudy && (
                  <ExperienceBento
                    caseStudy={exp.caseStudy}
                    roleTitle={exp.role}
                    organization={exp.organization}
                    onOpenPhoto={(idx) =>
                      setActiveLightbox({ experienceId: exp.id, photoIndex: idx })
                    }
                  />
                )}
              </article>
            )
          })}
        </div>
      </div>

      {/* Story / MyDay Style Lightbox Modal */}
      {activeLightbox &&
        currentLightboxExperience?.caseStudy?.photos &&
        currentLightboxExperience.caseStudy.photos.length > 0 && (
          <StoryLightbox
            photos={currentLightboxExperience.caseStudy.photos}
            initialIndex={activeLightbox.photoIndex}
            roleTitle={currentLightboxExperience.role}
            organization={currentLightboxExperience.organization}
            onClose={() => setActiveLightbox(null)}
          />
        )}
    </section>
  )
}
