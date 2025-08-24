'use client';

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export const featureImpactData = [
  { month: 'January', impact: 186 },
  { month: 'February', impact: 305 },
  { month: 'March', impact: 237 },
  { month: 'April', impact: 273 },
  { month: 'May', impact: 209 },
  { month: 'June', impact: 214 },
];

export function FeatureImpactChart({ data }: { data: typeof featureImpactData }) {
  return (
    <div className="h-[300px] w-full">
      <ChartContainer config={{}} className="h-full w-full">
        <AreaChart
          accessibilityLayer
          data={data}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Area
            dataKey="impact"
            type="natural"
            fill="hsl(var(--primary))"
            fillOpacity={0.4}
            stroke="hsl(var(--primary))"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
