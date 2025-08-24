import { Gem } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2 p-2 group-data-[collapsible=icon]:justify-center">
      <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Gem className="size-5" />
      </div>
      <span className="text-lg font-bold group-data-[collapsible=icon]:hidden">
        PrioritizeAI
      </span>
    </div>
  );
}
