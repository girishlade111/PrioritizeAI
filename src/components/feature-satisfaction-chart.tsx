'use client';

import { Line, LineChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export const featureSatisfactionData = [
    { feature: "SSO", score: 8.5 },
    { feature: "API", score: 7.8 },
    { feature: "Theming", score: 9.1 },
    { feature: "Import", score: 6.5 },
    { feature: "AI Suggest", score: 8.9 },
    { feature: "Mobile", score: 7.2 },
];

export function FeatureSatisfactionChart({ data }: { data: typeof featureSatisfactionData }) {
  return (
    <div className="h-[300px] w-full">
      <ChartContainer config={{}} className="h-full w-full">
        <LineChart
          accessibilityLayer
          data={data}
           margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
        >
          <CartesianGrid horizontal={true} vertical={false} />
          <XAxis
            dataKey="feature"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis domain={[5, 10]} tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Line
            dataKey="score"
            type="monotone"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={true}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
