'use client';

import { useState } from 'react';
import type { Feature, FeatureStatus } from '@/lib/types';
import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FeatureCard } from './feature-card';
import { FeatureForm } from './feature-form';
import { FeatureProvider, useFeatures } from '@/context/FeatureContext';

interface KanbanBoardProps {
  features: Feature[];
}

const columns: { title: string; status: FeatureStatus }[] = [
  { title: 'Backlog', status: 'Backlog' },
  { title: 'In Progress', status: 'In Progress' },
  { title: 'Completed', status: 'Completed' },
];

function KanbanColumns() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { features } = useFeatures();

  return (
    <>
      <div className="flex justify-end">
        <Button onClick={() => setIsFormOpen(true)}>
          <PlusCircle className="mr-2" />
          New Feature
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {columns.map(column => (
          <Card key={column.status} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{column.title}</span>
                <span className="text-sm font-normal text-muted-foreground">
                  {
                    features.filter(f => f.status === column.status).length
                  }{' '}
                  items
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
              {features
                .filter(f => f.status === column.status)
                .sort((a, b) => a.title.localeCompare(b.title))
                .map(feature => (
                  <FeatureCard key={feature.id} feature={feature} />
                ))}
            </CardContent>
          </Card>
        ))}
      </div>
      <FeatureForm isOpen={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
}


export function KanbanBoard({ features }: KanbanBoardProps) {
  return (
    <FeatureProvider initialFeatures={features}>
      <KanbanColumns />
    </FeatureProvider>
  )
}
