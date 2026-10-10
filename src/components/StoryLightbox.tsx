import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { ArtifactPhoto } from "../data/content"

interface StoryLightboxProps {
  photos: ArtifactPhoto[]
  initialIndex?: number
  roleTitle: string
  organization: string
  onClose: () => void
}

export function StoryLightbox({
  photos,
  initialIndex = 0,
  roleTitle,
  organization,
  onClose,
}: StoryLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const activePhoto = photos[currentIndex]
  const total = photos.length

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : total - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < total - 1 ? prev + 1 : 0))
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") handlePrev()
      if (e.key === "ArrowRight") handleNext()
    }

    // Stop Lenis momentum scrolling while photo is open
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis
    lenis?.stop()

    // Lock native document scroll
    const origBodyOverflow = document.body.style.overflow
    const origHtmlOverflow = document.documentElement.style.overflow
    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"

    // Intercept wheel & touchmove so background cannot scroll on mobile or desktop
    const preventScroll = (e: Event) => {
      e.preventDefault()
    }
    window.addEventListener("wheel", preventScroll, { passive: false })
    window.addEventListener("touchmove", preventScroll, { passive: false })

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("wheel", preventScroll)
      window.removeEventListener("touchmove", preventScroll)
      document.body.style.overflow = origBodyOverflow
      document.documentElement.style.overflow = origHtmlOverflow
      lenis?.start()
    }
  }, [currentIndex, total, onClose])

  if (!activePhoto) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      data-lenis-prevent="true"
      aria-label={`${activePhoto.title} - ${organization}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 sm:bg-[#17201d]/90 sm:backdrop-blur-md p-0 sm:p-6 select-none"
      onClick={(e) => {
        // Close if clicking outside the card container (desktop)
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="relative flex flex-col w-full h-[100dvh] sm:h-[90vh] sm:max-h-[820px] sm:max-w-xl bg-[#1d2623] text-white rounded-none sm:rounded-3xl overflow-hidden border-0 sm:border sm:border-white/10 shadow-2xl">
        {/* Top Story Header & Segmented Progress Bars */}
        <div className="relative z-20 flex flex-col gap-2.5 sm:gap-3 p-3.5 sm:p-4 pt-4 sm:pt-4 bg-gradient-to-b from-black/90 via-black/60 to-transparent">
          {/* Progress Segments */}
          <div className="flex gap-1.5 w-full">
            {photos.map((photo, idx) => (
              <div
                key={photo.id}
                className="h-1 flex-1 rounded-full overflow-hidden bg-white/25"
              >
                <div
                  className={`h-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "bg-white"
                      : idx < currentIndex
                        ? "bg-white/70"
                        : "bg-transparent"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Header Info & Close Button */}
          <div className="flex items-center justify-between">
            <div>
              <span className="font-mono text-[0.68rem] uppercase tracking-wider text-[#d24a2c] font-semibold">
                {organization}
              </span>
              <p className="text-xs text-white/80 font-medium">
                {roleTitle} · {currentIndex + 1} of {total}
              </p>
            </div>
            <button
              onClick={onClose}
              className="size-8 rounded-full bg-white/15 hover:bg-white/25 transition-colors text-white flex items-center justify-center cursor-pointer"
              aria-label="Close photo viewer"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* Media Canvas & Story Tap Navigation Zones */}
        <div className="relative flex-1 flex items-center justify-center overflow-hidden bg-black/40">
          <img
            key={activePhoto.id}
            src={activePhoto.src}
            alt={activePhoto.title}
            className="w-full h-full object-contain max-h-[66vh] sm:max-h-[62vh] select-none pointer-events-none"
          />

          {/* Left 40% Tap Zone (Previous) */}
          <button
            onClick={handlePrev}
            className="absolute inset-y-0 left-0 w-[40%] z-10 cursor-pointer focus:outline-none"
            aria-label="Previous photo"
          />

          {/* Right 40% Tap Zone (Next) */}
          <button
            onClick={handleNext}
            className="absolute inset-y-0 right-0 w-[40%] z-10 cursor-pointer focus:outline-none"
            aria-label="Next photo"
          />

          {/* Subtle Visual Chevrons for desktop click hint */}
          {total > 1 && (
            <>
              <div
                aria-hidden="true"
                className="hidden sm:flex absolute left-3 z-10 size-9 rounded-full bg-black/50 border border-white/20 items-center justify-center pointer-events-none text-white"
              >
                <ChevronLeft className="size-5" />
              </div>
              <div
                aria-hidden="true"
                className="hidden sm:flex absolute right-3 z-10 size-9 rounded-full bg-black/50 border border-white/20 items-center justify-center pointer-events-none text-white"
              >
                <ChevronRight className="size-5" />
              </div>
            </>
          )}
        </div>

        {/* Bottom Metadata Drawer */}
        <div className="relative z-20 p-3.5 sm:p-5 bg-gradient-to-t from-black/95 via-black/80 to-transparent pb-6 sm:pb-5">
          <div className="flex items-baseline justify-between gap-2">
            <h4 className="text-base sm:text-lg font-semibold text-white tracking-tight">
              {activePhoto.title}
            </h4>
            {activePhoto.date && (
              <span className="font-mono text-xs text-[#bac7be]">
                {activePhoto.date}
              </span>
            )}
          </div>
          {activePhoto.caption && (
            <p className="mt-1 text-xs sm:text-sm text-white/80 leading-relaxed">
              {activePhoto.caption}
            </p>
          )}
          <div className="mt-2.5 flex items-center justify-between text-[0.65rem] font-mono text-white/45 uppercase tracking-wider">
            <span>Tap left for previous</span>
            <span>Tap right for next</span>
          </div>
        </div>
      </div>
    </div>
  )
}
