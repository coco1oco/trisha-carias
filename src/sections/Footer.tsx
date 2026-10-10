export function Footer() {
  return (
    <footer className="border-t border-[#17201d]/10 bg-[#17201d] px-5 py-10 text-[#bac7be] sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[90rem] flex-col gap-4 font-mono text-xs tracking-wider md:flex-row md:items-center md:justify-between">
        <p className="text-white/90">
          Princess Trisha Carias · {new Date().getFullYear()}
        </p>
        <p className="text-[#88998f]">
          Grounded in fundamentals · Curious by nature
        </p>
        <p>
          Crafted with care by{" "}
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
