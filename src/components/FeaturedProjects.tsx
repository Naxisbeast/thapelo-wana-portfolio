import { academicWork, projects } from '../data/portfolio';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';

export default function FeaturedProjects() {
  return (
    <section id="projects" className="px-5 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="FEATURED_BUILDS"
          title="Project modules that show software growth."
          description="A focused set of repositories covering algorithmic trading systems, full-stack applications, academic teamwork, core Java foundations, SQL database work, and software engineering documentation."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-6 glass-panel rounded-lg p-5">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-matrixlite">
            additional_academic_work
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {academicWork.map((item) => (
              <span
                key={item}
                className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
