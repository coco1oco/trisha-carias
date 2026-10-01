import { NAV_ITEMS } from "../data/content"
import resumePdf from "../assets/Carias_PrincessTrisha_CV.pdf"

interface HeaderProps {
  activeSection: string
}

export function Header({ activeSection }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 px-4 pt-3 sm:px-6">
      <div className="mx-auto flex max-w-[86rem] items-center justify-between rounded-2xl border border-[#17201d]/8 bg-[#f4f0e8]/80 px-4 py-2.5 shadow-[0_8px_32px_rgba(23,32,29,0.06),0_1px_3px_rgba(23,32,29,0.08)] backdrop-blur-2xl sm:px-5">
        {/* Logo */}
        <a
          href="#top"
          className="group flex items-center gap-3"
          aria-label="Trisha Carias — home"
        >
          <span className="relative grid size-10 place-items-center rounded-xl bg-[#17201d] font-serif text-base italic text-white transition-all duration-300 group-hover:rounded-2xl group-hover:bg-[#d24a2c]">
            TC
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold leading-none tracking-tight">
              Trisha Carias
            </span>
            <span className="mt-1 block text-[0.6rem] font-medium uppercase leading-none tracking-[0.18em] text-[#8a9490]">
              Portfolio
            </span>
          </span>
        </a>

        {/* Centered nav */}
        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 rounded-xl bg-[#17201d]/[0.04] p-1 md:flex"
          aria-label="Primary navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              className={`relative rounded-lg px-4 py-2 text-[0.82rem] font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-[#17201d] text-white shadow-sm"
                  : "text-[#58635f] hover:text-[#17201d]"
              }`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <a
            href={resumePdf}
            target="_blank"
            rel="noreferrer"
            className="group hidden items-center gap-2 rounded-lg border border-[#17201d]/15 px-3.5 py-2 text-[0.8rem] font-semibold text-[#3a4540] transition-all hover:border-[#17201d]/30 hover:bg-[#17201d]/5 sm:flex"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-y-0.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            Résumé
          </a>
          <a
            className="group flex items-center gap-2 rounded-xl bg-[#17201d] py-2.5 pr-2.5 pl-4 text-[0.82rem] font-semibold text-[#f4f0e8] transition-all hover:bg-[#d24a2c]"
            href="#contact"
          >
            <span className="hidden min-[390px]:inline">
              Let&apos;s connect
            </span>
            <span className="min-[390px]:hidden">Connect</span>
            <span
              aria-hidden="true"
              className="grid size-6 place-items-center rounded-lg bg-white/15 text-xs transition-transform group-hover:rotate-45"
            >
              ↗
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}
