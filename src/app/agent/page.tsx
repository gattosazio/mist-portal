import { ChatPanel } from '@/components/agent/chat-panel';
import { AppShell } from '@/components/layout/app-shell';

export default function AgentPage() {
  return (
    <AppShell title="Agent Panel">
      <ChatPanel />
    </AppShell>
  );
}
