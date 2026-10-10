import { useEffect, useState } from "react"
import { X, ArrowUpRight, FileText, Mail } from "lucide-react"
import { NAV_ITEMS, SOCIAL_LINKS } from "../data/content"
import resumePdf from "../assets/Carias_PrincessTrisha_CV.pdf"

interface MobileNavDrawerProps {
  isOpen: boolean
  activeSection: string
  onClose: () => void
}

export function MobileNavDrawer({
  isOpen,
  activeSection,
  onClose,
}: MobileNavDrawerProps) {
  const [mounted, setMounted] = useState(isOpen)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setMounted(true)
      const timer = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true)
        })
      })
      return () => cancelAnimationFrame(timer)
    } else {
      setIsAnimating(false)
      const timer = setTimeout(() => {
        setMounted(false)
      }, 320)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    // Stop Lenis momentum scrolling while drawer is open
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis
    lenis?.stop()

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = originalOverflow
      lenis?.start()
    }
  }, [isOpen, onClose])

  if (!mounted) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className={`fixed inset-0 z-50 flex justify-end bg-[#17201d]/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
        isAnimating ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className={`relative flex flex-col justify-between w-full max-w-sm sm:max-w-md h-full bg-[#f4f0e8] text-[#17201d] p-6 sm:p-8 shadow-2xl overflow-y-auto transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isAnimating ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top Header Row */}
        <div className="flex items-center justify-between border-b border-[#17201d]/10 pb-5">
          <div>
            <span className="font-serif text-lg font-normal tracking-tight">
              Princess Trisha Carias<span className="text-[#d24a2c]">.</span>
            </span>
            <p className="font-mono text-[0.65rem] uppercase tracking-wider text-[#69736f]">
              Portfolio Menu
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex size-10 items-center justify-center rounded-full border border-[#17201d]/15 bg-white/60 hover:bg-white text-[#17201d] transition-transform active:scale-90 cursor-pointer"
            aria-label="Close navigation menu"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Navigation Chapter Links with staggered transition */}
        <nav className="my-8 flex flex-col gap-3.5" aria-label="Mobile Navigation">
          {NAV_ITEMS.map((item, idx) => {
            const isActive = activeSection === item.href.replace("#", "")
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                style={{
                  transitionDelay: isAnimating ? `${idx * 45 + 80}ms` : "0ms",
                }}
                className={`group flex items-baseline justify-between rounded-xl px-4 py-3 font-serif text-2xl transition-all duration-300 ${
                  isAnimating
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-6"
                } ${
                  isActive
                    ? "bg-[#17201d] text-[#f4f0e8]"
                    : "hover:bg-[#17201d]/8 text-[#17201d]"
                }`}
              >
                <div className="flex items-baseline gap-3">
                  <span
                    className={`font-mono text-xs font-semibold ${
                      isActive ? "text-[#d24a2c]" : "text-[#69736f]"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <span>{item.label}</span>
                </div>
                <ArrowUpRight
                  className={`size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    isActive ? "text-white" : "text-[#69736f]"
                  }`}
                />
              </a>
            )
          })}
        </nav>

        {/* Footer Actions & Direct Links */}
        <div
          style={{
            transitionDelay: isAnimating ? "260ms" : "0ms",
          }}
          className={`border-t border-[#17201d]/10 pt-6 space-y-4 transition-all duration-300 ${
            isAnimating
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <div className="grid grid-cols-2 gap-3">
            <a
              href="#contact"
              onClick={onClose}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#d24a2c] px-4 py-3 font-mono text-xs font-semibold text-white transition-all hover:opacity-90 active:scale-95 cursor-pointer shadow-xs"
            >
              <span>Let's talk</span>
              <ArrowUpRight className="size-3.5" />
            </a>

            <a
              href={resumePdf}
              download="Princess_Trisha_Carias_CV.pdf"
              className="flex items-center justify-center gap-2 rounded-xl border border-[#17201d]/20 bg-white/70 px-4 py-3 font-mono text-xs font-semibold text-[#17201d] transition-all hover:bg-white active:scale-95 cursor-pointer"
            >
              <FileText className="size-3.5 text-[#d24a2c]" />
              <span>Resume</span>
            </a>
          </div>

          <div className="flex items-center justify-between pt-2 px-1 text-xs text-[#58635f]">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#17201d] transition-colors"
            >
              <svg className="size-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href={SOCIAL_LINKS.email}
              className="inline-flex items-center gap-1.5 hover:text-[#17201d] transition-colors"
            >
              <Mail className="size-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
