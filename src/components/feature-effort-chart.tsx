'use client';

import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export const featureEffortData = [
  { effort: '1-2', features: 18, fill: 'hsl(var(--chart-1))' },
  { effort: '3-4', features: 23, fill: 'hsl(var(--chart-2))' },
  { effort: '5-6', features: 30, fill: 'hsl(var(--chart-3))' },
  { effort: '7-8', features: 25, fill: 'hsl(var(--chart-4))' },
  { effort: '9-10', features: 15, fill: 'hsl(var(--chart-5))' },
];

export function FeatureEffortChart({ data }: { data: typeof featureEffortData }) {
  return (
    <div className="h-[300px] w-full">
        <ChartContainer config={{}} className="h-full w-full">
            <BarChart accessibilityLayer data={data}>
                <CartesianGrid vertical={false} />
                <XAxis
                dataKey="effort"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                />
                <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="features" radius={8} />
            </BarChart>
        </ChartContainer>
    </div>
  );
}
