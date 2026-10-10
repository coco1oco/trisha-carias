import { useEffect, useRef } from "react"
import { ArrowDown } from "lucide-react"
import { Arrow } from "../components/Arrow"
import { SOCIAL_LINKS } from "../data/content"
import trishaPortrait from "../assets/trisha-carias.jpg"
import { gsap, isReducedMotion } from "../utils/animations"

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const tagRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const bioRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const imageCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isReducedMotion()) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.fromTo(
        tagRef.current,
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1 }
      )
        .fromTo(
          headingRef.current,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 1.1 },
          "-=0.5"
        )
        .fromTo(
          bioRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.7"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          imageCardRef.current,
          { opacity: 0, scale: 0.95, y: 28 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power2.out" },
          "-=0.9"
        )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative mx-auto grid max-w-[90rem] overflow-x-clip gap-8 sm:gap-12 px-5 pt-24 pb-14 sm:px-8 sm:pt-32 sm:pb-24 lg:min-h-screen lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:px-12 lg:pt-36 lg:pb-24"
    >
      <div className="relative z-10">
        {/* Folio chapter tag */}
        <div ref={tagRef} className="mb-4 sm:mb-6 flex items-center gap-3">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#d24a2c]">
            Princess Trisha Carias
          </span>
          <span className="h-px w-6 bg-[#17201d]/20" aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#69736f]">
            B.S. Computer Science
          </span>
        </div>

        {/* Minimal, elegant headline */}
        <h1
          ref={headingRef}
          className="max-w-3xl font-serif text-3xl sm:text-5xl lg:text-[clamp(2.6rem,6vw,5.8rem)] font-normal leading-[1.08] tracking-[-0.03em] text-[#17201d]"
        >
          Bringing clarity to complex systems and ideas.
        </h1>

        <p
          ref={bioRef}
          className="mt-4 sm:mt-6 max-w-lg text-sm sm:text-base lg:text-lg leading-relaxed text-[#58635f]"
        >
          Computer Science student and project orchestrator. Quick to master
          unfamiliar domains, thorough in research, and driven by structured,
          thoughtful execution.
        </p>

        {/* Touch-Friendly Action Buttons */}
        <div
          ref={ctaRef}
          className="mt-8 sm:mt-10 flex w-full flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-3.5"
        >
          <a
            href="#experience"
            className="group flex min-h-[48px] w-full sm:w-fit items-center justify-center gap-3 rounded-xl sm:rounded-full bg-[#17201d] px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-semibold text-[#f4f0e8] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d24a2c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d24a2c] active:scale-[0.98]"
          >
            <span>Explore my journey</span>
            <ArrowDown className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex min-h-[48px] w-full sm:w-fit items-center justify-center gap-2 rounded-xl sm:rounded-full border border-[#17201d]/20 bg-transparent px-5 py-3.5 text-xs sm:text-sm font-semibold text-[#17201d] transition-all duration-200 hover:border-[#17201d] hover:bg-white/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17201d] active:scale-[0.98]"
          >
            <span>LinkedIn</span>
            <Arrow />
          </a>
        </div>
      </div>

      <div
        ref={imageCardRef}
        className="relative mx-auto w-full max-w-md lg:max-w-lg lg:justify-self-end mt-2 sm:mt-0"
      >
        {/* Soft background glow accents */}
        <div className="pointer-events-none absolute -inset-4 overflow-hidden rounded-[2.5rem] sm:-inset-6 sm:overflow-visible">
          <div className="absolute -top-3 -right-3 size-36 rounded-full border border-[#d24a2c]/25 sm:-top-6 sm:-right-6 sm:size-44" />
          <div className="absolute -bottom-4 -left-4 size-44 rounded-full bg-[#d7dfd3]/80 sm:-bottom-8 sm:-left-8 sm:size-52" />
        </div>

        {/* Archival portrait frame with mobile-constrained height */}
        <div className="bookplate-card relative overflow-hidden rounded-[2rem] border border-[#17201d]/15 p-2.5 sm:p-3.5 shadow-[0_24px_60px_rgba(23,32,29,0.12)]">
          <img
            src={trishaPortrait}
            alt="Portrait of Princess Trisha Carias"
            className="aspect-[4/5] max-h-[350px] sm:max-h-none w-full rounded-[1.4rem] object-cover object-top"
          />

          {/* Bookplate location caption badge */}
          <div className="absolute right-4 bottom-4 left-4 sm:right-7 sm:bottom-7 sm:left-7 rounded-xl border border-white/60 bg-[#f4f0e8]/92 p-3 sm:p-4 backdrop-blur-md">
            <p className="font-mono text-[0.62rem] sm:text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#69736f]">
              Location · Academic Focus
            </p>
            <p className="mt-0.5 text-xs font-semibold text-[#17201d] sm:text-sm">
              Cavite, Philippines · B.S. Computer Science
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
