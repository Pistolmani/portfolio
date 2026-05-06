const colors: Record<string, string> = {
  Live: "border-emerald-300/40 bg-emerald-300/10 text-emerald-200",
  "Working Prototype": "border-amber-300/40 bg-amber-300/10 text-amber-200",
  "In Development": "border-cyan-300/40 bg-cyan-300/10 text-cyan-200",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`border px-2 py-1 font-mono text-[10px] uppercase ${colors[status] ?? ""}`}
    >
      {status}
    </span>
  );
}
