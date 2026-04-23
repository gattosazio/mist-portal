"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AppBreadcrumbs } from "./app-breadcrumbs";
import { AppHeader } from "./app-header";
import styles from "./app-layout.module.css";

export function AppShell({
  title,
  children,
  userName = "Art",
}: {
  title: string;
  children: ReactNode;
  userName?: string;
}) {
  const pathname = usePathname();
  const showBreadcrumbs = pathname !== "/agent";

  return (
    <div className={styles.shell}>
      <div className={styles.shellInner}>
        <AppHeader title={title} userName={userName} />
        {showBreadcrumbs ? <AppBreadcrumbs /> : null}
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
