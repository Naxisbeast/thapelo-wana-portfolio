type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cyanline">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}
