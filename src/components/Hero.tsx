import TerminalCard from './TerminalCard';
import { profile } from '../data/portfolio';

const statTiles = [
  ['mode', 'student builder'],
  ['track', 'computer science'],
  ['base', 'South Africa'],
];

export default function Hero() {
  return (
    <section id="top" className="relative px-5 py-20 md:px-8 md:py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-full overflow-hidden">
        <div className="hero-circuit absolute inset-0 opacity-80" />
      </div>

      <div className="mx-auto grid max-w-7xl min-w-0 items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="min-w-0">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyanline/20 bg-cyanline/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-matrixlite shadow-[0_0_18px_rgba(50,245,163,0.75)]" />
            SYSTEM_BOOT
          </div>

          <h1 className="max-w-5xl break-words text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
            Thapelo Kamogelo Wana
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            Computer Science & Electronics student building software systems,
            AI/data projects, databases, and clean technical portfolios.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            BSc Computer Science and Electronics at North-West University,
            focused on growing a strong software portfolio for bursary,
            internship, graduate programme, and future Honours opportunities.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="w-full rounded-lg border border-cyanline/40 bg-cyanline/[0.14] px-5 py-3 text-center text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:border-cyanline hover:bg-cyanline/20 sm:w-auto"
            >
              View Featured Builds
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 text-center text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-violetcore/50 hover:bg-violetcore/10 hover:shadow-glow-violet sm:w-auto"
            >
              LinkedIn Profile
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="w-full rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 text-center text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-matrixlite/40 hover:bg-matrixlite/10 sm:w-auto"
            >
              Email Me
            </a>
          </div>
        </div>

        <div className="min-w-0 space-y-5">
          <TerminalCard />
          <div className="grid gap-3 sm:grid-cols-3">
            {statTiles.map(([label, value]) => (
              <div
                key={label}
                className="glass-panel rounded-lg p-4 transition hover:-translate-y-0.5 hover:border-cyanline/30"
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">
                  {label}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-100">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
