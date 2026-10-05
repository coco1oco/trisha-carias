import { Arrow } from "../components/Arrow"
import { SOCIAL_LINKS } from "../data/content"
import resumePdf from "../assets/Carias_PrincessTrisha_CV.pdf"

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#d24a2c] px-5 py-16 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div className="pointer-events-none absolute -right-24 -bottom-72 size-[42rem] rounded-full border border-white/25" />
      <div className="pointer-events-none absolute right-28 -bottom-56 size-[32rem] rounded-full border border-white/15" />
      <div className="relative mx-auto max-w-[90rem]">
        <p className="eyebrow text-white/75">Let&apos;s connect</p>
        <div className="mt-8 flex flex-col justify-between gap-10 sm:gap-12 lg:flex-row lg:items-end">
          <div>
            <h2 className="max-w-4xl font-serif text-4xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Let&apos;s find the next
              <br />
              question worth solving.
            </h2>
            <p className="mt-5 sm:mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-white/75">
              I&apos;m looking for opportunities to learn, contribute, and
              turn information into meaningful action.
            </p>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-3.5 sm:w-auto sm:flex-row">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[48px] w-full items-center justify-between gap-5 rounded-full bg-[#17201d] px-7 py-4 text-sm font-semibold text-white transition-transform duration-150 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98] sm:w-fit sm:justify-start"
            >
              Connect on LinkedIn
              <Arrow />
            </a>
            <a
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[48px] w-full items-center justify-between gap-5 rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white transition-transform duration-150 hover:-translate-y-1 hover:border-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98] sm:w-fit sm:justify-start"
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
