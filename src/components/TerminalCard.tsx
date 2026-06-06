export default function TerminalCard() {
  const lines = [
    'initializing_portfolio.exe',
    'status: building software systems',
    'focus: full-stack | AI | databases | DSA',
  ];

  return (
    <div className="terminal-card glass-panel module-border relative min-w-0 overflow-hidden rounded-lg p-5 font-mono shadow-glow">
      <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
        <span className="h-2.5 w-2.5 rounded-full bg-matrixlite/90" />
        <span className="ml-auto text-[0.65rem] uppercase tracking-[0.22em] text-slate-500">
          boot console
        </span>
      </div>
      <div className="space-y-3 text-sm text-cyan-100">
        {lines.map((line) => (
          <p key={line} className="relative z-10 break-words">
            <span className="mr-2 text-matrixlite">&gt;</span>
            <span>{line}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
