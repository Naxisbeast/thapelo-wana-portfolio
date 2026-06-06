import { profile } from '../data/portfolio';
import SectionHeader from './SectionHeader';

export default function CV() {
  return (
    <section id="cv" className="px-5 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel module-border grid gap-6 rounded-lg p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <SectionHeader
            eyebrow="DOCUMENT_ACCESS"
            title="CV available for applications."
            description="My CV summarises my education, projects, technical skills, and student assistant experience. The portfolio and GitHub links provide supporting project evidence."
          />
          <a
            href={profile.cv}
            className="rounded-lg border border-violetcore/35 bg-violetcore/10 px-5 py-3 text-center text-sm font-semibold text-violet-100 transition hover:-translate-y-0.5 hover:border-violetcore/70 hover:shadow-glow-violet"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
