import { useState } from "react"

const DATA_ANALYZER_BATCHES = [
  {
    shortLabel: "B1",
    label: "File 01",
    height: 38,
    rows: "840 rows",
    clean: "99.4%",
    time: "1.8s",
    status: "Validated",
  },
  {
    shortLabel: "B2",
    label: "File 02",
    height: 62,
    rows: "1,420 rows",
    clean: "99.8%",
    time: "3.2s",
    status: "Cleaned",
  },
  {
    shortLabel: "B3",
    label: "File 03",
    height: 48,
    rows: "1,110 rows",
    clean: "99.1%",
    time: "2.4s",
    status: "Validated",
  },
  {
    shortLabel: "B4",
    label: "File 04",
    height: 78,
    rows: "2,050 rows",
    clean: "99.9%",
    time: "4.5s",
    status: "Optimized",
  },
  {
    shortLabel: "B5",
    label: "File 05",
    height: 58,
    rows: "1,350 rows",
    clean: "99.6%",
    time: "2.9s",
    status: "Cleaned",
  },
  {
    shortLabel: "B6",
    label: "File 06",
    height: 88,
    rows: "2,480 rows",
    clean: "99.7%",
    time: "5.1s",
    status: "Optimized",
  },
  {
    shortLabel: "B7",
    label: "File 07",
    height: 70,
    rows: "1,890 rows",
    clean: "99.8%",
    time: "3.8s",
    status: "Cleaned",
  },
] as const

const PROJECT_1_TECHS = [
  "Python",
  "Pandas",
  "Automated Cleaning",
  "Summary Reports",
] as const

const WORKFLOW_STAGES = [
  {
    number: "01",
    label: "Request received",
    desc: "Intake logging & categorization",
    metric: "100% captured",
  },
  {
    number: "02",
    label: "Review & prioritize",
    desc: "Triage rules & friction audit",
    metric: "40% faster triage",
  },
  {
    number: "03",
    label: "Resolve & report",
    desc: "Automated closure & KPI export",
    metric: "-65% manual effort",
  },
] as const

const PROJECT_2_METHODOLOGIES = [
  "Process Mapping",
  "Friction Audit",
  "Ops Optimization",
] as const

