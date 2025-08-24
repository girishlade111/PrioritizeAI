'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export const featureReleaseData = [
    { quarter: "Q1 '23", features: 8 },
    { quarter: "Q2 '23", features: 12 },
    { quarter: "Q3 '23", features: 15 },
    { quarter: "Q4 '23", features: 11 },
    { quarter: "Q1 '24", features: 18 },
    { quarter: "Q2 '24", features: 22 },
];

export function FeatureReleaseChart({ data }: { data: typeof featureReleaseData }) {
  return (
    <div className="h-[300px] w-full">
      <ChartContainer config={{}} className="h-full w-full">
        <BarChart
          accessibilityLayer
          data={data}
          margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
        >
          <CartesianGrid horizontal={true} vertical={false} />
          <XAxis
            dataKey="quarter"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Bar dataKey="features" fill="hsl(var(--primary))" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
