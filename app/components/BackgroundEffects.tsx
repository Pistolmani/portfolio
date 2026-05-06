export function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 opacity-[0.18] background-grid" />
      <div className="absolute inset-0 opacity-[0.07] background-diagonal" />
      <div className="absolute inset-x-0 top-0 h-24 border-b border-cyan-300/10 bg-cyan-300/5" />
    </div>
  );
}
