import { profile, projects } from '../data/portfolio';
import SectionHeader from './SectionHeader';

export default function GitHubPortfolio() {
  return (
    <section id="github" className="px-5 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="REPOSITORY_NETWORK"
          title="A growing GitHub portfolio organised around Computer Science practice."
          description="The repositories are used to document project work, academic foundations, and steady improvement across software systems, data, and design."
        />

        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="glass-panel module-border rounded-lg p-6">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyanline">
              github_node
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              Naxisbeast
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A public repository network for full-stack builds, Java and SQL
              foundations, software engineering notes, and additional academic
              programming work.
            </p>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-lg border border-cyanline/30 bg-cyanline/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyanline/70 hover:shadow-glow"
            >
              Open GitHub Profile
            </a>
          </div>

          <div className="glass-panel rounded-lg p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {projects.map((project) => (
                <a
                  key={project.title}
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-lg border border-white/10 bg-white/[0.03] p-4 transition hover:-translate-y-0.5 hover:border-cyanline/35 hover:bg-cyanline/10"
                >
                  <p className="font-mono text-[0.64rem] uppercase tracking-[0.18em] text-slate-500">
                    repo_link
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-100">
                    {project.title}
                  </p>
                  <p className="mt-2 font-mono text-[0.7rem] text-cyanline transition group-hover:translate-x-1">
                    connect -&gt;
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
