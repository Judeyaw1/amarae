export function SectionEyebrow({ children, inverse = false }: { children: string; inverse?: boolean }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className={`w-8 h-px ${inverse ? 'bg-white/50' : 'bg-primary'}`} />
      <span className={`text-xs font-semibold uppercase tracking-widest ${inverse ? 'text-white/70' : 'text-primary'}`}>{children}</span>
    </div>
  );
}
