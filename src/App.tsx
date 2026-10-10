import { useEffect, useState } from "react"
import { NAV_ITEMS } from "./data/content"
import { Header } from "./components/Header"
import { SmoothScroll } from "./components/SmoothScroll"
import { Hero } from "./sections/Hero"
import { About } from "./sections/About"
import { Experience } from "./sections/Experience"
import { Paths } from "./sections/Paths"
import { Contact } from "./sections/Contact"
import { Footer } from "./sections/Footer"

export default function App() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const sections = NAV_ITEMS
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f4f0e8] text-[#17201d]">
      <SmoothScroll />
      <Header activeSection={activeSection} />
      <main id="top">
        <Hero />
        <About />
        <Experience />
        <Paths />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
