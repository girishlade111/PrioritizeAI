import { KanbanBoard } from '@/components/kanban-board';
import { MOCK_FEATURES } from '@/lib/mock-data';

export default function DashboardPage() {
  const features = MOCK_FEATURES;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Roadmap</h1>
        <p className="text-muted-foreground">
          Visualize and manage your feature pipeline.
        </p>
      </div>
      <KanbanBoard features={features} />
    </div>
  );
}
