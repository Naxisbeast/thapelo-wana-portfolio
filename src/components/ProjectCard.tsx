import type { Project } from '../data/portfolio';
import TechBadge from './TechBadge';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="glass-panel module-border group flex h-full flex-col rounded-lg p-5 transition duration-200 hover:-translate-y-1 hover:shadow-glow">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-cyanline">
            module_{String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-white">
            {project.title}
          </h3>
        </div>
        <span className="rounded-md border border-violetcore/30 bg-violetcore/10 px-2.5 py-1 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-violet-100">
          {project.signal}
        </span>
      </div>

      <p className="flex-1 text-sm leading-7 text-slate-300">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <TechBadge key={tech}>{tech}</TechBadge>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyanline/40 hover:bg-cyanline/10"
      >
        Open Repository
        <span className="font-mono text-cyanline transition group-hover:translate-x-1">
          -&gt;
        </span>
      </a>
    </article>
  );
}
