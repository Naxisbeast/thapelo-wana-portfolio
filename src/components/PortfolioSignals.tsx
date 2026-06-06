import { portfolioSignals } from '../data/portfolio';
import SectionHeader from './SectionHeader';

export default function PortfolioSignals() {
  return (
    <section id="signals" className="px-5 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="PORTFOLIO_SIGNALS"
          title="Quick evidence points for recruiters and academic reviewers."
          description="A compact view of what this portfolio is currently designed to demonstrate."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {portfolioSignals.map((signal, index) => (
            <div
              key={signal}
              className="glass-panel module-border rounded-lg p-5 transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-cyanline">
                signal_{String(index + 1).padStart(2, '0')}
              </p>
              <p className="mt-4 text-sm font-semibold leading-6 text-slate-100">
                {signal}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
