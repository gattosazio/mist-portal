import Link from 'next/link';

const items = [
  { href: '/agent', label: 'Agent Panel' },
  { href: '/voice', label: 'Voice Session' },
  { href: '/admin', label: 'Admin Panel' },
  { href: '/settings', label: 'Settings' },
  { href: '/help', label: 'Help & Support' },
];

export function AppSidebar() {
  return (
    <aside className="w-64 border-r border-zinc-800 bg-zinc-950 p-4 text-zinc-100">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">MISSU</div>
        <div className="mt-2 text-xl font-semibold">Portal</div>
      </div>

      <nav className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-xl px-3 py-2 text-sm text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
