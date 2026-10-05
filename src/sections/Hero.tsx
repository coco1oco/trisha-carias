import { Arrow } from "../components/Arrow"
import { SOCIAL_LINKS } from "../data/content"
import trishaPortrait from "../assets/trisha-carias.jpg"

export function Hero() {
  return (
    <section className="relative mx-auto grid max-w-[90rem] overflow-x-clip gap-14 px-5 pt-16 pb-20 sm:px-8 lg:min-h-[calc(100vh-73px)] lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:px-12 lg:py-20">
      <div className="relative z-10">
        <p className="mb-5 font-serif text-2xl italic text-[#d24a2c] sm:text-3xl">
          Hello, I&apos;m Trisha.
        </p>
        <h1 className="max-w-4xl font-serif text-[clamp(2.4rem,6.8vw,6.8rem)] font-medium tracking-[-0.055em] leading-[1.02] sm:leading-[0.92]">
          I turn untidy data into{" "}
          <span className="italic text-[#d24a2c]">clear next steps.</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#4c5652] sm:text-xl">
          Computer Science student, aspiring data analyst, and curious
          problem solver building with Python and Excel.
        </p>

        <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href="#experience"
            className="group flex min-h-[48px] w-full items-center justify-center gap-4 rounded-full bg-[#17201d] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#d24a2c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d24a2c] active:scale-[0.98] sm:w-fit"
          >
            View my experience
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-y-1"
            >
              ↓
            </span>
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex min-h-[48px] w-full items-center justify-center gap-4 rounded-full border border-[#17201d]/30 px-6 py-3.5 text-sm font-semibold transition hover:border-[#17201d] hover:bg-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17201d] active:scale-[0.98] sm:w-fit"
          >
            LinkedIn
            <Arrow />
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-lg lg:justify-self-end">
        {/* Decorative background circles contained to prevent viewport overflow */}
        <div className="pointer-events-none absolute -inset-4 overflow-hidden rounded-[2.5rem] sm:-inset-8 sm:overflow-visible">
          <div className="absolute -top-3 -right-3 size-36 rounded-full border border-[#d24a2c]/40 sm:-top-8 sm:-right-8 sm:size-40" />
          <div className="absolute -bottom-3 -left-3 size-44 rounded-full bg-[#d7dfd3] sm:-bottom-8 sm:-left-8 sm:size-52" />
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-[#17201d]/15 bg-[#e8ded1] p-3 shadow-[0_30px_80px_rgba(23,32,29,0.14)]">
          <img
            src={trishaPortrait}
            alt="Portrait of Trisha Carias"
            className="aspect-[4/5] w-full rounded-[1.4rem] object-cover object-top"
          />
          <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between rounded-2xl border border-white/60 bg-[#f4f0e8]/90 p-3.5 backdrop-blur-md sm:right-7 sm:bottom-7 sm:left-7 sm:p-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#69736f]">
                Based in
              </p>
              <p className="mt-0.5 text-sm font-semibold text-[#17201d] sm:mt-1 sm:text-base">
                Cavite, Philippines
              </p>
            </div>
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#d24a2c] text-white sm:size-10">
              ↗
            </span>
          </div>
        </div>
        <span className="absolute top-10 -left-8 hidden -rotate-6 rounded-full bg-[#17201d] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white sm:block">
          Curious by nature
        </span>
      </div>
    </section>
  )
}
