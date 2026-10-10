import { useEffect } from "react"
import Lenis from "lenis"
import { gsap, ScrollTrigger, isReducedMotion } from "../utils/animations"

export function SmoothScroll() {
  useEffect(() => {
    if (isReducedMotion()) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    })

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update)

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(tickerCallback)
    gsap.ticker.lagSmoothing(0)

    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const anchor = target?.closest<HTMLAnchorElement>('a[href^="#"]')
      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href || href === "#") return

      const targetEl = document.querySelector(href)
      if (targetEl) {
        e.preventDefault()
        lenis.scrollTo(targetEl as HTMLElement, { offset: 0, duration: 1.5 })
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
      gsap.ticker.remove(tickerCallback)
      lenis.destroy()
    }
  }, [])

  return null
}
