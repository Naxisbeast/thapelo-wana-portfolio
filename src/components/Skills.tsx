import { skillGroups } from '../data/portfolio';
import SectionHeader from './SectionHeader';

export default function Skills() {
  return (
    <section id="skills" className="px-5 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="SKILL_MATRIX"
          title="A practical matrix of languages, tools, and CS foundations."
          description="The emphasis is on skills supported by coursework, repositories, and current project work."
        />

        <div className="grid gap-5 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.label} className="glass-panel module-border rounded-lg p-5">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{group.label}</h3>
                <span className="h-2 w-2 rounded-full bg-cyanline shadow-[0_0_18px_rgba(54,243,255,0.75)]" />
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 transition hover:border-cyanline/30 hover:bg-cyanline/10"
                  >
                    <span className="mr-2 font-mono text-[0.62rem] text-slate-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-medium text-slate-200">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
