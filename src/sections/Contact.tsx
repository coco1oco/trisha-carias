import { Arrow } from "../components/Arrow"
import { SOCIAL_LINKS } from "../data/content"
import resumePdf from "../assets/Carias_PrincessTrisha_CV.pdf"

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#d24a2c] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="pointer-events-none absolute -right-24 -bottom-72 size-[42rem] rounded-full border border-white/25" />
      <div className="pointer-events-none absolute right-28 -bottom-56 size-[32rem] rounded-full border border-white/15" />
      <div className="relative mx-auto max-w-[90rem]">
        <p className="eyebrow text-white/75">Let&apos;s connect</p>
        <div className="mt-8 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
          <div>
            <h2 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Let&apos;s find the next
              <br />
              question worth solving.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
              I&apos;m looking for opportunities to learn, contribute, and
              turn information into meaningful action.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex w-fit items-center gap-5 rounded-full bg-[#17201d] px-7 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-1"
            >
              Connect on LinkedIn
              <Arrow />
            </a>
            <a
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              className="group flex w-fit items-center gap-5 rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-1 hover:border-white/70"
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
