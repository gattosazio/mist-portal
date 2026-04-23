import { AppShellSkeleton } from "@/components/skeleton/app-shell-skeleton";
import { SettingsPageSkeleton } from "@/components/skeleton/settings-page-skeleton";

export default function Loading() {
  return (
    <AppShellSkeleton title="Settings">
      <SettingsPageSkeleton />
    </AppShellSkeleton>
  );
}
