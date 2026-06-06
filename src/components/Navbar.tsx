import { profile } from '../data/portfolio';

const navItems = [
  { label: 'Profile', href: '#about' },
  { label: 'Builds', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-void/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl min-w-0 items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-cyanline/30 bg-cyanline/10 font-mono text-sm font-bold text-cyanline shadow-glow transition group-hover:border-cyanline/60">
            TW
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">
            Thapelo Wana
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-cyanline/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-full border border-cyanline/30 bg-cyanline/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyanline/70 hover:bg-cyanline/15 hover:shadow-glow"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}
