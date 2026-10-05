import { useState } from "react"
import { WORKFLOW_STEPS } from "../data/content"
import spmPhoto1 from "../assets/spm-internship (1).jpg"
import spmPhoto2 from "../assets/spm-internship (2).jpg"

const INTERNSHIP_PHOTOS = [
  {
    src: spmPhoto2,
    alt: "Trisha Carias holding her internship certificate at S.P.Madrid",
    caption: "Certificate day",
  },
  {
    src: spmPhoto1,
    alt: "Intern team group photo at S.P.Madrid office",
    caption: "With the team",
  }
]

export function Experience() {
  const [activePhoto, setActivePhoto] = useState(0)

  return (
    <section
      id="experience"
      className="scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
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

          <article className="overflow-hidden rounded-2xl border border-[#17201d]/15 bg-[#e9e3d8] sm:rounded-[2rem]">
            <div className="grid gap-6 border-b border-[#17201d]/15 p-5 sm:gap-8 sm:p-7 lg:grid-cols-[1fr_auto] lg:p-10">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#d24a2c]">
                  Professional experience
                </p>
                <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Data Analyst Intern
                </h3>
                <p className="mt-2 text-lg text-[#58635f]">SP Madrid</p>
              </div>
              <div className="w-fit h-fit rounded-full border border-[#17201d]/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider">
                Jun — Aug 2026
              </div>
            </div>

            <div className="p-5 sm:p-7 lg:p-10">
              <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-[#4c5652]">
                Working under the direct supervision of a data analyst, I
                supported data cleaning and reporting and wrote Python
                automation programs for analyzing data files.
              </p>

              {/* Internship photo gallery */}
              <div className="mt-8 sm:mt-10">
                <p className="mb-4 sm:mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#69736f]">
                  Moments from the internship
                </p>

                {/* Main photo display */}
                <div className="relative overflow-hidden rounded-2xl border border-[#17201d]/10 bg-[#17201d]/5">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    {INTERNSHIP_PHOTOS.map((photo, index) => (
                      <img
                        key={index}
                        src={photo.src}
                        alt={photo.alt}
                        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out"
                        style={{ opacity: activePhoto === index ? 1 : 0 }}
                      />
                    ))}
                  </div>

                  {/* Caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#17201d]/70 to-transparent px-6 pb-5 pt-12">
                    <p className="text-sm font-medium text-white/90">
                      {INTERNSHIP_PHOTOS[activePhoto].caption}
                    </p>
                  </div>
                </div>

                {/* Thumbnail selector */}
                <div className="mt-3 flex gap-2">
                  {INTERNSHIP_PHOTOS.map((photo, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`View photo ${index + 1}: ${photo.caption}`}
                      onClick={() => setActivePhoto(index)}
                      className={`relative h-16 w-24 overflow-hidden rounded-lg border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d24a2c] focus-visible:ring-offset-2 sm:h-20 sm:w-28 ${activePhoto === index
                          ? "border-[#d24a2c] shadow-md"
                          : "border-transparent opacity-60 hover:opacity-90"
                        }`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 sm:mt-10">
                <p className="mb-4 sm:mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#69736f]">
                  My workflow
                </p>
                <div className="flex flex-col sm:grid sm:grid-cols-4 sm:gap-2">
                  {WORKFLOW_STEPS.map(([number, label], index) => (
                    <div key={number} className="flex flex-col sm:block">
                      <div className="relative rounded-xl border border-[#17201d]/15 bg-[#f4f0e8] p-5 sm:p-7">
                        <span className="text-xs font-semibold text-[#d24a2c]">
                          {number}
                        </span>
                        <p className="mt-4 sm:mt-7 text-sm font-semibold">{label}</p>
                        {index < 3 && (
                          <span
                            aria-hidden="true"
                            className="absolute top-1/2 -right-3 z-10 hidden size-6 -translate-y-1/2 place-items-center rounded-full bg-[#17201d] text-xs text-white sm:grid"
                          >
                            →
                          </span>
                        )}
                      </div>
                      {index < 3 && (
                        <div
                          aria-hidden="true"
                          className="my-1.5 block text-center text-sm font-bold text-[#d24a2c] sm:hidden"
                        >
                          ↓
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-10 border-t border-[#17201d]/20 pt-8 sm:pt-12 lg:grid-cols-[.62fr_1.38fr]">
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
            <span className="w-fit h-fit rounded-full border border-[#17201d]/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider">
              Expected 2027
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