export function Projects() {
  const [activeBarIndex, setActiveBarIndex] = useState(1)
  const [activeStageIndex, setActiveStageIndex] = useState(0)

  const activeBar = DATA_ANALYZER_BATCHES[activeBarIndex]

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-y border-[#17201d]/15 bg-[#e9e3d8] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
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
          <article className="group flex flex-col justify-between overflow-hidden rounded-[2rem] border border-[#17201d]/15 bg-[#f4f0e8] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(23,32,29,0.08)]">
            <div className="relative overflow-hidden bg-[#17201d] p-6 sm:p-8">
              {/* Background ambient circular rings */}
              <div className="pointer-events-none absolute -right-16 -bottom-28 size-80 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -right-5 -bottom-20 size-56 rounded-full border border-[#e66c4d]/40" />

              {/* Header row */}
              <div className="relative flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#e66c4d] animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-wider text-white/70">
                    Batch Inspector · {activeBar.label}
                  </span>
                </div>
                <span className="rounded-full bg-[#f4f0e8] px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#17201d]">
                  In development
                </span>
              </div>

              {/* Dynamic metrics readout */}
              <div className="relative mt-5 grid grid-cols-3 gap-2 rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur-sm">
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-white/60">
                    Rows Processed
                  </span>
                  <span className="font-mono text-xs font-semibold text-white sm:text-sm">
                    {activeBar.rows}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-white/60">
                    Clean Rate
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#8de2b7] sm:text-sm">
                    {activeBar.clean}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-white/60">
                    Runtime
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#f5b19e] sm:text-sm">
                    {activeBar.time}
                  </span>
                </div>
              </div>

              {/* Interactive simulated histogram */}
              <div className="relative mt-6">
                <div className="grid h-36 grid-cols-7 items-end gap-1.5 sm:gap-2 sm:h-40">
                  {DATA_ANALYZER_BATCHES.map((batch, index) => {
                    const isActive = activeBarIndex === index
                    return (
                      <button
                        key={batch.shortLabel}
                        type="button"
                        aria-label={`${batch.label}: ${batch.rows}, clean rate ${batch.clean}, runtime ${batch.time}`}
                        onClick={() => setActiveBarIndex(index)}
                        onMouseEnter={() => setActiveBarIndex(index)}
                        onFocus={() => setActiveBarIndex(index)}
                        className="group/bar relative flex h-full flex-col items-center justify-end rounded-t-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e66c4d]"
                      >
                        <div
                          className={`w-full rounded-t-md transition-all duration-300 ${isActive
                              ? "bg-[#e66c4d] shadow-[0_0_16px_rgba(230,108,77,0.7)]"
                              : "bg-[#d7dfd3]/70 hover:bg-[#d7dfd3]"
                            }`}
                          style={{ height: `${batch.height}%` }}
                        />
                        <span
                          className={`mt-2 font-mono text-[10px] transition-colors ${isActive
                              ? "font-bold text-[#e66c4d]"
                              : "text-white/60 group-hover/bar:text-white"
                            }`}
                        >
                          {batch.shortLabel}
                        </span>
                      </button>
                    )
                  })}
                </div>
                <p className="mt-2 text-center text-[11px] text-white/50">
                  Hover or tap any bar to inspect dataset metrics
                </p>
              </div>
            </div>

            {/* Content body */}
            <div className="flex flex-1 flex-col justify-between p-7 sm:p-9">
              <div>
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

                {/* Technology badge pills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {PROJECT_1_TECHS.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#17201d]/15 bg-[#17201d]/5 px-3 py-1 text-xs font-medium text-[#17201d]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 border-t border-[#17201d]/15 pt-5 text-sm font-semibold">
                Planned output: clean dataset + summary report
              </div>
            </div>
          </article>

          {/* Project 2: Service Workflow Improvement */}
          <article className="group flex flex-col justify-between overflow-hidden rounded-[2rem] border border-[#17201d]/15 bg-[#f4f0e8] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(23,32,29,0.08)]">
            <div className="relative overflow-hidden bg-[#d7dfd3] p-6 sm:p-8">
              {/* Header row */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#d24a2c]" />
                  <span className="font-mono text-xs uppercase tracking-wider text-[#17201d]/80">
                    Stage 0{activeStageIndex + 1} of 03
                  </span>
                </div>
                <span className="rounded-full bg-[#17201d] px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                  In development
                </span>
              </div>

              {/* Progress bar connecting stages 01 -> 02 -> 03 */}
              <div className="relative mt-4 mb-5">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#17201d]/15">
                  <div
                    className="h-full bg-[#d24a2c] transition-all duration-500 ease-out"
                    style={{ width: `${((activeStageIndex + 1) / 3) * 100}%` }}
                  />
                </div>
                <div className="mt-2 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-[#17201d]/70">
                  <span>01 Intake</span>
                  <span>02 Triage</span>
                  <span>03 Resolution</span>
                </div>
              </div>

              {/* Interactive stage cards */}
              <div className="grid gap-2.5">
                {WORKFLOW_STAGES.map((stage, index) => {
                  const isActive = activeStageIndex === index
                  return (
                    <button
                      key={stage.number}
                      type="button"
                      aria-label={`Workflow stage ${stage.number}: ${stage.label}`}
                      onClick={() => setActiveStageIndex(index)}
                      onMouseEnter={() => setActiveStageIndex(index)}
                      onFocus={() => setActiveStageIndex(index)}
                      className={`flex w-full items-center justify-between rounded-xl border p-3.5 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d24a2c] ${isActive
                          ? "border-[#d24a2c] bg-[#f4f0e8] shadow-sm translate-x-1.5"
                          : "border-[#17201d]/15 bg-[#f4f0e8]/80 hover:bg-[#f4f0e8] hover:translate-x-1"
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${isActive
                              ? "bg-[#d24a2c] text-white"
                              : "bg-[#17201d]/10 text-[#17201d]"
                            }`}
                        >
                          {stage.number}
                        </span>
                        <div>
                          <span className="block text-sm font-semibold text-[#17201d]">
                            {stage.label}
                          </span>
                          <span className="block text-xs text-[#58635f]">
                            {stage.desc}
                          </span>
                        </div>
                      </div>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${isActive
                            ? "bg-[#d24a2c]/10 text-[#d24a2c]"
                            : "text-[#58635f]"
                          }`}
                      >
                        {stage.metric}
                      </span>
                    </button>
                  )
                })}
              </div>
              <p className="mt-2 text-center text-[11px] text-[#17201d]/60">
                Hover or select a stage to inspect workflow progress
              </p>
            </div>

            {/* Content body */}
            <div className="flex flex-1 flex-col justify-between p-7 sm:p-9">
              <div>
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

                {/* Methodology badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {PROJECT_2_METHODOLOGIES.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-[#17201d]/15 bg-[#17201d]/5 px-3 py-1 text-xs font-medium text-[#17201d]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

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
