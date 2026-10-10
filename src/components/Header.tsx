import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Menu } from "lucide-react"
import { NAV_ITEMS } from "../data/content"
import { MobileNavDrawer } from "./MobileNavDrawer"

interface HeaderProps {
  activeSection: string
}

export function Header({ activeSection }: HeaderProps) {
  const navItems = NAV_ITEMS
  const [isVisible, setIsVisible] = useState(true)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          const delta = currentScrollY - lastScrollY.current

          // Always visible near top of page
          if (currentScrollY <= 60) {
            setIsVisible(true)
          } else if (delta > 8) {
            // Scrolling down -> retract (unless mobile drawer is open)
            if (!isDrawerOpen) setIsVisible(false)
          } else if (delta < -8) {
            // Scrolling up -> reveal
            setIsVisible(true)
          }

          lastScrollY.current = Math.max(0, currentScrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDrawerOpen])

  return (
    <>
      <header
        onFocus={() => setIsVisible(true)}
        className={`fixed top-0 left-0 right-0 z-40 border-b border-[#17201d]/15 bg-[#f4f0e8]/95 px-5 backdrop-blur-xl transition-transform duration-300 ease-in-out sm:px-8 lg:px-12 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex items-center justify-between gap-x-6 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-8 max-w-[84rem]">
          {/* Brand Logo & Tagline */}
          <a
            href="#top"
            className="group w-fit py-4 md:py-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d24a2c]"
            aria-label="Princess Trisha Carias — home"
          >
            <span className="block font-serif text-[1.25rem] leading-none sm:text-[1.65rem] md:text-[2.1rem]">
              Princess Trisha Carias<span className="text-[#d24a2c]">.</span>
            </span>
            <span className="mt-1.5 block text-[0.55rem] sm:text-[0.6rem] font-medium uppercase tracking-[0.22em] text-[#69736f] transition-colors group-hover:text-[#d24a2c]">
              A curious mind. A clear perspective.
            </span>
          </a>

          {/* Desktop Center Navigation (Hidden on mobile) */}
          <nav
            className="hidden md:flex items-center justify-center gap-8 lg:gap-10"
            aria-label="Primary navigation"
          >
            {navItems.map((item, index) => (
              <a
                key={item.id}
                aria-current={
                  activeSection === item.id ? "location" : undefined
                }
                className={`group relative flex items-center gap-2 py-8 text-xs lg:text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d24a2c] ${
                  activeSection === item.id
                    ? "text-[#17201d]"
                    : "text-[#58635f] hover:text-[#17201d]"
                }`}
                href={item.href}
              >
                <span
                  className="font-mono text-[0.72rem] font-medium text-[#d24a2c]"
                  aria-hidden="true"
                >
                  0{index + 1}
                </span>
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-0.5 origin-left bg-[#d24a2c] transition-transform duration-200 group-hover:scale-x-100 ${
                    activeSection === item.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Right Action: Desktop 'Let's talk' Button */}
          <div className="hidden md:flex justify-self-end">
            <a
              className="group flex items-center gap-3 text-xs font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d24a2c] sm:text-sm"
              href="#contact"
            >
              <span className="transition-colors group-hover:text-[#d24a2c]">
                Let&apos;s talk
              </span>
              <span
                aria-hidden="true"
                className="grid size-10 place-items-center rounded-lg border border-[#17201d]/25 text-lg transition-colors group-hover:border-[#17201d] group-hover:bg-[#17201d] group-hover:text-[#f4f0e8]"
              >
                <ArrowUpRight className="size-4.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>

          {/* Mobile Right Action: Burger Menu Button */}
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            className="flex md:hidden size-11 items-center justify-center rounded-xl border border-[#17201d]/15 bg-white/70 hover:bg-white text-[#17201d] transition-all duration-200 active:scale-90 cursor-pointer shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d24a2c]"
            aria-label="Open mobile navigation menu"
            aria-expanded={isDrawerOpen}
          >
            <Menu className="size-5.5 transition-transform duration-200" />
          </button>
        </div>
      </header>

      {/* Slide-In Mobile Navigation Drawer */}
      <MobileNavDrawer
        isOpen={isDrawerOpen}
        activeSection={activeSection}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  )
}
