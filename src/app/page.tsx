import { AreaChart, BarChart, Donut, LineChart } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  FeatureImpactChart,
  featureImpactData,
} from '@/components/feature-impact-chart';
import {
  FeatureEffortChart,
  featureEffortData,
} from '@/components/feature-effort-chart';
import {
  FeatureReleaseChart,
  featureReleaseData,
} from '@/components/feature-release-chart';
import {
  FeatureSatisfactionChart,
  featureSatisfactionData,
} from '@/components/feature-satisfaction-chart';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Dashboard</h1>
        <p className="text-muted-foreground">
          An overview of your feature prioritization landscape.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Features</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <p className="text-xs text-muted-foreground">
              +12 since last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Satisfaction</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.2/10</div>
            <p className="text-xs text-muted-foreground">
              +0.5 since last quarter
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Impact</CardTitle>
            <AreaChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.5/10</div>
            <p className="text-xs text-muted-foreground">
              High impact features are trending up
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Effort</CardTitle>
            <Donut className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5.1/10</div>
            <p className="text-xs text-muted-foreground">
              Effort is stable
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Feature Impact Analysis</CardTitle>
            <CardDescription>
              A view of feature impact scores over time.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FeatureImpactChart data={featureImpactData} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Feature Effort Distribution</CardTitle>
            <CardDescription>
              A breakdown of features by their estimated effort.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FeatureEffortChart data={featureEffortData} />
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Feature Release Velocity</CardTitle>
            <CardDescription>
              Number of features released per quarter.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FeatureReleaseChart data={featureReleaseData} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Customer Satisfaction</CardTitle>
            <CardDescription>
              Post-release customer satisfaction scores.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FeatureSatisfactionChart data={featureSatisfactionData} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
