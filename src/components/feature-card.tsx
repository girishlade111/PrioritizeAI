'use client';

import { useState } from 'react';
import type { Feature, FeatureStatus } from '@/lib/types';
import { useFeatures } from '@/context/FeatureContext';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  MoreVertical,
  CalendarDays,
  Edit,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FeatureForm } from './feature-form';
import { format } from 'date-fns';

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const { updateFeatureStatus } = useFeatures();
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const totalScore = Math.round((feature.impact + feature.reach + feature.effort) / 3);

  const getBadgeVariant = (score: number) => {
    if (score > 7) return 'default';
    if (score > 4) return 'secondary';
    return 'destructive';
  };

  return (
    <>
      <Card className="bg-card/80 transition-shadow hover:shadow-md">
        <CardHeader className="p-4">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-base font-semibold">{feature.title}</CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-7 w-7 flex-shrink-0">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setIsFormOpen(true)}>
                  <Edit className="mr-2 h-4 w-4" />
                  <span>Edit Feature</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Move to</DropdownMenuLabel>
                <DropdownMenuRadioGroup
                  value={feature.status}
                  onValueChange={(value) => updateFeatureStatus(feature.id, value as FeatureStatus)}
                >
                  <DropdownMenuRadioItem value="Backlog">Backlog</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="In Progress">In Progress</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="Completed">Completed</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <CardDescription className="text-sm">{feature.description}</CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="flex items-center space-x-2">
            <Badge variant={getBadgeVariant(totalScore)}>Score: {totalScore}</Badge>
            <Badge variant="outline">Impact: {feature.impact}</Badge>
            <Badge variant="outline">Effort: {feature.effort}</Badge>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between p-4 pt-0 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            <span>{format(new Date(feature.deadline), 'MMM d, yyyy')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={feature.owner.avatarUrl} alt={feature.owner.name} data-ai-hint="person portrait" />
              <AvatarFallback>{feature.owner.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{feature.owner.name}</span>
          </div>
        </CardFooter>
      </Card>
      {isFormOpen && (
        <FeatureForm
          isOpen={isFormOpen}
          onOpenChange={setIsFormOpen}
          feature={feature}
        />
      )}
    </>
  );
}
