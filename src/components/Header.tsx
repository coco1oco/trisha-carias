import { useEffect, useRef, useState } from "react"
import { NAV_ITEMS } from "../data/content"

interface HeaderProps {
  activeSection: string
}

export function Header({ activeSection }: HeaderProps) {
  const navItems = NAV_ITEMS
  const [isVisible, setIsVisible] = useState(true)
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
            // Scrolling down -> retract
            setIsVisible(false)
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
  }, [])

  return (
    <header
      onFocus={() => setIsVisible(true)}
      className={`fixed top-0 left-0 right-0 z-50 border-b border-[#17201d]/15 bg-[#f4f0e8]/95 px-5 backdrop-blur-xl transition-transform duration-300 ease-in-out sm:px-8 lg:px-12 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto grid max-w-[84rem] grid-cols-[1fr_auto] items-center gap-x-8 md:grid-cols-[1fr_auto_1fr]">
        <a
          href="#top"
          className="group w-fit py-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d24a2c]"
          aria-label="Trisha Carias — home"
        >
          <span className="block font-serif text-[1.9rem] leading-none sm:text-[2.1rem]">
            Trisha Carias<span className="text-[#d24a2c]">.</span>
          </span>
          <span className="mt-2 block text-[0.6rem] font-medium uppercase tracking-[0.22em] text-[#69736f] transition-colors group-hover:text-[#d24a2c]">
            A curious mind. A clear perspective.
          </span>
        </a>

        <nav
          className="order-3 col-span-2 flex items-center justify-between gap-6 border-t border-[#17201d]/10 md:order-none md:col-span-1 md:justify-center md:gap-8 md:border-0 lg:gap-10"
          aria-label="Primary navigation"
        >
          {navItems.map((item, index) => (
            <a
              key={item.id}
              aria-current={
                activeSection === item.id ? "location" : undefined
              }
              className={`group relative flex items-center gap-2 py-3.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d24a2c] md:py-9 md:text-sm ${
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

        <a
          className="group flex items-center gap-3 justify-self-end text-xs font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d24a2c] sm:text-sm"
          href="#contact"
        >
          <span className="hidden transition-colors group-hover:text-[#d24a2c] sm:inline">
            Let&apos;s talk
          </span>
          <span className="sr-only sm:hidden">Let&apos;s talk</span>
          <span
            aria-hidden="true"
            className="grid size-10 place-items-center rounded-lg border border-[#17201d]/25 text-lg transition-colors group-hover:border-[#17201d] group-hover:bg-[#17201d] group-hover:text-[#f4f0e8]"
          >
            ↗
          </span>
        </a>
      </div>
    </header>
  )
}
