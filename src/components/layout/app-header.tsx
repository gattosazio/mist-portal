export function AppHeader({ title }: { title: string }) {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 px-6 py-4 backdrop-blur">
      <h1 className="text-lg font-semibold text-zinc-100">{title}</h1>
    </header>
  );
}