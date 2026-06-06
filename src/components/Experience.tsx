import { experience } from '../data/portfolio';
import SectionHeader from './SectionHeader';

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="EXPERIENCE_LOG"
          title="Academic support experience with technical communication."
          description="This role strengthens practical troubleshooting, lab support, and the ability to explain technical ideas clearly."
        />

        <div className="glass-panel module-border rounded-lg p-6 md:p-8">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyanline">
                active_role
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                {experience.role}
              </h3>
              <p className="mt-2 text-slate-300">{experience.team}</p>
            </div>
            <span className="w-fit rounded-full border border-matrixlite/25 bg-matrixlite/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-emerald-100">
              university_support
            </span>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {experience.points.map((point) => (
              <div
                key={point}
                className="rounded-lg border border-white/10 bg-white/[0.03] p-4"
              >
                <p className="text-sm leading-7 text-slate-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
