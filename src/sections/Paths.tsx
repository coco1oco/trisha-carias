import { CAREER_PATHS } from "../data/content"

export function Paths() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[90rem]">
        <div className="mb-14 grid gap-8 lg:grid-cols-[.62fr_1.38fr]">
          <p className="eyebrow">Looking ahead</p>
          <h2 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl">
            A clear starting point,{" "}
            <span className="italic text-[#d24a2c]">
              with room to explore.
            </span>
          </h2>
        </div>

        <div className="grid border-t border-l border-[#17201d]/20 md:grid-cols-3">
          {CAREER_PATHS.map((path) => (
            <article
              key={path.number}
              className="group min-h-80 border-r border-b border-[#17201d]/20 p-7 transition-colors hover:bg-[#d7dfd3] sm:p-9"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-[#d24a2c]">
                {path.number}
              </p>
              <h3 className="mt-20 text-2xl font-semibold tracking-tight">
                {path.title}
              </h3>
              <p className="mt-4 leading-relaxed text-[#58635f]">
                {path.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
