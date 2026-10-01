import { WORKFLOW_STEPS } from "../data/content"

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[90rem]">
        <div className="grid gap-10 lg:grid-cols-[.62fr_1.38fr]">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 className="mt-6 font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl">
              Learning by
              <br />
              <span className="italic text-[#d24a2c]">doing.</span>
            </h2>
          </div>

          <article className="overflow-hidden rounded-[2rem] border border-[#17201d]/15 bg-[#e9e3d8]">
            <div className="grid gap-8 border-b border-[#17201d]/15 p-7 sm:p-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#d24a2c]">
                  Professional experience
                </p>
                <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Data Analyst Intern
                </h3>
                <p className="mt-2 text-lg text-[#58635f]">SP Madrid</p>
              </div>
              <div className="h-fit rounded-full border border-[#17201d]/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider">
                Jun — Aug 2026
              </div>
            </div>

            <div className="p-7 sm:p-10">
              <p className="max-w-3xl text-lg leading-relaxed text-[#4c5652]">
                Working under the direct supervision of a data analyst, I
                supported data cleaning and reporting and wrote Python
                automation programs for analyzing data files.
              </p>

              <div className="mt-10">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#69736f]">
                  My workflow
                </p>
                <div className="grid gap-2 sm:grid-cols-4">
                  {WORKFLOW_STEPS.map(([number, label], index) => (
                    <div
                      key={number}
                      className="relative rounded-xl border border-[#17201d]/15 bg-[#f4f0e8] p-4"
                    >
                      <span className="text-xs font-semibold text-[#d24a2c]">
                        {number}
                      </span>
                      <p className="mt-7 text-sm font-semibold">{label}</p>
                      {index < 3 && (
                        <span
                          aria-hidden="true"
                          className="absolute top-1/2 -right-3 z-10 hidden size-6 -translate-y-1/2 place-items-center rounded-full bg-[#17201d] text-xs text-white sm:grid"
                        >
                          →
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-16 grid gap-10 border-t border-[#17201d]/20 pt-12 lg:grid-cols-[.62fr_1.38fr]">
          <p className="eyebrow">Education</p>
          <div className="grid gap-6 sm:grid-cols-[1fr_auto]">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Bachelor of Science in Computer Science
              </h3>
              <p className="mt-3 text-lg text-[#58635f]">
                Cavite State University
              </p>
            </div>
            <span className="h-fit rounded-full border border-[#17201d]/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider">
              Expected 2027
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
