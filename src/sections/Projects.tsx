export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-y border-[#17201d]/15 bg-[#e9e3d8] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[90rem]">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">Learning lab</p>
            <h2 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl">
              Projects I&apos;m building{" "}
              <span className="italic text-[#d24a2c]">next.</span>
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-[#58635f]">
            Two self-initiated case studies designed to turn developing
            skills into practical, visible work.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {/* Project 1: Automated Data File Analyzer */}
          <article className="group overflow-hidden rounded-[2rem] border border-[#17201d]/15 bg-[#f4f0e8]">
            <div className="relative h-72 overflow-hidden bg-[#17201d] p-7 sm:p-9">
              <div className="absolute -right-16 -bottom-28 size-80 rounded-full border border-white/15" />
              <div className="absolute -right-5 -bottom-20 size-56 rounded-full border border-[#e66c4d]/60" />
              <div className="grid h-full grid-cols-7 items-end gap-2">
                {[38, 62, 48, 78, 58, 88, 70].map((height, index) => (
                  <div
                    key={index}
                    className="rounded-t-md bg-[#d7dfd3] transition-all duration-300 group-hover:bg-[#e66c4d]"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <span className="absolute top-7 right-7 rounded-full bg-[#f4f0e8] px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#17201d]">
                In development
              </span>
            </div>
            <div className="p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d24a2c]">
                Python · Data analysis
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                Automated Data File Analyzer
              </h3>
              <p className="mt-4 leading-relaxed text-[#58635f]">
                A tool for validating, cleaning, and summarizing multiple
                data files before producing a clear analysis report.
              </p>
              <div className="mt-7 border-t border-[#17201d]/15 pt-5 text-sm font-semibold">
                Planned output: clean dataset + summary report
              </div>
            </div>
          </article>

          {/* Project 2: Service Workflow Improvement */}
          <article className="group overflow-hidden rounded-[2rem] border border-[#17201d]/15 bg-[#f4f0e8]">
            <div className="relative h-72 overflow-hidden bg-[#d7dfd3] p-7 sm:p-9">
              <div className="grid h-full content-center gap-3">
                {[
                  ["Request received", "01"],
                  ["Review & prioritize", "02"],
                  ["Resolve & report", "03"],
                ].map(([label, number], index) => (
                  <div
                    key={number}
                    className="flex items-center justify-between rounded-xl border border-[#17201d]/15 bg-[#f4f0e8] px-5 py-4 transition-transform duration-300 group-hover:translate-x-2"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <span className="text-sm font-semibold">{label}</span>
                    <span className="text-xs font-semibold text-[#d24a2c]">
                      {number}
                    </span>
                  </div>
                ))}
              </div>
              <span className="absolute top-7 right-7 rounded-full bg-[#17201d] px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                In development
              </span>
            </div>
            <div className="p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d24a2c]">
                Operations · Process design
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                Service Workflow Improvement
              </h3>
              <p className="mt-4 leading-relaxed text-[#58635f]">
                A practical case study mapping an everyday workflow,
                identifying friction, and proposing a simpler process.
              </p>
              <div className="mt-7 border-t border-[#17201d]/15 pt-5 text-sm font-semibold">
                Planned output: process map + recommendation
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
