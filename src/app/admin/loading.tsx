import { AppShellSkeleton } from "@/components/skeleton/app-shell-skeleton";
import { AdminPageSkeleton } from "@/components/skeleton/admin-page-skeleton";

export default function Loading() {
  return (
    <AppShellSkeleton title="Admin Panel">
      <AdminPageSkeleton />
    </AppShellSkeleton>
  );
}
