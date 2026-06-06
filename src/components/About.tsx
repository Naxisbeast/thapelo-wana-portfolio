import SectionHeader from './SectionHeader';
import { profile } from '../data/portfolio';

const quickSignals = [
  ['Primary Focus', 'Software Engineering'],
  ['Core Strength', 'Full-stack systems + CS foundations'],
  [
    'Current Goal',
    'Bursaries, internships, graduate programmes, and Honours preparation',
  ],
];

export default function About() {
  return (
    <section id="about" className="px-5 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="SYSTEM_PROFILE"
          title="Computer Science portfolio for academic and early-career opportunities."
          description="I am developing a portfolio that shows practical software ability, core Computer Science foundations, and a steady learning path through academic and personal technical projects."
        />

        <div className="grid gap-5">
          <div className="grid gap-4 md:grid-cols-3">
            {quickSignals.map(([label, value]) => (
              <div key={label} className="glass-panel module-border rounded-lg p-5">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-matrixlite">
                  {label}
                </p>
                <p className="mt-3 text-sm font-semibold leading-6 text-slate-100">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="glass-panel rounded-lg p-6 md:p-8">
              <p className="text-base leading-8 text-slate-300">
                My current focus is building and documenting software projects
                clearly: full-stack applications, SQL database foundations,
                Java OOP and DSA practice, system design notes, and early AI/data
                exploration. The goal is to present honest evidence of growth,
                not inflated claims.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-300">
                I am especially interested in systems that combine clean user
                interfaces, reliable data models, and structured problem-solving.
                Electronics remains part of my degree, but this portfolio
                currently highlights my Computer Science and software direction.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['name', profile.name],
                ['degree', profile.degree],
                ['location', profile.location],
                ['portfolio_use', 'bursaries | internships | graduates | Honours'],
              ].map(([label, value]) => (
                <div key={label} className="glass-panel module-border rounded-lg p-5">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-cyanline">
                    {label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-200">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
