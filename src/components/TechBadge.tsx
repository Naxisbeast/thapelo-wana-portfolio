type TechBadgeProps = {
  children: string;
};

export default function TechBadge({ children }: TechBadgeProps) {
  return (
    <span className="rounded-full border border-cyanline/20 bg-cyanline/10 px-3 py-1 text-xs font-medium text-cyan-100 shadow-[0_0_18px_rgba(54,243,255,0.08)]">
      {children}
    </span>
  );
}
