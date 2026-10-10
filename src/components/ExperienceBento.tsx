import { ArrowRight } from "lucide-react"
import { ExperienceCaseStudy } from "../data/content"

interface ExperienceBentoProps {
  caseStudy: ExperienceCaseStudy
  roleTitle: string
  organization: string
  onOpenPhoto: (index: number) => void
}

export function ExperienceBento({
  caseStudy,
  onOpenPhoto,
}: ExperienceBentoProps) {
  const { headline, challenge, execution, deliverables, takeaway, photos } = caseStudy

  return (
    <div className="mt-6 border-t border-[#17201d]/10 pt-6">
      {/* Bento Header */}
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#d24a2c]">
          Case Study & Field Notes
        </span>
        <span className="font-mono text-xs text-[#58635f]">
          {headline}
        </span>
      </div>

      {/* Responsive Bento Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
        {/* Tile 1: Photos Reel (Spans 7 cols on desktop if photos exist, otherwise omitted) */}
        {photos && photos.length > 0 && (
          <div className="sm:col-span-2 lg:col-span-7 rounded-2xl border border-[#17201d]/10 bg-[#e8e2d5]/60 p-4 sm:p-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#17201d]/10">
              <span className="font-mono text-xs uppercase tracking-wider text-[#17201d] font-semibold">
                📸 Field Artifacts ({photos.length})
              </span>
              <span className="font-mono text-[0.68rem] text-[#69736f] inline-flex items-center gap-1">
                Tap photo for story view <ArrowRight className="size-3" />
              </span>
            </div>

            {/* Photos Strip */}
            <div className="mt-3.5 grid grid-cols-2 gap-3 sm:gap-4">
              {photos.map((photo, idx) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => onOpenPhoto(idx)}
                  className="archival-photo group relative text-left rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer bg-white"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#17201d]/5">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <div className="mt-2.5 px-1 pb-0.5">
                    <p className="font-mono text-xs font-semibold text-[#17201d] truncate">
                      {photo.title}
                    </p>
                    {photo.date && (
                      <span className="font-mono text-[0.65rem] text-[#69736f] block">
                        {photo.date}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tile 2: Friction & Execution (Spans 5 cols on desktop if photos exist, 12 if none) */}
        <div
          className={`sm:col-span-2 ${
            photos && photos.length > 0 ? "lg:col-span-5" : "lg:col-span-12"
          } rounded-2xl border border-[#17201d]/10 bg-white/75 p-4 sm:p-5 flex flex-col justify-between`}
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#d24a2c] font-semibold">
              The Friction & Solution
            </span>
            <div className="mt-3.5 space-y-3.5 text-xs sm:text-sm leading-relaxed text-[#4c5652]">
              <div>
                <strong className="text-[#17201d] font-semibold block font-mono text-[0.7rem] uppercase tracking-wide">
                  The Friction:
                </strong>
                <p className="mt-1">{challenge}</p>
              </div>
              <div>
                <strong className="text-[#17201d] font-semibold block font-mono text-[0.7rem] uppercase tracking-wide">
                  The Execution:
                </strong>
                <p className="mt-1">{execution}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tile 3: Key Deliverables (Spans 6 cols on desktop) */}
        <div className="sm:col-span-1 lg:col-span-6 rounded-2xl border border-[#17201d]/10 bg-white/75 p-4 sm:p-5">
          <span className="font-mono text-xs uppercase tracking-wider text-[#58635f] font-semibold">
            Tangible Deliverables
          </span>
          <ul className="mt-3.5 space-y-2">
            {deliverables.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4c5652]"
              >
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#d24a2c]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tile 4: Takeaway Quote (Spans 6 cols on desktop) */}
        {takeaway && (
          <div className="sm:col-span-1 lg:col-span-6 rounded-2xl border border-[#17201d]/10 bg-[#f4f0e8] p-4 sm:p-5 flex flex-col justify-center">
            <span className="font-mono text-xs uppercase tracking-wider text-[#58635f] font-semibold">
              Field Reflection
            </span>
            <blockquote className="mt-2.5 text-xs sm:text-sm italic text-[#17201d] leading-relaxed">
              "{takeaway}"
            </blockquote>
          </div>
        )}
      </div>
    </div>
  )
}
