import type { ReactNode } from 'react';
import { AppHeader } from './app-header';
import { AppSidebar } from './app-sidebar';

export function AppShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-zinc-900">
      <AppSidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <AppHeader title={title} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
