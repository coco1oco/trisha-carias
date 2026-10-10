import { useEffect, useRef } from "react"
import { Arrow } from "../components/Arrow"
import { SOCIAL_LINKS } from "../data/content"
import resumePdf from "../assets/Carias_PrincessTrisha_CV.pdf"
import { gsap, ScrollTrigger, isReducedMotion } from "../utils/animations"

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isReducedMotion()) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 92%",
          },
        }
      )

      if (buttonsRef.current) {
        gsap.fromTo(
          buttonsRef.current.children,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: buttonsRef.current,
              start: "top 92%",
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
      id="contact"
      className="scroll-mt-0 relative overflow-hidden bg-[#d24a2c] px-5 pt-20 pb-16 text-white sm:px-8 sm:pt-32 sm:pb-24 lg:px-12 lg:pt-44 lg:pb-36"
    >
      {/* Decorative bookish ring motifs */}
      <div className="pointer-events-none absolute -right-24 -bottom-72 size-[42rem] rounded-full border border-white/20" />
      <div className="pointer-events-none absolute right-28 -bottom-56 size-[32rem] rounded-full border border-white/10" />

      <div className="relative mx-auto max-w-[90rem]">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            Epilogue · Let&apos;s Connect
          </span>
          <span className="h-px w-8 bg-white/30" aria-hidden="true" />
        </div>

        <div className="mt-8 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            {/* Unified headline in pure Instrument Serif */}
            <h2
              ref={headingRef}
              className="font-serif text-4xl font-normal leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-7xl"
            >
              Let&apos;s write the next chapter together.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Open to project management, technical writing, product operations,
              and high-agency opportunities where rapid learning, clear
              communication, and structured execution make a real difference.
            </p>
          </div>

          <div
            ref={buttonsRef}
            className="flex w-full shrink-0 flex-col gap-3.5 sm:w-auto sm:flex-row"
          >
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[50px] w-full items-center justify-between gap-4 rounded-full bg-[#17201d] px-7 py-3.5 text-sm font-semibold text-[#f4f0e8] transition-all duration-200 hover:-translate-y-0.5 hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98] sm:w-fit sm:justify-start"
            >
              Connect on LinkedIn
              <Arrow />
            </a>
            <a
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[50px] w-full items-center justify-between gap-4 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98] sm:w-fit sm:justify-start"
            >
              Download Résumé
              <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
