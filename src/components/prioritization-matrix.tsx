'use client';

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
  Label,
} from 'recharts';
import { ChartTooltipContent } from '@/components/ui/chart';

interface MatrixDataPoint {
  name: string;
  effort: number;
  impact: number;
}

interface PrioritizationMatrixProps {
  data: MatrixDataPoint[];
}

export function PrioritizationMatrix({ data }: PrioritizationMatrixProps) {
  return (
    <div className="h-[500px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 40,
            left: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          
          {/* Quadrant Backgrounds */}
          <ReferenceArea x1={0} x2={5.5} y1={5.5} y2={10} strokeOpacity={0.3} fill="hsl(var(--primary) / 0.1)" label={{ value: 'Quick Wins', position: 'insideTopLeft', fill: 'hsl(var(--foreground))', fontSize: 14, fontWeight: 500 }} />
          <ReferenceArea x1={5.5} x2={10} y1={5.5} y2={10} strokeOpacity={0.3} fill="hsl(var(--primary) / 0.2)" label={{ value: 'Major Projects', position: 'insideTopRight', fill: 'hsl(var(--foreground))', fontSize: 14, fontWeight: 500 }} />
          <ReferenceArea x1={0} x2={5.5} y1={0} y2={5.5} strokeOpacity={0.3} fill="hsl(var(--secondary) / 0.5)" label={{ value: 'Fill-ins', position: 'insideBottomLeft', fill: 'hsl(var(--foreground))', fontSize: 14, fontWeight: 500 }} />
          <ReferenceArea x1={5.5} x2={10} y1={0} y2={5.5} strokeOpacity={0.3} fill="hsl(var(--muted) / 0.8)" label={{ value: 'Reconsider', position: 'insideBottomRight', fill: 'hsl(var(--foreground))', fontSize: 14, fontWeight: 500 }} />

          <XAxis
            type="number"
            dataKey="effort"
            name="Effort"
            unit=""
            domain={[0, 10]}
            tickCount={11}
          >
            <Label value="Effort (Low to High)" offset={-25} position="insideBottom" />
          </XAxis>
          <YAxis
            type="number"
            dataKey="impact"
            name="Impact"
            unit=""
            domain={[0, 10]}
            tickCount={11}
          >
            <Label value="Impact (Low to High)" angle={-90} offset={-10} position="insideLeft" style={{ textAnchor: 'middle' }} />
          </YAxis>
          <Tooltip content={<ChartTooltipContent hideLabel />} cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={data} fill="hsl(var(--primary))" className="transition-opacity hover:opacity-80" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
