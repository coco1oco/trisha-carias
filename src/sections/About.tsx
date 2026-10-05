import { STRENGTHS } from "../data/content"

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-[#17201d] px-5 py-16 text-[#f4f0e8] sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto grid max-w-[90rem] gap-10 sm:gap-16 lg:grid-cols-[.62fr_1.38fr]">
        <div>
          <p className="eyebrow text-[#bac7be]">About me</p>
          <div className="mt-6 sm:mt-10 w-fit rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#bac7be]">
            BS Computer Science · 2027
          </div>
        </div>
        <div>
          <h2 className="max-w-5xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Analytical enough to find the pattern.{" "}
            <span className="italic text-[#e66c4d]">
              Curious enough to ask why it matters.
            </span>
          </h2>
          <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 border-t border-white/20 pt-8 text-base sm:text-lg leading-relaxed text-[#bac7be] sm:grid-cols-2">
            <p>
              I&apos;m a fourth-year Computer Science student at Cavite
              State University, developing a practical foundation in data,
              technology, and structured problem-solving.
            </p>
            <p>
              My internship gave me a first look at how careful data work
              supports real decisions. I&apos;m now exploring where those
              skills can make the greatest impact.
            </p>
          </div>

          <div className="mt-8 sm:mt-12 flex flex-wrap gap-2.5 sm:gap-3">
            {STRENGTHS.map((strength) => (
              <span
                key={strength}
                className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-[#dfe5df]"
              >
                {strength}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
