import { AppShellSkeleton } from "@/components/skeleton/app-shell-skeleton";
import { VoicePageSkeleton } from "@/components/skeleton/voice-page-skeleton";

export default function Loading() {
  return (
    <AppShellSkeleton title="Voice Session" userName="Art">
      <VoicePageSkeleton />
    </AppShellSkeleton>
  );
}
