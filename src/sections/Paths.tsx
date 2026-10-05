import { CAREER_PATHS } from "../data/content"

export function Paths() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[90rem]">
        <div className="mb-10 sm:mb-14 grid gap-6 sm:gap-8 lg:grid-cols-[.62fr_1.38fr]">
          <p className="eyebrow">Looking ahead</p>
          <h2 className="max-w-4xl font-serif text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
            A clear starting point,{" "}
            <span className="italic text-[#d24a2c]">
              with room to explore.
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-0 md:border-t md:border-l md:border-[#17201d]/20">
          {CAREER_PATHS.map((path) => (
            <article
              key={path.number}
              className="group min-h-0 rounded-2xl border border-[#17201d]/15 bg-[#f4f0e8] p-6 transition-colors hover:bg-[#d7dfd3] md:min-h-80 md:rounded-none md:border-t-0 md:border-l-0 md:border-r md:border-b md:border-[#17201d]/20 md:bg-transparent md:p-9"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-[#d24a2c]">
                {path.number}
              </p>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight md:mt-20">
                {path.title}
              </h3>
              <p className="mt-3 leading-relaxed text-[#58635f] sm:mt-4">
                {path.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
