export function Footer() {
  return (
    <footer className="bg-[#17201d] px-5 py-8 text-[#bac7be] sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[90rem] flex-col gap-4 text-xs uppercase tracking-[0.14em] md:flex-row md:items-center md:justify-between">
        <p>Trisha Carias · 2026</p>
        <p className="text-[#88998f]">Analytical by experience · Curious by nature</p>
        <p>
          Site by{" "}
          <a
            href="https://kurtmichaelmirafelix.dev"
            target="_blank"
            rel="noreferrer"
            className="text-white underline decoration-[#d24a2c] underline-offset-4 transition-colors hover:text-[#d24a2c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d24a2c]"
          >
            kurtmichaelmirafelix.dev
          </a>
        </p>
      </div>
    </footer>
  )
}

